import styled, { css } from 'styled-components'


export const Box = styled.div`
    text-align: center;
`
export const Flex = styled.div`
    display: flex;
`
export const ColourBox = styled(Box)`
    height: 30px;
    width: 30px
  ${props => props.boxColor && css`
    background-color: ${props.boxColor};
  `}
`