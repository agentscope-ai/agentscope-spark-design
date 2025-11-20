import React, { useContext, useMemo } from 'react';
import { useChatAnywhere, useCustomCardsContext } from '@agentscope-ai/chat';


interface ICardProps {
  code: string,
  component?: React.FC,
  data?: string | any,
  index?: number,
  id?: string,
  isLast?: boolean,
}

const Card = React.memo(function (props: ICardProps) {
  const cardConfig = useCustomCardsContext();
  const onInput = useChatAnywhere(v => v.onInput);


  const Component = useMemo(() => {
    if (props.component) return props.component;
    const cardConfigMap = cardConfig;

    return cardConfigMap?.[props.code] || (() => `${props.code} not found`);
  }, [])

  if (typeof Component === 'function') {
    const { component, ...rest } = props;
    return <Component {...rest} context={{ onInput }} />
  } else {
    return Component;
  }
})

export default function Cards(props: {
  cards: ICardProps[],
  id: string,
  className?: string,
  isLast?: boolean,
}) {
  const { cards } = props;
  if (!cards?.length) return null;
  return cards.map((card, index) => {
    const cardComp = <Card
      key={card?.id || index + card.code}
      index={index}
      id={props.id}
      isLast={props.isLast}
      {...card}
    />;

    if (card.code === 'Text') return <div className={props.className} key={index}>{cardComp}</div>
    return cardComp;
  });
}

export function createCard(code: string, data: any) {
  return {
    code,
    data
  }
}
