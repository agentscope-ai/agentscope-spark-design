import type { ButtonProps } from 'antd';
import * as React from 'react';
import ActionButton, { ActionButtonContext } from '../ActionButton';
import { SparkMicLine, SparkMicOffLine, SparkMicOnLine } from '@agentscope-ai/icons';
import RecordingIcon from './RecordingIcon';

function SpeechButton(props: ButtonProps, ref: React.Ref<HTMLButtonElement>) {
  const { speechRecording, onSpeechDisabled, prefixCls } = React.useContext(ActionButtonContext);

  let icon: React.ReactNode = null;
  if (speechRecording) {
    icon = <RecordingIcon className={`${prefixCls}-recording-icon`} />;
  } else if (onSpeechDisabled) {
    icon = <SparkMicOffLine />;
  } else {
    icon = <SparkMicLine />;
  }

  return (
    <ActionButton
      icon={icon}
      variant="text"
      {...props}
      action="onSpeech"
      ref={ref}
    />
  );
}

export default React.forwardRef(SpeechButton);
