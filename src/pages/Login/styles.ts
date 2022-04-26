import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.background.main};
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  margin: 0 20px;
`;
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const OptionRightHeader = styled.View`
  flex-direction: row;
`;

export const LockIcon = styled.Image.attrs({
  resizeMode: "contain",
})`
  height: 16px;
  width: 16px;
`;
