import React from 'react';
import {
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  MarkdownSlides,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

import preloader from 'spectacle/lib/utils/preloader';
const images = {};

preloader(images);

export default [
  <Slide>
    <Heading size={5} lineHeight={1} textColor="secondary">
      Block
    </Heading>
  </Slide>,
  <Slide>
    <Heading size={5} lineHeight={1} textColor="secondary">
      Real world example – product card
    </Heading>
  </Slide>,
  <CodeSlide
    transition={[]}
    textSize="1.5rem"
    lang="js"
    code={require('raw-loader!../assets/design-system.example')}
    ranges={[
      { loc: [0, 0], title: 'Design System Described in Flow' },
      {
        loc: [0, 1],
        title: 'Colour Palette',
        note: 'Text and background colours',
      },
      { loc: [2, 13], title: 'Spacing – Margin & Padding' },
      { loc: [14, 17], title: 'Sizing – Widths & Heights' },
      { loc: [18, 22], title: 'Typography' },
      { loc: [23, 31], title: 'Border – Color' },
      { loc: [32, 38], title: 'Border – Sizing & Direction' },
    ]}
  />,
];
