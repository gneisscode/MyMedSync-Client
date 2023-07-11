import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill || "#333"}
      d="M11.25 7.167H10v4.166l3.567 2.117.6-1.008-2.917-1.734V7.167ZM10.833 3a7.5 7.5 0 0 0-7.5 7.5h-2.5l3.3 3.358L7.5 10.5H5a5.833 5.833 0 1 1 5.833 5.833 5.786 5.786 0 0 1-4.116-1.716L5.533 15.8a7.413 7.413 0 0 0 5.3 2.2 7.5 7.5 0 1 0 0-15Z"
    />
  </svg>
);
export default SvgComponent;
