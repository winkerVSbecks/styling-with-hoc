// Import React
import React from 'react';

// Import Spectacle Core tags
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
const images = {
  tachyonsScales: require('../assets/tachyons-scales.gif'),
};

preloader(images);

// bgTransform,
// colorTransform,
// typeScaleTransform,
// spacingTransform,
// widthTransform,
// heightTransform,
// borderTransform,
// radiusTransform,
// fontFamilyTransform,
// fontWeightTransform,
// lineHeightTransform,

export default [
  <Slide>
    <Heading size={5} lineHeight={1} textColor="secondary">
      Design System
    </Heading>
    <Image
      margin="2rem auto"
      width="100%"
      src="https://airbnb.design/wp-content/uploads/2016/05/dls-foundation.png"
    />
    <Link
      href="https://airbnb.design/building-a-visual-language"
      textSize="1.25rem"
      margin="2rem 0"
      textAlign="left"
      textColor="tertiary"
    >
      Airbnb.design – Building a Visual Language
    </Link>
  </Slide>,
  <Slide>
    <Heading size={5} lineHeight={1} textColor="secondary">
      Tachyons Design System
    </Heading>
    <Image margin="2rem auto" width="100%" src={images.tachyonsScales} />
  </Slide>,
  <Slide>
    <Heading size={5} lineHeight={1} textColor="secondary">
      Slide about atoms === design system components, molecules === their
      composition, …
    </Heading>
  </Slide>,
  <Slide>
    <Heading
      size={5}
      lineHeight={1}
      textColor="tertiary"
      textAlign="left"
      margin="0 0 2rem 0"
    >
      Design System Components
    </Heading>
    <CodePane
      textSize="1.25rem"
      lang="javascript"
      source={require('raw-loader!../assets/headings-html.example')}
    />
  </Slide>,
  <CodeSlide
    transition={[]}
    textSize="1.5rem"
    lang="js"
    code={require('raw-loader!../assets/headings-classnames.example')}
    ranges={[
      {
        loc: [0, 0],
        title: 'Design System Components with ClassNames',
        note: 'github.com/JedWatson/classnames',
      },
      { loc: [0, 19] },
      { loc: [3, 5], note: 'Props for font size and colour with defaults' },
      { loc: [10, 12], note: 'Props get converted in classname' },
      { loc: [19, 33] },
      { loc: [21, 23], note: 'For text we use different defaults' },
      { loc: [34, 42] },
      { loc: [44, 52], note: 'Use props to drive styles!' },
    ]}
  />,
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
