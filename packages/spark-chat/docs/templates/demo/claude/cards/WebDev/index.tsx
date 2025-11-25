import { SparkCode01Line, SparkExitFullscreenLine, SparkFullscreenLine, SparkPlayCircleFill } from '@agentscope-ai/icons';
import useStyle from './style';
import { IconButton, CodeBlock, Button } from '@agentscope-ai/design';
import { ReactNode, useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import RightPanel, { RightPanelContent, RightPanelHeader } from '../../components/RightPanel';
import useFullscreen from '../../hooks/useFullscreen';


export default function (props: { data: { title: string, content: string, loading?: boolean } }) {
  const [fullscreen, setFullscreen] = useFullscreen();
  const data = props.data;
  const { styles } = useStyle();

  const code = <CodeBlock value={data.content} language="html" readOnly />
  return <div className={styles.webDev}>
    <div className={styles.header}>
      <div className={styles.left}>
        <SparkCode01Line style={{ fontSize: 20 }} />
        <span className={styles.title}>
          {data.title}
        </span>
      </div>
      {
        fullscreen ?
          null :
          <IconButton onClick={() => setFullscreen(!fullscreen)} bordered={false} icon={<SparkFullscreenLine />} />
      }
    </div>

    {
      fullscreen ?
        ReactDOM.createPortal(<RightPanelWebDev code={code} title={data.title} loading={data.loading} content={data.content} />, document.getElementById('right-panel')) :
        <div className={styles.content}>
          {code}
        </div>
    }
  </div>
}

function RightPanelWebDev({ code, title, loading, content }: { code: ReactNode, title: string, loading?: boolean, content: string }) {
  const [preview, setPreview] = useState(false);
  const { styles } = useStyle();

  const contentNode = preview ? <iframe className={styles.iframe} srcDoc={content} /> : code;

  return <RightPanel
    header={<RightPanelHeader title={title} actions={
      <Button
        icon={<SparkPlayCircleFill />}
        type="primaryLess" loading={loading} onClick={() => {
          if (loading) return;
          setPreview(!preview);
        }}>{
          preview ? 'Exit' : 'Preview'
        }</Button>
    } />}
    content={<RightPanelContent>{contentNode}</RightPanelContent>}>
  </RightPanel>
}