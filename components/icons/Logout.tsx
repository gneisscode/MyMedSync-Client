import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill || "#DF1717"}
      d="M13.27 14.063a.925.925 0 0 1-.228-.615.78.78 0 0 1 .229-.573l1.541-1.542H8.834a.807.807 0 0 1-.594-.24A.803.803 0 0 1 8 10.5c0-.236.08-.434.24-.594.16-.16.358-.24.593-.24h5.98L13.27 8.126a.812.812 0 0 1-.25-.594.81.81 0 0 1 .25-.593.745.745 0 0 1 .573-.25c.23 0 .42.076.573.229l3 3a.736.736 0 0 1 .177.27.901.901 0 0 1 .052.313.93.93 0 0 1-.052.313.722.722 0 0 1-.177.27l-3 3c-.18.18-.379.26-.595.24a.871.871 0 0 1-.551-.26ZM4.668 18c-.459 0-.851-.163-1.178-.49A1.602 1.602 0 0 1 3 16.333V4.667c0-.459.163-.851.49-1.178.327-.326.719-.49 1.177-.489h5c.236 0 .434.08.594.24.16.16.24.358.239.593 0 .236-.08.434-.24.595a.803.803 0 0 1-.593.239h-5v11.666h5c.236 0 .434.08.594.24.16.16.24.358.239.594 0 .236-.08.434-.24.594a.803.803 0 0 1-.593.239h-5Z"
    />
  </svg>
);
export default SvgComponent;
