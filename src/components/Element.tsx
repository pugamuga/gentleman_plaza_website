'use client'


import React from 'react';
import Image, { StaticImageData } from 'next/image';
import arrowUnderPicture from '../../public/assets/elements/arrow-under-picture.png';
import arrow from '../../public/assets/elements/arrow.png';
import mainArrowCenter from '../../public/assets/elements/main-arrow-center.png';
import mainArrowSide from '../../public/assets/elements/main-arrow-side.png';
import navbarTextEl from '../../public/assets/elements/navbar-text-el.png';
import textEl from '../../public/assets/elements/text-el.png';
import ugol from '../../public/assets/elements/ugol.png';
import photoFrame from '../../public/assets/elements/photoframe.png';

interface ElementProps {
  name: string;
  className?: string;
}

const Element: React.FC<ElementProps> = (props) => {
  let element: StaticImageData | undefined = undefined;

  switch (props.name) {
    case "arrowUnderPicture":
      element = arrowUnderPicture;
      break;
    case "arrow":
      element = arrow;
      break;
    case "mainArrowCenter":
      element = mainArrowCenter;
      break;
    case "mainArrowSide":
      element = mainArrowSide;
      break;
    case "navbarTextEl":
      element = navbarTextEl;
      break;
    case "textEl":
      element = textEl;
      break;
    case "ugol":
      element = ugol;
      break;
    case "photoframe":
      element = photoFrame;
      break;
    default:
      console.error(`Invalid element name: ${props.name}`);
  }

  return (
    <>
      {element && <Image className={props.className} src={element} alt={props.name} />}
    </>
  );
}

export default Element;
