import {
  GiAcorn,
  GiAlienSkull,
  GiAlienStare,
  GiAmericanFootballBall,
  GiAmericanFootballHelmet,
  GiAlarmClock,
  GiAmmonite,
  GiAmmoniteFossil,
  GiAnchor,
  GiAnubis,
  GiAndroidMask,
  GiAnvil,
  GiAtom,
  GiBabyFace,
  GiBandit,
  GiBasketballBall,
  GiBasket,
  GiBatMask
} from 'react-icons/gi';

import { v1 } from 'uuid';

import { Cards } from '../../../types/MemoryGameTypes';

type GetIconCardsCB = (
  gridSize: string,
  shuffleCards: (cardsArray: Cards) => Cards,
) => Cards;

export const getIconCardsCB: GetIconCardsCB = (gridSize, shuffleCards) => {
  let iconCardsArray: Cards = [];

  let icons = [
    GiAcorn,
    GiAlienSkull,
    GiAlienStare,
    GiAmericanFootballBall,
    GiAmericanFootballHelmet,
    GiAlarmClock,
    GiAmmonite,
    GiAmmoniteFossil,
    GiAnchor,
    GiAnubis,
    GiAndroidMask,
    GiAnvil,
    GiAtom,
    GiBabyFace,
    GiBandit,
    GiBasketballBall,
    GiBasket,
    GiBatMask
  ];

  if (gridSize === '4x4') icons = icons.slice(0, 8);

  icons.forEach((icon) => {
    iconCardsArray.push({
      icon,
      status: 'hidden',
      id: v1(),
    });

    iconCardsArray.push({
      icon,
      status: 'hidden',
      id: v1(),
    });
  });

  const shuffledCards = shuffleCards(iconCardsArray);

  return shuffledCards;
};
