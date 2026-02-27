import { IVarItem } from '@/components/variable-tree-select';
import { ITERATION_PADDING, NEW_NODE_PADDING } from '@/constant';
import i18n from '@/i18n';
import { IValueType, IWorkFlowNode } from '@/types/work-flow';
import { Connection, Edge, Node } from '@xyflow/react';
import ELK from 'elkjs/lib/elk.bundled.js';
import { cloneDeep } from 'lodash-es';
import uniqueId from './unique-id';

export const generateEdge = (connection: Connection, isParent = false) => {
  const { source, sourceHandle, target, targetHandle } = connection;
  return {
    id: `${source}-${sourceHandle}-${target}-${targetHandle}`,
    type: 'default',
    source,
    target,
    sourceHandle,
    targetHandle,
    zIndex: isParent ? 1002 : 0,
    data: {},
  };
};

export function splitAtFirstDigit(str: string): string[] {
  const match = str.match(/\d/); // 找到第一个数字字符
  if (!match) {
    // 如果没有数字，返回原字符串和空字符串
    return [str, ''];
  }

  const index = match.index; // 第一个数字的索引
  const part1 = str.slice(0, index); // 第一个数字之前的部分（不包含数字）
  const part2 = str.slice(index); // 从第一个数字开始到结尾（包含数字）

  return [part1, part2];
}

export const generateUniqueName = (name: string, names: string[]) => {
  const existingNames = new Set(names);
  let index = 1;
  const oldLabel = splitAtFirstDigit(name)[0];
  let uniqueName = `${oldLabel}${index}`;

  while (existingNames.has(uniqueName)) {
    ++index;
    uniqueName = `${oldLabel}${index}`;
  }

  return uniqueName;
};

export const getTypeFromId = (source: string): string => {
  if (!source) return '';
  const parts = source.split('_');
  return parts[0] || '';
};

export function isMacOS(): boolean {
  const { userAgent } = navigator;
  const isMac = /Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent);

  return isMac;
}

export const MAC_KEY_MAP = {
  ctrl: 'meta',
};

export function transformToMacKey(key: keyof typeof MAC_KEY_MAP): string {
  if (isMacOS()) {
    return MAC_KEY_MAP[key];
  }
  return key;
}

export function extractVariables(text: string, saveFormat = false) {
  const regex = /\${(.*?)}/g;
  const matches = text.match(regex);

  let variableObj: any = {};

  matches?.forEach((match) => {
    const key = saveFormat ? match : match.substring(2, match.length - 1);
    if (variableObj[key]) return;
    variableObj[key] = 1;
    return match.substring(2, match.length - 1);
  });

  return Object.keys(variableObj);
}

export const getIteratorNodeSize = (childrenNodes: Node[]) => {
  let rightNode: Node | null = null;
  let bottomNode: Node | null = null;

  childrenNodes.forEach((n) => {
    if (rightNode) {
      if (n.position.x + n.width! > rightNode.position.x + rightNode.width!)
        rightNode = n;
    } else {
      rightNode = n;
    }
    if (bottomNode) {
      if (
        n.position.y + (n.measured?.height || n.height)! >
        bottomNode.position.y +
          (bottomNode.measured?.height || bottomNode.height)!
      )
        bottomNode = n;
    } else {
      bottomNode = n;
    }
  });

  const newWidth = rightNode
    ? (rightNode as Node).position.x +
      ITERATION_PADDING.right +
      ((rightNode as Node).width || 0)
    : 0;
  const newHeight = bottomNode
    ? (bottomNode as Node).position.y +
      ITERATION_PADDING.bottom +
      ((bottomNode as Node).measured?.height ||
        (bottomNode as Node).height ||
        0)
    : 0;

  return {
    width: newWidth > 640 ? newWidth : 640,
    height: newHeight > 400 ? newHeight : 400,
  };
};

const LAYOUT_OPTIONS = {
  'elk.algorithm': 'layered',
  'elk.layered.spacing.nodeNodeBetweenLayers': '150',
  'elk.spacing.nodeNode': '150',
  'elk.layered.nodePlacement.strategy': 'SIMPLE',
};

