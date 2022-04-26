import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import Text from "../../components/Text";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.background.main};
  flex: 1;
  padding: 0 20px;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SearchIcon = styled.Image`
  width: 15px;
  height: 15px;
  align-self: center;
`;

export const CloseIcon = styled.Image`
  width: 10px;
  height: 10px;
  align-self: center;
  margin: 5px;
`;

export const ContainerEmpty = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CenterText = styled(Text)`
  text-align: center;
`;

export const EmptyIcon = styled.Image`
  width: 120px;
  height: 120px;
`;
