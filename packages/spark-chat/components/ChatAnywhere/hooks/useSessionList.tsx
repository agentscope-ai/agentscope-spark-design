import React from 'react';
import { useChatAnywhere } from './ChatAnywhereProvider';
import { v4 as uuid } from 'uuid';
import { TMessage, TSession } from './types';
import ReactDOM from 'react-dom';

export function useSessionList() {
  const {
    getCurrentSessionKey,
    sessionList,
    setSessionList,
    currentSessionKey,
    setCurrentSessionKey,
    sessionListShow,
    setSessionListShow,
    currentRegenerateIndex,
    setCurrentRegenerateIndex,
    getCurrentRegenerateIndex,
    getSessionList,
  } = useChatAnywhere(v => ({
    getCurrentSessionKey: v.getCurrentSessionKey,
    currentRegenerateIndex: v.currentRegenerateIndex,
    setCurrentRegenerateIndex: v.setCurrentRegenerateIndex,
    getCurrentRegenerateIndex: v.getCurrentRegenerateIndex,
    sessionListShow: v.sessionListShow,
    setSessionListShow: v.setSessionListShow,
    sessionList: v.sessionList,
    setSessionList: v.setSessionList,
    currentSessionKey: v.currentSessionKey,
    setCurrentSessionKey: v.setCurrentSessionKey,
    getSessionList: v.getSessionList,
  }));


  const createSession = React.useCallback(() => {
    const newKey = uuid();
    const newSession: TSession = {
      label: Date.now().toString(),
      key: newKey,
      messages: [[]],
    };

    ReactDOM.flushSync(() => {
      setSessionList((sessionList) => {
        const newSessionList = [...sessionList, newSession];
        return newSessionList;
      });
      setCurrentSessionKey(newKey);
    });

    return newKey;
  }, []);

  const deleteSession = React.useCallback((key: string) => {
    setSessionList((sessionList) => {
      const newSessionList = sessionList.filter((item) => item.key !== key);
      return newSessionList;
    });
  }, []);


  const updateSessionMessages = React.useCallback((messages: TMessage[]) => {
    const currentSessionKey = getCurrentSessionKey();
    const currentRegenerateIndex = getCurrentRegenerateIndex();

    setSessionList((sessionList) => {
      return sessionList.map((session) => {
        if (session.key === currentSessionKey) {
          session.messages[currentRegenerateIndex] = messages;
          return { ...session };
        }
        return session;
      });
    });
  }, []);


  const getMessagesBySession = React.useCallback((currentSessionKey, currentRegenerateIndex) => {
    return getSessionList().find((session) => session.key === currentSessionKey)?.messages[currentRegenerateIndex];
  }, []);

  const getSession = React.useCallback(() => {
    return {
      sessionList: getSessionList(),
      currentSessionKey: getCurrentSessionKey(),
      currentRegenerateIndex: getCurrentRegenerateIndex(),
    }
  }, []);


  const updateSession = React.useCallback((data) => {
    const {
      sessionList,
      currentSessionKey,
      currentRegenerateIndex,
    } = data;

    setSessionList(sessionList);
    setCurrentSessionKey(currentSessionKey);
    setCurrentRegenerateIndex(currentRegenerateIndex);

  }, []);


  return {
    currentRegenerateIndex,
    setCurrentRegenerateIndex,
    getCurrentRegenerateIndex,
    sessionList,
    setSessionList,
    getSessionList,
    currentSessionKey,
    setCurrentSessionKey,
    sessionListShow,
    setSessionListShow,
    createSession,
    deleteSession,
    updateSessionMessages,
    getMessagesBySession,
    getSession,
    updateSession,
  };
}