export const layoutFlow = async ({
  nodes,
  edges,
  isSubFlow,
}: {
  nodes: Node[];
  edges: Edge[];
  isSubFlow?: boolean;
}): Promise<{ layoutedNodes: Node[] }> => {
  const elk = new ELK();

  const graph = {
    id: 'root',
    layoutOptions: LAYOUT_OPTIONS,
    children: nodes.map((n) => {
      const targetPorts = [] as { id: string; properties: { side: string } }[];
      const sourcePorts = [] as { id: string; properties: { side: string } }[];
      edges.forEach((edgeItem) => {
        if (edgeItem.target === n.id)
          targetPorts.push({
            id: edgeItem.targetHandle as string,
            properties: { side: 'WEST' },
          });
        if (edgeItem.source === n.id)
          sourcePorts.push({
            id: edgeItem.sourceHandle as string,
            properties: { side: 'EAST' },
          });
      });
      return {
        ...n,
        width: n.measured?.width ?? 320,
        height: n.measured?.height ?? 58,
        targetPosition: 'left',
        sourcePosition: 'right',
        properties: {
          'org.eclipse.elk.portConstraints': 'FIXED_ORDER',
        },
        ports: [{ id: n.id }, ...targetPorts, ...sourcePorts],
      };
    }),
    edges: cloneDeep(edges),
  };

  const layoutedGraph = await elk.layout(graph as any);

  let commonDistanceHeight = 0;
  let commonDistantWidth = 0;

  if (isSubFlow) {
    const topNode = layoutedGraph.children?.reduce(
      (min, current) => ((current.y || 0) < (min.y || 0) ? current : min),
      layoutedGraph.children[0] || { y: 0 },
    );
    const leftNode = layoutedGraph.children?.reduce(
      (min, current) => ((current.x || 0) < (min.x || 0) ? current : min),
      layoutedGraph.children[0] || { x: 0 },
    );
    commonDistanceHeight = ITERATION_PADDING.top - (topNode?.y || 0);
    commonDistantWidth = ITERATION_PADDING.left - (leftNode?.x || 0);
  }

  const layoutedNodes = nodes.map((node) => {
    const layoutedNode = layoutedGraph.children?.find(
      (lgNode) => lgNode.id === node.id,
    );

    return {
      ...node,
      position: {
        x: (layoutedNode?.x ?? 0) + commonDistantWidth,
        y: (layoutedNode?.y ?? 0) + commonDistanceHeight,
      },
    };
  });

  return {
    layoutedNodes,
  };
};

export const getParentInputParams = (node: IWorkFlowNode) => {
  const { inputParams } = node.data;
  const list: IVarItem[] = [];

  inputParams.forEach((item) => {
    // check if item.value is the children property of an array, for example: ${DocumentParse_AKQK.layout.[markdownContent]
    const matches = item.value?.match(/\[[^\[\]]+\]/g);
    const isSubPropertyInArray = matches?.length;
    if ((item.type?.includes('Array') || isSubPropertyInArray) && !!item.value) {
      const arrayType = item.type!.replace(/^Array<(.+)>$/, '$1') as IValueType;
      list.push({
        label: `item (in ${item.key})`,
        value: `\${${node.id}.${item.key}}`,
        type: arrayType,
      });
    }
  });

  return list;
};

export const copyNodeConfig = (node: IWorkFlowNode, nodes: IWorkFlowNode[]): IWorkFlowNode => {
  return {
    ...node,
    id: `${node.type}_${uniqueId(4)}`,
    position: {
      x: node.position.x + node.width! + NEW_NODE_PADDING.x,
      y: node.position.y,
    },
    selected: true,
    data: {
      ...node.data,
      label: generateUniqueName(
        node.data.label,
        nodes.map((item) => item.data.label),
      ),
    },
  };
};

export const copySubFlowNodeConfig = (
  node: IWorkFlowNode,
  nodes: IWorkFlowNode[],
): IWorkFlowNode => {
  return {
    ...node,
    id: `${node.type}_${uniqueId(4)}`,
    position: {
      x: node.position.x,
      y: node.position.y,
    },
    data: {
      ...node.data,
      label: generateUniqueName(
        node.data.label,
        nodes.map((item) => item.data.label),
      ),
    },
  };
};

export const isEventInInput = (event: KeyboardEvent) => {
  // @ts-ignore
  if (!event.target.matches) return false;
  const whiteDomList = ['div.cm-content', 'input', 'div.text-editor-content'];
  // @ts-ignore
  return whiteDomList.some((item) => event.target.matches(item));
};

export const setWorkFlowLanguage = (language: string) => {
  i18n.setCurrentLanguage(language);
};

export const matchVariableFromVarItem = (
  variable: string,
  varItems: IVarItem[],
): IVarItem | undefined => {
  return varItems.find((child) => {
    if (child.value === variable) return true;
    if (child.children?.length) {
      return matchVariableFromVarItem(variable, child.children);
    }
    return false;
  });
};
