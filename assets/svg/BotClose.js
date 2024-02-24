import * as React from "react"
import Svg, { Circle, Rect, Path } from "react-native-svg"

function BotClose(props) {
  return (
    <Svg
      width={70}
      height={27}
      viewBox="0 0 70 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={9.42307} cy={21.5385} r={4.71154} fill="#252525" />
      <Circle cx={30.9615} cy={21.5385} r={4.71154} fill="#252525" />
      <Rect
        x={20.1923}
        width={4.71154}
        height={12.7885}
        rx={2.35577}
        fill="#fff"
      />
      <Rect
        y={10.0962}
        width={40.3846}
        height={11.4423}
        rx={5}
        fill="#BE3030"
      />
      <Circle
        cx={6.73077}
        cy={6.73077}
        r={5.23077}
        transform="matrix(1 0 0 -1 56.538 21.538)"
        stroke="#fff"
        strokeWidth={3}
      />
      <Path
        d="M55.546 15.834a.5.5 0 000-.707l-3.182-3.182a.5.5 0 00-.707.707l2.828 2.829-2.828 2.828a.5.5 0 10.707.707l3.182-3.182zm-13.815.147h13.461v-1H41.731v1z"
        fill="#fff"
      />
    </Svg>
  )
}

export default BotClose
