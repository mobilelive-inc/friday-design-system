import React from "react";
import { ThemeProvider } from "styled-components";
import CardTheme from "./../theme/styles/card";
import Theme from "../theme/defaultTheme";
import {
  Wrapper,
  Figuare,
  Image,
  BoxShadow,
  SolidShadow,
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
      <Figuare>
        <Image src={cardimage} alt={title} />
      </Figuare>
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
        <Figuare>
          <Image src={cardimage} alt={title} />
        </Figuare>
        <TextWrapper>
          <Text variant="h4" m="spacerMid">
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
      <Text variant="H5" m={7}>
        {title}
      </Text>
      <IconeWrapper>
        <Icon
          className="icon-DesignThinking"
          style={{ fontWeight: 400, fontSize: "4rem", paddingTop: "1rem" }}
        />
        <Text>{imagetitle}</Text>
        <Text variant="H6">{subheading}</Text>
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
              width: "95%",
              height: "2px",
              backgroundColor: "#666",
              textAlign: "center",
              margin: "2rem",
              // marginBottom: "1rem",
            }}
          />
          <Text variant="H4" m={7}>
            {heading}
          </Text>
          <Text variant="H6" mb={7}>
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
      <Text variant="H5" m={7}>
        {title}
      </Text>
      <ShadowWrapper>
        <Icon
          className="icon-home"
          style={{ fontWeight: 400, fontSize: "8rem", color: "#46BC9C" }}
        />
        <p style={{ color: "black" }}>
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
        <SolidShadow>
          <Cart title="Solid Shadow" cardimage={CardImg} />
        </SolidShadow>
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
};

export default Cards;
