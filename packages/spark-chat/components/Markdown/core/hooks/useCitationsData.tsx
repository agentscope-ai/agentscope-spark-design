import { useMemo } from 'react';
import InnerCitationComponent, { CitationComponentProps } from '../plugins/citations/CitationComponent';

const emptyArray = [];
const emptyMap = {};

export default function useCitationsData(
  props,
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