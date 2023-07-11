import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill= {props.fill || "#3962CB"}
      d="M.742 14.812 2.829 3.52a.778.778 0 0 1 .764-.636h9.462c.216 0 .422-.09.57-.248L15.378.753a.778.778 0 0 1 .57-.248h4.868c.497 0 .866.459.76.944l-2.984 13.67a.778.778 0 0 1-.76.612H1.507a.778.778 0 0 1-.765-.92Z"
    />
  </svg>
)
export default SvgComponent
