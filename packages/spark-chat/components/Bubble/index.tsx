import Bubble from './Bubble';
import List from './BubbleList';
import Spin from './Spin';
import Footer from './Footer';
import Interrupted from './Interrupted';

export type { BubbleProps } from './interface';

type BubbleType = typeof Bubble & {
  List: typeof List;
  Spin: typeof Spin;
  Footer: typeof Footer;
  Interrupted: typeof Interrupted;
};

(Bubble as BubbleType).List = List;
(Bubble as BubbleType).Spin = Spin;
(Bubble as BubbleType).Footer = Footer;
(Bubble as BubbleType).Interrupted = Interrupted;

export default Bubble as BubbleType;
