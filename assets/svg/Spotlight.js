import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SpotLight(props) {
  return (
    <Svg
      width={36}
      height={51}
      viewBox="0 0 36 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14 39h8v9.5h-8V39z" fill="#fff" />
      <Path d="M14 39h8v9.5h-8V39z" fill="#E0E0E0" />
      <Path
        d="M33 32.5c0 .508-.547 1.878-3.553 3.298C26.673 37.108 22.629 38 18 38s-8.672-.892-11.447-2.202C3.547 34.378 3 33.008 3 32.5s.547-1.878 3.553-3.298C9.328 27.892 13.371 27 18 27s8.672.892 11.447 2.202C32.453 30.622 33 31.992 33 32.5z"
        stroke="#FFE500"
        strokeWidth={6}
      />
      <Path
        d="M33 32.5c0 .508-.547 1.878-3.553 3.298C26.673 37.108 22.629 38 18 38s-8.672-.892-11.447-2.202C3.547 34.378 3 33.008 3 32.5s.547-1.878 3.553-3.298C9.328 27.892 13.371 27 18 27s8.672.892 11.447 2.202C32.453 30.622 33 31.992 33 32.5z"
        stroke="#FFE500"
        strokeWidth={6}
      />
      <Path d="M14 3h8v32h-8V3z" fill="#fff" />
      <Path d="M14 3h8v32h-8V3z" fill="#E0E0E0" />
      <Path
        d="M22 3c0 1.38-1.79 2.5-4 2.5S14 4.38 14 3 15.79.5 18 .5s4 1.12 4 2.5z"
        fill="#fff"
      />
      <Path
        d="M22 48.5c0 1.38-1.79 2.5-4 2.5s-4-1.12-4-2.5 1.79-2.5 4-2.5 4 1.12 4 2.5z"
        fill="#E0E0E0"
      />
    </Svg>
  )
}

export default SpotLight
