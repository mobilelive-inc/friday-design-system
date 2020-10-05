/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import {
  BaseSelect, SelectWrapper, RightIconButton, LeftIconButton, ChevronDownIcon, ValidationIcon
} from './css';
import Text from '../typography';
import Option from '../option';



const Select = (props) => {
  const {
    children,
    width,
    id,
    name,
    value,
    placeholder,
    onRightIconButtonClick,
    rightIcon,
    errorMessage,
    leftIcon,
    onLeftIconClick,
    borderType,
    withBorderBottomOnly,
    validationIcon,
    isValid,
    chevron,
    onChange,
    ...restProps
  } = props;
  return (
    <>
      <SelectWrapper width={width} leftIcon={leftIcon}>
        {
          leftIcon && (
            <LeftIconButton onClick={onLeftIconClick}>
              <span className={leftIcon}/>
            </LeftIconButton>
          )
        }
        <BaseSelect
          {...restProps}
          id={id}
          name={name}
          value={value}
          error={errorMessage}
          borderType={borderType}
          withBorderBottomOnly={withBorderBottomOnly}
          onChange={onChange}>
          {placeholder && <Option>{placeholder}</Option>}
          {children}
        </BaseSelect>
        {
          chevron && <ChevronDownIcon className={chevron}/>
        }
        {
          rightIcon && (
            <RightIconButton onClick={onRightIconButtonClick}>
              <span className={rightIcon}/>
            </RightIconButton>
          )
        }
        {
          validationIcon && (
            <ValidationIcon className={validationIcon} isValid={isValid}/>
          )
        }
      </SelectWrapper>
      {
        errorMessage && (
          <Text
            position="absolute"
            as="p"
            color={errorMessage ? "error":"black"}
            fontSize="10px"
            lineHeight="1px"
            pl={3}
            mt={17}
            pt={0}>{errorMessage}</Text>
        )
      }
    </>
  )
}

Select.defaultProps = {
  disabled: false,
  fontSize: [2, 3],
  lineHeight: [4],
  m: [0],
  fontWeight: [3],
  width: [1],
  textAlign: ['center'],
  borderRadius: [0],
  onClick: () => {},
  withIcon: false,
};

Select.propTypes = {
  /** Need to be instances of Option component */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  /** Option to disable select */
  disabled: PropTypes.bool,
  /** borderType consumes borderCurved and borderRounded variables from Theme file */
  borderType: PropTypes.oneOf(['curved', 'rounded']),
  /** Defines font size of child elements. Accepts responsive value from theme */
  fontSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  /** Defines line height of child elements. Accepts responsive value from theme */
  lineHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  /** Defines font weight of child elements. Accepts responsive value from theme */
  fontWeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  /** Defines width of button. Accepts responsive value from theme */
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  /** Defines height of button. Accepts responsive value from theme */
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  /** textAlign property specifies the horizontal
   * alignment of text in an element. Accepts responsive value from theme */
  textAlign: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  /** Defines border radius on the button. Accepts responsive value from theme. */
  borderRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  /** Defines button's border. It's a shorthand for border-width, border-style, and border-color.  */
  border: PropTypes.string,
  borderX: PropTypes.string,
  borderY: PropTypes.string,
  color: PropTypes.string,
  /** Shorthand to add margin to button. ml, mr, mt, mb, my and mx are also supported to
   * to add margins on left, right, top, bottom, y-axis and x-axis respectively.
   * Accepts responsive value from theme
   */
  m: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  /** Shorthand to add padding to button. pl, pr, pt, pb, py and px are also supported to
   * to add paddings on left, right, top, bottom, y-axis and x-axis respectively.
   * Accepts responsive value from theme
   */
  p: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
};


export default Select;