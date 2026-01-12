/**
 * useDispatchAction - Hook for dispatching actions from components.
 */

import type { Action } from '../types'
import { useActionContext } from '../contexts/ActionContext'

/**
 * Returns a function to dispatch actions.
 *
 * @returns A function that dispatches actions
 *
 * @example
 * ```tsx
 * function ButtonComponent({ surfaceId, componentId, action }) {
 *   const dispatchAction = useDispatchAction();
 *
 *   const handleClick = () => {
 *     if (action) {
 *       dispatchAction(surfaceId, componentId, action);
 *     }
 *   };
 *
 *   return <button onClick={handleClick}>Click me</button>;
 * }
 * ```
 */
export function useDispatchAction(): (
  surfaceId: string,
  componentId: string,
  action: Action
) => void {
  const { dispatchAction } = useActionContext()
  return dispatchAction
}
