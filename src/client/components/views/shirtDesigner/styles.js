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
  ${props => props.justifyContent && css`
    justify-content: ${props.justifyContent};
  `}
  ${props => props.width && css`
    width: ${props.width};
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
    margin-right: 10px;
    margin-top: 10px;
    height: 30px;
    cursor: pointer;
    padding-right: 10px;
    border-radius: 10%;
    background-color: rgb(255, 196, 0);
    text-transform: uppercase;
    color: grey;
    ${props => props.color && css`
    background-color: ${props.color};
    ${props.color === 'white' ? 'color: black' : 'color: white'};
  `}
`

export const CanvasWrapperFront = styled.div`
    display: flex;
    position: relative;
    left: -2000px;
    flex-direction: row;
    z-index: 1;
    width: 100%;
    ${props => props.showCanvas && css`
    left: ${props.showCanvas ? '20px' : '-2000px'};
    transition: all ease-in-out .3s;
  `}
`

export const CanvasWrapperLoad = styled.div`
    display: flex;
    position: relative;
    right: -2000px;
    flex-direction: row;
    width: 100%;
    ${props => props.showCanvas && css`
    right: ${props.showCanvas ? '979px' : '-2000px'};
    transition: all ease-in-out .3s;
  `}
`

export const ImgBox = styled.div`
  position: absolute;
  top: 160px;
  left: 530px;
  z-index: 999;
  > img{
     height: 320px;
     width:220px;
  }
`