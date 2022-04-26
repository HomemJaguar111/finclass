import React from "react";
import { TextProps } from "react-native";
import { TypographyType } from "styled-components";

export interface Props extends TextProps {
    children: React.ReactNode;
    type?: TypographyType;
    size?: number;
    color?: string;
}

export interface TextStyleProps{
    type: TypographyType;
    size: number;
    color: string;
}