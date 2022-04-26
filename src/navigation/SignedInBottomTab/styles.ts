import styled from "styled-components/native";
import { IconProps } from "./types";

export const Icon = styled.Image.attrs<IconProps>({
  resizeMode: "contain",
})<IconProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;
