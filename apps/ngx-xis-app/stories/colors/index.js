import React from 'react';
import styled from 'styled-components';
import {
  compose,
  background,
  border,
  flexbox,
  position,
  shadow,
} from 'styled-system';
import {
  Flex as BaseFlex, Box as BaseBox
} from 'rebass/styled-components';

/**
 * Rebass Flex with additional support
 */

const Flex = styled(BaseFlex)(
  compose(
    border,
    background,
    flexbox,
    position,
    shadow,
  ),
);

export const Box = styled(BaseBox)(
  compose(
    border,
    background,
    flexbox,
    position,
    shadow,
  ),
);

const colors = [
  {
    name:"Primary",
    key:'primary',
    code: '#F48245'
  },
  {
    name:"Secondary",
    key:'secondary',
    code: '#707070'
  },
  {
    name:"Success",
    key:'success',
    code: '#34A84D'
  },
  {
    name:"Info",
    key:'info',
    code: "#66C9D5"
  },
  {
    name:"Warning",
    key:'warning',
    code: "#ffc107"
  },
  {
    name:"Danger",
    key:'danger',
    code: "#DF4B4B"
  },
  {
    name:"Light",
    key:'light',
    code: "#F2F2F2"
  }
]


const Colors = () => {
  return (
    <div
      style={{
        fontFamily:'"Noto Sans", sans-serif'
      }}>
      <Flex
        pl={["0px", "25%"]}>
        <h3>Sirius</h3>
      </Flex>
      <Flex
        color="gray"
        px={["0px", "25%"]}>
        <p>
          {
            `Colors are designed to communicate actions, state and direction within the interface. We provide light and dark color modes. However, the shape of the colors object is same for each mode.
             This allows us to build components with a consistent API.`
          }
        </p>
      </Flex>

      <Flex
        px={["0px", "25%"]}>
        <Box width="30%">
          Name
        </Box>
        <Box width="70%">
          Swatches
        </Box>
      </Flex>
      {
        colors.map((color) => {
          return (
            <Flex
              px={["0px", "25%"]}
              key={`color-Swatch-${color.code}`}
              mt="30px">
              <Box width="30%">
                <Flex>
                  <span>
                    {`theme.colors.${color.key}`}
                  </span>
                </Flex>
                <Flex>
                  <span
                    style={{
                      marginTop:'5px', color:'gray'
                    }}>
                    {`Color - ${color.name}`}
                  </span>
                </Flex>
              </Box>
              <Box width="70%">
                <Flex
                  style={{
                    height:'50px', backgroundColor:color.code
                  }} />
                <Flex
                  alignItems="center"
                  justifyContent="center">
                  <span
                    style={{
                      marginTop:'5px', color:'gray'
                    }}>
                    {color.code}
                  </span>
                </Flex>
              </Box>
            </Flex>
          )
        })
      }
    </div>
  )
}

export default Colors;