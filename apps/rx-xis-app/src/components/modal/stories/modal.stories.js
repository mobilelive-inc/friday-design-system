import React from "react";
import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "styled-components";
import ReactDOM from "react-dom";
import Text from "../../typography";
import modalTheme from "../../theme/styles/modal";
import GlobalStyle from "../../theme/globalStyles";
import Modalcomp, { ScrollModal } from "..";

export default {
  title: "Modal",
  component: Modalcomp,
};
 const Xl = '1089px';
 const Lg = '864px';
 const Md = '576px';
 const Sm = '300px';


export const Modal = () => (
  <ThemeProvider theme={modalTheme}>
    <GlobalStyle />
    <Modalcomp
      width={Sm}
      title="Small"
      heading="What is cupcake? This is a title."
      text="standard cupcake uses the same basic ingredients as
                standard-sized cakes: butter, sugar, eggs, and flour. Nearly any
                recipe that is suitable for a layer cake can be used to bake
                cupcakes. The cake batter used for cupcakes may be flavored or
                have other ingredients stirred in, such as raisins, berries,
                nuts, or chocolate chips. standard cupcake uses the same basic
                ingredients as standard-sized cakes: butter, sugar, eggs, and
                flour. Nearly any recipe that is suitable for a layer cake can
                be used to bake cupcakes. The cake batter used for cupcakes may
                be flavored or have other ingredients stirred in, such as
                raisins, berries, nuts, or chocolate chips."
    />
    <Modalcomp
      width={Md}
      title="Medium"
      heading="What is cupcake? This is a title."
      text="standard cupcake uses the same basic ingredients as
                  standard-sized cakes: butter, sugar, eggs, and flour. Nearly any
                  recipe that is suitable for a layer cake can be used to bake
                  cupcakes. The cake batter used for cupcakes may be flavored or
                  have other ingredients stirred in, such as raisins, berries,
                  nuts, or chocolate chips. standard cupcake uses the same basic
                  ingredients as standard-sized cakes: butter, sugar, eggs, and
                  flour. Nearly any recipe that is suitable for a layer cake can
                  be used to bake cupcakes. The cake batter used for cupcakes may
                  be flavored or have other ingredients stirred in, such as
                  raisins, berries, nuts, or chocolate chips."
    />
    <Modalcomp
      width={Lg}
      title="Large"
      heading="What is cupcake? This is a title."
      text="standard cupcake uses the same basic ingredients as
                  standard-sized cakes: butter, sugar, eggs, and flour. Nearly any
                  recipe that is suitable for a layer cake can be used to bake
                  cupcakes. The cake batter used for cupcakes may be flavored or
                  have other ingredients stirred in, such as raisins, berries,
                  nuts, or chocolate chips. standard cupcake uses the same basic
                  ingredients as standard-sized cakes: butter, sugar, eggs, and
                  flour. Nearly any recipe that is suitable for a layer cake can
                  be used to bake cupcakes. The cake batter used for cupcakes may
                  be flavored or have other ingredients stirred in, such as
                  raisins, berries, nuts, or chocolate chips."
    />
     <Modalcomp
      width={Xl}
      title="Extra Large"
      heading="What is cupcake? This is a title."
      text="standard cupcake uses the same basic ingredients as
                  standard-sized cakes: butter, sugar, eggs, and flour. Nearly any
                  recipe that is suitable for a layer cake can be used to bake
                  cupcakes. The cake batter used for cupcakes may be flavored or
                  have other ingredients stirred in, such as raisins, berries,
                  nuts, or chocolate chips. standard cupcake uses the same basic
                  ingredients as standard-sized cakes: butter, sugar, eggs, and
                  flour. Nearly any recipe that is suitable for a layer cake can
                  be used to bake cupcakes. The cake batter used for cupcakes may
                  be flavored or have other ingredients stirred in, such as
                  raisins, berries, nuts, or chocolate chips."
    />
  </ThemeProvider>
);
export const ScrollBarModal = () => (
  <ThemeProvider theme={modalTheme}>
    <GlobalStyle />
    <Modalcomp
      width={Md}
      title="Inner Scrollbar"
      heading="What is cupcake? This is a title."
      text="Because their small size is more efficient for heat conduction, cupcakes bake much faster than a normal layered cake.[7] During baking, the volume of the batter initially increases due to the production of carbon dioxide, then decreases upon cooling due to the release of leavening gases.
      A standard cupcake uses the same basic ingredients as standard-sized cakes: butter, sugar, eggs, and flour. Nearly any recipe that is suitable for a layer cake can be used to bake cupcakes. The cake batter used for cupcakes may be flavored or have other ingredients stirred in, such as raisins, berries, nuts, or chocolate chips.
      Because their small size is more efficient for heat conduction, cupcakes bake much faster than a normal layered cake.[7] During baking, the volume of the batter initially increases due to the production of carbon dioxide, then decreases upon cooling due to the release of leavening gases."
    />
    <ScrollModal
      width={Md}
      title="Scrollbar"
      heading="What is cupcake? This is a title."
      firsttitle="this is first Title"
      firsttext="A standard cupcake uses the same basic ingredients as standard-sized cakes. Choose your toppings."
      option1="Option 1"
      option2="Option 2"
      option3="Option 3"
      secondtitle="this is second Title"
      secondtext="A standard cupcake uses the same basic ingredients as standard-sized cakes. Choose your toppings. A standard cupcake uses the same basic ingredients as standard-sized cakes: butter, sugar, eggs, and flour. Nearly any recipe that is suitable for a layer cake can be used to bake cupcakes. The cake batter used for cupcakes may be flavored or have other ingredien"
    />
  </ThemeProvider>
);
