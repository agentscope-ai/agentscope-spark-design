import { useMemo } from 'react';
import type { MarkdownProps } from '../interface';
import InnerCitationComponent, { CitationComponentProps } from '../../plugins/citations/CitationComponent';

const emptyArray = [];
const emptyMap = {};

export default function useCitationsData(
  props: Pick<MarkdownProps, 'citations' | 'citationsMap'>,
) {
  const { citations = emptyArray, citationsMap = emptyMap } = props;

  const [citationsData, CitationComponent] = useMemo(() => {
    const map = { ...citationsMap };

    citations.forEach((item, index) => {
      const key = index + 1;
      map[key] = item;
    });




    return [map, (function citationComponentWrapper() {
      return function (props: CitationComponentProps) {
        return <InnerCitationComponent {...props} citationsData={map} />;
      }
    })()];
  }, [citations, citationsMap]);

  return {
    CitationComponent,
    citationsData,
    citationsDataCount: Object.keys(citationsData).length,
  };
}
