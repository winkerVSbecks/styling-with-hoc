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
  <Slide bgColor="secondary">
    <Heading
      size={4}
      lineHeight={1.5}
      textColor="primary"
      textAlign="left"
      margin="0 0 2rem 0"
    >
      Building Components 🛠️<br />Using the Design System
    </Heading>
  </Slide>,
  <Slide>
    <div
      style={{
        height: 600,
        display: 'flex',
        flexDirection: 'column',
        lineHeight: 1.5,
        fontSize: '1.5rem',
        color: '#001B44',
        padding: '0 2rem',
      }}
    >
      <div
        style={{
          backgroundColor: '#E8FDF5',
          flex: '1 1 0',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          width: '60%',
          margin: '0 auto',
          padding: '0 2rem',
        }}
      >
        <span>
          <b style={{ fontSize: '2.25rem' }}>Organisms</b>
          <br />Domain specific instances or composition of molecules
        </span>
      </div>
      <div
        style={{
          backgroundColor: '#CDECFF',
          flex: '1 1 0',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          width: '80%',
          margin: '0 auto',
          padding: '0 2rem',
        }}
      >
        <span>
          <b style={{ fontSize: '2.25rem' }}>Molecules</b>
          <br />Composition of atoms – focused on generic UI patterns
        </span>
      </div>
      <div
        style={{
          backgroundColor: '#357EDD',
          flex: '1 1 0',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <span>
          <b style={{ fontSize: '2.25rem' }}>Atoms</b>
          <br />Focused purely on visual aspect of the design system
        </span>
      </div>
    </div>
  </Slide>,
  <Slide>
    <Heading
      size={4}
      lineHeight={1}
      textColor="tertiary"
      textAlign="left"
      margin="0 0 2rem 0"
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <svg
        width="1em"
        height="1em"
        style={{ marginRight: '1rem' }}
        viewBox="0 0 24 24"
      >
        <path
          fill="#333"
          d="M24 20v1h-4v-1h.835c.258 0 .405-.178.321-.422l-.473-1.371h-2.231l-.575-1.59h2.295l-1.362-4.077-1.154 3.451-.879-2.498.921-2.493h2.222l3.033 8.516c.111.315.244.484.578.484h.469zm-6-1h1v2h-7v-2h.532c.459 0 .782-.453.633-.887l-.816-2.113h-6.232l-.815 2.113c-.149.434.174.887.633.887h1.065v2h-7v-2h.43c.593 0 1.123-.375 1.32-.935l5.507-15.065h3.952l5.507 15.065c.197.56.69.935 1.284.935zm-10.886-6h4.238l-2.259-6.199-1.979 6.199z"
        />
      </svg>
      Typography Components
    </Heading>
    <Text textAlign="left" lineHeight={1.5}>
      • <Code>&#x3C;Heading&#x3E;</Code> <small>for h1, h2, h3…</small>
      <br />
      • <Code>&#x3C;Text&#x3E;</Code> <small>for paragraphs</small>
      <br />
      • <Code>&#x3C;Solid&#x3E;</Code> <small>for span or inline text</small>
    </Text>
  </Slide>,
  <CodeSlide
    transition={[]}
    textSize="1.4rem"
    lang="js"
    code={require('raw-loader!../assets/headings-html.example')}
    ranges={[
      { loc: [0, 0], title: 'Typography Components' },
      { loc: [0, 9], title: 'Heading Component' },
      { loc: [10, 16], title: 'Text Component' },
      { loc: [17, 23], title: 'Solid Component' },
      { loc: [25, 31] },
    ]}
  />,
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
      { loc: [0, 19] },
      { loc: [19, 33] },
      { loc: [21, 23], note: 'For text we use different defaults' },
      { loc: [34, 42] },
      { loc: [44, 52], note: 'Use props to drive styles!' },
    ]}
  />,
  <Slide>
    <Heading size={5} lineHeight={1} textColor="secondary">
      we repeat this a lot, didn't account for MQ, type checking?
    </Heading>
  </Slide>,
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
