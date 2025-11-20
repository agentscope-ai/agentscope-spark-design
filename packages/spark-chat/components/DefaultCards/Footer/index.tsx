import React, { ReactElement } from 'react';

import Footer, { FooterActions, FooterCount } from "../../Bubble/Footer";


export default function (props: {
  data: {
    left?: React.ReactElement;
    right?: React.ReactElement;
  },
  id: string;
}) {
  return <Footer {...props.data} />;
}

export { FooterActions, FooterCount };