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
  jb: require('../assets/jb.png'),
  jbHeadings: require('../assets/jb-headings.png'),
};

preloader(images);

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
  <Slide bgColor="primary">
    <Image margin="2rem auto" width="100%" src={images.jb} />
  </Slide>,
  <Slide bgColor="primary">
    <Image margin="2rem auto" width="100%" src={images.jbHeadings} />
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
        title: 'v2 with ClassNames',
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
      Props ➡️ className
    </Heading>
    <List textColor="secondary">
      <ListItem margin="1rem 0">We repeat this pattern a lot!</ListItem>
      <ListItem margin="1rem 0">What about media queries?</ListItem>
      <ListItem margin="1rem 0">Can we type check these values?</ListItem>
      <ListItem margin="1rem 0">
        It enforces only a subset of the design system
      </ListItem>
    </List>
  </Slide>,
  <Slide>
    <Heading
      size={3}
      textAlign="left"
      textColor="tertiary"
      lineHeight={1}
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        style={{ marginRight: '1rem', transform: 'rotate(-90deg)' }}
      >
        <path
          fill="#FFD700"
          d="M1 12.155c2.256 3.97 4.55 7.918 6.879 11.845h-5.379c-.829 0-1.5-.675-1.5-1.5v-10.345zm2.85.859c3.278 1.952 12.866 7.658 13.121 7.805l-5.162 2.98c-.231.132-.49.201-.751.201-.549 0-1.037-.298-1.299-.75l-5.909-10.236zm1.9-12.813c-.23-.133-.489-.201-.75-.201-.524 0-1.026.277-1.299.75l-3.5 6.062c-.133.23-.201.489-.201.749 0 .527.278 1.028.75 1.3 2.936 1.695 14.58 8.7 17.516 10.396.718.413 1.633.168 2.048-.55l3.5-6.062c.133-.23.186-.488.186-.749 0-.52-.257-1.025-.734-1.3l-17.516-10.395m.25 3.944c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2"
        />
      </svg>
      Design System
    </Heading>
    <List textColor="secondary">
      <ListItem margin="1rem 0">Background Colour</ListItem>
      <ListItem margin="1rem 0">Text Colour</ListItem>
      <ListItem margin="1rem 0">Spacing: Padding & Margin</ListItem>
      <ListItem margin="1rem 0">Sizing: Width & Height</ListItem>
      <ListItem margin="1rem 0">Border: Colour, Width & Radius</ListItem>
      <ListItem margin="1rem 0">Type Scale & Line Height</ListItem>
      <ListItem margin="1rem 0">Font Weight</ListItem>
    </List>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading size={5} lineHeight={1} textColor="primary">
      Props for Everything?
    </Heading>
  </Slide>,
  <CodeSlide
    transition={[]}
    textSize="1.5rem"
    lang="js"
    code={`<Heading
  level={2}
  f={{ all: 5, m: 4, ns: 3 }}
  lh="solid"
  color="navy"
  bg="light-purple"
  mt={0}
  className="flex-auto"
>
  Section Heading
</Heading>
    `}
    ranges={[
      { loc: [0, 12], title: 'Design System as Props!' },
      { loc: [1, 2], title: 'Heading level === Tag' },
      { loc: [2, 4], title: 'Font Size and Line-height' },
      { loc: [4, 6], title: 'Colours' },
      { loc: [6, 7], title: 'Spacing, etc.' },
      { loc: [7, 8], title: 'And everything else' },
    ]}
  />,
];
