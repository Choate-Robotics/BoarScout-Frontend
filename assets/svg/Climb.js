import * as React from "react"
import Svg, { Rect, Path, Circle } from "react-native-svg"

function Climb(props) {
  return (
    <Svg
      width={49}
      height={48}
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={8} height={48} rx={3} fill="#fff" />
      <Rect width={8} height={48} rx={3} fill="#fff" />
      <Rect x={40} width={8} height={48} rx={3} fill="#fff" />
      <Rect x={40} width={8} height={48} rx={3} fill="#fff" />
      <Path
        d="M4.5 7c5.833 5 21.8 12 39 0"
        stroke="#fff"
        strokeWidth={2}
        strokeDasharray="3 3"
      />
      <Circle
        cx={16.0829}
        cy={37.3418}
        r={4.71154}
        transform="rotate(-5.433 16.083 37.342)"
        fill="#252525"
      />
      <Circle
        cx={37.5245}
        cy={35.3025}
        r={4.71154}
        transform="rotate(-5.433 37.525 35.303)"
        fill="#252525"
      />
      <Rect
        x={21.9191}
        y={8.11945}
        width={5}
        height={20}
        rx={2.5}
        transform="rotate(-5.433 21.92 8.12)"
        fill="#3E3E3E"
      />
      <Rect
        x={5.61871}
        y={26.8431}
        width={40.3846}
        height={11.4423}
        rx={5}
        transform="rotate(-5.433 5.619 26.843)"
        fill="#BE3030"
      />
      <Path
        d="M42.5 22c2.5 0 5 2 5.5 5M45.5 21c1 0 2.5 1 3 2.5M10.002 39c-2.5.003-5.003-1.995-5.506-4.994M7.003 40.003c-1 .001-2.501-.997-3.003-2.496"
        stroke="#000"
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default Climb
