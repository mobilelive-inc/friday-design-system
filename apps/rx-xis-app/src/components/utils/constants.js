import PropTypes from 'prop-types';

export const PROPS_FOR_THEME_ATTRIBUTES = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.arrayOf(PropTypes.string),
  PropTypes.number,
  PropTypes.arrayOf(PropTypes.number),
]);