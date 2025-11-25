import React from 'react';
import { useMessages } from '../hooks/useMessages';
import { useInput } from '../hooks/useInput';
import { useSessionList } from '../hooks/useSessionList';

export default React.forwardRef(function Ref(_, ref) {

  const messageContext = useMessages();
  const inputContext = useInput();
  const sessionContext = useSessionList();


  React.useImperativeHandle(ref, () => ({
    ...messageContext,
    ...inputContext,
    ...sessionContext,
  }));

  return null;
})