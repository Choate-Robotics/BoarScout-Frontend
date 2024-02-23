import * as React from "react"
import Svg, {
  Rect,
  Circle,
  Path,
  Defs,
  RadialGradient,
  Stop
} from "react-native-svg"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"

function Speaker(props) {
  return (
    <Svg
      width={wp(20)}
      height={hp(12)}
      viewBox="0 0 71 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={71} height={93} rx={4} fill={props.color} />
      <Circle cx={36} cy={32} r={22} fill="url(#paint0_radial_49_36)" />
      <Circle cx={36} cy={32} r={22} fill="#000" fillOpacity={0.2} />
      <Circle cx={36} cy={32} r={21.5} stroke="#fff" strokeOpacity={0.46} />
      <Circle cx={36} cy={32} r={15} fill="url(#paint1_radial_49_36)" />
      <Circle cx={36} cy={32} r={15} fill="#000" fillOpacity={0.2} />
      <Circle cx={36} cy={32} r={5} fill="#000" />
      <Path
        d="M9.01 77.112c-.653 0-1.274-.07-1.862-.21-.579-.15-1.031-.34-1.358-.574l.84-1.582c.327.215.723.387 1.19.518.476.13.952.196 1.428.196.495 0 .863-.06 1.106-.182.243-.13.364-.313.364-.546 0-.187-.107-.322-.322-.406-.215-.084-.56-.173-1.036-.266-.541-.103-.99-.215-1.344-.336a2.32 2.32 0 01-.91-.588c-.252-.28-.378-.658-.378-1.134 0-.83.345-1.48 1.036-1.946.7-.467 1.615-.7 2.744-.7.523 0 1.031.056 1.526.168.495.112.915.266 1.26.462l-.784 1.596c-.616-.383-1.358-.574-2.226-.574-.476 0-.84.07-1.092.21-.243.14-.364.317-.364.532 0 .196.107.34.322.434.215.084.574.177 1.078.28.532.103.966.215 1.302.336.345.112.644.303.896.574.252.27.378.64.378 1.106 0 .84-.355 1.489-1.064 1.946-.7.457-1.61.686-2.73.686zm10.42-7.756c.587 0 1.129.135 1.623.406.505.27.901.663 1.19 1.176.3.504.449 1.101.449 1.792 0 .83-.187 1.582-.56 2.254a4.101 4.101 0 01-1.498 1.568c-.635.373-1.34.56-2.114.56-1.148 0-1.96-.373-2.436-1.12l-.742 3.724h-2.184L15.2 69.468h2.072l-.154.742c.626-.57 1.396-.854 2.31-.854zm-1.163 5.95c.43 0 .813-.103 1.149-.308a2.18 2.18 0 00.784-.882c.186-.373.28-.803.28-1.288 0-.513-.154-.92-.463-1.218-.298-.299-.718-.448-1.26-.448-.42 0-.798.107-1.134.322a2.083 2.083 0 00-.784.868c-.186.373-.28.803-.28 1.288 0 .513.15.92.448 1.218.3.299.72.448 1.26.448zm13.279-2.632c0 .345-.043.728-.127 1.148h-5.768c.075 1.027.724 1.54 1.947 1.54.382 0 .746-.06 1.091-.182a2.79 2.79 0 00.924-.518l.91 1.442c-.42.336-.9.588-1.442.756a5.73 5.73 0 01-1.707.252c-.775 0-1.456-.135-2.044-.406a3.151 3.151 0 01-1.345-1.19c-.308-.513-.462-1.106-.462-1.778 0-.83.187-1.577.56-2.24a4.055 4.055 0 011.583-1.568c.671-.383 1.437-.574 2.296-.574.727 0 1.358.135 1.89.406.54.27.956.658 1.245 1.162.3.504.448 1.087.448 1.75zm-3.683-1.68c-.513 0-.947.14-1.302.42-.354.27-.606.649-.756 1.134h3.739c0-.485-.154-.863-.463-1.134-.298-.28-.704-.42-1.218-.42zm13.44-1.526L39.805 77h-2.072l.14-.742c-.626.57-1.396.854-2.31.854-.589 0-1.13-.135-1.625-.406a3.092 3.092 0 01-1.19-1.162c-.289-.513-.433-1.115-.433-1.806 0-.83.181-1.577.546-2.24a4.074 4.074 0 011.512-1.568 3.99 3.99 0 012.1-.574c1.157 0 1.974.378 2.45 1.134l.195-1.022h2.184zm-5.069 5.838c.43 0 .813-.103 1.148-.308a2.18 2.18 0 00.785-.882c.186-.373.28-.803.28-1.288 0-.513-.155-.92-.463-1.218-.298-.299-.718-.448-1.26-.448-.429 0-.811.107-1.147.322a2.083 2.083 0 00-.785.868c-.186.373-.28.803-.28 1.288 0 .513.15.92.449 1.218.308.299.732.448 1.273.448zm11.206-2.562L50.03 77h-2.534l-1.791-2.926-1.33 1.106L44.01 77h-2.184l2.072-10.388h2.184l-1.163 5.81 3.612-2.954h2.843l-3.934 3.276zm11.258-.07c0 .345-.042.728-.126 1.148h-5.768c.075 1.027.723 1.54 1.946 1.54.383 0 .746-.06 1.092-.182.355-.121.663-.294.924-.518l.91 1.442c-.42.336-.9.588-1.442.756a5.73 5.73 0 01-1.708.252c-.775 0-1.456-.135-2.044-.406a3.151 3.151 0 01-1.344-1.19c-.308-.513-.462-1.106-.462-1.778 0-.83.186-1.577.56-2.24a4.055 4.055 0 011.582-1.568c.672-.383 1.437-.574 2.296-.574.728 0 1.358.135 1.89.406.541.27.957.658 1.246 1.162.298.504.448 1.087.448 1.75zm-3.682-1.68c-.514 0-.947.14-1.302.42-.355.27-.607.649-.756 1.134h3.738c0-.485-.154-.863-.462-1.134-.299-.28-.705-.42-1.218-.42zm7.685-.63a2.84 2.84 0 011.176-.77c.467-.159 1.012-.238 1.638-.238l-.392 2.016a9.43 9.43 0 00-.504-.028c-.663 0-1.195.163-1.596.49-.392.327-.658.835-.798 1.526L61.497 77h-2.184l1.498-7.532h2.072l-.182.896z"
        fill="#fff"
      />
      <Defs>
        <RadialGradient
          id="paint0_radial_49_36"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 22 -22 0 36 32)"
        >
          <Stop offset={0.48} stopColor="#969696" />
          <Stop offset={1} />
        </RadialGradient>
        <RadialGradient
          id="paint1_radial_49_36"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 15 -15 0 36 32)"
        >
          <Stop stopColor="#969696" />
          <Stop offset={0.875} />
        </RadialGradient>
      </Defs>
    </Svg>
  )
}

export default Speaker