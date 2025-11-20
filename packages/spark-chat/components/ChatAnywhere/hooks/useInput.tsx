import React from 'react';
import { useChatAnywhere } from "./ChatAnywhereProvider";

export function useInput() {
  const { loading, disabled, setLoading, setDisabled, getLoading, getDisabled } = useChatAnywhere(v => ({
    loading: v.loading,
    getLoading: v.getLoading,
    disabled: v.disabled,
    getDisabled: v.getDisabled,
    setLoading: v.setLoading,
    setDisabled: v.setDisabled,
  }));

  return {
    loading,
    disabled,
    setLoading,
    setDisabled,
    getLoading,
    getDisabled,
  }
}