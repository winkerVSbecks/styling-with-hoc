import React from 'react';
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

import preloader from 'spectacle/lib/utils/preloader';

import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');
require('spectacle/lib/themes/default/index.css');

import hocExplained from './hoc-explained';
import styledSystem from './styled-system';
import hocSystem from './hoc-system';

const images = {};

preloader(images);

const systemSans = `-apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif`;

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#333',
    tertiary: '#0074D9',
    quartenary: '#CECECE',
  },
  {
    primary: systemSans,
    secondary: systemSans,
  },
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={[]} transitionDuration={0} progress="bar" theme={theme}>
        <Slide bgColor="tertiary">
          <Heading size={4} lineHeight={1} textColor="primary">
            Styling with ⚡
          </Heading>
          <Heading size={4} lineHeight={1} textColor="primary">
            💅🏼 Higher-order Components
          </Heading>
        </Slide>
        {React.Children.toArray(styledSystem)}
        {React.Children.toArray(hocExplained)}
        {React.Children.toArray(hocSystem)}
        <Slide bgColor="secondary">
          <Heading
            size={4}
            lineHeight={1.25}
            textColor="primary"
            textAlign="left"
          >
            This is not the only way to do things. This is not the right way.<br />
            It is just one way.
          </Heading>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={4} lineHeight={1} textColor="primary">
            Other Similar Approaches
          </Heading>
          <List textColor="secondary">
            <ListItem margin="1rem 0">http://jxnblk.com/rebass/</ListItem>
            <ListItem margin="1rem 0">
              https://github.com/jxnblk/styled-system
            </ListItem>
            <ListItem margin="1rem 0">
              https://github.com/paypal/glamorous
            </ListItem>
            <ListItem margin="1rem 0">
              https://github.com/jxnblk/grid-styled
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
