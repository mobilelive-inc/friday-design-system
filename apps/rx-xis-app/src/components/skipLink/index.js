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
  href: PropTypes.string.isRequired,
  background: PropTypes.string,
  color: PropTypes.string,
  focusableID: PropTypes.string,
  title: PropTypes.string,
  m: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  p: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  fontSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  top: PropTypes.number,
  border: PropTypes.string
};

export default SkipLink;
