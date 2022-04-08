import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 12 16" {...props}>
      <path d="M12 10C12 11.5913 11.3679 13.1174 10.2426 14.2426C9.11742 15.3679 7.5913 16 6 16C4.4087 16 2.88258 15.3679 1.75736 14.2426C0.632141 13.1174 2.37122e-08 11.5913 0 10C0 5.686 3 0 6 0C9 0 12 5.686 12 10Z"/>
    </Svg>
  );
};

export default Icon;
