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
  Link,
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
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Libraries
          </Heading>
          <List textColor="secondary">
            <ListItem margin="1rem 0" textSize="1.75rem">
              <Link
                textColor="tertiary"
                href="https://github.com/winkerVSbecks/tachyons-measured"
              >
                github.com/winkerVSbecks/tachyons-measured
              </Link>
            </ListItem>
            <ListItem margin="1rem 0" textSize="1.75rem">
              <Link textColor="tertiary" href="http://jxnblk.com/rebass">
                jxnblk.com/rebass
              </Link>
            </ListItem>
            <ListItem margin="1rem 0" textSize="1.75rem">
              <Link
                textColor="tertiary"
                href="https://github.com/jxnblk/styled-system"
              >
                github.com/jxnblk/styled-system
              </Link>
            </ListItem>
            <ListItem margin="1rem 0" textSize="1.75rem">
              <Link
                textColor="tertiary"
                href="https://vasanthk.gitbooks.io/react-bits/styling/05.base-component.html"
              >
                react-bits/styling/base-component
              </Link>
            </ListItem>
            <ListItem margin="1rem 0" textSize="1.75rem">
              <Link
                textColor="tertiary"
                href="https://github.com/pricelinelabs/design-system"
              >
                github.com/pricelinelabs/design-system
              </Link>
            </ListItem>
            <ListItem margin="1rem 0" textSize="1.75rem">
              <Link
                textColor="tertiary"
                href="https://jamesmcallister.github.io/styled-components-tachyons"
              >
                jamesmcallister.github.io/styled-components-tachyons
              </Link>
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading
            size={4}
            lineHeight={1.25}
            textColor="primary"
            textAlign="left"
          >
            This is just one approach.<br />There are many other ways to use a
            design system.
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
