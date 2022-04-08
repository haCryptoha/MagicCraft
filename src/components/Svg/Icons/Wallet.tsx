import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 100 100" {...props}>
      <path d="M92,73v7.5c0,4.137-3.365,7.5-7.5,7.5H20c-6.617,0-12-5.382-12-12c0,0,0-50.956,0-51  c0-6.618,5.383-12,12-12h55.5c2.486,0,4.5,2.016,4.5,4.5S77.986,22,75.5,22H20c-1.654,0-3,1.345-3,3s1.346,3,3,3h64.5  c4.135,0,7.5,3.363,7.5,7.5V43H77c-8.271,0-15,6.729-15,15s6.729,15,15,15H92z"/><path d="M92,49v18H77c-4.971,0-9-4.029-9-9s4.029-9,9-9H92z"/>
    </Svg>
  );
};

export default Icon;
