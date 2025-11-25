import React, { useState } from 'react';
import { IParseData } from '../type';
import PreviewHeader from '../Header/Preview';
import styles from './index.module.less';
import Result from '../Result';
import Process from '../Process';
import ResearchSource from '../ResearchSource';
import RightPanel, { RightPanelContent, RightPanelHeader } from '../../../components/RightPanel';

interface IProps {
  data: IParseData;
  viewIndex?: number;
}

const Preview: React.FC<IProps> = (props) => {
  const { data, viewIndex } = props;
  const [activeTab, setActiveTab] = useState<string>('process');

  return <RightPanel
    header={<RightPanelHeader title={data.title} actions={null} />}
    content={<RightPanelContent>
      <PreviewHeader
        data={data}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className={styles.content}>
        {activeTab === 'report' && <Result data={data.result} />}
        {activeTab === 'process' && <Process list={data.steps} viewIndex={viewIndex} />}
        {activeTab === 'source' && <ResearchSource list={data.site?.list} />}
      </div>
    </RightPanelContent>}
  >
  </RightPanel>
};

export default Preview;
