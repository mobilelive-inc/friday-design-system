import { _fontSizes } from '../properties/fontSizes';
import { _sizes } from '../properties/sizes';
import { stepper, stepperWrapper } from '../variants/stepper';

const fontSizes = {
  stepperStatusFontSize: _fontSizes.fontSizeBase
};

const sizes = {
  stepperOverallWidth: _sizes.size_100pc,
  stepperOverallHeight: _sizes.size_1_25rem
};

export default {
  fontSizes,
  sizes,
  stepper,
  stepperWrapper
};
