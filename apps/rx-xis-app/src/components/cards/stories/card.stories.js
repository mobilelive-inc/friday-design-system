import React from 'react';
import { ThemeProvider } from 'styled-components';
import CardTheme from '../../theme/styles/card';
import Theme from '../../theme/defaultTheme';
import GlobalStyle from '../../theme/globalStyles';
import CardImg from '../../../assets/images/img-01.png';
import {
  Cards,
  Card,
  ShadowCard,
  WithImageCard,
  FixCard,
  WithImageSolidShadow,
  WithoutIcone,
} from '..';
import { Section, Wrapper } from '../css';

export default {
  title: 'Card',
  component: Cards,
};
export const DefaultCards = () => {
  return (
    <ThemeProvider theme={CardTheme}>
      <GlobalStyle />
      <Section>
        <Card title='Default' cardimage={CardImg} />
      </Section>
    </ThemeProvider>
  );
};

export const SolidShadowCards = () => {
  return (
    <ThemeProvider theme={CardTheme}>
      <GlobalStyle />
      <Section>
        <ShadowCard title='Solid Shadow' cardimage={CardImg} />
      </Section>
    </ThemeProvider>
  );
};
export const SimpleShadowCards = () => {
  return (
    <ThemeProvider theme={CardTheme}>
      <GlobalStyle />
      <Section>
        <Card title='Box Shadow' cardimage={CardImg} box />
      </Section>
    </ThemeProvider>
  );
};
export const WithImageHeaderCards = () => {
  return (
    <ThemeProvider theme={CardTheme}>
      <GlobalStyle />
      <Section>
        <WithImageCard
          title='With Image'
          cardimage={CardImg}
          heading='Lorem ipsum dolor'
          subheading='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        />
      </Section>
    </ThemeProvider>
  );
};
export const WithIconPrimaryCards = () => {
  return (
    <ThemeProvider theme={CardTheme}>
      <GlobalStyle />
      <Section>
        <FixCard
          title='Icon with Fixed Height'
          imagetitle='Lorem Ipsum'
          subheading='Lorm ipsum dolor sit amet, conssectetur adisping dlit, sed do eiusmid tempor indidunt.'
          color='outlinePrimary'
          buttontitle='Lorem Ipsum'
        />
      </Section>
    </ThemeProvider>
  );
};
export const IconSecondaryCards = () => {
  return (
    <ThemeProvider theme={CardTheme}>
      <GlobalStyle />
      <Section>
        <Wrapper>
          <FixCard
            title='Icon with Fixed Height'
            imagetitle='Lorem Ipsum'
            subheading='Lorm ipsum dolor sit amet, conssectetur adisping dlit, sed do eiusmid tempor indidunt.'
            color='outlineSecondary'
            buttontitle='Lorem Ipsum'
          />
        </Wrapper>
      </Section>
    </ThemeProvider>
  );
};
export const WithIconPrimarySolidShadow = () => {
  return (
    <ThemeProvider theme={CardTheme}>
      <GlobalStyle />
      <Section>
        <WithImageSolidShadow
          title='With Image and Solid Shadow'
          color='outlinePrimary'
          subheading='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt, consectetur adipiscing elit, sed do eiusmod
              tempor, sed do eiusmod tempor.'
          buttontitle='Lorem Ipsum'
        />
      </Section>
    </ThemeProvider>
  );
};
export const WithoutIconCard = () => {
  return (
    <ThemeProvider theme={CardTheme}>
      <GlobalStyle />
      <Section>
        <WithoutIcone
          title='Without Icon'
          imagetitle='Lorem Ipsum'
          heading='dolor sit amet'
          subheading='Lorm ipsum dolor sit amet, conssectetur adisping dlit, sed do eiusmid tempor indiduntLorm ipsum dolor sit amet, conssectetur adisping dlit, sed do eiusmid tempor indiduntLorm ipsum dolor sit amet, conssectetur adisping dlit, sed do eiusmid tempor indiduntLorm ipsum dolor sit amet, conssectetur adisping dlit,'
        />
      </Section>
    </ThemeProvider>
  );
};
export const WithButtonSecondaryCards = () => {
  return (
    <ThemeProvider theme={CardTheme}>
      <GlobalStyle />
      <Section>
        <WithImageSolidShadow
          title='With Image and Solid Shadow'
          color='outlineSecondary'
          subheading='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt, consectetur adipiscing elit, sed do eiusmod
              tempor, sed do eiusmod tempor.'
          buttontitle='Lorem Ipsum'
        />
      </Section>
    </ThemeProvider>
  );
};
