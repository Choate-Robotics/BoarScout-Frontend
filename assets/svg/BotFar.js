import * as React from "react"
import Svg, { Circle, Rect, Path } from "react-native-svg"

function BotFar(props) {
  return (
    <Svg
      width={98}
      height={27}
      viewBox="0 0 98 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={9.42308} cy={21.5385} r={4.71154} fill="#252525" />
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
        fill="#308BBE"
      />
      <Circle
        cx={6.73077}
        cy={6.73077}
        r={5.23077}
        transform="matrix(1 0 0 -1 84 21.538)"
        stroke="#fff"
        strokeWidth={3}
      />
      <Path
        d="M81.354 15.354a.5.5 0 000-.708l-3.182-3.182a.5.5 0 10-.707.708L80.293 15l-2.829 2.828a.5.5 0 10.708.707l3.182-3.181zM42 15.5h39v-1H42v1z"
        fill="#fff"
      />
    </Svg>
  )
}

export default BotFar
