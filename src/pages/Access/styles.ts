import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import Text from "../../components/Text";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.background.main};
  flex: 1;
  justify-content: space-between;
`;
export const Content = styled.View`
  margin: 0 20px;
  justify-content: flex-end;
`;
export const EmailIcon = styled.Image`
  width: 20px;
  height: 20px;
`;
export const ImpactPhrase = styled(Text)`
  text-align: center;
  font-size: 22px;
`;
export const Banner = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 100%;
  height: 400px;
  margin-top: -25px;
`;
