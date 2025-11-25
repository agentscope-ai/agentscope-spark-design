import Chat from './components/Chat';
import ConfigProvider from './context/ConfigProvider';
import DemoProvider from './context/DemoProvider';
import Style from './style';

export default function () {

  return <ConfigProvider>
    <Style />
    <DemoProvider>
      <Chat />
    </DemoProvider>
  </ConfigProvider>
}