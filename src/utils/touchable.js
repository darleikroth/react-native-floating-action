import {
  Platform,
  TouchableOpacity,
} from "react-native";

import { shadeColor } from "./color";

export function getTouchableComponent() {
  return TouchableOpacity;
}

export function getRippleProps() {
  return {};
}
