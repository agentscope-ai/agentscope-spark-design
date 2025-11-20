import { RefObject, useEffect, useRef, useState } from "react";
import useStyle from './style';
import { Scrollspy } from '@makotot/ghostui';


export default function (props) {
  const [sectionRefs, setSectionRefs] = useState<RefObject<HTMLElement>[]>([]);
  const { styles } = useStyle();
  const contentRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const refs = props.contentRef?.current?.querySelectorAll('[data-anchor]');

    if (refs?.length) {
      const refsArray = Array.from(refs);
      setSectionRefs(refsArray as any);
    }

  }, [props.data]);


  return <>
    <div className={styles.content} ref={contentRef}>
      {props.children}
    </div>

    {
      sectionRefs.length ? <Scrollspy sectionRefs={sectionRefs} rootSelector="#perplexcity-bubble-list>div" >
        {
          ({ currentElementIndexInViewport }) => {
            console.log(currentElementIndexInViewport);
            return <div>...</div>
          }
        }
      </Scrollspy> : null
    }
  </>

}