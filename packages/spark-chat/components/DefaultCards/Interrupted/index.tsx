import Interrupted from '../../Bubble/Interrupted';

interface IProps {
  data: {
    title?: string;
    type?: 'error' | 'interrupted';
    desc?: string;
  }
}

export default function (props: IProps) {
  return <Interrupted {...props.data} />;
}