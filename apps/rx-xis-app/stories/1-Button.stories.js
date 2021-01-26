import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from '../src/components/Button';
import Span from '../src/components/span/span';
import Icon from '../src/components/icon/Icon';
import theme from '../src/components/theme/defaultTheme';
import '../src/components/icomoon_icons.css';
import { Flex } from './getStarted';
import { Box } from './colors';

export default {
  title: 'Button',
  component: Button
};

export const PrimaryButton = () => (
  <ThemeProvider theme={theme}>
    <Button variant="primary" width="15%" m={10}>
      Primary
    </Button>
    <Button variant="secondary" width="15%" m={10}>
      Secondary
    </Button>
    <Button variant="success" width="15%" m={10}>
      Success
    </Button>
    <Button variant="danger" width="15%" m={10}>
      Danger
    </Button>
    <Button variant="warning" width="15%" m={10}>
      Warning
    </Button>
    <Button variant="info" width="15%" m={10}>
      Info
    </Button>
    <Button variant="light" width="15%" m={10}>
      Light
    </Button>
    <Button variant="dark" width="15%" m={10}>
      Dark
    </Button>
    <Button variant="disabled" disabled width="15%" m={10}>
      Disabled
    </Button>
  </ThemeProvider>
);

export const ClearButton = () => (
  <ThemeProvider theme={theme}>
    <Button variant="clearPrimary" width="15%" m={10}>
      Primary
    </Button>
    <Button variant="clearSecondary" width="15%" m={10}>
      Secondary
    </Button>
    <Button variant="clearSuccess" width="15%" m={10}>
      Success
    </Button>
    <Button variant="clearDanger" width="15%" m={10}>
      Danger
    </Button>
    <Button variant="clearWarning" width="15%" m={10}>
      Warning
    </Button>
    <Button variant="clearInfo" width="15%" m={10}>
      Info
    </Button>
    <Button variant="clearLight" width="15%" m={10}>
      Light
    </Button>
    <Button variant="clearDark" width="15%" m={10}>
      Dark
    </Button>
    <Button variant="clearDisabled" disabled width="15%" m={10}>
      Disabled
    </Button>
  </ThemeProvider>
);

export const RoundedButtons = () => (
  <ThemeProvider theme={theme}>
    <Button variant="primary" borderType="rounded" width="15%" m={10}>
      Primary
    </Button>
    <Button variant="secondary" borderType="rounded" width="15%" m={10}>
      Secondary
    </Button>
    <Button variant="success" borderType="rounded" width="15%" m={10}>
      Success
    </Button>
    <Button variant="danger" borderType="rounded" width="15%" m={10}>
      Danger
    </Button>
    <Button variant="warning" borderType="rounded" width="15%" m={10}>
      Warning
    </Button>
    <Button variant="info" borderType="rounded" width="15%" m={10}>
      Info
    </Button>
    <Button variant="light" borderType="rounded" width="15%" m={10}>
      Light
    </Button>
    <Button variant="dark" borderType="rounded" width="15%" m={10}>
      Dark
    </Button>
    <Button variant="disabled" borderType="rounded" disabled width="15%" m={10}>
      Disabled
    </Button>
  </ThemeProvider>
);

// eslint-disable-next-line react/no-multi-comp
export const OutlineButtons = () => (
  <ThemeProvider theme={theme}>
    <Button variant="outlinePrimary" width="15%" m={10}>
      Primary
    </Button>
    <Button variant="outlineSecondary" width="15%" m={10}>
      Secondary
    </Button>
    <Button variant="outlineSuccess" width="15%" m={10}>
      Success
    </Button>
    <Button variant="outlineDanger" width="15%" m={10}>
      Danger
    </Button>
    <Button variant="outlineWarning" width="15%" m={10}>
      Warning
    </Button>
    <Button variant="outlineInfo" width="15%" m={10}>
      Info
    </Button>
    <Button variant="outlineLight" width="15%" m={10}>
      Light
    </Button>
    <Button variant="outlineDark" width="15%" m={10}>
      Dark
    </Button>
    <Button variant="outlineDisabled" disabled width="15%" m={10}>
      Disabled
    </Button>
  </ThemeProvider>
);

