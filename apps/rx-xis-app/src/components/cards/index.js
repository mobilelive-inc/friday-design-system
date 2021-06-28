import React from 'react';
import { ThemeProvider } from 'styled-components';
import CardTheme from './../theme/styles/card';
import {
  Figure,
  Image,
  ShadowFigure,
  Pwrapper,
  TextWrapper,
  CardWrapper,
  ShadowWrapper,
  IconeWrapper,
  Col,
} from './css';
import Text from '../../components/typography';
import GlobalStyle from '../theme/globalStyles';
import CardImg from '../../assets/images/img-01.png';
import Icon from '../icon/Icon';
import PropTypes from 'prop-types';
import Button from '../Button';
import Span from '../span/span';

const Card = ({ title, cardimage }) => {
  return (
    <ThemeProvider theme={CardTheme}>
      <Text variant='H5' my={16}>
        {title}
      </Text>
      <Figure>
        <Image src={cardimage} alt={title} />
      </Figure>
    </ThemeProvider>
  );
};
const ShadowCard = ({ title, cardimage }) => {
  return (
    <ThemeProvider theme={CardTheme}>
      <Text variant='H5' my={16}>
        {title}
      </Text>
      <ShadowFigure>
        <Image src={cardimage} alt={title} />
      </ShadowFigure>
    </ThemeProvider>
  );
};
const WithImageCard = ({ title, cardimage, subheading, heading }) => {
  return (
    <ThemeProvider theme={CardTheme}>
      <Text variant='H5' my={16}>
        {title}
      </Text>
      <Pwrapper>
        <Figure>
          <Image src={cardimage} alt={title} />
        </Figure>
        <TextWrapper>
          <Text variant='h4' p={16}>
            {heading}
          </Text>
          <Text variant='H6'>{subheading}</Text>
        </TextWrapper>
      </Pwrapper>
    </ThemeProvider>
  );
};
const FixCard = ({
  title,
  subheading,
  imagetitle,
  color,
  buttontitle,
}) => {
  return (
    <ThemeProvider theme={CardTheme}>
      <GlobalStyle />
      <Text variant='H5' p={16}>
        {title}
      </Text>
      <IconeWrapper>
        <Icon
          className='icon-DesignThinking'
          style={{ fontWeight: 400, fontSize: '4rem', paddingTop: '1.5rem' }}
        />
        <Text py={16}>{imagetitle}</Text>
        <Text variant='H6' pb={16} px={10}>
          {subheading}
        </Text>
        <Button variant={color} width='auto' m={16}>
          {buttontitle}
        </Button>
      </IconeWrapper>
    </ThemeProvider>
  );
};
const WithoutIcone = ({ title, heading, subheading, imagetitle }) => {
  return (
    <>
      <ThemeProvider theme={CardTheme}>
        <GlobalStyle />
        <Text variant='H5' p={16}>
          {title}
        </Text>
        <CardWrapper>
          <Text variant='H3' mt={16}>
            {imagetitle}
          </Text>
          <Span
            style={{
              color: '#000',
              width: '80%',
              height: '2px',
              backgroundColor: '#666',
              textAlign: 'center',
              marginTop: '22px',
              marginBottom: '22px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
          <Text variant='H4' mb={16}>
            {heading}
          </Text>
          <Text m={16}>{subheading}</Text>
        </CardWrapper>
      </ThemeProvider>
    </>
  );
};
const WithImageSolidShadow = ({
  title,
  cardimage,
  color,
  subheading,
  buttontitle,
}) => {
  return (
    <ThemeProvider theme={CardTheme}>
      <GlobalStyle />
      <Text variant='H5' p={16}>
        {title}
      </Text>
      <ShadowWrapper>
        <Icon
          className='icon-home'
          style={{ fontWeight: 400, fontSize: '8rem', color: '#46BC9C' }}
        />
        <Text
          style={{ color: 'black', paddingLeft: '16px', paddingRight: '16px' }}
        >
          {subheading}
        </Text>
        <Button variant={color} width='auto' m={10}>
          {buttontitle}
        </Button>
      </ShadowWrapper>
    </ThemeProvider>
  );
};
const Cards = () => {
  return (
    <ThemeProvider theme={CardTheme}>
      <GlobalStyle />
      <Col>
        <WithImageCard
          title='With Image'
          cardimage={CardImg}
          heading='Lorem ipsum dolor'
          subheading='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        />
      </Col>
    </ThemeProvider>
  );
};

Cards.propTypes = {
  /** Allows to nest any components inside <Cards> component. This is the place where to < WithImageCard >, < FixCard>, < WithoutIcone>, < WithImageSlideShadow>.*/
  children: PropTypes.func,
  /** Allows to change the default font color by passing a new value. */
  fontColor: PropTypes.string,
  /** Allows to pass extra styles to the component */
  CardTheme: PropTypes.string,
  /** to title pass any text for card title */
  title: PropTypes.string,
  /** Allows to pass the image URL which will be rendered inside the component. */
  cardimg: PropTypes.string,
  /** Allows to render child elements inside the <Cards> component. Perfect section to place h1, h2, h3, etc tags. */
  heading: PropTypes.string,
  /** Global style to set the golbal color fontSize height width etc*/
  GlobalStyle: PropTypes.string,
  /** For add padding to main component */
  p: PropTypes.number,
  /** For add top padding to main component */
  pt: PropTypes.number,
  /** For add bottom padding to main component */
  pb: PropTypes.number,
  /** For add left padding to main component */
  pl: PropTypes.number,
  /** For add right padding to main component */
  pr: PropTypes.number,
  /** For add left & right padding to main component */
  px: PropTypes.number,
  /** For add top & bottom padding to main component */
  py: PropTypes.number,
  /** For add margin to main component */
  m: PropTypes.number,
  /** For add top margin to main component */
  mt: PropTypes.number,
  /** For add bottom margin to main component */
  mb: PropTypes.number,
  /** For add left margin to main component */
  ml: PropTypes.number,
  /** For add right margin to main component */
  mr: PropTypes.number,
  /** For add left & right margin to main component */
  mx: PropTypes.number,
  /** For add top & bottom margin to main component */
  my: PropTypes.number,
  /** For giving width to main component */
  width: PropTypes.number,
  /** For giving height to main component */
  height: PropTypes.number,
};

export { Cards, WithImageSolidShadow, WithoutIcone, FixCard, WithImageCard, ShadowCard, Card }
