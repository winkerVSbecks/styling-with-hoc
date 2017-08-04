import React from 'react';
import {
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Heading,
  Image,
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
  owl: require('../assets/owl.jpg'),
};

preloader(images);

export default [
  <Slide bgColor="tertiary">
    <Heading size={1} lineHeight={1} textColor="primary">
      Higher-order Components
    </Heading>
  </Slide>,
  <Slide>
    <Heading size={6} lineHeight={1} textColor="tertiary" textAlign="left">
      Prop Transformers!
    </Heading>
    <CodePane
      margin="2rem 0 0 0"
      textSize="1.5rem"
      lang="javascript"
      source={`const hoc = Component => props => <Component {transform(props)} />;`}
    />
  </Slide>,
  <CodeSlide
    transition={[]}
    textSize="1.25rem"
    lang="js"
    code={require('raw-loader!../assets/typography-hoc.example')}
    ranges={[
      { loc: [0, 22] },
      { loc: [1, 15], title: 'Typography HOC' },
      { loc: [2, 6], title: 'Props in…' },
      { loc: [8, 12], title: '…styles out' },
      { loc: [13, 14], title: 'Only Transforming Props' },
      { loc: [16, 19], title: 'Display Name' },
      {
        loc: [22, 30],
        note: (
          <p>
            from{' '}
            <a
              style={{ color: '#7FDBFF' }}
              href="https://facebook.github.io/react/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging"
            >
              convention-wrap-the-display-name-for-easy-debugging
            </a>
          </p>
        ),
      },
      { loc: [31, 32], title: 'Enhance a Component' },
      { loc: [33, 40], title: 'Usage' },
    ]}
  />,
  <Slide>
    <Image src={images.owl} width="50%" />
  </Slide>,
];