// eslint-disable-next-line react/no-multi-comp
export const CurvedOutlineButtons = () => (
  <ThemeProvider theme={theme}>
    <Button variant="outlinePrimary" borderType="curved" width="15%" m={10}>
      Primary
    </Button>
    <Button variant="outlineSecondary" borderType="curved" width="15%" m={10}>
      Secondary
    </Button>
    <Button variant="outlineSuccess" borderType="curved" width="15%" m={10}>
      Success
    </Button>
    <Button variant="outlineDanger" borderType="curved" width="15%" m={10}>
      Danger
    </Button>
    <Button variant="outlineWarning" borderType="curved" width="15%" m={10}>
      Warning
    </Button>
    <Button variant="outlineInfo" borderType="curved" width="15%" m={10}>
      Info
    </Button>
    <Button variant="outlineLight" borderType="curved" width="15%" m={10}>
      Light
    </Button>
    <Button variant="outlineDark" borderType="curved" width="15%" m={10}>
      Dark
    </Button>
    <Button
      variant="outlineDisabled"
      borderType="curved"
      disabled
      width="15%"
      m={10}>
      Disabled
    </Button>
  </ThemeProvider>
);

export const CurvedButtons = () => (
  <ThemeProvider theme={theme}>
    <Button variant="primary" borderType="curved" width="15%" m={10}>
      Primary
    </Button>
    <Button variant="secondary" borderType="curved" width="15%" m={10}>
      Secondary
    </Button>
    <Button variant="success" borderType="curved" width="15%" m={10}>
      Success
    </Button>
    <Button variant="danger" borderType="curved" width="15%" m={10}>
      Danger
    </Button>
    <Button variant="warning" borderType="curved" width="15%" m={10}>
      Warning
    </Button>
    <Button variant="info" borderType="curved" width="15%" m={10}>
      Info
    </Button>
    <Button variant="light" borderType="curved" width="15%" m={10}>
      Light
    </Button>
    <Button variant="dark" borderType="curved" width="15%" m={10}>
      Dark
    </Button>
    <Button variant="disabled" borderType="curved" disabled width="15%" m={10}>
      Disabled
    </Button>
  </ThemeProvider>
);

// eslint-disable-next-line react/no-multi-comp
export const RoundedOutlineButtons = () => (
  <ThemeProvider theme={theme}>
    <Button variant="outlinePrimary" borderType="rounded" width="15%" m={10}>
      Primary
    </Button>
    <Button variant="outlineSecondary" borderType="rounded" width="15%" m={10}>
      Secondary
    </Button>
    <Button variant="outlineSuccess" borderType="rounded" width="15%" m={10}>
      Success
    </Button>
    <Button variant="outlineDanger" borderType="rounded" width="15%" m={10}>
      Danger
    </Button>
    <Button variant="outlineWarning" borderType="rounded" width="15%" m={10}>
      Warning
    </Button>
    <Button variant="outlineInfo" borderType="rounded" width="15%" m={10}>
      Info
    </Button>
    <Button variant="outlineLight" borderType="rounded" width="15%" m={10}>
      Light
    </Button>
    <Button variant="outlineDark" borderType="rounded" width="15%" m={10}>
      Dark
    </Button>
    <Button
      variant="outlineDisabled"
      borderType="rounded"
      disabled
      width="15%"
      m={10}>
      Disabled
    </Button>
  </ThemeProvider>
);

export const FilledSocialButtons = () => (
  <ThemeProvider theme={theme}>
    <Button variant="filledGoogleRed" withIcon width="15%" m={10}>
      <Icon className="icon-google" />
      Google
    </Button>
    <Button variant="filledFacebook" withIcon width="15%" m={10}>
      <Icon className="icon-facebook" />
      Facebook
    </Button>
    <Button variant="filledTwitter" withIcon width="15%" m={10}>
      <Icon className="icon-twitter" />
      Twitter
    </Button>
    <Button variant="filledLinkedIn" withIcon width="15%" m={10}>
      <Icon className="icon-linkedin" />
      LinkedIn
    </Button>
    <Button variant="filledInstagram" withIcon width="15%" m={10}>
      <Icon className="icon-instagram" />
      Instagram
    </Button>
    <Button variant="filledGoogleBlue" withIcon width="15%" m={10}>
      <Icon className="icon-google" />
      Sign-up with Google
    </Button>
    <Button variant="filledFacebook" withIcon width="15%" m={10}>
      <Icon className="icon-facebook" />
      Sign-up with Facebook
    </Button>
    <Button variant="filledTwitter" withIcon width="15%" m={10}>
      <Icon className="icon-twitter" />
      Sign-up with Twitter
    </Button>
    <Button variant="filledLinkedIn" withIcon width="15%" m={10}>
      <Icon className="icon-linkedin" />
      Sign-up with LinkedIn
    </Button>
    <Button variant="filledInstagram" withIcon width="15%" m={10}>
      <Icon className="icon-instagram" />
      Sign-up with Instagram
    </Button>
  </ThemeProvider>
);

