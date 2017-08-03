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
const images = {};

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
      { loc: [0, 9] },
      { loc: [10, 19] },
      { loc: [20, 29] },
    ]}
  />,
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
