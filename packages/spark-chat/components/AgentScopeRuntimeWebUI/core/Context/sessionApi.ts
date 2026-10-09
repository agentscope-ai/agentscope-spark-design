import type { IAgentScopeRuntimeWebUISessionAPI } from '../types';

type PartialSessionApi = Partial<IAgentScopeRuntimeWebUISessionAPI>;

/**
 * Normalize custom session APIs into own enumerable functions while preserving
 * the receiver of class-based adapters. The method-level fallback also keeps
 * older partial adapters working at runtime.
 */
export function normalizeSessionApi(
  defaultApi: IAgentScopeRuntimeWebUISessionAPI,
  customApi?: PartialSessionApi,
): IAgentScopeRuntimeWebUISessionAPI {
  if (!customApi) return defaultApi;

  const getSessionList = customApi.getSessionList;
  const getSession = customApi.getSession;
  const updateSession = customApi.updateSession;
  const createSession = customApi.createSession;
  const removeSession = customApi.removeSession;

  return {
    getSessionList: getSessionList
      ? getSessionList.bind(customApi)
      : defaultApi.getSessionList.bind(defaultApi),
    getSession: getSession
      ? getSession.bind(customApi)
      : defaultApi.getSession.bind(defaultApi),
    updateSession: updateSession
      ? updateSession.bind(customApi)
      : defaultApi.updateSession.bind(defaultApi),
    createSession: createSession
      ? createSession.bind(customApi)
      : defaultApi.createSession.bind(defaultApi),
    removeSession: removeSession
      ? removeSession.bind(customApi)
      : defaultApi.removeSession.bind(defaultApi),
  };
}
