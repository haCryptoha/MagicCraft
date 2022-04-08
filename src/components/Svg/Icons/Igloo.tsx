import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 19.99 12.76" {...props}>
      <path d="M20,8.44C19.24,3.67,15.6,0,11.26,0A8.87,8.87,0,0,0,3.35,5.67H2.82v0A3.33,3.33,0,0,0,0,9.19v3.5H1.66V9.58A2.1,2.1,0,0,1,3.77,7.47h0A2.11,2.11,0,0,1,5.88,9.58v3.11h.8L20,12.76Z"/>
    </Svg>
  );
};

export default Icon;
