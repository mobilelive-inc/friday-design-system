import React from 'react';
import { StyledLink } from './css';
import { colors } from './../theme/colors';
import PropTypes from 'prop-types';

const SkipLink = ({ focusableID, title, ...props }) => {
  // Need Id where we want to move the focus
  const focusToNext = () => {
    const element = document.getElementById(focusableID);
    if (element) {
      element.focus();
    } else {
      console.log(`The Id: '${focusableID}' is not available`);
    }
  };

  return (
    <StyledLink
      {...props}
      onKeyDown={e => {
        if (e.keyCode === 13) {
          focusToNext();
        }
      }}
      onClick={focusToNext}>
      {title || ``}
    </StyledLink>
  );
};

SkipLink.defaultProps = {
  background: colors.primary,
  color: colors.white,
  pt: [1],
  pb: [1],
  pl: [3],
  pr: [3],
  position: 'absolute',
  border: 'none',
  fontSize: [3],
  top: 90
};

SkipLink.propTypes = {
  /** If you want to open any link by clicking on that otherwise pass # in it */
  href: PropTypes.string.isRequired,
  /** Change the background */
  background: PropTypes.string,
  /** Change text color */
  color: PropTypes.string,
  /** That Id where to want focus after skiping*/
  focusableID: PropTypes.string,
  /** title of that button */
  title: PropTypes.string,
  /** use for margin */
  m: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  /** use for padding */
  p: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  /** use for fontside */
  fontSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  /** set position from top */
  top: PropTypes.number,
  /** border styling */
  border: PropTypes.string
};

export default SkipLink;
