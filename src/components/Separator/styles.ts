import styled from "styled-components/native";
import { ContainerProps } from "./types";

export const Container = styled.View<ContainerProps>`
    height: ${({h})=>h || 0}px;
    width: ${({w})=>w || 0}px;
`;