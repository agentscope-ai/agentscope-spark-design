import type {
  IAgentScopeRuntimeWebUIQueueItemAction,
  IAgentScopeRuntimeWebUIQueueItemActionContext,
  IAgentScopeRuntimeWebUIQueueItemActionValue,
} from '../../types';

export interface ResolvedInputQueueItemAction {
  action: IAgentScopeRuntimeWebUIQueueItemAction;
  label: React.ReactNode;
  icon: React.ReactNode;
  disabled: boolean;
}

function resolveActionValue<T>(
  value: IAgentScopeRuntimeWebUIQueueItemActionValue<T>,
  context: IAgentScopeRuntimeWebUIQueueItemActionContext,
): T {
  return typeof value === 'function'
    ? (
        value as (
          actionContext: IAgentScopeRuntimeWebUIQueueItemActionContext,
        ) => T
      )(context)
    : value;
}

export function resolveInputQueueItemActions(
  actions: readonly IAgentScopeRuntimeWebUIQueueItemAction[] | undefined,
  context: IAgentScopeRuntimeWebUIQueueItemActionContext,
): ResolvedInputQueueItemAction[] {
  if (!actions?.length) return [];

  const resolvedActions: ResolvedInputQueueItemAction[] = [];
  const actionKeys = new Set<string>();

  actions.forEach((action) => {
    if (!action.key || actionKeys.has(action.key)) return;
    actionKeys.add(action.key);

    if (action.ownerOnly !== false && !context.isOwner) return;
    if (
      action.visible !== undefined &&
      !resolveActionValue(action.visible, context)
    ) {
      return;
    }

    resolvedActions.push({
      action,
      label: resolveActionValue(action.label, context),
      icon: resolveActionValue(action.icon, context),
      disabled:
        context.item.status === 'submitting' ||
        (action.disabled !== undefined &&
          resolveActionValue(action.disabled, context)),
    });
  });

  return resolvedActions;
}
