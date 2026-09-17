import Bubble from '../../../../Bubble';
import { IAgentScopeRuntimeError, IAgentScopeRuntimeMessage } from '../types';

export default function Error({
  data,
}: {
  data: IAgentScopeRuntimeError | IAgentScopeRuntimeMessage;
}) {
  return (
    <Bubble.Interrupted type="error" title={data.code} desc={data.message} />
  );
}
