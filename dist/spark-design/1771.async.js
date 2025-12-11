"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[1771],{82393:function(e,n,o){o.r(n),o.d(n,{useStyle:function(){return u}});var p=o(53649),a=o.n(p),d=o(88974),c,u=(0,d.Z)(c||(c=a()([`
.`,`-alert-dialog {
  .`,`-modal-body {
    padding: 0 0 12px 32px;
    font-size: 14px;
    color: var(--`,`-color-text-secondary);
  }

  .`,`-modal-confirm-content {
    padding: 0 0 12px 32px;
    font-size: 14px;
    color: var(--`,`-color-text-secondary);
  }

  .`,`-modal-confirm-paragraph {
    max-width: 100%;
  }
}
`])),function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix})},55002:function(e,n,o){o.r(n);var p=o(26068),a=o.n(p),d=o(67825),c=o.n(d),u=o(1615),t=o(58911),v=o(88602),m=o(62910),g=o(99090),l=o(65122),f=o(84674),x=o(82187),h=o.n(x),y=o(31209),C=o(82393),r=o(52676),_=["children","type","danger","title","width","className"],w=function(s){var i=function(E){var z=E.type,F=E.title,N=(0,y.getCommonConfig)(),R=N.antPrefix;switch(z){case"success":return(0,r.jsxs)(l.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,r.jsx)(t.Z,{style:{color:"var(--".concat(R,"-color-success)"),fontSize:18,margin:"0 3px"}}),F]});case"warning":case"confirm":return(0,r.jsxs)(l.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,r.jsx)(v.Z,{style:{color:"var(--".concat(R,"-color-warning)"),fontSize:18,margin:"0 3px"}}),F]});case"info":return(0,r.jsxs)(l.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,r.jsx)(m.Z,{style:{color:"var(--".concat(R,"-color-info)"),fontSize:18,margin:"0 3px"}}),F]});case"error":return(0,r.jsxs)(l.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,r.jsx)(g.Z,{style:{color:"var(--".concat(R,"-color-error)"),fontSize:18,margin:"0 3px"}}),F]});default:return u.Z.get({id:"components.commonComponents.AlertDialog.Prompt",dm:"\u63D0\u793A"})}},b=s.children,S=s.type,T=S===void 0?"info":S,A=s.danger,L=A===void 0?!1:A,O=s.title,D=s.width,M=D===void 0?"400px":D,I=s.className,Z=I===void 0?"":I,j=c()(s,_);return{width:M,transitionName:"",restProps:j,closeIcon:null,title:i({type:T,title:O}),okButtonProps:{danger:T==="error"||T==="warning"||L},destroyOnClose:!0,className:h()(Z,"animate-in","".concat((0,y.getCommonConfig)().sparkPrefix,"-alert-dialog")),content:s.content||b,children:b}},P=function(s){var i=w(s),b=(0,C.useStyle)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b,{}),(0,r.jsx)(f.Z,a()(a()({width:i.width,transitionName:""},i.restProps),{},{closeIcon:null,title:i.title,okButtonProps:i.okButtonProps||{},destroyOnClose:i.destroyOnClose,className:i.className,children:i.content||i.children}))]})},B=["success","info","warning","error","confirm"];B.forEach(function(k){P[k]=function(s){var i=w(a()(a()({},s),{},{type:k}));function b(){var S=(0,C.useStyle)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(S,{}),i.content]})}return f.Z.confirm(a()(a()(a()({},i),i.restProps),{},{content:(0,r.jsx)(b,{}),icon:null}))}}),n.default=P},1305:function(e,n,o){o.r(n),o.d(n,{useStyle:function(){return u}});var p=o(53649),a=o.n(p),d=o(88974),c,u=(0,d.Z)(c||(c=a()([`
.`,`-radio-button-wrapper {
  border: none;
  background-color: transparent;
  border-radius: 6px;
  
  &:first-child {
    border-inline-start: initial;
  }
  
  &::before {
    display: none !important;
  }
  
  &:not(:last-child) {
    margin-right: 12px;
  }
}

.`,`-radio-group-ghost {
  .`,`-radio-button-wrapper-checked {
    &:not(.`,`-radio-button-wrapper-disabled) {
      color: var(--`,`-color-primary);
      background-color: var(--`,`-color-primary-bg);
      
      .`,`-radio-button-wrapper-checked {
        background-color: var(--`,`-color-primary-bg);
      }
    }
    
    &.`,`-radio-button-wrapper-disabled {
      &:hover {
        background-color: var(--`,`-color-fill-tertiary);
      }
    }
  }
}

.`,`-radio-group-bordered {
  .`,`-radio-button-wrapper {
    border: var(--`,"-line-width) var(--","-line-type) var(--",`-color-border);
    
    &:not(:first-child) {
      border-inline-start-width: 1px;
    }
  }
}

.`,`-radio-button-wrapper-disabled {
  color: var(--`,`-color-text-tertiary);
  background-color: transparent;
  
  &:hover {
    color: var(--`,`-color-text-tertiary);
    background-color: transparent;
  }
}

.`,"-radio-button-wrapper-checked.",`-radio-button-wrapper-disabled {
  color: var(--`,`-color-text-tertiary);
  background-color: var(--`,`-color-fill-tertiary);
  
  &:hover {
    color: var(--`,`-color-text-tertiary);
    background-color: var(--`,`-color-fill-tertiary);
  }
}
`])),function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix})},4855:function(e,n,o){o.r(n);var p=o(26068),a=o.n(p),d=o(31209),c=o(57239),u=o(82187),t=o.n(u),v=o(1305),m=o(52676);n.default=function(g){var l=(0,d.getCommonConfig)(),f=l.sparkPrefix,x=l.antPrefix,h=g.ghost,y=h===void 0?!0:h,C=(0,v.useStyle)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(C,{}),(0,m.jsx)(c.ZP.Group,a()(a()({},g),{},{className:t()(g.className,g.bordered?"".concat(f,"-radio-group-bordered"):"",y?"".concat(x,"-radio-group-ghost"):""),optionType:"button"}))]})}},1615:function(e,n,o){o.d(n,{Z:function(){return C}});var p=o(31759),a=o.n(p),d=o(16483),c=o.n(d),u=o(26068),t=o.n(u),v=JSON.parse('{"components.commonComponents.AlertDialog.Prompt":"Prompt","components.commonComponents.Pagination.PreviousPage":"Previous Page","components.commonComponents.Pagination.Items":"Items","components.commonComponents.Pagination.Page":"Page","components.commonComponents.Pagination.NextPage":"Next page","components.commonComponents.SlateEditor.TheNumberOfWordsCannot":"The number of words cannot exceed {wordLimit}.","components.commonComponents.SlateEditor.EnterHere":"Enter here","components.SlateEditor.utils.constant.Paragraph":"Paragraph","components.SlateEditor.utils.constant.Variable":"Variable","components.SlateEditor.utils.editor.TheSelectionRangeIsIncorrect":"The selection range is incorrect.","components.SlateEditor.utils.editor.WraptagnameCannotBePlacedIn":"[{wrapTagName}] cannot be placed in [{tagName}]","components.SlateEditor.utils.editor.WraptagnameCannotBeNestedIn":"[{wrapTagName}] cannot be nested in [{tagName}]]","components.SlateEditor.utils.withEditor.YouCanEnterAMaximum":"You can enter a maximum of {maxLen} characters.","components.commonComponents.Image.Preview":"Preview"}'),m=JSON.parse('{"components.commonComponents.AlertDialog.Prompt":"\u63D0\u793A","components.commonComponents.Pagination.PreviousPage":"\u4E0A\u4E00\u9875","components.commonComponents.Pagination.Items":"\u6761","components.commonComponents.Pagination.Page":"\u9875","components.commonComponents.Pagination.NextPage":"\u4E0B\u4E00\u9875","components.commonComponents.SlateEditor.TheNumberOfWordsCannot":"\u5B57\u6570\u4E0D\u80FD\u8D85\u8FC7{wordLimit}\u5B57","components.commonComponents.SlateEditor.EnterHere":"\u5728\u8FD9\u91CC\u8F93\u5165","components.SlateEditor.utils.constant.Paragraph":"\u6BB5\u843D","components.SlateEditor.utils.constant.Variable":"\u53D8\u91CF","components.SlateEditor.utils.editor.TheSelectionRangeIsIncorrect":"\u5212\u9009\u8303\u56F4\u6709\u8BEF","components.SlateEditor.utils.editor.WraptagnameCannotBePlacedIn":"\u3010{wrapTagName}\u3011\u4E0D\u80FD\u5728\u653E\u5728\u3010{tagName}\u3011\u5185","components.SlateEditor.utils.editor.WraptagnameCannotBeNestedIn":"\u3010{wrapTagName}\u3011\u4E2D\u4E0D\u80FD\u5D4C\u5957\u3010{tagName}\u3011","components.SlateEditor.utils.withEditor.YouCanEnterAMaximum":"\u6700\u591A\u53EF\u8F93\u5165{maxLen}\u5B57","components.commonComponents.Image.Preview":"\u9884\u89C8"}'),g={"en-US":t()({},v),"zh-CN":t()({},m)},l="zh-cn",f;function x(r){l=r,c().locale(l||"zh-cn")}var h=function(_,w){var P=l==="zh-cn"?"zh-CN":"en-US",B=g[P][_.id]||_.defaultString||"",k=B.replace(/\{(\w+)\}/g,function(s,i){return w[i]||s});return k};function y(r,_){return f||x(l),typeof r=="string"?h({id:r},_):(a()(r)==="object"&&r.dm&&(r.defaultMessage=r.dm),h({id:r.id,defaultString:r.dm},_))}var C={intl:f,get:y,updateLocale:x,language:l}},95108:function(e,n){n.Z=`import { Alert } from '@agentscope-ai/design';

export default () => {
  return (
    <Alert
      message="I am a description of a component."
      type="info"
      showIcon
    ></Alert>
  );
};
`},78677:function(e,n){n.Z=`import { Alert } from '@agentscope-ai/design';
import { Flex } from 'antd';

export default () => {
  return (
    <Flex vertical gap={28}>
      <Alert
        type="info"
        message="I am a description of a component."
        showIcon
      ></Alert>
      <Alert
        type="error"
        message="I am a description of a component."
        showIcon
      ></Alert>
      <Alert
        type="success"
        message="I am a description of a component."
        showIcon
      ></Alert>
      <Alert
        type="warning"
        message="I am a description of a component."
        showIcon
      ></Alert>
      <Alert
        type="error"
        message="I am a description of a component."
        description="I am a description of a component."
        showIcon
      ></Alert>
    </Flex>
  );
};
`},76220:function(e,n){n.Z=`import { Alert } from '@agentscope-ai/design';

export default () => {
  return (
    <Alert
      type="info"
      message="I am a description of a component."
      showIcon={false}
    ></Alert>
  );
};
`},86413:function(e,n){n.Z=`import { Alert } from '@agentscope-ai/design';

export default () => {
  return (
    <Alert
      type="info"
      message="I am a description of a component."
      closable
      showIcon
    ></Alert>
  );
};
`},53293:function(e,n){n.Z=`import { Alert, Button } from '@agentscope-ai/design';

export default () => {
  return (
    <Alert
      type="info"
      message="I am a description of a component."
      closable
      showIcon
      action={
        <Button type="textCompact" size="small">
          Text Compact
        </Button>
      }
    ></Alert>
  );
};
`},93719:function(e,n){n.Z=`import { Alert } from '@agentscope-ai/design';
import { Flex } from 'antd';

export default () => {
  return (
    <>
      <Alert
        type="info"
        message="This alert is used for banner."
        banner
      ></Alert>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Flex justify="center">
        <div style={{ width: 512 }}>
          <Alert
            type="info"
            showIcon
            message="This alert is used for non-banner scenarios."
            style={{ borderRadius: 4 }}
          ></Alert>
        </div>
      </Flex>
    </>
  );
};
`},57944:function(e,n){n.Z=`import { Button } from '@agentscope-ai/design';
import React from 'react';
import AlertDialog from '..';

const App: React.FC = () => {
  return (
    <>
      <Button
        onClick={() =>
          AlertDialog.info({
            title: 'Title here',
            children: 'This information content passed into this AlertDialog.',
            centered: true,
          })
        }
      >
        Open AlertDialog(Info)
      </Button>
    </>
  );
};

export default App;
`},35523:function(e,n){n.Z=`import { Button } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React from 'react';
import AlertDialog from '..';

const App: React.FC = () => {
  return (
    <Flex vertical gap={24}>
      <Button
        onClick={() =>
          AlertDialog.success({
            title: 'Title here',
            children: 'This information content passed into this AlertDialog.',
            centered: true,
          })
        }
      >
        Success
      </Button>
      <Button
        onClick={() =>
          AlertDialog.warning({
            title: 'Title here',
            children: 'This information content passed into this AlertDialog.',
            centered: true,
          })
        }
      >
        Warning
      </Button>
      <Button
        onClick={() =>
          AlertDialog.error({
            title: 'Title here',
            children: 'This information content passed into this AlertDialog.',
            centered: true,
          })
        }
      >
        Error
      </Button>
      <Button
        onClick={() =>
          AlertDialog.confirm({
            title: 'Title here',
            children: 'This information content passed into this AlertDialog.',
            centered: true,
          })
        }
      >
        Confirm
      </Button>
    </Flex>
  );
};

