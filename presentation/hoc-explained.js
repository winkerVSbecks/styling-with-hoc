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
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  MarkdownSlides,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

export default [
  <Slide>
    <Heading size={5} lineHeight={1} textColor="tertiary" textAlign="left">
      Higher-order Function
    </Heading>
    <Text textSize="1.5rem" margin="2rem 0" textAlign="left">
      A function that takes and/or returns a function
    </Text>
    <CodePane
      textSize="1.25rem"
      lang="javascript"
      source={require('raw-loader!../assets/hof.example')}
    />
  </Slide>,
  <Slide>
    <Heading size={6} lineHeight={1} textColor="tertiary" textAlign="left">
      Higher-order Function
    </Heading>
    <CodePane
      margin="2rem 0 4rem 0"
      textSize="1.25rem"
      lang="javascript"
      source={`const adjust = fn => list => list.map(fn); \nconst hof = () => (arg) => /* compute something with arg */`}
    />
    <Heading size={6} lineHeight={1} textColor="tertiary" textAlign="left">
      Higher-order Component
    </Heading>
    <CodePane
      margin="2rem 0 0 0"
      textSize="1.25rem"
      lang="javascript"
      source={`const hoc = Component => () => /* modify or enhance Component */\nconst hoc = Component => props => <Component {transform(props)} />;`}
    />
  </Slide>,
  <CodeSlide
    transition={[]}
    textSize="1.25rem"
    lang="js"
    code={require('raw-loader!../assets/hoc.example')}
    ranges={[
      { loc: [0, 11], title: 'Higher-order Component' },
      { loc: [1, 6], title: 'WithLoader HOC' },
      { loc: [7, 8], title: 'Display Name' },
      {
        loc: [12, 19],
        title: 'Display Name',
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
      { loc: [20, 21], title: 'Enhance a Component' },
      { loc: [22, 27], title: 'Usage' },
    ]}
  />,
];
