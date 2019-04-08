import styled, { css } from 'styled-components'

export const Box = styled.div`
    text-align: center;
    ${props => props.mr && css`
    margin-right: ${props.mr};
  `}
  ${props => props.ml && css`
    margin-left: ${props.ml};
  `}
`
export const TshirtFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${props => props.tshirtType && css`
    background-image: url(${props.tshirtType});;
  `}
    background-repeat: no-repeat;
    background-position: center top;
`
export const Flex = styled.div`
    display: flex;
    ${props => props.flexDirection && css`
    flex-direction: ${props.flexDirection};
  `}
  ${props => props.alignItems && css`
    align-items: ${props.alignItems};
  `}
`
export const ColourBox = styled(Box)`
    height: 30px;
    width: 40px;
  ${props => props.boxColor && css`
    background-color: ${props.boxColor};
  `}
`
export const Button = styled.button`
    width: 60px;
    height: 30px;
    background-color: steelblue;
    padding-right: 10px;
`

export const CanvasWrapperFront = styled.div`
    display: flex;
    position: relative;
    left: -2000px;
    flex-direction: row;
    overflow-x: hidden;
    ${props => props.showCanvas && css`
    left: ${props.showCanvas ? '500px' : '-2000px'};
    transition: all ease-in-out .3s;
  `}
`

export const CanvasWrapperBack = styled.div`
    display: flex;
    position: relative;
    right: 2000px;
    flex-direction: row;
    overflow-x: hidden;
    ${props => props.showCanvas && css`
    right: ${props.showCanvas ? '0px' : '2000px'};
    transition: all ease-in-out .3s;
  `}
`