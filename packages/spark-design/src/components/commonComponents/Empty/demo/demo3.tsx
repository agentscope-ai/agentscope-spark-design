import { Empty } from '@agentscope-ai/design';

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
        type="noChat"
        title="Empty Chat"
        description="Please add your chat"
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