export const OutlineSocialButtons = () => (
  <ThemeProvider theme={theme}>
    <Button variant="outlineGoogleRed" withIcon width="15%" m={10}>
      <Icon className="icon-google" />
      Google
    </Button>
    <Button variant="outlineFacebook" withIcon width="15%" m={10}>
      <Icon className="icon-facebook" />
      Facebook
    </Button>
    <Button variant="outlineTwitter" withIcon width="15%" m={10}>
      <Icon className="icon-twitter" />
      Twitter
    </Button>
    <Button variant="outlineLinkedIn" withIcon width="15%" m={10}>
      <Icon className="icon-linkedin" />
      LinkedIn
    </Button>
    <Button variant="outlineInstagram" withIcon width="15%" m={10}>
      <Icon className="icon-instagram" />
      Instagram
    </Button>
    <Button variant="outlineGoogleBlue" withIcon width="15%" m={10}>
      <Icon className="icon-google" />
      Sign-up with Google
    </Button>
    <Button variant="outlineFacebook" withIcon width="15%" m={10}>
      <Icon className="icon-facebook" />
      Sign-up with Facebook
    </Button>
    <Button variant="outlineTwitter" withIcon width="15%" m={10}>
      <Icon className="icon-twitter" />
      Sign-up with Twitter
    </Button>
    <Button variant="outlineLinkedIn" withIcon width="15%" m={10}>
      <Icon className="icon-linkedin" />
      Sign-up with LinkedIn
    </Button>
    <Button variant="outlineInstagram" withIcon width="15%" m={10}>
      <Icon className="icon-instagram" />
      Sign-up with Instagram
    </Button>
  </ThemeProvider>
);

// eslint-disable-next-line react/no-multi-comp
export const ButtonsWithIcons = () => (
  <ThemeProvider theme={theme}>
    <Flex>
      <Box width={1 / 6} mr={10}>
        <Button variant="outlinePrimary" m="10px" withIcon display="flex">
          <Span iconMarginRight className="icon-accuracy" />
          Primary
        </Button>
      </Box>
      <Box width={1 / 6} mr={10}>
        <Button variant="outlineSecondary" m="10px" withIcon display="flex">
          <Span iconMarginRight className="icon-cloud-architecture" />
          Secondary
        </Button>
      </Box>
      <Box width={1 / 6} mr={10}>
        <Button variant="outlineSuccess" m="10px" withIcon display="flex">
          <Span iconMarginRight className="icon-cloud-architecture" />
          Success
          <Span iconMarginLeft className="icon-favorite_24px" />
        </Button>
      </Box>
      <Box width={1 / 6} mr={10}>
        <Button variant="outlineDanger" m="10px" withIcon display="flex">
          <Span iconMarginRight className="icon-check_circle_outline_24px" />
          Danger
          <Span iconMarginLeft className="icon-info_24px" />
        </Button>
      </Box>
    </Flex>
  </ThemeProvider>
);

// eslint-disable-next-line react/no-multi-comp
export const iconOnlyButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <Flex>
        <Box>
          <Button
            variant="iconBtn"
            backgroundColor="black"
            color="white"
            withIcon
            m="10px"
            width="40px">
            <Span className="icon-info_24px" />
          </Button>
        </Box>
        <Box>
          <Button
            variant="iconBtn"
            border="2px solid black"
            withIcon
            m="10px"
            width="40px">
            <Span className="icon-delete_24px" />
          </Button>
        </Box>
        <Box>
          <Button variant="iconBtn" withIcon m="10px" width="40px">
            <Span className="icon-delete_24px" />
          </Button>
        </Box>
      </Flex>
    </ThemeProvider>
  );
};

// eslint-disable-next-line react/no-multi-comp
export const buttonsAsTooltips = () => {
  return (
    <ThemeProvider theme={theme}>
      <Flex>
        <Box ml={12}>
          <Button variant="link" width="8%" m="10px" withIcon display="flex">
            <Span iconMarginRight className="icon-info_24px" />
            Info
          </Button>
        </Box>
        <Box ml={12}>
          <Button variant="link" width="8%" m="10px" withIcon display="flex">
            <Span iconMarginRight className="icon-delete_24px" />
            Delete
          </Button>
        </Box>
      </Flex>
    </ThemeProvider>
  );
};
