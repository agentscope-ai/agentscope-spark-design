import { useProviderContext } from '../Provider';
import Style from './style';


export default function () {
  const prefixCls = useProviderContext().getPrefixCls('assets-preview');
  return <>
    <Style />
    <div className={prefixCls}>...</div>
  </>
}