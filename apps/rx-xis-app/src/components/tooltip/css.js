import styled from 'styled-components';
import {
  compose,
  border,
  layout,
  space,
  typography,
  color,
} from 'styled-system';


export const TooltipWrapper = styled.span`
  position: relative;
  cursor: pointer;
  &:hover {
    span[data-tooltip] {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const ToolTip = styled.span`
  position: absolute;
  z-index: 21;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease-out;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  min-width: 9.625rem;
  width: max-content;
  padding:10px;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  font-size: 18px;
  // margin-bottom: 1rem;
  // margin-top: 1rem;
  border-radius: ${props => (props.curved ? props.theme.borderCurved : '0px')};
  line-height: 1;
  &[data-position='top-start'],
  &[data-position='top'],
  &[data-position='top-end'] {
    bottom: 100%;
    left: 0;
    transform: translateX(0%);
    // margin-bottom: 1rem;
    &:before {
      width: 0;
      border-bottom: 0;
      border: 8px solid transparent;
      border-top: 8px solid ${props => props.backgroundColor};
      left: 1rem;
      bottom: 0;
      transform: translate(0, 100%);
    }
  };
  &[data-position='top-end'] {
    left: auto;
    right: 0;
    &:before {
      left: auto;
      right: 1rem;
    }
  }

  &[data-position='top'] {
    left: 50%;
    transform: translateX(-50%);
    &:before {
      left: 50%;
      transform: translate(-50%, 100%);
    }
  }
  &[data-position='bottom'] {
    right: -50%;
    transform: translateX(0%);
    // margin-top: -9px;
  };
  &[data-arrow='true'] {
    &:before {
      content: '';
      position: absolute;
      display: block;
    }
  };
  &[data-position='bottom'],
  &[data-position='bottom-start'],
  &[data-position='bottom-end'] {
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    // margin-top: 1rem;
    &:before {
      width: 0;
      border-top: 0;
      border: 0.6875rem solid transparent;
      border-bottom: 0.6875rem solid ${props => props.backgroundColor};
      left: 50%;
      top: 0;
      transform: translate(-50%, -100%);
    }
  };
  &[data-position='bottom-start'] {
    left: 0;
    transform: none;
    &:before {
      left: 1rem;
      transform: translate(0, -100%);
    }
  };
  &[data-position='bottom-end'] {
    left: auto;
    right: 0;
    transform: none;
    &:before {
      right: 1rem;
      left: auto;
      transform: translate(0, -100%);
    }
  };
  &[data-position='left-start'],
  &[data-position='left'],
  &[data-position='left-end'] {
    top: 0;
    right: 100%;
    margin-right: 1rem;
    &:before {
      width: 0;
      border-right: 0;
      border: 0.6875rem solid transparent;
      border-left: 0.6875rem solid ${props => props.backgroundColor};
      left: 100%;
      top: 50%;
      transform: translate(0, -50%);
    }
  };

  &[data-position='left'] {
    top: 50%;
    transform: translateY(-50%);
  };

  &[data-position='left-end'] {
    bottom: 0;
    top: auto;
  };
  &[data-position='right-start'],
  &[data-position='right'],
  &[data-position='right-end'] {
    top: 0;
    left: 100%;
    margin-left: 1rem;
    &:before {
      width: 0;
      border-left: 0;
      border: 0.6875rem solid transparent;
      border-right: 0.6875rem solid ${props => props.backgroundColor};
      right: 100%;
      top: 50%;
      transform: translate(0, -50%);
    }
  }

  &[data-position='right'] {
    top: 50%;
    transform: translateY(-50%);
  }

  &[data-position='right-end'] {
    bottom: 0;
    top: auto;
  };
  ${props => props.withArrow && `
  &:before {
    width: 0;
    left: 45%;
    bottom: 0;
    border: 1px solid transparent;
    border-bottom: 0;
    border-top: 8px solid black;
    transform: translate(
    calc(-50% + calc(1rem / 2)),
      100%
    );
    
  }
  `};
  ${
  compose(border, layout, space, typography, color)
}
`