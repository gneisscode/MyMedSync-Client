import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={219}
    height={192}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill ||"#FBFCFE"}
      fillRule="evenodd"
      d="M119.365 13.168c32.745-3.842 74.291-27.186 94.007-.689 19.761 26.56-18.155 58.595-27.209 90.464-7.908 27.837 2.744 63.525-21.151 79.762-25.851 17.566-60.036 6.963-88.904-4.977-31.78-13.145-69.095-29.033-75.294-62.94-6.074-33.222 22.997-61.124 48.6-83.071 19.289-16.534 44.748-15.592 69.951-18.55Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
