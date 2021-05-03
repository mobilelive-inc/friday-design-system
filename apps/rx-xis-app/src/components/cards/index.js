import React from "react";
import { ThemeProvider } from "styled-components";
import CardTheme from "./../theme/styles/card";
import Theme from "../theme/defaultTheme";
import {
  Wrapper,
  Figure,
  Image,
  BoxShadow,
  ShadowFigure,
  Pwrapper,
  TextWrapper,
  CardWrapper,
  ShadowWrapper,
  IconeWrapper,
} from "./css";
import Text from "../../components/typography";
import GlobalStyle from "../theme/globalStyles";
import CardImg from "../../assets/images/img-01.png";
import Icon from "../icon/Icon";
import PropTypes from "prop-types";
import Button from "../Button";
import Span from "../span/span";

const Cart = ({ title, cardimage }) => {
  return (
    <ThemeProvider theme={CardTheme}>
      <Text variant="H5" my={16}>
        {title}
      </Text>
      <Figure>
        <Image src={cardimage} alt={title} />
      </Figure>
    </ThemeProvider>
  );
};
const ShadowCart = ({ title, cardimage }) => {
  return (
    <ThemeProvider theme={CardTheme}>
      <Text variant="H5" my={16}>
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
      <Text variant="H5" my={16}>
        {title}
      </Text>
      <Pwrapper>
        <Figure>
          <Image src={cardimage} alt={title} />
        </Figure>
        <TextWrapper>
          <Text variant="h4" p={16}>
            {heading}
          </Text>
          <Text variant="H6">{subheading}</Text>
        </TextWrapper>
      </Pwrapper>
    </ThemeProvider>
  );
};
const FixCard = ({ title, subheading, imagetitle }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Text variant="H5" m={7}>
        {title}
      </Text>
      <IconeWrapper>
        <Icon
          className="icon-DesignThinking"
          style={{ fontWeight: 400, fontSize: "4rem", paddingTop: "1rem" }}
        />
        <Text py={16}>{imagetitle}</Text>
        <Text variant="H6" pb={16} px={10}>{subheading}</Text>
        <Button variant="outlinePrimary" width="auto" m={10}>
          {" "}
          Lorem Ipsum{" "}
        </Button>
      </IconeWrapper>
    </ThemeProvider>
  );
};
const WithoutIcone = ({ title, heading, subheading, imagetitle }) => {
  return (
    <>
      <ThemeProvider theme={CardTheme}>
        <Text variant="H5" m={7}>
          {title}
        </Text>
        <CardWrapper>
          <Text variant="H3" mt={7}>
            {imagetitle}
          </Text>
          <Span
            style={{
              color: "#000",
              width: "90%",
              height: "2px",
              backgroundColor: "#666",
              textAlign: "center",
              margin: "2rem",
            }}
          />
          <Text variant="H4" mb={14}>
            {heading}
          </Text>
          <Text variant="H6" mb={16}>
            {subheading}
          </Text>
        </CardWrapper>
      </ThemeProvider>
    </>
  );
};
const WithImageSlideShadow = ({ title, cardimage }) => {
  return (
    <ThemeProvider theme={CardTheme}>
      <GlobalStyle />
      <Text variant="H5" m={7}>
        {title}
      </Text>
      <ShadowWrapper>
        <Icon
          className="icon-home"
          style={{ fontWeight: 400, fontSize: "8rem", color: "#46BC9C" }}
        />
        <p style={{ color: "black", paddingLeft:'16px', paddingRight:'16px' }}>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt, consectetur adipiscing elit, sed do eiusmod
          tempor, sed do eiusmod tempor.{" "}
        </p>
        <Button variant="outlinePrimary" width="auto" m={10}>
          {" "}
          Lorem Ipsum{" "}
        </Button>
      </ShadowWrapper>
    </ThemeProvider>
  );
};
const Cards = () => {
  return (
    <ThemeProvider theme={CardTheme}>
      <GlobalStyle />
      <Text variant="H1" mb={32} ml={8}>
        Cards
      </Text>
      <Wrapper>
        <Cart title="Default" cardimage={CardImg} />
        <BoxShadow>
          <Cart title="Box Shadow" cardimage={CardImg} box />
        </BoxShadow>
        <ShadowCart title="Solid Shadow" cardimage={CardImg} />
        <WithImageCard
          title="With Image"
          cardimage={CardImg}
          heading="Lorem ipsum dolor"
          subheading='"Lorem ipsum dolor sit amet, consectetur adipiscing elit"'
        />
        <FixCard
          width={40}
          title="Icon with Fixed Height"
          imagetitle="Lorem Ipsum"
          subheading="Lorm ipsum dolor sit amet, conssectetur adisping dlit, sed do eiusmid tempor indidunt."
        />
        <WithoutIcone
          title="Without Icon"
          imagetitle="Lorem Ipsum"
          heading="dolor sit amet"
          subheading="Lorm ipsum dolor sit amet, conssectetur adisping dlit, sed do eiusmid tempor indidunt."
        />
        <WithImageSlideShadow title="With Image and Solid Shadow"></WithImageSlideShadow>
      </Wrapper>
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
  height: PropTypes.number
};

export default Cards;
