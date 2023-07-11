import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill={props.fill || "#333"}
        d="M12 22.854a1.78 1.78 0 0 0 1.72-1.52h-3.507A1.78 1.78 0 0 0 12 22.854ZM21.9 18.753l-.227-.2A9.58 9.58 0 0 1 20 16.6a8.42 8.42 0 0 1-.9-3.207V10.1c-.003-.4-.038-.8-.107-1.194A5 5 0 0 1 15 4v-.42a7.047 7.047 0 0 0-2.213-.667v-.84a.89.89 0 0 0-1.78 0v.873a7.207 7.207 0 0 0-6.2 7.154v3.293a8.42 8.42 0 0 1-.9 3.207 9.6 9.6 0 0 1-1.647 1.953l-.227.2v1.88H21.9v-1.88Z"
      />
      <path
        fill="#DF1717"
        d="M20 7.333a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
