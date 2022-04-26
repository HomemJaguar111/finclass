import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import Text from "../../components/Text";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.background.main};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Text)`
  text-align: center;
`;

export const Icon = styled.Image`
  width: 100px;
  height: 100px;
`;
