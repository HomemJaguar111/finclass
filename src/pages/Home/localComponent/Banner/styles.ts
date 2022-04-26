import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const BannerImageBackground = styled.ImageBackground`
  height: 100%;
  width: ${({ width }) => width}px;
  justify-content: flex-end;
  align-items: center;
`;

export const TextContainer = styled.View`
  width: 80%;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
`;

export const Gradient = styled(LinearGradient)`
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  max-width: 100%;
  padding: 0 20px;
`;

export const ButtonHeaderContained = styled.Pressable`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.placeholder.onMain};
  border-radius: ${({ theme }) => theme.borders.radius.sm}px;
`;

export const ButtonHeaderOutlined = styled.Pressable`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;
  flex: 1;
  border-color: ${({ theme }) => theme.colors.placeholder.onMain};
  border-radius: ${({ theme }) => theme.borders.radius.sm}px;
  border-width: 0.5px;
`;

export const ButtonIcon = styled.Image`
  height: 10px;
  width: 10px;
`;
