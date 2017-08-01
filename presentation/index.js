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

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

import hocExplained from './hoc-explained';
import styledSystem from './styled-system';

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
      </Deck>
    );
  }
}

// http://jxnblk.com/rebass/
// https://github.com/jxnblk/styled-system
// https://github.com/paypal/glamorous
// https://github.com/jxnblk/grid-styled
