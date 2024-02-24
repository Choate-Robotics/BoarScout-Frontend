import * as React from "react"
import Svg, { Path, Rect, Circle } from "react-native-svg"

function Trap(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path fill="#D5D5D5" d="M5 5H43V38H5z" />
      <Path fill="#252525" d="M17 7H30V20H17z" />
      <Path fill="#939393" d="M18 8H30V20H18z" />
      <Rect width={8} height={48} rx={3} fill="#fff" />
      <Rect width={8} height={48} rx={3} fill="#fff" />
      <Rect x={40} width={8} height={48} rx={3} fill="#fff" />
      <Rect x={40} width={8} height={48} rx={3} fill="#fff" />
      <Circle cx={24} cy={14} r={4} stroke="#FFE500" strokeWidth={2} />
    </Svg>
  )
}

export default Trap
