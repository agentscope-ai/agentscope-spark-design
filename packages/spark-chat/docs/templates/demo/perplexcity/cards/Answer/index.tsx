import useStyle from './style';
import Images from './Images';
import Content from './Content';
import Related from './Related';
import Sources from './Sources';
// @ts-ignore
import { ReactComponent as Logo } from './Logo.svg';
import DeepThinking from './DeepThinking';
import TOC from './TOC';


export default function (props) {
  const { deepThinking, images, content, sources, related } = props.data;
  const { styles } = useStyle();


  return <div className={styles.container}>
    <div className={styles.avatar}>
      <Logo />
    </div>

    <TOC data={props.data}>
      {
        deepThinking && <DeepThinking {...deepThinking} />
      }
      {
        images && <Images images={images} />
      }
      {
        content && <Content {...content} />
      }
      {
        sources && <Sources sources={sources} />
      }
      {
        related && <Related related={related} />
      }
    </TOC>
  </div>
}