export default App;
`},43407:function(e,n){n.Z=`import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle\`
.\${(p) => p.sparkPrefix}-alert-dialog {
  .\${(p) => p.antPrefix}-modal-body {
    padding: 0 0 12px 32px;
    font-size: 14px;
    color: var(--\${(p) => p.antPrefix}-color-text-secondary);
  }

  .\${(p) => p.antPrefix}-modal-confirm-content {
    padding: 0 0 12px 32px;
    font-size: 14px;
    color: var(--\${(p) => p.antPrefix}-color-text-secondary);
  }

  .\${(p) => p.antPrefix}-modal-confirm-paragraph {
    max-width: 100%;
  }
}
\`;
`},76350:function(e,n){n.Z=`import $i18n from '@/i18n';
import { ModalProps } from '@/index';
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import { Flex, Modal } from 'antd';
import classNames from 'classnames';
import { SyntheticEvent } from 'react';
import { getCommonConfig } from '../../../config';
import { useStyle } from './index.style';

export interface AlertDialogProps extends ModalProps {
  /**
   * @description \u7C7B\u578B
   * @descriptionEn type
   * @default info
   */
  type?: 'success' | 'info' | 'warning' | 'error' | 'confirm';
  /**
   * @description \u786E\u8BA4\u6309\u94AE\u662F\u5426\u5E26\u6709danger\u5C5E\u6027
   * @descriptionEn whether the confirm button has a danger property
   * @default false
   */
  danger?: boolean;
  /**
   * @description \u5185\u5BB9
   * @descriptionEn content
   * @default -
   */
  content?: React.ReactNode;
  /**
   * @description \u5173\u95ED\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570
   * @descriptionEn callback function triggered when closed
   * @default -
   */
  onClose?: (e: SyntheticEvent<Element, Event>) => any;
}

const getCommonProps = (props: AlertDialogProps) => {
  const renderTitle = ({ type, title }) => {
    const { antPrefix } = getCommonConfig();

    switch (type) {
      case 'success':
        return (
          <Flex align="center" gap={8} className="leading-[28px]">
            <CheckCircleOutlined
              style={{
                color: \`var(--\${antPrefix}-color-success)\`,
                fontSize: 18,
                margin: '0 3px',
              }}
            />
            {title}
          </Flex>
        );

      case 'warning':
      case 'confirm':
        return (
          <Flex align="center" gap={8} className="leading-[28px]">
            <ExclamationCircleOutlined
              style={{
                color: \`var(--\${antPrefix}-color-warning)\`,
                fontSize: 18,
                margin: '0 3px',
              }}
            />
            {title}
          </Flex>
        );

      case 'info':
        return (
          <Flex align="center" gap={8} className="leading-[28px]">
            <InfoCircleOutlined
              style={{
                color: \`var(--\${antPrefix}-color-info)\`,
                fontSize: 18,
                margin: '0 3px',
              }}
            />
            {title}
          </Flex>
        );

      case 'error':
        return (
          <Flex align="center" gap={8} className="leading-[28px]">
            <CloseCircleOutlined
              style={{
                color: \`var(--\${antPrefix}-color-error)\`,
                fontSize: 18,
                margin: '0 3px',
              }}
            />
            {title}
          </Flex>
        );

      default:
        return $i18n.get({
          id: 'components.commonComponents.AlertDialog.Prompt',
          dm: '\u63D0\u793A',
        });
    }
  };

  const {
    children,
    type = 'info',
    danger = false,
    title,
    width = '400px',
    className = '',
    ...restProps
  } = props;

  return {
    width,
    transitionName: '',
    restProps,
    closeIcon: null,
    title: renderTitle({ type, title }),
    okButtonProps: { danger: type === 'error' || type === 'warning' || danger },
    destroyOnClose: true,
    className: classNames(
      className,
      'animate-in',
      \`\${getCommonConfig().sparkPrefix}-alert-dialog\`,
    ),
    content: props.content || children,
    children: children,
  };
};

const AlertDialog = (props: AlertDialogProps) => {
  const commonProps = getCommonProps(props);
  const Style = useStyle();

  return (
    <>
      <Style />
      <Modal
        width={commonProps.width}
        transitionName=""
        {...commonProps.restProps}
        closeIcon={null}
        title={commonProps.title}
        okButtonProps={commonProps.okButtonProps || {}}
        destroyOnClose={commonProps.destroyOnClose}
        className={commonProps.className}
      >
        {commonProps.content || commonProps.children}
      </Modal>
    </>
  );
};

const staticFns = [
  'success',
  'info',
  'warning',
  'error',
  'confirm',
] as AlertDialogProps['type'][];

type AlertDialogStaticProps = Omit<AlertDialogProps, 'type' | 'open'>;

staticFns.forEach((type) => {
  AlertDialog[type] = (props: AlertDialogStaticProps) => {
    const commonProps = getCommonProps({ ...props, type });

    function Content() {
      const Style = useStyle();
      return (
        <>
          <Style />
          {commonProps.content}
        </>
      );
    }

    // @ts-ignore
    return Modal.confirm({
      ...commonProps,
      ...commonProps.restProps,
      content: <Content />,
      icon: null,
    });
  };
});

export default AlertDialog as {
  (props: AlertDialogProps): JSX.Element;
  success: (props?: AlertDialogStaticProps) => void;
  info: (props?: AlertDialogStaticProps) => void;
  warning: (props?: AlertDialogStaticProps) => void;
  error: (props?: AlertDialogStaticProps) => void;
  confirm: (props?: AlertDialogStaticProps) => void;
};

`},21525:function(e,n){n.Z=`import React from 'react';
import { Anchor } from '@agentscope-ai/design';

const Demo1: React.FC = () => {
  const items = [
    {
      key: 'anchor-item-1',
      href: '#anchor-item-1',
      title: 'Anchor item',
    },
    {
      key: 'anchor-item-2', 
      href: '#anchor-item-2',
      title: 'Anchor item',
    },
    {
      key: 'anchor-item-3',
      href: '#anchor-item-3', 
      title: 'Anchor item',
    },
  ];

  return (
    <Anchor
      onClick={e => e.preventDefault()}
      direction="vertical"
      items={items}
    />
  );
};

export default Demo1;
`},81572:function(e,n){n.Z=`import React from 'react';
import { Anchor } from '@agentscope-ai/design';

const Demo1: React.FC = () => {
  const items = [
    {
      key: 'anchor-item-1',
      href: '#anchor-item-1',
      title: 'Anchor item',
    },
    {
      key: 'anchor-item-2', 
      href: '#anchor-item-2',
      title: 'Anchor item',
    },
    {
      key: 'anchor-item-3',
      href: '#anchor-item-3', 
      title: 'Anchor item',
    },
  ];

  return (
    <>
      <Anchor
        onClick={e => e.preventDefault()}
        direction="horizontal"
        items={items}
      />
    </>
  );
};

export default Demo1;
`},51321:function(e,n){n.Z=`import { Avatar } from '@agentscope-ai/design';

export default () => {
  return (
    <Avatar
      src={
        'https://img.alicdn.com/imgextra/i2/O1CN01PbkG9o1tq4Q12GvNM_!!6000000005952-55-tps-32-32.svg'
      }
    />
  );
};
`},57403:function(e,n){n.Z=`import { Avatar } from '@agentscope-ai/design';
import { Space, theme } from 'antd';

export default () => {
  const { token } = theme.useToken();

  return (
    <Space>
      <Avatar
        style={{
          // @ts-ignore
          backgroundColor: token.colorPurpleBg,
          // @ts-ignore
          color: token.colorPurple,
        }}
      >
        Micheal Jack
      </Avatar>
      <Avatar
        style={{
          // @ts-ignore
          backgroundColor: token.colorPurpleBg,
          // @ts-ignore
          color: token.colorPurple,
        }}
      >
        \u5F20\u4E09
      </Avatar>
    </Space>
  );
};
`},9604:function(e,n){n.Z=`import { Avatar } from '@agentscope-ai/design';

export default () => {
  return (
    <Avatar
      src={
        'https://img.alicdn.com/imgextra/i1/O1CN01O5wXaE1FgNSB284gm_!!6000000000516-55-tps-32-32.svg'
      }
    />
  );
};
`},81479:function(e,n){n.Z=`import { Breadcrumb } from '@agentscope-ai/design';
import React from 'react';

const App: React.FC = () => {
  return (
    <Breadcrumb
      items={[
        {
          title: 'Home',
        },
        {
          title: 'Application Center',
        },
        {
          title: 'An Application',
        },
      ]}
    />
  );
};

export default App;
`},99727:function(e,n){n.Z=`import { Breadcrumb } from '@agentscope-ai/design';
import React from 'react';

const App: React.FC = () => {
  return (
    <Breadcrumb
      items={[
        {
          title: 'Home',
        },
        {
          title: 'Application Center',
        },
        {
          title: 'User Profile',
          iconUrl: 'https://img.alicdn.com/imgextra/i1/O1CN01Bvwiz11YRF3tRdps9_!!6000000003055-55-tps-20-20.svg',
          dropdown: {
            items: [
              { key: 'profile', label: 'Profile' },
              { key: 'settings', label: 'Settings' },
            ],
          },
        },
      ]}
    />
  );
};

export default App;
`},50446:function(e,n){n.Z=`import { Button } from '@agentscope-ai/design';
import { Flex } from 'antd';

export default () => {
  return (
    <Flex vertical gap={16}>
      <Flex gap={16}>
        <Button type="primary" danger>
          Primary Danger
        </Button>
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="primaryLess">PrimaryLess</Button>
      </Flex>
      <Flex gap={16}>
        <Button type="primary" danger disabled>
          Primary Danger
        </Button>
        <Button disabled>Default</Button>
        <Button type="primary" disabled>
          Primary
        </Button>
        <Button type="primaryLess" disabled>PrimaryLess</Button>
      </Flex>
    </Flex>
  );
};
`},22706:function(e,n){n.Z=`import { Button } from '@agentscope-ai/design';
import { Flex } from 'antd';

export default () => {
  return (
    <Flex gap={16} align="center">
      <Button type="primary">Button MD</Button>
      <Button type="primary" size="small">
        Button SM
      </Button>
    </Flex>
  );
};
`},82208:function(e,n){n.Z=`import { Button } from '@agentscope-ai/design';
import { Flex } from 'antd';

export default () => {
  return (
    <Flex gap={16} align="center">
      <Button>Button MD</Button>
      <Button size="small">Button SM</Button>
    </Flex>
  );
};
`},82653:function(e,n){n.Z=`import { Button } from '@agentscope-ai/design';
import { Flex } from 'antd';

export default () => {
  return (
    <Flex gap={16} align="center">
      <Button type="text">Button MD</Button>
      <Button type="text" size="small">
        Button SM
      </Button>
    </Flex>
  );
};
`},45057:function(e,n){n.Z=`import { Button } from '@agentscope-ai/design';
import { Flex } from 'antd';

export default () => {
  return (
    <Flex gap={16} align="center">
      <Button type="textCompact">Button MD</Button>
      <Button type="textCompact" size="small">
        Button SM
      </Button>
    </Flex>
  );
};
`},30525:function(e,n){n.Z=`import { Button } from '@agentscope-ai/design';
import { SparkPlusLine } from '@agentscope-ai/icons';
import { Flex } from 'antd';

export default () => {
  return (
    <Flex gap={24}>
      <div>
        {/* \u63A8\u8350\u65B9\u5F0F\uFF0C\u4F20\u5165icon */}
        <div style={{ marginBottom: 16 }}>
          <Button icon={<SparkPlusLine></SparkPlusLine>} type="primary">
            Button MD
          </Button>
        </div>
        <div style={{ marginBottom: 16 }}>
          <Button icon={<SparkPlusLine></SparkPlusLine>}>Button MD</Button>
        </div>
        <div style={{ marginBottom: 16 }}>
          <Button icon={<SparkPlusLine></SparkPlusLine>} type="text">
            Text
          </Button>
        </div>
        <div style={{ marginBottom: 16 }}>
          <Button icon={<SparkPlusLine></SparkPlusLine>} type="textCompact">
            TextCompact
          </Button>
        </div>
      </div>
      <div>
        {/* \u4FBF\u6377\u65B9\u5F0F\uFF0C\u4F20\u5165iconfont */}
        <div style={{ marginBottom: 16, height: '32px', padding: '4px 0' }}>
          <Button type="primary" size="small" iconType="spark-plus-line">
            Button SM
          </Button>
        </div>
        <div style={{ marginBottom: 16, height: '32px', padding: '4px 0' }}>
          <Button size="small" iconType="spark-plus-line">
            Button SM
          </Button>
        </div>
        <div style={{ marginBottom: 16, height: '32px', padding: '4px 0' }}>
          <Button size="small" iconType="spark-plus-line" type="text">
            Text
          </Button>
        </div>
        <div style={{ marginBottom: 16, height: '32px', padding: '4px 0' }}>
          <Button size="small" iconType="spark-plus-line" type="textCompact">
            TextCompact
          </Button>
        </div>
      </div>
    </Flex>
  );
};
`},25498:function(e,n){n.Z=`import { Card } from '@agentscope-ai/design';
import { theme } from 'antd';

export default () => {
  const { token } = theme.useToken();
  return (
    <Card title="Card title" info="info here" style={{ width: 240 }}>
      <div
        style={{
          width: '100%',
          height: 117,
          fontSize: 16,
          color: token.colorTextSecondary,
          background: token.colorFillTertiary,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Content
      </div>
    </Card>
  );
};
`},65736:function(e,n){n.Z=`import { Card } from '@agentscope-ai/design';
import { theme } from 'antd';

export default () => {
  const { token } = theme.useToken();
  return (
    <Card style={{ width: 240 }}>
      <div
        style={{
          width: '100%',
          height: 170,
          fontSize: 16,
          color: token.colorTextSecondary,
          background: token.colorFillTertiary,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Content
      </div>
    </Card>
  );
};
`},30386:function(e,n){n.Z=`import { Checkbox, CheckboxProps } from '@agentscope-ai/design';
import React from 'react';

const onChange: CheckboxProps['onChange'] = (e) => {
  console.log(\`checked = \${e.target.checked}\`);
};

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Checkbox onChange={onChange}>Checkbox normal</Checkbox>
      <Checkbox onChange={onChange} checked disabled>
        Checkbox checked disabled
      </Checkbox>
      <Checkbox onChange={onChange} disabled>
        Checkbox unchecked disabled
      </Checkbox>
    </div>
  );
};

export default App;
`},58697:function(e,n){n.Z=`import {
  Checkbox,
  CheckboxProps,
} from '@agentscope-ai/design';
import React from 'react';

const onChange: CheckboxProps['onChange'] = (e) => {
  console.log(\`checked = \${e.target.checked}\`);
};

const App: React.FC = () => {
  return (
    <Checkbox 
      onChange={onChange}
      description="You agree to our Terms of Service and Privacy Policy."
    >
      Accept terms and conditions
    </Checkbox>
  );
};

export default App;
`},72879:function(e,n){n.Z=`import {
  Checkbox,
  CheckboxProps,
} from '@agentscope-ai/design';
import React from 'react';

const onChange: CheckboxProps['onChange'] = (e) => {
  console.log(\`checked = \${e.target.checked}\`);
};

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox indeterminate onChange={onChange}>
        Checkbox partial checked
      </Checkbox>
      <Checkbox indeterminate disabled>
        Checkbox partial checked disabled
      </Checkbox>
    </div>
  );
};

export default App;
`},35360:function(e,n){n.Z=`import { CodeBlock, CollapsePanel, message } from '@agentscope-ai/design';
import { SparkCode01Line, SparkCopyLine } from '@agentscope-ai/icons';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => {
  const value = \`function main(params) {    
  const ret = {        
    "result": {           
      "key0": params.city + params.date,            
      "key1": ["hello", "world"],               
    },    
  };
  return ret;
}\`;
  return (
    <Flex
      vertical
      gap={16}
      style={{ width: 720 }}
      align="center"
      justify="center"
    >
      <CollapsePanel
        title={
          <Flex align="center" gap={8}>
            <SparkCode01Line style={{ fontSize: '20px' }} />
            <span style={{ fontSize: '14px' }}>Code demo</span>
          </Flex>
        }
        expandOnPanelClick={true}
        extra={
          <SparkCopyLine
            style={{ fontSize: '18px' }}
            onClick={() => {
              navigator.clipboard.writeText(value);
              message.success('\u590D\u5236\u6210\u529F!');
            }}
          />
        }
      >
        <CodeBlock language={'javascript'} value={value} />
      </CollapsePanel>
    </Flex>
  );
};

export default App;
`},49615:function(e,n){n.Z=`import { CodeBlock } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => {
  const value = \`function main(params) {    
  const ret = {        
    "result": {           
      "key0": params.city + params.date,            
      "key1": ["hello", "world"],                   
    },    
  }    
  return ret
}\`;
  return (
    <Flex vertical gap={16} style={{ width: 720 }}>
      <CodeBlock language={'javascript'} value={value} />
    </Flex>
  );
};

export default App;
`},84979:function(e,n){n.Z=`import { CodeBlock, CollapsePanel, message } from '@agentscope-ai/design';
import { SparkCode01Line, SparkCopyLine } from '@agentscope-ai/icons';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => {
  const value = \`function main(params) {    
    const ret = {        
    "result": {           
        "key0": params.city + params.date,            
        "key1": ["hello", "world"],            
        "key2": {      
        // json_string\u662Fjson\u683C\u5F0F\u7684\u5B57\u7B26\u4E32          
        "key21": JSON.parse(params.json_string)          
        },        
    },    
    }    
    return ret
}\`;
  return (
    <Flex vertical gap={16} style={{ width: 720 }}>
      <CollapsePanel
        title={
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <SparkCode01Line style={{ fontSize: '20px' }} />
            <span style={{ fontSize: '14px' }}>Code demo</span>
          </div>
        }
        collapsedHeight={64}
        expandedHeight={200}
        expandOnPanelClick={true}
        extra={
          <SparkCopyLine
            style={{ fontSize: '18px' }}
            onClick={() => {
              navigator.clipboard.writeText(value);
              message.success('\u590D\u5236\u6210\u529F!');
            }}
          />
        }
      >
        <CodeBlock language={'javascript'} value={value} />
      </CollapsePanel>
    </Flex>
  );
};

export default App;
`},47871:function(e,n){n.Z=`import { Collapse, CollapseProps } from '@agentscope-ai/design';

export default () => {
  const items: CollapseProps['items'] = [
    {
      key: 0,
      label: 'This is a Panel',
      children: 'This is a long text used to describe a concept',
    },
    {
      key: 1,
      label: 'This is a Panel',
      children: 'This is a long text used to describe a concept',
    },
    {
      key: 2,
      label: 'This is a Panel',
      children: 'This is a long text used to describe a concept',
    },
  ];

  return (
    <Collapse items={items} defaultActiveKey={[0]} style={{ width: 480 }} />
  );
};
`},64050:function(e,n){n.Z=`import { Collapse, CollapseProps } from '@agentscope-ai/design';
import { SparkSettingLine } from '@agentscope-ai/icons';

export default () => {
  const renderExtra = () => {
    return (
      <div
        style={{
          width: 32,
          height: 32,
          fontSize: 20,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <SparkSettingLine />
      </div>
    );
  };

  const items: CollapseProps['items'] = [
    {
      key: 0,
      label: 'This is a Panel',
      children: 'This is a long text used to describe a concept',
      extra: renderExtra(),
    },
    {
      key: 1,
      label: 'This is a Panel',
      children: 'This is a long text used to describe a concept',
      extra: renderExtra(),
    },
    {
      key: 2,
      label: 'This is a Panel',
      children: 'This is a long text used to describe a concept',
      extra: renderExtra(),
    },
  ];

  return (
    <Collapse items={items} defaultActiveKey={[0]} style={{ width: 480 }} />
  );
};
`},95176:function(e,n){n.Z=`import { CollapsePanel } from '@agentscope-ai/design';
import { SparkCopyLine } from '@agentscope-ai/icons';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => {
  return (
    <Flex justify="center" align="center" style={{ padding: '0 200px' }}>
      <CollapsePanel
        collapsedHeight={80}
        expandedHeight={240}
        title="Description"
        expandOnPanelClick={true}
        extra={<SparkCopyLine style={{ fontSize: '18px' }} />}
      >
        <div style={{ padding: '12px' }}>
          <p>
            <strong>\u676D\u5DDE\uFF1A\u4EBA\u95F4\u5929\u5802\u7684\u8BD7\u610F\u6816\u5C45</strong>
          </p>
          <p>
            \u676D\u5DDE\uFF0C\u8FD9\u5EA7\u4F4D\u4E8E\u4E2D\u56FD\u4E1C\u5357\u6CBF\u6D77\u7684\u5386\u53F2\u6587\u5316\u540D\u57CE\uFF0C\u4EE5\u5176\u79C0\u7F8E\u7684\u81EA\u7136\u98CE\u5149\u548C\u6DF1\u539A\u7684\u4EBA\u6587\u5E95\u8574\uFF0C\u88AB\u8A89\u4E3A"\u4EBA\u95F4\u5929\u5802"\u3002\u65E0\u8BBA\u662F\u897F\u6E56\u7684\u70DF\u6CE2\u6D69\u6E3A\uFF0C\u8FD8\u662F\u7075\u9690\u5BFA\u7684\u949F\u58F0\u60A0\u626C\uFF0C\u4EA6\u6216\u662F\u9F99\u4E95\u8336\u7684\u6E05\u9999\u56DB\u6EA2\uFF0C\u676D\u5DDE\u90FD\u4EE5\u5176\u72EC\u7279\u7684\u9B45\u529B\u5438\u5F15\u7740\u65E0\u6570\u6E38\u5BA2\u548C\u6587\u4EBA\u58A8\u5BA2\u3002\u5728\u8FD9\u91CC\uFF0C\u81EA\u7136\u4E0E\u4EBA\u6587\u4EA4\u76F8\u8F89\u6620\uFF0C\u4F20\u7EDF\u4E0E\u73B0\u4EE3\u548C\u8C10\u5171\u5B58\uFF0C\u6784\u6210\u4E86\u4E00\u5E45\u4EE4\u4EBA\u6D41\u8FDE\u5FD8\u8FD4\u7684\u753B\u5377\u3002
          </p>

          <p>
            <strong>\u897F\u6E56\uFF1A\u676D\u5DDE\u7684\u7075\u9B42</strong>
          </p>
          <p>
            \u63D0\u5230\u676D\u5DDE\uFF0C\u4EBA\u4EEC\u9996\u5148\u60F3\u5230\u7684\u4FBF\u662F\u897F\u6E56\u3002\u897F\u6E56\u662F\u676D\u5DDE\u7684\u7075\u9B42\uFF0C\u4E5F\u662F\u4E2D\u56FD\u6700\u8457\u540D\u7684\u6E56\u6CCA\u4E4B\u4E00\u3002\u5B83\u4EE5\u5176"\u6DE1\u5986\u6D53\u62B9\u603B\u76F8\u5B9C"\u7684\u7F8E\u666F\uFF0C\u6210\u4E3A\u4E2D\u56FD\u53E4\u5178\u56ED\u6797\u827A\u672F\u7684\u5178\u8303\u3002\u65E0\u8BBA\u662F\u6625\u5929\u7684\u82CF\u5824\u6625\u6653\uFF0C\u590F\u5929\u7684\u66F2\u9662\u98CE\u8377\uFF0C\u79CB\u5929\u7684\u5E73\u6E56\u79CB\u6708\uFF0C\u8FD8\u662F\u51AC\u5929\u7684\u65AD\u6865\u6B8B\u96EA\uFF0C\u897F\u6E56\u56DB\u5B63\u7686\u6709\u4E0D\u540C\u7684\u97F5\u5473\u3002
          </p>

          <p>
            \u6F2B\u6B65\u5728\u897F\u6E56\u8FB9\uFF0C\u6E56\u6C34\u6CE2\u5149\u7CBC\u7CBC\uFF0C\u8FDC\u5C71\u5982\u9EDB\uFF0C\u6E56\u4E2D\u7684\u4E09\u6F6D\u5370\u6708\u3001\u96F7\u5CF0\u5854\u3001\u65AD\u6865\u7B49\u666F\u70B9\uFF0C\u65E0\u4E0D\u8BC9\u8BF4\u7740\u4E00\u4E2A\u4E2A\u52A8\u4EBA\u7684\u6545\u4E8B\u3002\u897F\u6E56\u7684\u7F8E\uFF0C\u4E0D\u4EC5\u5728\u4E8E\u5B83\u7684\u81EA\u7136\u98CE\u5149\uFF0C\u66F4\u5728\u4E8E\u5B83\u627F\u8F7D\u7684\u6DF1\u539A\u6587\u5316\u3002\u4ECE\u767D\u5C45\u6613\u7684\u300A\u94B1\u5858\u6E56\u6625\u884C\u300B\u5230\u82CF\u8F7C\u7684\u300A\u996E\u6E56\u4E0A\u521D\u6674\u540E\u96E8\u300B\uFF0C\u5386\u4EE3\u6587\u4EBA\u58A8\u5BA2\u4E3A\u897F\u6E56\u7559\u4E0B\u4E86\u65E0\u6570\u810D\u7099\u4EBA\u53E3\u7684\u8BD7\u7BC7\uFF0C\u4F7F\u5176\u6210\u4E3A\u4E2D\u56FD\u6587\u5316\u7684\u91CD\u8981\u8C61\u5F81\u3002
          </p>

          <p>
            <strong>\u7075\u9690\u5BFA\uFF1A\u7985\u610F\u7684\u6816\u606F\u5730</strong>
          </p>
          <p>
            \u676D\u5DDE\u4E0D\u4EC5\u4EE5\u81EA\u7136\u98CE\u5149\u95FB\u540D\uFF0C\u8FD8\u4EE5\u5176\u6DF1\u539A\u7684\u4F5B\u6559\u6587\u5316\u8457\u79F0\u3002\u7075\u9690\u5BFA\uFF0C\u8FD9\u5EA7\u59CB\u5EFA\u4E8E\u4E1C\u664B\u7684\u5343\u5E74\u53E4\u5239\uFF0C\u662F\u4E2D\u56FD\u4F5B\u6559\u7985\u5B97\u7684\u91CD\u8981\u5723\u5730\u4E4B\u4E00\u3002\u5BFA\u5E99\u4F9D\u5C71\u800C\u5EFA\uFF0C\u63A9\u6620\u5728\u82CD\u7FE0\u7684\u6797\u6728\u4E4B\u4E2D\uFF0C\u663E\u5F97\u683C\u5916\u5E7D\u9759\u5E84\u4E25\u3002\u8D70\u8FDB\u7075\u9690\u5BFA\uFF0C\u8885\u8885\u7684\u9999\u706B\u548C\u60A0\u626C\u7684\u949F\u58F0\u8BA9\u4EBA\u611F\u53D7\u5230\u4E00\u79CD\u5FC3\u7075\u7684\u5B81\u9759\u3002
          </p>

          <p>
            \u7075\u9690\u5BFA\u4E0D\u4EC5\u662F\u4F5B\u6559\u4FE1\u5F92\u7684\u671D\u5723\u4E4B\u5730\uFF0C\u4E5F\u662F\u6E38\u5BA2\u611F\u53D7\u7985\u610F\u7684\u597D\u53BB\u5904\u3002\u5BFA\u5185\u7684\u98DE\u6765\u5CF0\u77F3\u523B\uFF0C\u96D5\u523B\u7CBE\u7F8E\uFF0C\u6829\u6829\u5982\u751F\uFF0C\u5C55\u73B0\u4E86\u53E4\u4EE3\u5DE5\u5320\u7684\u9AD8\u8D85\u6280\u827A\u3002\u5728\u8FD9\u91CC\uFF0C\u4EBA\u4EEC\u53EF\u4EE5\u6682\u65F6\u8FDC\u79BB\u5C18\u4E16\u7684\u55A7\u56A3\uFF0C\u5BFB\u627E\u5230\u5185\u5FC3\u7684\u5E73\u548C\u4E0E\u5B89\u5B81\u3002
          </p>

          <p>
            <strong>\u9F99\u4E95\u8336\uFF1A\u676D\u5DDE\u7684\u5473\u9053</strong>
          </p>
          <p>
            \u676D\u5DDE\u7684\u9F99\u4E95\u8336\uFF0C\u662F\u4E2D\u56FD\u5341\u5927\u540D\u8336\u4E4B\u4E00\uFF0C\u4E5F\u662F\u676D\u5DDE\u6587\u5316\u7684\u91CD\u8981\u7EC4\u6210\u90E8\u5206\u3002\u9F99\u4E95\u8336\u4EE5\u5176"\u8272\u7EFF\u3001\u9999\u90C1\u3001\u5473\u7518\u3001\u5F62\u7F8E"\u56DB\u7EDD\u800C\u95FB\u540D\u4E8E\u4E16\u3002\u6BCF\u5E74\u6625\u5929\uFF0C\u676D\u5DDE\u7684\u8336\u519C\u4EEC\u4FBF\u5F00\u59CB\u5FD9\u788C\u8D77\u6765\uFF0C\u91C7\u6458\u65B0\u9C9C\u7684\u8336\u53F6\uFF0C\u7ECF\u8FC7\u7CBE\u5FC3\u7092\u5236\uFF0C\u5236\u6210\u6E05\u9999\u6251\u9F3B\u7684\u9F99\u4E95\u8336\u3002
          </p>

          <p>
            \u5728\u676D\u5DDE\uFF0C\u54C1\u8336\u4E0D\u4EC5\u662F\u4E00\u79CD\u751F\u6D3B\u4E60\u60EF\uFF0C\u66F4\u662F\u4E00\u79CD\u6587\u5316\u4F53\u9A8C\u3002\u5728\u9F99\u4E95\u6751\uFF0C\u6E38\u5BA2\u53EF\u4EE5\u4EB2\u81EA\u4F53\u9A8C\u91C7\u8336\u3001\u7092\u8336\u7684\u8FC7\u7A0B\uFF0C\u611F\u53D7\u8336\u6587\u5316\u7684\u9B45\u529B\u3002\u5750\u5728\u8336\u56ED\u4E2D\uFF0C\u54C1\u4E00\u676F\u6E05\u9999\u56DB\u6EA2\u7684\u9F99\u4E95\u8336\uFF0C\u8FDC\u773A\u9752\u5C71\u7EFF\u6C34\uFF0C\u4EFF\u4F5B\u65F6\u95F4\u90FD\u6162\u4E86\u4E0B\u6765\u3002
          </p>

          <p>
            <strong>\u4EAC\u676D\u5927\u8FD0\u6CB3\uFF1A\u5386\u53F2\u7684\u89C1\u8BC1</strong>
          </p>
          <p>
            \u4EAC\u676D\u5927\u8FD0\u6CB3\uFF0C\u8FD9\u6761\u4E16\u754C\u4E0A\u6700\u957F\u7684\u4EBA\u5DE5\u6CB3\u6D41\uFF0C\u89C1\u8BC1\u4E86\u676D\u5DDE\u7684\u7E41\u8363\u4E0E\u53D1\u5C55\u3002\u4F5C\u4E3A\u5927\u8FD0\u6CB3\u7684\u5357\u7AEF\u8D77\u70B9\uFF0C\u676D\u5DDE\u5728\u53E4\u4EE3\u662F\u91CD\u8981\u7684\u5546\u8D38\u4E2D\u5FC3\uFF0C\u5357\u6765\u5317\u5F80\u7684\u5546\u8239\u5728\u8FD9\u91CC\u6C47\u805A\uFF0C\u5E26\u6765\u4E86\u4E30\u5BCC\u7684\u7269\u8D44\u548C\u6587\u5316\u4EA4\u6D41\u3002\u5982\u4ECA\uFF0C\u5927\u8FD0\u6CB3\u4F9D\u7136\u662F\u676D\u5DDE\u7684\u91CD\u8981\u6C34\u9053\uFF0C\u6CBF\u6CB3\u7684\u53E4\u8001\u8857\u533A\u548C\u5C0F\u6865\u6D41\u6C34\uFF0C\u4FDD\u7559\u4E86\u6D53\u539A\u7684\u5386\u53F2\u6C14\u606F\u3002
          </p>

          <p>
            \u6F2B\u6B65\u5728\u5927\u8FD0\u6CB3\u8FB9\uFF0C\u53EF\u4EE5\u770B\u5230\u53E4\u8001\u7684\u62F1\u5BB8\u6865\u3001\u5BCC\u4E49\u4ED3\u7B49\u5386\u53F2\u9057\u8FF9\uFF0C\u611F\u53D7\u5230\u53E4\u4EE3\u676D\u5DDE\u7684\u7E41\u534E\u4E0E\u8F89\u714C\u3002\u5927\u8FD0\u6CB3\u4E0D\u4EC5\u662F\u4E00\u6761\u7ECF\u6D4E\u547D\u8109\uFF0C\u66F4\u662F\u4E00\u6761\u6587\u5316\u7684\u7EBD\u5E26\uFF0C\u5C06\u676D\u5DDE\u4E0E\u4E2D\u56FD\u7684\u5176\u4ED6\u5730\u533A\u7D27\u5BC6\u8054\u7CFB\u5728\u4E00\u8D77\u3002
          </p>

          <p>
            <strong>\u73B0\u4EE3\u676D\u5DDE\uFF1A\u4F20\u7EDF\u4E0E\u521B\u65B0\u7684\u878D\u5408</strong>
          </p>
          <p>
            \u4ECA\u5929\u7684\u676D\u5DDE\uFF0C\u4E0D\u4EC5\u662F\u5386\u53F2\u6587\u5316\u540D\u57CE\uFF0C\u4E5F\u662F\u4E2D\u56FD\u79D1\u6280\u521B\u65B0\u7684\u91CD\u8981\u4E2D\u5FC3\u3002\u4F5C\u4E3A\u963F\u91CC\u5DF4\u5DF4\u7684\u603B\u90E8\u6240\u5728\u5730\uFF0C\u676D\u5DDE\u88AB\u8A89\u4E3A"\u4E2D\u56FD\u7845\u8C37"\uFF0C\u5438\u5F15\u4E86\u65E0\u6570\u521B\u4E1A\u8005\u548C\u79D1\u6280\u4EBA\u624D\u3002\u5728\u8FD9\u91CC\uFF0C\u53E4\u8001\u7684\u4F20\u7EDF\u6587\u5316\u4E0E\u73B0\u4EE3\u79D1\u6280\u5B8C\u7F8E\u878D\u5408\uFF0C\u5C55\u73B0\u51FA\u4E00\u79CD\u72EC\u7279\u7684\u57CE\u5E02\u6C14\u8D28\u3002
          </p>

          <p>
            \u676D\u5DDE\u7684\u73B0\u4EE3\u5316\u53D1\u5C55\u5E76\u672A\u63A9\u76D6\u5176\u4F20\u7EDF\u6587\u5316\u7684\u9B45\u529B\u3002\u76F8\u53CD\uFF0C\u73B0\u4EE3\u79D1\u6280\u4E3A\u4F20\u7EDF\u6587\u5316\u7684\u4F20\u627F\u4E0E\u521B\u65B0\u63D0\u4F9B\u4E86\u65B0\u7684\u5E73\u53F0\u3002\u4F8B\u5982\uFF0C\u897F\u6E56\u7684\u591C\u666F\u901A\u8FC7\u706F\u5149\u79C0\u7115\u53D1\u51FA\u65B0\u7684\u751F\u673A\uFF0C\u9F99\u4E95\u8336\u7684\u9500\u552E\u4E5F\u501F\u52A9\u7535\u5546\u5E73\u53F0\u8D70\u5411\u5168\u7403\u3002\u676D\u5DDE\u4EE5\u5176\u5305\u5BB9\u4E0E\u521B\u65B0\u7684\u7CBE\u795E\uFF0C\u6B63\u5728\u4E66\u5199\u7740\u65B0\u7684\u7BC7\u7AE0\u3002
          </p>

          <p>
            <strong>\u7ED3\u8BED</strong>
          </p>
          <p>
            \u676D\u5DDE\uFF0C\u8FD9\u5EA7\u517C\u5177\u81EA\u7136\u4E4B\u7F8E\u4E0E\u4EBA\u6587\u4E4B\u97F5\u7684\u57CE\u5E02\uFF0C\u4EE5\u5176\u72EC\u7279\u7684\u9B45\u529B\u5438\u5F15\u7740\u4E16\u754C\u5404\u5730\u7684\u6E38\u5BA2\u3002\u65E0\u8BBA\u662F\u897F\u6E56\u7684\u70DF\u6CE2\u6D69\u6E3A\uFF0C\u7075\u9690\u5BFA\u7684\u7985\u610F\u60A0\u8FDC\uFF0C\u8FD8\u662F\u9F99\u4E95\u8336\u7684\u6E05\u9999\u56DB\u6EA2\uFF0C\u676D\u5DDE\u90FD\u4EE5\u5176\u6DF1\u539A\u7684\u6587\u5316\u5E95\u8574\u548C\u7F8E\u4E3D\u7684\u81EA\u7136\u98CE\u5149\uFF0C\u6210\u4E3A\u4EBA\u4EEC\u5FC3\u4E2D\u7684"\u4EBA\u95F4\u5929\u5802"\u3002\u5728\u8FD9\u91CC\uFF0C\u4F20\u7EDF\u4E0E\u73B0\u4EE3\u4EA4\u7EC7\uFF0C\u81EA\u7136\u4E0E\u4EBA\u6587\u5171\u5B58\uFF0C\u6784\u6210\u4E86\u4E00\u5E45\u4EE4\u4EBA\u6D41\u8FDE\u5FD8\u8FD4\u7684\u753B\u5377\u3002\u676D\u5DDE\uFF0C\u4E0D\u4EC5\u662F\u8BD7\u610F\u7684\u6816\u5C45\u5730\uFF0C\u66F4\u662F\u68A6\u60F3\u4E0E\u5E0C\u671B\u7684\u8D77\u70B9\u3002
          </p>
        </div>
      </CollapsePanel>
    </Flex>
  );
};

export default App;
`},94143:function(e,n){n.Z=`import { DatePicker } from '@agentscope-ai/design';
import { Flex } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const dateFormat = 'YYYY-MM-DD';

export default () => {
  return (
    <Flex vertical gap={16} style={{ width: 240 }}>
      <DatePicker onChange={onChange} />
      <DatePicker disabled />
      <DatePicker
        status="error"
        defaultValue={dayjs('2025-07-03', dateFormat)}
      />
    </Flex>
  );
};
`},43657:function(e,n){n.Z=`import { DatePicker } from '@agentscope-ai/design';
import { Flex } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
const onChange = (date, dateString) => {
  console.log(date, dateString);
};

export default () => {
  return (
    <Flex vertical gap={16} style={{ width: 240 }}>
      <DatePicker onChange={onChange} />
      <DatePicker onChange={onChange} picker="week" />
      <DatePicker onChange={onChange} picker="month" />
      <DatePicker onChange={onChange} picker="quarter" />
      <DatePicker onChange={onChange} picker="year" />
    </Flex>
  );
};
`},98756:function(e,n){n.Z=`import { DatePicker } from '@agentscope-ai/design';
import { Flex } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

const { RangePicker } = DatePicker;

dayjs.extend(customParseFormat);
const onChange = (date, dateString) => {
  console.log(date, dateString);
};

export default () => {
  return (
    <Flex vertical gap={16} style={{ width: 320 }}>
      <RangePicker onChange={onChange} />
      <RangePicker
        onChange={onChange}
        showTime
        placeholder={['Start Time', 'End Time']}
      />
      <RangePicker onChange={onChange} picker="week" />
      <RangePicker onChange={onChange} picker="month" />
      <RangePicker onChange={onChange} picker="quarter" />
      <RangePicker
        onChange={onChange}
        picker="year"
        id={{
          start: 'startInput',
          end: 'endInput',
        }}
        onFocus={(_, info) => {
          console.log('Focus:', info.range);
        }}
        onBlur={(_, info) => {
          console.log('Blur:', info.range);
        }}
      />
    </Flex>
  );
};
`},67109:function(e,n){n.Z=`import { DatePicker } from '@agentscope-ai/design';
import { Flex } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const defaultValue: Dayjs[] = [
  dayjs('2025-07-03'),
  dayjs('2025-07-04'),
  dayjs('2025-07-05'),
];

export default () => {
  return (
    <Flex vertical gap={16} style={{ width: 320 }}>
      <DatePicker
        multiple
        onChange={onChange}
        maxTagCount="responsive"
        defaultValue={defaultValue as any}
      />
      <DatePicker
        multiple
        onChange={onChange}
        maxTagCount="responsive"
        disabled
        defaultValue={defaultValue as any}
      />
      <DatePicker
        multiple
        status="error"
        onChange={onChange}
        maxTagCount="responsive"
        defaultValue={defaultValue as any}
      />
    </Flex>
  );
};
`},83492:function(e,n){n.Z=`import { Descriptions, DescriptionsProps } from '@agentscope-ai/design';

export default () => {
  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Name',
      children: 'Spark-Design',
    },
    {
      key: '2',
      label: 'Time',
      children: '2025-08-07',
    },
    {
      key: '3',
      label: 'Website',
      children: 'sparkdesign.agentscope.io',
    },
    {
      key: '4',
      label: 'Technology Stack',
      children: 'React',
    },
    {
      key: '5',
      label: 'Domain',
      children: 'LLM',
    },
    {
      key: '6',
      label: 'Company',
      children: 'Alibaba Cloud',
    },
  ];

  return <Descriptions items={items} />;
};
`},79419:function(e,n){n.Z=`import { Descriptions, DescriptionsProps } from '@agentscope-ai/design';

export default () => {
  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Name',
      children: 'Spark-Design',
    },
    {
      key: '2',
      label: 'Time',
      children: '2025-08-07',
    },
    {
      key: '3',
      label: 'Website',
      children: 'sparkdesign.agentscope.io',
    },
    {
      key: '4',
      label: 'Technology Stack',
      children: 'React',
    },
    {
      key: '5',
      label: 'Domain',
      children: 'LLM',
    },
    {
      key: '6',
      label: 'Company',
      children: 'Alibaba Cloud',
    },
  ];

  return <Descriptions items={items} layout="vertical" />;
};
`},66746:function(e,n){n.Z=`import { Button, Drawer } from '@agentscope-ai/design';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  return (
    <>
      <Button onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        open={open}
        width={640}
        title={<>Title</>}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 6,
            color: 'var(--sps-color-text-tertiary)',
            border: '1px solid var(--sps-color-border-secondary)',
            height: '100%',
            fontSize: 24,
            background: \`repeating-linear-gradient(
              135deg,
              var(--sps-color-border-secondary) 0,
              var(--sps-color-border-secondary) 1px,
              var(--sps-color-bg-base) 1px,
              var(--sps-color-bg-base) 15px
              )\`,
          }}
        >
          Content
        </div>
      </Drawer>
    </>
  );
};
`},9322:function(e,n){n.Z=`import React, { useState } from 'react';
import { Button, Drawer, DrawerProps } from '@agentscope-ai/design';
import { Flex } from 'antd';

/**
 * \u56DB\u4E2A\u65B9\u5411\u6309\u94AE\u5C55\u793A\u7EC4\u4EF6
 * \u5C55\u793Atop\u3001bottom\u3001left\u3001right\u56DB\u4E2A\u6309\u94AE\u7684\u5E03\u5C40
 */
const Demo: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right');

  const showDrawer = (placement: DrawerProps['placement']) => {
    setPlacement(placement);
    setOpen(true);
  };

  return (
    <>
      <Flex vertical gap={35}>
        <Flex justify='center'>
          <Button onClick={() => showDrawer('top')}>top</Button>
        </Flex>
        <Flex gap={120}>
          <Button onClick={() => showDrawer('left')}>left</Button>
          <Button onClick={() => showDrawer('right')}>right</Button>
        </Flex>
        <Flex justify='center'>
          <Button onClick={() => showDrawer('bottom')}>bottom</Button>
        </Flex>
      </Flex>
      <Drawer
        open={open}
        width={640}
        title={placement}
        placement={placement}
        onClose={() => setOpen(false)}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 6,
            color: 'var(--sps-color-text-tertiary)',
            border: '1px solid var(--sps-color-border-secondary)',
            height: '100%',
            fontSize: 24,
            background: \`repeating-linear-gradient(
              135deg,
              var(--sps-color-border-secondary) 0,
              var(--sps-color-border-secondary) 1px,
              var(--sps-color-bg-base) 1px,
              var(--sps-color-bg-base) 15px
              )\`,
          }}
        >
          Content
        </div>
      </Drawer>
    </>
  );
};

export default Demo;
`},69050:function(e,n){n.Z=`import { Button, Drawer } from '@agentscope-ai/design';
import { useState } from 'react';

export default () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const showDrawer = () => {
    setOpen1(true);
  };
  return (
    <>
      <Button onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        open={open1}
        width={640}
        title="Title1"
        onClose={() => {
          setOpen1(false);
        }}
      >
        <Button onClick={() => setOpen2(true)}>Open</Button>
        <Drawer
          open={open2}
          width={480}
          title="Title2"
          onClose={() => {
            setOpen2(false);
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 6,
              color: 'var(--sps-color-text-tertiary)',
              border: '1px solid var(--sps-color-border-secondary)',
              height: '100%',
              fontSize: 24,
              background: \`repeating-linear-gradient(
                135deg,
                var(--sps-color-border-secondary) 0,
                var(--sps-color-border-secondary) 1px,
                var(--sps-color-bg-base) 1px,
                var(--sps-color-bg-base) 15px
                )\`,
            }}
          >
            Content
          </div>
        </Drawer>
      </Drawer>
    </>
  );
};
`},38283:function(e,n){n.Z=`import { Button, Drawer } from '@agentscope-ai/design';
import { Flex } from 'antd';
import { useState } from 'react';

const DrawerConfirm = Drawer.Confirm;

export default () => {
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [showDivider, setShowDivider] = useState(true);

  return (
    <Flex vertical gap={24}>
      <Button onClick={() => {
        setShowDivider(false)
        setOpen(true);
      }}>
        No divider
      </Button>
      <Button onClick={() => {
        setShowDivider(true)
        setConfirmOpen(true);
      }}>
        Footer with info
      </Button>
      <Drawer
        open={open}
        width={640}
        showDivider={showDivider}
        title={<>Title</>}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 6,
            color: 'var(--sps-color-text-tertiary)',
            border: '1px solid var(--sps-color-border-secondary)',
            height: 312,
            fontSize: 24,
            background: \`repeating-linear-gradient(
              135deg,
              var(--sps-color-border-secondary) 0,
              var(--sps-color-border-secondary) 1px,
              var(--sps-color-bg-base) 1px,
              var(--sps-color-bg-base) 15px
              )\`,
          }}
        >
          Content
        </div>
      </Drawer>
      <DrawerConfirm
        open={confirmOpen}
        width={640}
        title={<>Title</>}
        onClose={() => {
          setConfirmOpen(false);
        }}
        onOk={() => {
          console.log('onOk');
        }}
        onCancel={() => {
          console.log('onCancel');
          setConfirmOpen(false);
        }}
        info="info here"
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 6,
            color: 'var(--sps-color-text-tertiary)',
            border: '1px solid var(--sps-color-border-secondary)',
            height: '100%',
            fontSize: 24,
            background: \`repeating-linear-gradient(
              135deg,
              var(--sps-color-border-secondary) 0,
              var(--sps-color-border-secondary) 1px,
              var(--sps-color-bg-base) 1px,
              var(--sps-color-bg-base) 15px
              )\`,
          }}
        >
          Content
        </div>
      </DrawerConfirm>
    </Flex>
  );
};
`},68587:function(e,n){n.Z=`import { Button, Drawer } from '@agentscope-ai/design';
import { Flex } from 'antd';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(640);

  const showDrawer = (width: number) => {
    setWidth(width);
    setOpen(true);
  };
  return (
    <Flex gap={16}>
      <Button onClick={() => showDrawer(480)}>
        XS (480px)
      </Button>
      <Button onClick={() => showDrawer(640)}>
        Small (640px)
      </Button>
      <Button onClick={() => showDrawer(800)}>
        Medium (800px)
      </Button>
      <Button onClick={() => showDrawer(960)}>
        Large (960px)
      </Button>
      <Drawer
        open={open}
        width={width}
        title={<>Title</>}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 6,
            color: 'var(--sps-color-text-tertiary)',
            border: '1px solid var(--sps-color-border-secondary)',
            height: '100%',
            fontSize: 24,
            background: \`repeating-linear-gradient(
              135deg,
              var(--sps-color-border-secondary) 0,
              var(--sps-color-border-secondary) 1px,
              var(--sps-color-bg-base) 1px,
              var(--sps-color-bg-base) 15px
              )\`,
          }}
        >
          Content
        </div>
      </Drawer>
    </Flex>
  );
};
`},64373:function(e,n){n.Z=`import React from 'react';
import { Button, Dropdown } from '@agentscope-ai/design';

const DropdownDemo: React.FC = () => {
  // \u6839\u636Edsl\u6784\u5EFA\u83DC\u5355\u9879
  const menuItems = [
    {
      key: '1',
      label: 'Menu Item',
    },
    {
      key: '2', 
      label: 'Menu Item',
    },
    {
      key: '3',
      label: 'Menu Item',
    },
  ];

  return (
    <Dropdown 
      menu={{ items: menuItems }}
    >
      <Button>Dropdown Trigger</Button>
    </Dropdown>
  );
};

export default DropdownDemo;
`},81397:function(e,n){n.Z=`import React from 'react';
import { Dropdown, Button } from '@agentscope-ai/design';
import { SparkTreasureLine } from '@agentscope-ai/icons';

/**
 * Dropdown\u7EC4\u4EF6\u6F14\u793A - \u5E26\u56FE\u6807\u83DC\u5355
 */
const Demo2: React.FC = () => {

  // \u83DC\u5355\u914D\u7F6E\u9879
  const menuItems = [
    {
      key: '1',
      label: 'Menu Item',
      icon: <SparkTreasureLine style={{ fontSize: 20 }} />,
    },
    {
      key: '2', 
      label: 'Menu Item',
      icon: <SparkTreasureLine style={{ fontSize: 20 }} />,
    },
    {
      key: '3',
      label: 'Menu Item', 
      icon: <SparkTreasureLine style={{ fontSize: 20 }} />,
    },
  ];

  return (
    <Dropdown
      menu={{ items: menuItems }}
    >
      <Button>Dropdown Trigger</Button>
    </Dropdown>
  );
};

export default Demo2;`},70910:function(e,n){n.Z=`import React from 'react';
import { Dropdown, Button } from '@agentscope-ai/design';
import { SparkTreasureLine, SparkDeleteLine } from '@agentscope-ai/icons';

const Demo3: React.FC = () => {

  const items = [
    {
      key: '1',
      label: 'Menu Item',
      icon: <SparkTreasureLine style={{ fontSize: 20 }} />,
    },
    {
      key: '2',
      label: 'Menu Item',
      icon: <SparkTreasureLine style={{ fontSize: 20 }} />,
    },
    {
      key: '3',
      label: 'Menu Item',
      icon: <SparkDeleteLine style={{ fontSize: 20 }} />,
      danger: true,
    },
  ];

  return (
    <Dropdown 
      menu={{ items }}
    >
      <Button>Dropdown Trigger</Button>
    </Dropdown>
  );
};

export default Demo3;
`},61896:function(e,n){n.Z=`import { Empty } from '@agentscope-ai/design';

export default () => {
  return (
    <Empty
      type="noData"
      title="No Data"
      description="Please try later..."
      okText="Retry"
    />
  );
};
`},38588:function(e,n){n.Z=`import { Empty } from '@agentscope-ai/design';

export default () => {
  return (
    <Empty
      type="noAccess"
      title="No Access"
      description="Please register and retry"
      okText="Retry"
    />
  );
};
`},54637:function(e,n){n.Z=`import { Empty } from '@agentscope-ai/design';

export default () => {
  return (
    <div>
      <Empty
        type="noAudio"
        title="no Audio Yet"
        description="Please add your audio"
        okText="Retry"
        onOk={() => {}}
      />
      <Empty
        type="noImage"
        title="no Image Yet"
        description="Please add your image"
        okText="Retry"
        onOk={() => {}}
      />
      <Empty
        type="noVideo"
        title="no Video Yet"
        description="Please add your video"
        okText="Retry"
        onOk={() => {}}
      />
      <Empty
        type="noModel"
        title="Empty Model"
        description="Please add your models"
        okText="Retry"
        onOk={() => {}}
      />
      <Empty
        type="stayTuned"
        title="Stay Tuned!"
        description="The function is being improved, stay tuned."
        okText="Retry"
        onOk={() => {}}
      />
      <Empty
        type="noData"
        title="Empty Application"
        description="Please add your applications"
        okText="Retry"
        onOk={() => {}}
      />
      <Empty
        type="noModel"
        title="You Are In Arrears"
        description="Please recharge"
        okText="Retry"
        onOk={() => {}}
      />
    </div>
  );
};
`},28166:function(e,n){n.Z=`import { FloatButton } from '@agentscope-ai/design';
import { SparkProblemLine } from '@agentscope-ai/icons';
import React from 'react';

const App: React.FC = () => (
  <FloatButton
    icon={<SparkProblemLine />}
    style={{ insetInlineEnd: '50%', transform: 'translateX(50%)' }}
  />
);

export default App;
`},95534:function(e,n){n.Z=`import { FloatButton } from '@agentscope-ai/design';
import { SparkProblemLine } from '@agentscope-ai/icons';
import React from 'react';

const App: React.FC = () => (
  <FloatButton
    icon={<SparkProblemLine />}
    type="primary"
    style={{ insetInlineEnd: '50%', transform: 'translateX(50%)' }}
  />
);

export default App;
`},18028:function(e,n){n.Z=`import { Form, Input, Radio, Switch } from '@agentscope-ai/design';

export default () => {
  const [form] = Form.useForm();
  const open = Form.useWatch('switch', form);
  return (
    <Form layout="vertical" form={form}>
      <Form.Item
        label="Your title"
        name="input"
        tooltip="One World, one dream."
      >
        <Input placeholder="Type here..." />
      </Form.Item>
      <Form.Item label="Radio" name="radio" required>
        <Radio.Group>
          <Radio value="1">Option 1</Radio>
          <Radio value="2">Option 2</Radio>
          <Radio value="3">Option 3</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Switch" name="switch" required>
        <Switch label={open ? 'Opening' : 'Closed'} />
      </Form.Item>
    </Form>
  );
};
`},23843:function(e,n){n.Z=`import { Form, Input, Radio, Switch } from '@agentscope-ai/design';

export default () => {
  const [form] = Form.useForm();
  const open = Form.useWatch('switch', form);
  return (
    <Form layout="horizontal" form={form} labelCol={{ flex: '100px' }}>
      <Form.Item
        label="Your title"
        name="input"
        tooltip="One World, one dream."
      >
        <Input placeholder="Type here..." />
      </Form.Item>
      <Form.Item label="Radio" name="radio" required>
        <Radio.Group>
          <Radio value="1">Option 1</Radio>
          <Radio value="2">Option 2</Radio>
          <Radio value="3">Option 3</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Switch" name="switch" required>
        <Switch label={open ? 'Opening' : 'Closed'} />
      </Form.Item>
    </Form>
  );
};
`},1859:function(e,n){n.Z=`import { IconButton } from '@agentscope-ai/design';
import {
  SparkPlusLine,
  SparkSearchLine,
  SparkSettingLine,
} from '@agentscope-ai/icons';
import { Flex } from 'antd';

export default () => {
  return (
    <Flex gap={16} vertical>
      <Flex gap={16} justify="center" align="center">
        <IconButton icon={<SparkPlusLine />} bordered={false}/>
        <IconButton icon={<SparkSettingLine />} bordered={false}/>
        <IconButton icon={<SparkSearchLine />} bordered={false}/>
      </Flex>
      <Flex gap={16} justify="center" align="center">
        <IconButton icon={<SparkPlusLine />} disabled bordered={false}/>
        <IconButton icon={<SparkSettingLine />} disabled bordered={false}/>
        <IconButton icon={<SparkSearchLine />} disabled bordered={false}/>
      </Flex>
    </Flex>
  );
};
`},62487:function(e,n){n.Z=`import React from 'react';
import { Flex } from 'antd';
import { IconButton } from '@agentscope-ai/design';
import { SparkPlusLine } from '@agentscope-ai/icons';

const Demo2: React.FC = () => {
  return (
    <Flex 
      justify="center" 
      align="center" 
      gap={16}
    >
      <IconButton
        size="large"
        shape="default"
        icon={<SparkPlusLine />}
      />
      <IconButton
        size="middle"
        shape="default"
        icon={<SparkPlusLine />}
      />
      <IconButton
        size="small"
        shape="default"
        icon={<SparkPlusLine />}
      />
    </Flex>
  );
};

export default Demo2;
`},64100:function(e,n){n.Z=`import React from 'react';
import { Flex } from 'antd';
import { IconButton } from '@agentscope-ai/design';
import { SparkPlusLine } from '@agentscope-ai/icons';

/**
 * IconButton \u6F14\u793A\u7EC4\u4EF6 - \u5C55\u793A\u4E0D\u540C\u5C3A\u5BF8\u7684\u5706\u5F62\u6309\u94AE
 */
const Demo3: React.FC = () => {
  return (
    <Flex
      align="center"
      justify="center"
      gap={16}
    >
      {/* Large size IconButton */}
      <IconButton
        size="large"
        shape="circle"
        icon={<SparkPlusLine />}
      />
      
      {/* Middle size IconButton */}
      <IconButton
        shape="circle"
        icon={<SparkPlusLine />}
      />
      
      {/* Small size IconButton */}
      <IconButton
        size="small"
        shape="circle"
        icon={<SparkPlusLine />}
      />
    </Flex>
  );
};

export default Demo3;
`},15111:function(e,n){n.Z=`import { Image } from '@agentscope-ai/design';

export default function () {
  return (
    <Image
      width={120}
      src="https://img.alicdn.com/imgextra/i1/O1CN01Py27NU1re2pgohzqU_!!6000000005655-0-tps-480-480.jpg"
    />
  );
}
`},60383:function(e,n){n.Z=`import { Input } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Flex vertical gap="middle" style={{ width: 220 }}>
    <Input placeholder="Type here" />
    <Input placeholder="Type here" disabled />
    <Input placeholder="Type here" status="error" />
  </Flex>
);

export default App;
`},48960:function(e,n){n.Z=`import { Input } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Flex vertical gap="middle" style={{ width: 220 }}>
    <Input placeholder="Type here" size="small" />
    <Input placeholder="Type here" />
    <Input placeholder="Type here" size="large" />
  </Flex>
);

export default App;
`},234:function(e,n){n.Z=`import { Input } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Flex vertical gap="middle" style={{ width: 220 }}>
    <Input placeholder="Type here" shape="round" />
    <Input placeholder="Type here" disabled shape="round" />
    <Input placeholder="Type here" status="error" shape="round" />
  </Flex>
);

export default App;
`},49324:function(e,n){n.Z=`import { Input } from '@agentscope-ai/design';
import { SparkSearchLine } from '@agentscope-ai/icons';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Flex vertical gap="middle" style={{ width: 220 }}>
    <Input
      placeholder="Type here"
      prefix={<SparkSearchLine style={{ fontSize: '18px' }} />}
    />
    <Input
      placeholder="Type here"
      disabled
      prefix={<SparkSearchLine style={{ fontSize: '18px' }} />}
    />
    <Input
      placeholder="Type here"
      status="error"
      prefix={<SparkSearchLine style={{ fontSize: '18px' }} />}
    />
  </Flex>
);

export default App;
`},29742:function(e,n){n.Z=`import { Input } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Flex
    vertical
    gap="middle"
    style={{ width: 220 }}
    align="center"
    justify="center"
  >
    <Input.TextArea placeholder="Type here" />
    <Input.TextArea placeholder="Type here" disabled />
    <Input.TextArea placeholder="Type here" status="error" />
  </Flex>
);

export default App;
`},11435:function(e,n){n.Z=`import { Input } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <Flex vertical gap="middle" style={{ width: 320 }}>
      <Input.TextArea
        placeholder="Autosize height based on content lines"
        autoSize
      />
      <Input.TextArea
        placeholder="Autosize height with minimum and maximum number of lines"
        autoSize={{ minRows: 2, maxRows: 6 }}
      />
      <Input.TextArea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Controlled autosize"
        autoSize={{ minRows: 3, maxRows: 5 }}
      />
    </Flex>
  );
};
export default App;
`},82169:function(e,n){n.Z=`import { Input } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => {
  const onChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <Flex
      vertical
      gap="24px"
      style={{ width: 320, height: '100%' }}
      align="center"
      justify="center"
    >
      <Input showCount maxLength={20} onChange={onChange} />
      <Input.TextArea
        showCount
        maxLength={100}
        onChange={onChange}
        placeholder="can resize"
      />
      <Input.TextArea
        showCount
        maxLength={100}
        onChange={onChange}
        placeholder="disable resize"
        style={{ resize: 'none' }}
      />
    </Flex>
  );
};
export default App;
`},97300:function(e,n){n.Z=`import { InputNumber } from '@agentscope-ai/design';
import type { InputNumberProps } from 'antd';
import { Flex } from 'antd';
import React from 'react';

const onChange: InputNumberProps['onChange'] = (value) => {
  console.log('changed', value);
};

const onChange1: InputNumberProps['onChange'] = (value) => {
  console.log('changed', value);
};

const App: React.FC = () => {
  return (
    <Flex vertical gap="middle" align="center" justify="center">
      <InputNumber min={1} max={10} defaultValue={6} onChange={onChange} />

      <InputNumber
        min={1}
        max={10}
        defaultValue={6}
        onChange={onChange1}
        disabled={true}
      />
    </Flex>
  );
};

export default App;
`},12392:function(e,n){n.Z=`import { InputNumber } from '@agentscope-ai/design';
import type { InputNumberProps } from 'antd';
import { Flex } from 'antd';

import React from 'react';

const onChange: InputNumberProps['onChange'] = (value) => {
  console.log('changed', value);
};

const App: React.FC = () => {
  return (
    <Flex vertical gap="middle" align="center" justify="center">
      <InputNumber
        min={1}
        max={10}
        defaultValue={6}
        onChange={onChange}
        size="small"
      />

      <InputNumber
        min={1}
        max={10}
        defaultValue={6}
        onChange={onChange}
        size="middle"
      />

      <InputNumber
        min={1}
        max={10}
        defaultValue={6}
        onChange={onChange}
        size="large"
      />
    </Flex>
  );
};

export default App;
`},30741:function(e,n){n.Z=`import { message, Button } from '@agentscope-ai/design';

export default () => {
  return (
    <Button
      onClick={() => {
        message.success('task status');
      }}
    >
      Success
    </Button>
  );
};
`},92133:function(e,n){n.Z=`import { message, Button } from '@agentscope-ai/design';
import { Flex } from 'antd';

export default () => {
  return (
    <Flex align="center" justify="center" gap={16}>
      <Button
        onClick={() => {
          message.success('success');
        }}
      >
        Success
      </Button>
      <Button
        onClick={() => {
          message.info({
            content: 'info',
          });
        }}
      >
        info
      </Button>
      <Button
        onClick={() => {
          message.warning('warning');
        }}
      >
        warning
      </Button>
      <Button
        onClick={() => {
          message.error({
            content: 'error',
          });
        }}
      >
        error
      </Button>
      <Button
        onClick={() => {
          message.loading('loading');
        }}
      >
        loading
      </Button>
    </Flex>
  );
};
`},18740:function(e,n){n.Z=`import { message, Button } from '@agentscope-ai/design';
import { Flex } from 'antd';

export default () => {
  return (
    <Flex align="center" justify="center" gap={20}>
      <Button
        onClick={() => {
          message.success({
            content: (
              <Flex gap={8}>
                <span>task status</span>
                <span
                  onClick={() => alert('click view')}
                  style={{
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    color: 'var(--sps-color-info)',
                  }}
                >
                  view
                </span>
              </Flex>
            )
          });
        }}
      >
        Click
      </Button>
    </Flex>
  );
};
`},93475:function(e,n){n.Z=`import { Button, Modal } from '@agentscope-ai/design';
import { useState } from 'react';

export default function () {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        title="Basic Title"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 6,
            color: 'var(--sps-color-text-tertiary)',
            border: '1px solid var(--sps-color-border-secondary)',
            height: 312,
            fontSize: 24,
            background: \`repeating-linear-gradient(
              135deg,
              var(--sps-color-border-secondary) 0,
              var(--sps-color-border-secondary) 1px,
              var(--sps-color-bg-base) 1px,
              var(--sps-color-bg-base) 15px
              )\`,
          }}
        >
          Content
        </div>
      </Modal>
    </>
  );
}
`},90207:function(e,n){n.Z=`import { Button, Modal } from '@agentscope-ai/design';
import { Flex } from 'antd';
import { useState } from 'react';

function Content(props: { border?: boolean }) {
  const { border = true } = props;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        color: 'var(--sps-color-text-tertiary)',
        border: border ? '1px solid var(--sps-color-border-secondary)' : 'none',
        height: 312,
        fontSize: 24,
        background: \`repeating-linear-gradient(
          135deg,
          var(--sps-color-border-secondary) 0,
          var(--sps-color-border-secondary) 1px,
          var(--sps-color-bg-base) 1px,
          var(--sps-color-bg-base) 15px
          )\`,
      }}
    >
      Content
    </div>
  );
}

function NoDivider() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>No divider</Button>
      <Modal
        centered
        showDivider={false}
        title="Basic Modal"
        open={open}
        onOk={() => setOpen(true)}
        onCancel={() => setOpen(false)}
        styles={{
          body: { paddingTop: 0, paddingBottom: 0 },
        }}
      >
        <Content />
      </Modal>
    </>
  );
}
function NoPadding() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>No Padding</Button>
      <Modal
        centered
        styles={{
          body: { padding: 0 },
        }}
        title="Basic Modal"
        open={open}
        onOk={() => setOpen(true)}
        onCancel={() => setOpen(false)}
      >
        <Content border={false} />
      </Modal>
    </>
  );
}
function CustomFooter() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Custom footer</Button>
      <Modal
        centered
        title="Basic Modal"
        open={open}
        onOk={() => setOpen(true)}
        onCancel={() => setOpen(false)}
        footer={<Button>Custom footer</Button>}
      >
        <Content />
      </Modal>
    </>
  );
}
function FooterWithInfo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Footer With Info</Button>
      <Modal
        centered
        title="Basic Modal"
        open={open}
        onOk={() => setOpen(true)}
        onCancel={() => setOpen(false)}
        info={<div>info here</div>}
      >
        <Content />
      </Modal>
    </>
  );
}

export default function () {
  return (
    <Flex vertical gap={24} align="center">
      <NoDivider />
      <NoPadding />
      <CustomFooter />
      <FooterWithInfo />
    </Flex>
  );
}
`},40724:function(e,n){n.Z=`import { Button, Modal } from '@agentscope-ai/design';
import { Flex } from 'antd';
import { useState } from 'react';

function Content(props: { border?: boolean; children: React.ReactNode }) {
  const { border = true } = props;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        color: 'var(--sps-color-text-tertiary)',
        border: border ? '1px solid var(--sps-color-border-secondary)' : 'none',
        height: 312,
        fontSize: 24,
        background: \`repeating-linear-gradient(
          135deg,
          var(--sps-color-border-secondary) 0,
          var(--sps-color-border-secondary) 1px,
          var(--sps-color-bg-base) 1px,
          var(--sps-color-bg-base) 15px
          )\`,
      }}
    >
      {props.children}
    </div>
  );
}

export default function () {
  const [width, setWidth] = useState(0);

  return (
    <Flex gap={16}>
      <Button onClick={() => setWidth(Modal.SMALL_WIDTH)}>Small (640px)</Button>
      <Button onClick={() => setWidth(Modal.MEDIUM_WIDTH)}>
        Middle (800px)
      </Button>
      <Button onClick={() => setWidth(Modal.LARGE_WIDTH)}>Large (960px)</Button>

      <Modal
        centered
        title="Basic Modal"
        open={Boolean(width)}
        width={width}
        onOk={() => setWidth(0)}
        onCancel={() => setWidth(0)}
      >
        <Content>Content here for {width}px</Content>
      </Modal>
    </Flex>
  );
}
`},6264:function(e,n){n.Z=`import { Button, notification } from '@agentscope-ai/design';
import React from 'react';

const App: React.FC = () => {
  return (
    <Button onClick={() => notification.success({
      message: 'title',
      description: 'content',
    })}>
      Open
    </Button>
  );
};

export default App;
`},11469:function(e,n){n.Z=`import { Button, notification } from '@agentscope-ai/design';
import React from 'react';

const App: React.FC = () => {
  return (
    <Button onClick={() => notification.success({
      message: 'title',
      description: 'content',
      actions: (
        <Button onClick={() => alert('click next')}>Next</Button>
      )
    })}>
      Open
    </Button>
  );
};

export default App;
`},30910:function(e,n){n.Z=`import { Button, notification } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => {
  return (
    <Flex gap={16}>
      <Button onClick={() => notification.success({
        message: 'title',
        description: 'content',
        duration: 0,
      })}>
        Success
      </Button>
      <Button onClick={() => notification.info({
        message: 'title',
        description: 'content',
      })}>Info</Button>
      <Button onClick={() => notification.warning({
        message: 'title',
        description: 'content',
      })}>Warning</Button>
      <Button onClick={() => notification.error({
        message: 'title',
        description: 'content',
      })}>Error</Button>
    </Flex>
  );
};

export default App;
`},64514:function(e,n){n.Z=`import { Button, notification } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => {
  return (
    <Flex vertical gap={48}>
      <Flex justify="space-between" style={{width: 320}}>
        <Button
          onClick={() => notification.success({
            message: 'title',
            description: 'content',
            placement: 'topLeft',
          })}
        >
          topLeft
        </Button>
        <Button
          onClick={() => notification.success({
            message: 'title',
            description: 'content',
            placement: 'top',
          })}
        >
          top
        </Button>
        <Button
          onClick={() => notification.success({
            message: 'title',
            description: 'content',
            placement: 'topRight',
          })}
        >
          topRight
        </Button>
      </Flex>
      <Flex justify="space-between" style={{width: 320}}>
        <Button
          onClick={() => notification.success({
            message: 'title',
            description: 'content',
            placement: 'bottomLeft',
          })}
        >
          bottomLeft
        </Button>
        <Button
          onClick={() => notification.success({
            message: 'title',
            description: 'content',
            placement: 'bottom',
          })}
        >
          bottom
        </Button>
        <Button
          onClick={() => notification.success({
            message: 'title',
            description: 'content',
            placement: 'bottomRight',
          })}
        >
          bottomRight
        </Button>
      </Flex>
    </Flex>
  );
};

export default App;
`},11631:function(e,n){n.Z=`import { Pagination } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => {
  return (
    <Flex align="center" vertical justify="center" gap={50}>
      <Pagination 
      hideSwitchButton 
      total={50} 
      defaultCurrent={2}
      />
    </Flex>
  );
};

export default App;
`},30692:function(e,n){n.Z=`import { Pagination } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => {
  return (
    <Flex align="center" vertical justify="center" gap={50}>
      <Pagination 
      total={100} 
      showTotal={(total) => \`Total \${total} items\`}
      defaultPageSize={10}
      defaultCurrent={2}
      />
    </Flex>
  );
};

export default App;
`},79584:function(e,n){n.Z=`import { Button, Popconfirm } from '@agentscope-ai/design';

import React from 'react';

const App: React.FC = () => (
  <Popconfirm
    title="Title here"
    description="Descriptive content explaining the action or outcome."
  >
    <Button>Open Popconfirm</Button>
  </Popconfirm>
);

export default App;
`},29010:function(e,n){n.Z=`import { Button, Popconfirm } from '@agentscope-ai/design';
import { Flex } from 'antd';

import React from 'react';

const App: React.FC = () => (
  <Flex vertical gap={24}>
    <Popconfirm
      title="Title here"
      description="Descriptive content explaining the action or outcome."
      type="info"
    >
      <Button>Info</Button>
    </Popconfirm>
    <Popconfirm
      title="Title here"
      description="Descriptive content explaining the action or outcome."
      type="success"
    >
      <Button>Success</Button>
    </Popconfirm>
    <Popconfirm
      title="Title here"
      description="Descriptive content explaining the action or outcome."
      type="warning"
      okText="Primary Danger"
    >
      <Button>Warning</Button>
    </Popconfirm>
    <Popconfirm
      title="Title here"
      description="Descriptive content explaining the action or outcome."
      type="error"
      okText="Primary Danger"
    >
      <Button>Error</Button>
    </Popconfirm>
    <Popconfirm
      title="Title here"
      description="Descriptive content explaining the action or outcome."
    >
      <Button>Confirm</Button>
    </Popconfirm>
  </Flex>
);

export default App;
`},51555:function(e,n){n.Z=`import { Button, Popover } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => {
  const content = (
    <Flex
      justify="center"
      align="center"
      style={{
        width: 200,
        height: 120,
        backgroundColor: 'rgba(205, 208, 220, 0.15)',
      }}
    >
      <p>Content</p>
    </Flex>
  );

  return (
    <Popover content={content} title="Title">
      <Button>Hover me</Button>
    </Popover>
  );
};

export default App;
`},29633:function(e,n){n.Z=`import { Progress } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Flex style={{ width: '200px' }} vertical>
    <Progress percent={50} showInfo={false} />
  </Flex>
);

export default App;
`},70766:function(e,n){n.Z=`import { PromptsEditor } from '@agentscope-ai/design';
import { useState } from 'react';

export default function Basic() {
  const [value, setValue] = useState(\`# \u89D2\u8272
\u4F60\u662F\u4E00\u4E2A\u4E13\u4E1A\u7684Prompt\u7F16\u5199\u5DE5\u7A0B\u5E08\uFF0C\u64C5\u957F\u7F16\u5199\u5404\u79CD\u7C7B\u578B\u7684Prompt\u3002

# \u6280\u80FD
1. \u4F60\u64C5\u957F\u7F16\u5199\u5404\u79CD\u7C7B\u578B\u7684Prompt\u3002
2. \u4F60\u64C5\u957F\u7F16\u5199\u5404\u79CD\u7C7B\u578B\u7684Prompt\u3002
3. \u4F60\u64C5\u957F\u7F16\u5199\u5404\u79CD\u7C7B\u578B\u7684Prompt\u3002


# \u4EFB\u52A1
\u6839\u636E\u8F93\u5165\u7684Prompt\u6A21\u677F\uFF0C\u751F\u6210\u7B26\u5408\u8981\u6C42\u7684Prompt\u3002

# \u8F93\u5165
- Prompt\u6A21\u677F\uFF1A\u4F60\u662F\u4E00\u4E2A\u4E13\u4E1A\u7684Prompt\u7F16\u5199\u5DE5\u7A0B\u5E08\uFF0C\u64C5\u957F\u7F16\u5199\u5404\u79CD\u7C7B\u578B\u7684Prompt\u3002

# \u8F93\u51FA
- Prompt\uFF1A\u7B26\u5408\u8981\u6C42\u7684Prompt\u3002\`);

  return (
    <PromptsEditor
      // onCreate={() => alert(1)}
      // tipsText={<div>english tips</div>}
      tipsText={false}
      value={value}
      onChange={setValue}
      maxLength={5000}
      variables={[
        { code: 'city' },
        { code: 'foo' },
        { code: 'user' },
        { code: '\u6A21\u578B\u8F93\u5165' },
      ]}
    />
  );
}
`},42432:function(e,n){n.Z=`import { Radio } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Flex vertical gap="middle">
    <Radio>unselected</Radio>
    <Radio disabled>unselected disabled</Radio>
    <Radio checked>selected</Radio>
    <Radio disabled checked>
      selected disabled
    </Radio>
  </Flex>
);

export default App;
`},87904:function(e,n){n.Z=`import type { RadioChangeEvent } from 'antd';
import { Flex } from 'antd';
import React from 'react';
import RadioButton from '../index';

const onChange = (e: RadioChangeEvent) => {
  console.log(\`radio checked:\${e.target.value}\`);
};

const App: React.FC = () => {
  return (
    <Flex vertical gap="middle">
      <RadioButton
        onChange={onChange}
        defaultValue="max"
        options={[
          {
            value: 'max',
            label: 'Qwen-Max',
          },
          {
            value: 'plus',
            label: 'Qwen-Plus',
          },
          {
            value: 'turbo',
            label: 'Qwen-Turbo',
          },
        ]}
      ></RadioButton>
    </Flex>
  );
};

export default App;
`},82752:function(e,n){n.Z=`import type { RadioChangeEvent } from 'antd';
import { Flex, Radio } from 'antd';
import React from 'react';
import RadioButton from '../index';

const onChange = (e: RadioChangeEvent) => {
  console.log(\`radio checked:\${e.target.value}\`);
};

const App: React.FC = () => {
  return (
    <Flex vertical gap="16px">
      <RadioButton onChange={onChange} defaultValue="a" size="large">
        <Radio.Button value="a">Qwen-Max</Radio.Button>
        <Radio.Button value="b">Qwen-Plus</Radio.Button>
        <Radio.Button value="c">Qwen-Turbo</Radio.Button>
      </RadioButton>
      <RadioButton onChange={onChange} defaultValue="a" size="middle">
        <Radio.Button value="a">Qwen-Max</Radio.Button>
        <Radio.Button value="b">Qwen-Plus</Radio.Button>
        <Radio.Button value="c">Qwen-Turbo</Radio.Button>
      </RadioButton>
      <RadioButton onChange={onChange} defaultValue="a" size="small">
        <Radio.Button value="a">Qwen-Max</Radio.Button>
        <Radio.Button value="b">Qwen-Plus</Radio.Button>
        <Radio.Button value="c">Qwen-Turbo</Radio.Button>
      </RadioButton>
    </Flex>
  );
};

export default App;
`},92713:function(e,n){n.Z=`import type { RadioChangeEvent } from 'antd';
import { Flex } from 'antd';
import React from 'react';
import RadioButton from '../index';

const onChange = (e: RadioChangeEvent) => {
  console.log(\`radio checked:\${e.target.value}\`);
};

const App: React.FC = () => {
  return (
    <Flex vertical gap="middle">
      <RadioButton
        onChange={onChange}
        defaultValue="a"
        options={[
          {
            value: 'a',
            label: 'Qwen-Max',
            disabled: true,
          },
          {
            value: 'b',
            label: 'Qwen-Plus',
            disabled: true,
          },
          {
            value: 'c',
            label: 'Qwen-Turbo',
            disabled: true,
          },
        ]}
      ></RadioButton>
    </Flex>
  );
};

export default App;
`},23860:function(e,n){n.Z=`import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle\`
.\${(p) => p.antPrefix}-radio-button-wrapper {
  border: none;
  background-color: transparent;
  border-radius: 6px;
  
  &:first-child {
    border-inline-start: initial;
  }
  
  &::before {
    display: none !important;
  }
  
  &:not(:last-child) {
    margin-right: 12px;
  }
}

.\${(p) => p.antPrefix}-radio-group-ghost {
  .\${(p) => p.antPrefix}-radio-button-wrapper-checked {
    &:not(.\${(p) => p.antPrefix}-radio-button-wrapper-disabled) {
      color: var(--\${(p) => p.antPrefix}-color-primary);
      background-color: var(--\${(p) => p.antPrefix}-color-primary-bg);
      
      .\${(p) => p.antPrefix}-radio-button-wrapper-checked {
        background-color: var(--\${(p) => p.antPrefix}-color-primary-bg);
      }
    }
    
    &.\${(p) => p.antPrefix}-radio-button-wrapper-disabled {
      &:hover {
        background-color: var(--\${(p) => p.antPrefix}-color-fill-tertiary);
      }
    }
  }
}

.\${(p) => p.sparkPrefix}-radio-group-bordered {
  .\${(p) => p.antPrefix}-radio-button-wrapper {
    border: var(--\${(p) => p.antPrefix}-line-width) var(--\${(p) =>
  p.antPrefix}-line-type) var(--\${(p) => p.antPrefix}-color-border);
    
    &:not(:first-child) {
      border-inline-start-width: 1px;
    }
  }
}

.\${(p) => p.antPrefix}-radio-button-wrapper-disabled {
  color: var(--\${(p) => p.antPrefix}-color-text-tertiary);
  background-color: transparent;
  
  &:hover {
    color: var(--\${(p) => p.antPrefix}-color-text-tertiary);
    background-color: transparent;
  }
}

.\${(p) => p.antPrefix}-radio-button-wrapper-checked.\${(p) =>
  p.antPrefix}-radio-button-wrapper-disabled {
  color: var(--\${(p) => p.antPrefix}-color-text-tertiary);
  background-color: var(--\${(p) => p.antPrefix}-color-fill-tertiary);
  
  &:hover {
    color: var(--\${(p) => p.antPrefix}-color-text-tertiary);
    background-color: var(--\${(p) => p.antPrefix}-color-fill-tertiary);
  }
}
\`;
`},70047:function(e,n){n.Z=`import { getCommonConfig } from '@/config';
import { Radio, RadioGroupProps } from 'antd';
import cls from 'classnames';
import { useStyle } from './index.style';

export interface SparkRadioButtonProps extends RadioGroupProps {
  /**
   * @description \u8FB9\u6846
   * @descriptionEn border
   * @default false
   */
  bordered?: boolean;
  /**
   * @description \u6309\u94AE\u80CC\u666F\u8272\u7C7B\u578B
   * @descriptionEn ghost
   * @default true
   */
  ghost?: boolean;
  /**
   * @description \u95F4\u8DDD
   * @descriptionEn gap
   * @default 12 px
   */
  gap?: number;
}

export default (props: SparkRadioButtonProps) => {
  const commonConfig = getCommonConfig();
  const { sparkPrefix, antPrefix } = commonConfig;
  const { ghost = true } = props;
  const Style = useStyle();

  return (
    <>
      <Style />
      <Radio.Group
        {...props}
        className={cls(
          props.className,
          props.bordered ? \`\${sparkPrefix}-radio-group-bordered\` : '',
          ghost ? \`\${antPrefix}-radio-group-ghost\` : '',
        )}
        optionType="button"
      />
    </>
  );
};
`},11787:function(e,n){n.Z=`import { Result } from '@agentscope-ai/design';

export default () => {
  return (
    <Result
      type="success"
      title="Sucess"
      description="Please try later..."
      okText="Try now"
    />
  );
};
`},94376:function(e,n){n.Z=`import { Result } from '@agentscope-ai/design';

export default () => {
  return (
    <Result
      type="failed"
      title="Failed"
      description="Please try later..."
      okText="Retry"
    />
  );
};`},32972:function(e,n){n.Z=`import { Result } from '@agentscope-ai/design';

export default () => {
  return (
    <Result
      type="error"
      title="Error"
      description="Please try again later"
      okText="Retry"
    />
  );
};`},43850:function(e,n){n.Z=`import { Result } from '@agentscope-ai/design';

export default () => {
  return (
    <Result
      type="inProgress"
      title="In Progress"
      description="Please try later..."
      okText="Retry"
    />
  );
};`},52921:function(e,n){n.Z=`import { Result } from '@agentscope-ai/design';

export default () => {
  return (
    <Result
      type="404"
      title="404"
      description="Please try again later"
      okText="Retry"
    />
  );
};`},91813:function(e,n){n.Z=`import { Result } from '@agentscope-ai/design';

export default () => {
  return (
    <Result
      type="networkError"
      title="Network Error"
      description="Please try later..."
      okText="Retry"
    />
  );
};`},3841:function(e,n){n.Z=`import { Select } from '@agentscope-ai/design';
import { Flex } from 'antd';

const handleChange = (value: string) => {
  console.log(\`selected \${value}\`);
};

const handleChange2 = (value: string) => {
  console.log(\`selected \${value}\`);
};

const handleChange3 = (value: string) => {
  console.log(\`selected \${value}\`);
};

const App: React.FC = () => (
  <Flex vertical gap="middle" align="center" justify="center">
    <Select
      placeholder="Select here..."
      style={{ width: 240 }}
      onChange={handleChange}
      options={[
        { value: '1', label: 'Menu Item 1' },
        { value: '2', label: 'Menu Item 2' },
        { value: '3', label: 'Menu Item 3' },
      ]}
    />

    <Select
      placeholder="Select here..."
      style={{ width: 240 }}
      disabled
      onChange={handleChange2}
      value={'1'}
      options={[
        { value: '1', label: 'Selected item' },
        { value: '2', label: 'Menu Item 2' },
        { value: '3', label: 'Menu Item 3' },
      ]}
    />

    <Select
      status="error"
      placeholder="Select here..."
      style={{ width: 240 }}
      onChange={handleChange3}
      options={[
        { value: '1', label: 'Error Menu Item 1' },
        { value: '2', label: 'Error Menu Item 2' },
        { value: '3', label: 'Error Menu Item 3' },
      ]}
    />
  </Flex>
);

export default App;
`},5005:function(e,n){n.Z=`import { Select } from '@agentscope-ai/design';
import { Flex } from 'antd';

const handleChange = (value: string) => {
  console.log(\`selected \${value}\`);
};

const handleChange2 = (value: string) => {
  console.log(\`selected \${value}\`);
};
const handleChange3 = (value: string) => {
  console.log(\`selected \${value}\`);
};

const App: React.FC = () => (
  <Flex vertical gap="middle" align="center" justify="center">
    <Select
      mode="multiple"
      placeholder="Select here..."
      style={{ width: 367 }}
      onChange={handleChange}
      options={[
        { value: '1', label: 'Menu Item 1' },
        { value: '2', label: 'Menu Item 2' },
        { value: '3', label: 'Menu Item 3' },
      ]}
    />

    <Select
      mode="multiple"
      placeholder="Select here..."
      style={{ width: 367 }}
      onChange={handleChange2}
      value={['1', '2'] as any}
      disabled
      options={[
        { value: '1', label: 'Tag 1' },
        { value: '2', label: 'Tag 2' },
        { value: '3', label: 'Tag 3' },
      ]}
    />

    <Select
      status="error"
      mode="multiple"
      placeholder="Select here..."
      style={{ width: 367 }}
      onChange={handleChange3}
      options={[
        { value: '1', label: 'Tag 1' },
        { value: '2', label: 'Tag 2' },
        { value: '3', label: 'Tag 3' },
      ]}
    />
  </Flex>
);

export default App;
`},6545:function(e,n){n.Z=`import { Skeleton } from '@agentscope-ai/design';
import React from 'react';

const App: React.FC = () => (
  <div style={{width: '100%', padding:'0 68px'}}>
    <Skeleton 
      active 
      paragraph={{ rows: 3 }}
      title={false}
    />
  </div>
);

export default App;
`},65523:function(e,n){n.Z=`import { Slider } from 'antd';
import React from 'react';

const App: React.FC = () => {
  const onChange = (value) => {
    console.log(value);
  };

  return (
    <div style={{ width: '320px' }}>
      <Slider defaultValue={50} onChange={onChange} />
      <Slider defaultValue={50} disabled={true} />
    </div>
  );
};

export default App;
`},71001:function(e,n){n.Z=`import { Slider } from 'antd';
import React from 'react';

const App: React.FC = () => {
  const onChange = (value) => {
    console.log(value);
  };

  return (
    <div style={{ width: '320px' }}>
      <Slider defaultValue={50} onChange={onChange} reverse />
      <Slider defaultValue={50} disabled={true} reverse />
    </div>
  );
};

export default App;
`},12953:function(e,n){n.Z=`import { Slider } from 'antd';
import React from 'react';

const App: React.FC = () => {
  const onChange = (value) => {
    console.log(value);
  };

  return (
    <div style={{ width: '320px' }}>
      <Slider range defaultValue={[30, 70]} onChange={onChange} />
      <Slider range defaultValue={[30, 70]} disabled={true} />
    </div>
  );
};

export default App;
`},96113:function(e,n){n.Z=`import { Slider } from '@agentscope-ai/design';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState<number>(10);

  return (
    <Slider.Input
      min={1}
      max={20}
      step={1}
      onChange={(val) => {
        setValue(val);
      }}
      value={value}
      styles={{
        wrapper: {
          width: '320px',
        },
        inputNumber: {
          width: '80px',
        },
      }}
    />
  );
};

export default App;
`},28825:function(e,n){n.Z=`import { Slider } from '@agentscope-ai/design';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState<number>(10);

  return (
    <Slider.Input
      min={1}
      max={20}
      step={1}
      marks={{}}
      onChange={(val) => {
        setValue(val);
      }}
      value={value}
      styles={{
        wrapper: {
          width: '320px',
        },
        inputNumber: {
          width: '80px',
        },
      }}
    />
  );
};

export default App;
`},78706:function(e,n){n.Z=`import { Spinner } from '@agentscope-ai/design';
import { theme } from 'antd';

const App: React.FC = () => {
  const { token } = theme.useToken();
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: token.colorBgBase,
      }}
    >
      <Spinner tip={<span>No progress</span>} />
    </div>
  );
};

export default App;
`},37967:function(e,n){n.Z=`import { Button, Progress, Spinner } from '@agentscope-ai/design';
import { theme } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

const App: React.FC = () => {
  const [percent, setPercent] = useState(0);
  const [spinning, setSpinning] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null | number>(null);
  const { token } = theme.useToken();
  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, []);
  useEffect(() => {
    if (spinning) {
      timerRef.current = setInterval(() => {
        setPercent((prevPercent) => (prevPercent >= 100 ? 0 : prevPercent + 1));
      }, 100);
    } else {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, [spinning]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: token.colorBgBase,
      }}
    >
      <Spinner
        spinning={spinning}
        tip={
          spinning ? (
            <div>
              <span>
                File uploading
                <span
                  style={{
                    display: 'inline-block',
                    width: '24px',
                    textAlign: 'center',
                  }}
                >
                  {percent}
                </span>
                % ...
              </span>
              <Button type="link" onClick={() => setSpinning(false)}>
                Cancel
              </Button>
              <Progress percent={percent} showInfo={false}></Progress>
            </div>
          ) : undefined
        }
      />
    </div>
  );
};

export default App;
`},70340:function(e,n){n.Z=`import { Button, Progress, Spinner } from '@agentscope-ai/design';
import { theme } from 'antd';
import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [percent, setPercent] = useState(0);
  const { token } = theme.useToken();

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prevPercent) => (prevPercent >= 100 ? 0 : prevPercent + 1));
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <Spinner
      tip={
        <div>
          <span>
            File uploading{' '}
            <span style={{ display: 'inline-block', width: '24px' }}>
              {percent}
            </span>
            % ...
          </span>
          <Button type="link">Cancel</Button>
          <Progress percent={percent} showInfo={false}></Progress>
        </div>
      }
    >
      <div
        style={{
          width: '560px',
          height: '240px',
          background: \`repeating-linear-gradient(135deg, \${token.colorBorderSecondary} 0, \${token.colorBorderSecondary} 1px, \${token.colorBgBase} 1px, \${token.colorBgBase} 15px)\`,
          backgroundSize: 'auto',
          backgroundPosition: 'top left',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
          borderRadius: '6px',
          border: \`1px solid \${token.colorBorderSecondary}\`,
        }}
      ></div>
    </Spinner>
  );
};

export default App;
`},67106:function(e,n){n.Z=`import { Button, Progress, Spinner } from '@agentscope-ai/design';
import { theme } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

// \u6DFB\u52A0\u65CB\u8F6C\u52A8\u753B\u6837\u5F0F
const spinKeyframes = \`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
\`;

// \u5C06\u6837\u5F0F\u6CE8\u5165\u5230\u9875\u9762\u4E2D
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = spinKeyframes;
  document.head.appendChild(style);
}

const App: React.FC = () => {
  const [percent, setPercent] = useState(0);
  const [spinning, setSpinning] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null | number>(null);
  const { token } = theme.useToken();
  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, []);
  useEffect(() => {
    if (spinning) {
      timerRef.current = setInterval(() => {
        setPercent((prevPercent) => (prevPercent >= 100 ? 0 : prevPercent + 1));
      }, 100);
    } else {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, [spinning]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: token.colorBgBase,
      }}
    >
      <Spinner
        indicator={
          <img
            src="https://img.alicdn.com/imgextra/i4/O1CN01wnPSEe1fK6CJxV4Xa_!!6000000003987-55-tps-40-40.svg"
            style={{
              animation: 'spin 1s linear infinite',
            }}
          />
        }
        spinning={spinning}
        tip={
          spinning ? (
            <div>
              <span>
                File uploading
                <span
                  style={{
                    display: 'inline-block',
                    width: '24px',
                    textAlign: 'center',
                  }}
                >
                  {percent}
                </span>
                % ...
              </span>
              <Button type="link" onClick={() => setSpinning(false)}>
                Cancel
              </Button>
              <Progress percent={percent} showInfo={false}></Progress>
            </div>
          ) : undefined
        }
      />
    </div>
  );
};

export default App;
`},5024:function(e,n){n.Z=`import { Statistic } from '@agentscope-ai/design';

export default () => {
  return (
    <div style={{ display: 'flex', gap: 48 }}>
      <Statistic title="Active Users" value={112893} />
      <Statistic title="Account Balance (CNY)" value={112893.0} />
    </div>
  );
};
`},79186:function(e,n){n.Z=`import { Statistic } from '@agentscope-ai/design';
import { SparkPieChartLine } from '@agentscope-ai/icons';

export default () => {
  return (
    <div style={{ display: 'flex', gap: 48 }}>
      <Statistic
        title="Feedback"
        value={366}
        prefix={
          <div style={{ display: 'flex', alignItems: 'center', fontSize: 20 }}>
            <SparkPieChartLine />
          </div>
        }
      />
      <Statistic title="Unmerged" value={93} suffix=" / 1000" />
    </div>
  );
};
`},15633:function(e,n){n.Z=`import { Steps } from '@agentscope-ai/design';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };

  return (
    <div style={{ width: '50%' }}>
      <Steps
        current={current}
        onChange={onChange}
        items={[
          {
            title: 'A Step'
          },
          {
            title: 'B Step'
          }
        ]}
      />
    </div>
  );
};

export default App;`},32541:function(e,n){n.Z=`import { Steps } from '@agentscope-ai/design';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };
  const description = 'This is a description.';

  return (
    <div style={{ width: '50%' }}>
      <Steps
        current={current}
        onChange={onChange}
        items={[
          {
            title: 'A Step',
            description,
          },
          {
            title: 'B Step',
            description,
          }
        ]}
      />
    </div>
  );
};

export default App;`},22391:function(e,n){n.Z=`import { Steps } from '@agentscope-ai/design';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };
  
  return (
    <div style={{ width: '50%'}}>
      <Steps
        current={current}
        onChange={onChange}
        direction='vertical'
        items={[
          {
            title: 'A Step',
          },
          {
            title: 'B Step',
          }
        ]}
      />
    </div>
  );
};

export default App;`},89318:function(e,n){n.Z=`import { Switch } from '@agentscope-ai/design';
import { Flex } from 'antd';
import { useState } from 'react';

export default () => {
  const [checked, setChecked] = useState(true);
  return (
    <Flex vertical gap={16}>
      <Switch
        checked={checked}
        onChange={(checked) => setChecked(checked)}
        label="Switch MD"
      />
      <Switch disabled label="Switch MD Closed disable" />
      <Switch checked disabled label="Switch MD Opening disable" />
    </Flex>
  );
};
`},13703:function(e,n){n.Z=`import { Switch } from '@agentscope-ai/design';
import { Flex } from 'antd';
import { useState } from 'react';

export default () => {
  const [checked, setChecked] = useState(true);
  return (
    <Flex vertical gap={16}>
      <Switch
        checked={checked}
        onChange={(checked) => setChecked(checked)}
        label="Switch MD"
      />
      <Switch
        size="small"
        checked={checked}
        onChange={(checked) => setChecked(checked)}
        label="Switch SM"
      />
    </Flex>
  );
};
`},18949:function(e,n){n.Z=`import { getCommonConfig, Switch, Table, Tag } from '@agentscope-ai/design';
import { SparkCheckCircleFill } from '@agentscope-ai/icons';
import { Flex, Space } from 'antd';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [checkedList, setCheckedList] = useState<boolean[]>([]);
  const commonConfig = getCommonConfig();
  const { antPrefix } = commonConfig;
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: 'Switch',
      dataIndex: 'switch',
      key: 'switch',
      render: (_, { key }) => (
        <Switch
          size="small"
          checked={!checkedList[key]}
          onChange={() => {
            const newCheckedList = [...checkedList];
            newCheckedList[key] = !newCheckedList[key];
            setCheckedList(newCheckedList);
          }}
          label={checkedList[key] ? 'Closed' : 'Opening'}
        />
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (_, { status }) => (
        <Flex align="center" gap={4}>
          <SparkCheckCircleFill
            style={{
              color: \`var(--\${antPrefix}-color-success)\`,
              fontSize: 18,
            }}
          />
          <span>{status}</span>
        </Flex>
      ),
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            return (
              <Tag color="purple" key={tag} bordered={false}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Operate',
      key: 'operate',
      render: (_) => (
        <Space size="middle">
          <a>Operate</a>
        </Space>
      ),
    },
  ];

  const data = new Array(3).fill(0).map((_, index) => ({
    key: index.toString(),
    title: \`First Column Row \${index + 1}\`,
    content: \`Content Row \${index + 1}\`,
    switch: \`Switch Row \${index + 1}\`,
    status: \`Status Row \${index + 1}\`,
    tags: [\`Tag\${index + 1}\`],
  }));

  return (
    <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} />
  );
};

export default App;
`},47943:function(e,n){n.Z=`import { getCommonConfig, Switch, Table, Tag } from '@agentscope-ai/design';
import { SparkCheckCircleFill } from '@agentscope-ai/icons';
import type { TableProps } from 'antd';
import { Flex, Space } from 'antd';
import React, { useState } from 'react';

interface DataType {
  key: string;
  title: string;
  content: string;
  switch: string;
  status: string;
  tags: string[];
}

const App: React.FC = () => {
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const commonConfig = getCommonConfig();
  const { antPrefix } = commonConfig;
  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: 'Switch',
      dataIndex: 'switch',
      key: 'switch',
      render: (_, { key }) => (
        <Switch
          size="small"
          checked={!checkedList[key]}
          onChange={() => {
            const newCheckedList = [...checkedList];
            newCheckedList[key] = !newCheckedList[key];
            setCheckedList(newCheckedList);
          }}
          label={checkedList[key] ? 'Closed' : 'Opening'}
        />
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (_, { status }) => (
        <Flex align="center" gap={4}>
          <SparkCheckCircleFill
            style={{
              color: \`var(--\${antPrefix}-color-success)\`,
              fontSize: 18,
            }}
          />
          <span>{status}</span>
        </Flex>
      ),
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            return (
              <Tag color="purple" key={tag} bordered={false}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Operate',
      key: 'operate',
      render: (_) => (
        <Space size="middle">
          <a>Operate</a>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      title: 'First Column Row 1',
      content: 'Content Row 1',
      switch: 'Switch Row 1',
      status: 'Status Row 1',
      tags: ['Tag1'],
    },
    {
      key: '2',
      title: 'First Column Row 2',
      content: 'Content Row 2',
      switch: 'Switch Row 2',
      status: 'Status Row 2',
      tags: ['Tag2'],
    },
    {
      key: '3',
      title: 'First Column Row 3',
      content: 'Content Row 3',
      switch: 'Switch Row 3',
      status: 'Status Row 3',
      tags: ['Tag3'],
    },
  ];

  const rowSelection: TableProps<DataType>['rowSelection'] = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        \`selectedRowKeys: \${selectedRowKeys}\`,
        'selectedRows: ',
        selectedRows,
      );
    },
  };

  return (
    <Table
      columns={columns}
      dataSource={data}
      rowSelection={{ type: 'radio', ...rowSelection }}
      pagination={false}
    />
  );
};

export default App;
`},7273:function(e,n){n.Z=`import { getCommonConfig, Switch, Table, Tag } from '@agentscope-ai/design';
import { SparkCheckCircleFill } from '@agentscope-ai/icons';
import type { TableProps } from 'antd';
import { Flex, Space } from 'antd';
import React, { useState } from 'react';

interface DataType {
  key: string;
  title: string;
  content: string;
  switch: string;
  status: string;
  tags: string[];
}

const App: React.FC = () => {
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const commonConfig = getCommonConfig();
  const { antPrefix } = commonConfig;
  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: 'Switch',
      dataIndex: 'switch',
      key: 'switch',
      render: (_, { key }) => (
        <Switch
          size="small"
          checked={!checkedList[key]}
          onChange={() => {
            const newCheckedList = [...checkedList];
            newCheckedList[key] = !newCheckedList[key];
            setCheckedList(newCheckedList);
          }}
          label={checkedList[key] ? 'Closed' : 'Opening'}
        />
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (_, { status }) => (
        <Flex align="center" gap={4}>
          <SparkCheckCircleFill
            style={{
              color: \`var(--\${antPrefix}-color-success)\`,
              fontSize: 18,
            }}
          />
          <span>{status}</span>
        </Flex>
      ),
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            return (
              <Tag color="purple" key={tag} bordered={false}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Operate',
      key: 'operate',
      render: (_) => (
        <Space size="middle">
          <a>Operate</a>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      title: 'First Column Row 1',
      content: 'Content Row 1',
      switch: 'Switch Row 1',
      status: 'Status Row 1',
      tags: ['Tag1'],
    },
    {
      key: '2',
      title: 'First Column Row 2',
      content: 'Content Row 2',
      switch: 'Switch Row 2',
      status: 'Status Row 2',
      tags: ['Tag2'],
    },
    {
      key: '3',
      title: 'First Column Row 3',
      content: 'Content Row 3',
      switch: 'Switch Row 3',
      status: 'Status Row 3',
      tags: ['Tag3'],
    },
  ];

  const rowSelection: TableProps<DataType>['rowSelection'] = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        \`selectedRowKeys: \${selectedRowKeys}\`,
        'selectedRows: ',
        selectedRows,
      );
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.title === 'First Column Row 2',
    }),
  };
  return (
    <Table
      columns={columns}
      dataSource={data}
      rowSelection={{ type: 'checkbox', ...rowSelection }}
      pagination={false}
    />
  );
};

export default App;
`},42742:function(e,n){n.Z=`import { getCommonConfig, Switch, Table, Tag } from '@agentscope-ai/design';
import { SparkCheckCircleFill } from '@agentscope-ai/icons';
import type { TableProps } from 'antd';
import { Flex, Space } from 'antd';
import React, { useState } from 'react';

interface DataType {
  key: string;
  title: string;
  content: string;
  switch: string;
  status: string;
  tags: string[];
}

const App: React.FC = () => {
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const commonConfig = getCommonConfig();
  const { antPrefix } = commonConfig;
  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Key',
      dataIndex: 'key',
      key: 'key',
      sorter: (a, b) => Number(a.key) - Number(b.key),
      sortDirections: ['descend'],
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: 'Switch',
      dataIndex: 'switch',
      key: 'switch',
      render: (_, { key }) => (
        <Switch
          size="small"
          checked={!checkedList[key]}
          onChange={() => {
            const newCheckedList = [...checkedList];
            newCheckedList[key] = !newCheckedList[key];
            setCheckedList(newCheckedList);
          }}
          label={checkedList[key] ? 'Closed' : 'Opening'}
        />
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (_, { status }) => (
        <Flex align="center" gap={4}>
          <SparkCheckCircleFill
            style={{
              color: \`var(--\${antPrefix}-color-success)\`,
              fontSize: 18,
            }}
          />
          <span>{status}</span>
        </Flex>
      ),
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            return (
              <Tag color="purple" key={tag} bordered={false}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Operate',
      key: 'operate',
      render: (_) => (
        <Space size="middle">
          <a>Operate</a>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      title: 'First Column Row 1',
      content: 'Content Row 1',
      switch: 'Switch Row 1',
      status: 'Status Row 1',
      tags: ['Tag1'],
    },
    {
      key: '2',
      title: 'First Column Row 2',
      content: 'Content Row 2',
      switch: 'Switch Row 2',
      status: 'Status Row 2',
      tags: ['Tag2'],
    },
    {
      key: '3',
      title: 'First Column Row 3',
      content: 'Content Row 3',
      switch: 'Switch Row 3',
      status: 'Status Row 3',
      tags: ['Tag3'],
    },
  ];

  return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default App;
`},17078:function(e,n){n.Z=`import { Tabs, type TabsProps } from '@agentscope-ai/design';
import React from 'react';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tab 1',
    children: '',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: '',
  }
];

const App: React.FC = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
      type="segmented"
    />
  );
};

export default App;
`},39147:function(e,n){n.Z=`import { Tabs, type TabsProps } from '@agentscope-ai/design';
import React from 'react';

const onChange = (key: string) => {
  console.log(key);
};

const items1: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tab LG',
    children: '',
  },
  {
    key: '2',
    label: 'Tab LG',
    children: '',
  }
];

const items2: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tab MD',
    children: '',
  },
  {
    key: '2',
    label: 'Tab MD',
    children: '',
  },
];

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '32px' }}>
      <Tabs
        defaultActiveKey="1"
        items={items1}
        onChange={onChange}
        type="segmented"
        centered
        size="large"
      />
      <Tabs
        defaultActiveKey="1"
        items={items2}
        onChange={onChange}
        type="segmented"
        centered
        size="middle"
      />
    </div>
  );
};

export default App;
`},53955:function(e,n){n.Z=`import { Tabs, type TabsProps } from '@agentscope-ai/design';
import React from 'react';

const onChange = (key: string) => {
  console.log(key);
};

const items1: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tab LG',
    children: '',
  },
  {
    key: '2',
    label: 'Tab LG',
    children: '',
  }
];

const items2: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tab MD',
    children: '',
  },
  {
    key: '2',
    label: 'Tab MD',
    children: '',
  },
];

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '32px', alignItems: 'center' }}>
      <Tabs defaultActiveKey="1" items={items1} onChange={onChange} size="large" type="line" />
      <Tabs defaultActiveKey="1" items={items2} onChange={onChange} size="middle" type="line" />
    </div>
  );
};

export default App;
`},18021:function(e,n){n.Z=`import { Tag, type TagProps } from '@agentscope-ai/design';
import { Flex } from 'antd';

const COLOR_LIST: TagProps['color'][] = [
  'purple',
  'pink',
  'yellow',
  'teal',
  'blue',
  'mauve',
  'success',
  'error',
  'warning',
  'info',
];

export default () => {
  return (
    <Flex align="center" vertical gap={16}>
      {COLOR_LIST.map((color) => (
        <Flex key={color} gap={16} align="center">
          <Tag color={color}>Tag MD</Tag>
          <Tag color={color} size="small">
            Tag SM
          </Tag>
        </Flex>
      ))}
    </Flex>
  );
};
`},59897:function(e,n){n.Z=`import { Tag } from '@agentscope-ai/design';
import { SparkEffciencyLine } from '@agentscope-ai/icons';

export default () => {
  return (
    <Tag icon={<SparkEffciencyLine style={{ fontSize: '20px' }} />}>Tag MD</Tag>
  );
};
`},67321:function(e,n){n.Z=`import { Tag } from '@agentscope-ai/design';
import { SparkEffciencyLine, SparkFalseLine } from '@agentscope-ai/icons';
import { Flex } from 'antd';

export default () => {
  return (
    <Flex vertical align="center" gap={16}>
      <Tag closeIcon={<SparkFalseLine style={{ fontSize: '20px' }} />}>
        Tag MD
      </Tag>
      <Tag
        icon={<SparkEffciencyLine style={{ fontSize: '20px' }} />}
        closeIcon={<SparkFalseLine style={{ fontSize: '20px' }} />}
      >
        Tag MD
      </Tag>
    </Flex>
  );
};
`},31966:function(e,n){n.Z=`import { TimePicker } from '@agentscope-ai/design';
import { Flex } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const onChange = (time, timeString) => {
  console.log(time, timeString);
};

export default () => {
  return (
    <Flex vertical gap={16} style={{ width: 240 }}>
      <TimePicker onChange={onChange} />
      <TimePicker disabled />
      <TimePicker status="error" defaultValue={dayjs('17:12:30', 'HH:mm:ss')} />
    </Flex>
  );
};
`},7161:function(e,n){n.Z=`import { TimePicker } from '@agentscope-ai/design';
import { Flex } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
const { RangePicker } = TimePicker;

export default () => {
  const startTime = dayjs('17:12:30', 'HH:mm:ss');
  const endTime = dayjs('18:12:30', 'HH:mm:ss');
  return (
    <Flex vertical gap={16} style={{ width: 240 }}>
      <RangePicker />
      <RangePicker disabled allowEmpty />
      <RangePicker status="error" defaultValue={[startTime, endTime]} />
    </Flex>
  );
};
`},80668:function(e,n){n.Z=`import { Button, Tooltip } from '@agentscope-ai/design';
import React from 'react';

const App: React.FC = () => (
  <Tooltip title="This is a tooltip">
    <Button>Hover here</Button>
  </Tooltip>
);

export default App;
`},58152:function(e,n){n.Z=`import { Button, Tooltip } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Tooltip
    title={
      <Flex align="center" gap={8}>
        <span>This is a tooltip</span>
        <Button
          type="link"
          style={{ height: 20, lineHeight: '20px', padding: 0 }}
        >
          Operation
        </Button>
      </Flex>
    }
  >
    <Button>Hover here</Button>
  </Tooltip>
);

export default App;
`},58212:function(e,n){n.Z=`import { Button, Tooltip } from '@agentscope-ai/design';
import React from 'react';

const title = new Array(100)
  .fill(1)
  .map((_, index) => \`\${index + 1} \u6D4B\u8BD5maxHeight\u5C5E\u6027\u7684\u573A\u666F\`)
  .join('');
const App: React.FC = () => (
  <>
    <Tooltip title={title} maxHeight={400}>
      <Button>set maxHeight</Button>
    </Tooltip>
    <Tooltip title={title}>
      <Button>not set maxHeight</Button>
    </Tooltip>
  </>
);

export default App;
`},1612:function(e,n){n.Z=`import { Upload } from '@agentscope-ai/design';
import { SparkUploadLine } from '@agentscope-ai/icons';
import { Flex } from 'antd';

export default () => (
  <Upload listType="picture-card" beforeUpload={() => Upload.LIST_IGNORE}>
    <Flex vertical gap={8} align="center">
      <SparkUploadLine style={{ fontSize: '24px' }} />
      Upload
    </Flex>
  </Upload>
);
`},71496:function(e,n){n.Z=`import { getCommonConfig, message, Upload } from '@agentscope-ai/design';
import { SparkUploadLine } from '@agentscope-ai/icons';

const { Dragger } = Upload;
const commonConfig = getCommonConfig();
const { antPrefix } = commonConfig;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(\`\${info.file.name} file uploaded successfully.\`);
    } else if (status === 'error') {
      message.error(\`\${info.file.name} file upload failed.\`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

export default () => {
  return (
    <Dragger {...props}>
      <div className={\`\${antPrefix}-upload-icon\`}>
        <SparkUploadLine style={{ fontSize: '24px' }} />
      </div>
      <p className={\`\${antPrefix}-upload-text\`}>
        Click or drag file to this area
      </p>
      <p className={\`\${antPrefix}-upload-hint\`}>
        I am a description of upload things
      </p>
    </Dragger>
  );
};
`},77731:function(e,n){n.Z=`import { FileIcon, Upload, getCommonConfig } from '@agentscope-ai/design';
import { SparkDeleteLine, SparkFalseLine } from '@agentscope-ai/icons';
import type { UploadFile } from 'antd/es/upload/interface';

const { sparkPrefix } = getCommonConfig();

const fileTypeMap: Record<string, string[]> = {
  epub: ['.epub'],
  excel: ['.xls', '.xlsx', '.xlsm', '.xlsb'],
  html: ['.html', '.htm'],
  image: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.svg'],
  md: ['.md', '.markdown'],
  mobi: ['.mobi'],
  pdf: ['.pdf'],
  ppt: ['.ppt', '.pptx', '.pps', '.ppsx'],
  txt: ['.txt'],
  web: ['.web'],
  word: ['.doc', '.docx'],
};

const getFileType = (fileName: string): string => {
  const fileTypeEntries = Object.entries(fileTypeMap);
  for (const [type, extensions] of fileTypeEntries) {
    if (extensions.some((ext) => fileName.endsWith(ext))) {
      return type;
    }
  }

  return 'common';
};

const fileList: UploadFile[] = [
  {
    uid: '0',
    name: '1.pdf',
    status: 'done' as const,
    response: 'good',
  },
  {
    uid: '-1',
    name: '2.pdf',
    status: 'uploading' as const,
    percent: 60,
  },
  {
    uid: '-2',
    name: '3.pdf',
    status: 'error' as const,
    response: 'Server Error 500',
  },
];

const props = {
  showUploadList: {
    showRemoveIcon: (file: UploadFile) => {
      return file.status !== 'removed';
    },
    removeIcon: (file: UploadFile) => {
      return file.status === 'uploading' ? (
        <SparkFalseLine style={{ fontSize: '20px' }} />
      ) : (
        <SparkDeleteLine style={{ fontSize: '20px' }} />
      );
    },
  },
  iconRender: (file: UploadFile) => {
    const isError = file.status === 'error' || file.status === 'removed';
    const fileType = getFileType(file.name || '');
    let style = {};
    if (isError) {
      style = {
        filter: 'grayscale(1)',
        opacity: 0.4,
      };
    }

    return <FileIcon type={fileType} style={style} />;
  },
  progress: { size: { width: 134, height: 4 }, showInfo: false },
};

export default () => (
  <Upload
    className={\`\${sparkPrefix}-custom-uploaded\`}
    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
    listType="picture"
    defaultFileList={fileList}
    {...props}
  />
);
`},2496:function(e,n){n.Z=`import { ConfigProviderProps } from 'antd';
import { Locale } from 'antd/es/locale';
import { useLayoutEffect, useState } from 'react';
export const DEFAULT_ANT_PREFIX = 'ant';
export const DEFAULT_BL_PREFIX = 'bl';
export const DEFAULT_SPARK_PREFIX = 'spark';

const updates = [];

export interface CommonConfig {
  /** \u7528\u6237\u4ECEBLConfigProvider\u8F93\u5165\u7684\u524D\u7F00 */
  prefix?: string;
  /** antd\u7EC4\u4EF6\u524D\u7F00\u4FEE\u6539 */
  antPrefix?: string;
  /** legacy: bailian-ui\u7EC4\u4EF6\u524D\u7F00\u4FEE\u6539 */
  blPrefix?: string;
  /** spark\u7EC4\u4EF6\u524D\u7F00\u4FEE\u6539 */
  sparkPrefix?: string;
  /** \u5F53Spark\u7EC4\u4EF6\u548Cantd\u7EC4\u4EF6\u91CD\u540D\u65F6\uFF0C\u662F\u5426\u4F7F\u7528Spark\u7EC4\u4EF6\u800C\u4E0D\u662Fantd\u7684\u7EC4\u4EF6 */
  configProviderProps: ConfigProviderProps;
  locale?: Locale;
  /** iconfont \u5730\u5740 */
  iconfont?: string;
  isDarkMode?: boolean;
  /** \u4E3B\u9898\u914D\u7F6E\uFF0C\u4F9B staticRenderer \u7B49\u9759\u6001\u65B9\u6CD5\u4F7F\u7528 */
  theme?: ConfigProviderProps['theme'];
}

const commonConfig: CommonConfig = {
  antPrefix: DEFAULT_ANT_PREFIX,
  blPrefix: DEFAULT_BL_PREFIX,
  sparkPrefix: DEFAULT_SPARK_PREFIX,
  configProviderProps: {},
  isDarkMode: false,
};

export function setCommonConfig(newConf: CommonConfig) {
  Object.assign(commonConfig, newConf);
  requestAnimationFrame(() => {
    updates.forEach((update) => update({ ...commonConfig }));
  });
}

export function getCommonConfig() {
  return commonConfig;
}

export function useCommonConfig(): CommonConfig {
  const [config, setConfig] = useState(() => getCommonConfig());
  useLayoutEffect(() => {
    const cache = setConfig;
    updates.push(cache);
    return () => {
      const index = updates.findIndex((one) => one === cache);
      if (index >= 0) {
        updates.splice(index, 1);
      }
    };
  }, []);
  return config;
}
`}}]);
