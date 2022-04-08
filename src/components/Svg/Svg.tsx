import styled, { css, keyframes } from 'styled-components'
import { space } from 'styled-system'
import { SvgProps } from './types'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const spinStyle = css`
  animation: ${rotate} 2s linear infinite;
`

const Svg = styled.svg<SvgProps>`
  fill: ${({ fillColor }) => fillColor};
  flex-shrink: 0;

  ${({ spin }) => spin && spinStyle}
  ${space}
`

Svg.defaultProps = {}

export default Svg
