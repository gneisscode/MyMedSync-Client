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
      fill="#333"
      d="M10 12.98a.864.864 0 0 1-.583-.23L5.583 8.917a.79.79 0 0 1-.229-.584.79.79 0 0 1 .23-.583.79.79 0 0 1 .583-.23.79.79 0 0 1 .583.23L10 11l3.25-3.25a.79.79 0 0 1 .583-.23.79.79 0 0 1 .584.23.79.79 0 0 1 .229.583.79.79 0 0 1-.23.584l-3.833 3.833a.735.735 0 0 1-.27.177.903.903 0 0 1-.313.052Z"
    />
  </svg>
);
export default SvgComponent;
