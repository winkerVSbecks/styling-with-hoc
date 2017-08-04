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
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHeaderItem,
  TableItem,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

import preloader from 'spectacle/lib/utils/preloader';
const images = {
  airbnb: require('../assets/airbnb.jpg'),
};

preloader(images);

export default [
  <Slide padding="0" margin="0">
    <table style={{ fontSize: '1.25rem', width: '100%' }}>
      <thead style={{ backgroundColor: '#ddd' }}>
        <tr>
          <th style={{ padding: '1rem', width: '25%' }}>Props</th>
          <th style={{ padding: '1rem' }}>Domain</th>
          <th style={{ padding: '1rem 4rem' }} />
          <th style={{ padding: '1rem 2rem' }}>HOC</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: '1rem', textAlign: 'left' }}>
            <code>bg</code>, <code>color</code>
          </td>
          <td style={{ padding: '1rem' }}>Colours</td>
          <td rowSpan="7">➡️</td>
          <td rowSpan="7">
            <code>withDesignSystem()</code>
          </td>
        </tr>
        <tr>
          <td style={{ padding: '1rem', textAlign: 'left' }}>
            <code>f</code>, <code>fw</code>, <code>lh</code>
          </td>
          <td style={{ padding: '1rem' }}>Typography</td>
        </tr>
        <tr>
          <td style={{ padding: '1rem', textAlign: 'left' }}>
            <code>tc</code>, <code>tl</code>, <code>tr</code>
          </td>
          <td style={{ padding: '1rem' }}>Text Alignment</td>
        </tr>
        <tr>
          <td style={{ padding: '1rem', textAlign: 'left' }}>
            <code>ma</code>, <code>mv</code>, <code>mh</code>, <code>mt</code>,{' '}
            <code>mr</code>, <code>mb</code>, <code>ml</code>, <code>pa</code>,{' '}
            <code>pv</code>, <code>ph</code>,
            <code>pt</code>, <code>pr</code>, <code>pb</code>, <code>pl</code>
          </td>
          <td style={{ padding: '1rem' }}>Maring & Padding</td>
        </tr>
        <tr>
          <td style={{ padding: '1rem', textAlign: 'left' }}>
            <code>w</code>, <code>h</code>
          </td>
          <td style={{ padding: '1rem' }}>Sizing</td>
        </tr>
        <tr>
          <td style={{ padding: '1rem', textAlign: 'left' }}>
            <code>ba</code>, <code>bt</code>, <code>br</code>, <code>bb</code>,{' '}
            <code>bl</code>
          </td>
          <td style={{ padding: '1rem' }}>Border</td>
        </tr>
        <tr>
          <td style={{ padding: '1rem', textAlign: 'left' }}>
            <code>radius</code>
          </td>
          <td style={{ padding: '1rem' }}>Border Radius</td>
        </tr>
      </tbody>
    </table>
  </Slide>,
  <Slide>
    <Heading size={5} lineHeight={1.5} textColor="secondary">
      Higher Order Components
    </Heading>
    <List textColor="secondary">
      <ListItem margin="2rem 0" textSize="1.75rem">
        <Code textSize="1.75rem">withDesignSystem()</Code> design system as
        props
      </ListItem>
      <ListItem margin="2rem 0" textSize="1.75rem">
        <Code textSize="1.75rem">withBaseStyles()</Code> applies a set of base
        classes always
      </ListItem>
      <ListItem margin="2rem 0" textSize="1.75rem">
        <Code textSize="1.75rem">defaultProps()</Code> provide default values
        for props
      </ListItem>
    </List>
  </Slide>,
  <CodeSlide
    transition={[]}
    textSize="1.5rem"
    lang="js"
    code={require('raw-loader!../assets/headings.example')}
    ranges={[
      { loc: [0, 0], title: 'Typograhy with HOCs' },
      { loc: [0, 12] },
      { loc: [1, 6] },
      { loc: [13, 22] },
      { loc: [23, 32] },
    ]}
  />,
  <CodeSlide
    transition={[]}
    textSize="2rem"
    lang="js"
    code={`export const Block = withDesignSystem('div');
Block.displayName = 'Block';

<Block
  f={{ l: 4, m: 3, ns: 2, all: 1 }}
  lh="copy"
  mh={3} mv={2} mt={4} nl={3}
  pa={{ l: 4, m: 4, ns: 3, all: 2 }}
  bg="blue"
  color="white"
  w={5}
  h={{ l: 50, m: 4, ns: 3, all: 2 }}
  bb="gray" bw={{ l: 1, m: 2, ns: 3, all: 4 }}
  radius="pill"
/>


`}
    ranges={[
      { loc: [0, 2], title: 'Block' },
      { loc: [3, 15] },
      { loc: [4, 5] },
    ]}
  />,
  <CodeSlide
    transition={[]}
    textSize="1.5rem"
    lang="js"
    code={require('raw-loader!../assets/design-system.example')}
    ranges={[
      { loc: [0, 0], title: 'Flow!' },
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
  <Slide bgColor="#F2F3F4">
    <Image src={images.airbnb} margin="0 auto" width="75%" />
    <Text margin="0">
      <Link
        textColor="tertiary"
        textSize="1rem"
        href="https://hoc-design-system.glitch.me"
      >
        hoc-design-system.glitch.me
      </Link>
    </Text>
  </Slide>,
];
