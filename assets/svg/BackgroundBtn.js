import * as React from "react"
import Svg, { Rect } from "react-native-svg"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"

function BackgroundBtn(props) {
  return (
    <Svg
      width={hp(18)}
      height={hp(18)}
      viewBox="0 0 147 147"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={147} height={147} rx={19} fill="#fff" fillOpacity={0.37} />
      <Rect
        x={1.5}
        y={1.5}
        width={144}
        height={144}
        rx={17.5}
        stroke="#fff"
        strokeOpacity={0.43}
        strokeWidth={3}
      />
    </Svg>
  )
}

export default BackgroundBtn
