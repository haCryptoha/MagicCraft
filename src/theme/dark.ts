import { DefaultTheme } from "styled-components";
import { dark as darkModal } from "widgets/Modal/theme";
import base from "./base";
import { darkColors } from "./colors";

const darkTheme: DefaultTheme = {
  ...base,
  isDark: true,
  colors: darkColors,
  modal: darkModal,
};

export default darkTheme;
