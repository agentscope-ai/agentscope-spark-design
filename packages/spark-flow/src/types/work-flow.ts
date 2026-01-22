import { IVarTreeItem } from '@/components/variable-tree-select';
import { SparkIconProps } from '@agentscope-ai/icons/src/utils';
import { Node } from '@xyflow/react';
import { ReactNode } from 'react';

export type INodeProps = {
  id: string;
  data: IWorkFlowNodeData;
};

export interface INodeSchema {
  /* Node type */
  type: string;
  /* Node icon */
  iconType: (props: SparkIconProps) => ReactNode;
  /* Node title */
  title: string;
  /** Node title Renderer */
  titleRenderer?: (data: IWorkFlowNodeData) => ReactNode;
  /* Node description */
  desc: string;
  /* Default parameters, according to backend protocol */
  defaultParams: Omit<IWorkFlowNodeData, 'label'>;
  /* Whether it is a system preset node, if true, deletion and copying are not allowed */
  isSystem?: boolean;
  /* Whether single-point debugging is allowed */
  allowSingleTest?: boolean;
  /* Upstream node type restrictions */
  allowSourceNodeTypes?: string[];
  /* Downstream node type restrictions */
  allowTargetNodeTypes?: string[];
  /* Whether to prohibit connecting upstream nodes */
  disableConnectSource?: boolean;
  /* Whether to prohibit connecting downstream nodes */
  disableConnectTarget?: boolean;
  /* Used to calculate the position of the new node */
  defaultHeight?: number;
  /* Validation method */
  checkValid?: (data: IWorkFlowNodeData) => { label: string; error: string }[];
  /* Get variables referenced by the node */
  getRefVariables?: (data: IWorkFlowNodeData) => string[];
  getParentNodeVariableList?: (
    data: IWorkFlowNode,
    options?: { disableShowVariableParameters?: boolean },
  ) => IVarTreeItem[];
  /* Node group type */
  groupLabel?: string;
  /* Node background color */
  bgColor: string;
  /* Whether custom addition is allowed */
  customAdd?: boolean;
  /* Whether to hide in the menu */
  hideInMenu?: boolean;
  /** Whether configuration is prohibited */
  notAllowConfig?: boolean;
  /** Whether it is a group node */
  isGroup?: boolean;
  /** Whether it is prohibited to appear on group nodes, if is a string array, it means the node type is prohibited to appear on the specified group nodes */
  disableInGroup?: boolean | string[];
}

export interface IPointItem {
  type: string;
  id: string;
  handleId: string;
}

export interface IEdgeData {
  _hover?: boolean;
  _sourceNodeStatus?: IWorkFlowStatus;
  _targetNodeStatus?: IWorkFlowStatus;
}

/* Node output parameter */
export interface INodeDataOutputParamItem {
  /* Parameter id */
  id?: string;
  /* Parameter name */
  key: string;
  /* Parameter type */
  type?: IValueType;
  /* Parameter description */
  desc?: string;
  /* When defining input parameters for the start node, it is necessary to specify whether it is required */
  required?: boolean;
  valueFrom?: 'refer' | 'input' | 'clear';
  /* If the type is Object, sub-parameters need to be defined */
  properties?: INodeDataOutputParamItem[];
}

/* Node input parameter */
export interface INodeDataInputParamItem {
  /* Parameter id */
  id?: string;
  /* Parameter name */
  key: string;
  /* Parameter type */
  type?: IValueType;
  /* Parameter value */
  value?: string;
  /* Value source type, refer: reference; input: input; clear: clear, when valueFrom is clear, value is invalid */
  valueFrom?: 'refer' | 'input' | 'clear';
  /** Whether the parameter is required */
  required?: boolean;
}

export type IWorkFlowNodeData<T = any> = {
  /* Node name */
  label: string;
  /* Node input parameters */
  inputParams: INodeDataInputParamItem[];
  /* Node output parameters */
  outputParams: INodeDataOutputParamItem[];
  /* Node business parameters */
  nodeParam: T;
  /* Node description */
  desc?: string;
};

export interface IConditionItem {
  operator?: string;
  left: Omit<INodeDataInputParamItem, 'key'>;
  right: Omit<INodeDataInputParamItem, 'key'>;
}

export interface IBranchItem {
  id: string;
  label: string;
  logic?: 'and' | 'or';
  conditions?: IConditionItem[];
}

export interface ICheckListItem {
  nodeId: string;
  nodeType: string;
  nodeName: string;
  errorMsgs: { label: string; error: string }[];
}

export interface IWorkFlowNode extends Node<IWorkFlowNodeData> {
  type: string;
}

export type IValueType =
  | 'Array<Object>'
  | 'Array<File>'
  | 'Array<String>'
  | 'Array<Number>'
  | 'Array<Boolean>'
  | 'Object'
  | 'File'
  | 'String'
  | 'Number'
  | 'Boolean';

export type IValueTypeOption = {
  label: string;
  value: IValueType | 'Array';
  disabled?: boolean;
  children?: IValueTypeOption[];
};

export type IWorkFlowStatus =
  | 'wait'
  | 'success'
  | 'fail'
  | 'skip'
  | 'executing'
  | 'stop';

export interface IUserInputItem {
  key: string;
  type: IValueType;
  desc: string;
  value?: string;
  required?: boolean;
}
export interface IWorkFlowTaskResultItem {
  nodeType: string;
  nodeName: string;
  nodeId: string;
  nodeContent: string | IUserInputItem[];
  nodeStatus: IWorkFlowStatus;
  parentNodeId?: string;
}

export interface IWorkFlowNodeResultItem {
  batch: boolean;
  retry?: {
    happened: boolean;
    retryTimes: number;
  };
  input?: string;
  output?: string;
  usages?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  }[];
  batches: IWorkFlowNodeResultItem[];
  multiBranch: boolean;
  multiBranchResults?: {
    conditionId: string;
    targetIds: string[];
  }[];
  nodeId: string;
  nodeName: string;
  nodeType: string;
  nodeStatus: IWorkFlowStatus;
  parentNodeId?: string;
  outputType: 'json' | 'text';
  nodeExecTime: string;
  tryCatch?: {
    happened: boolean;
    strategy: string;
  };
  shortMemory?: {
    round: number;
    currentSelfChatMessages: {
      role?: string;
      content?: any;
      name?: string;
      toolCalls?: Array<{
        id: string;
        type: string;
        index: number;
        function: {
          name: string;
          arguments: string;
          outputs: string;
        };
      }>;
      audio?: {
        id: string;
        data: string;
        expiresAt: number;
        transcript: string;
      };
    }[];
  };
  errorInfo?: string;
}

export interface IWorkFlowTaskProcess {
  taskId: string;
  conversationId?: string;
  requestId: string;
  taskStatus: IWorkFlowStatus;
  taskResults: IWorkFlowTaskResultItem[];
  errorCode?: string;
  errorInfo?: string;
  taskExecTime: string;
  nodeResults: IWorkFlowNodeResultItem[];
}
