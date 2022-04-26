import React from "react";
import { useTheme } from "styled-components";

import { Container, IconBack } from "./styles";
import { Props } from "./types";

const BackButton = ({ onPress }: Props) => {
  const { colors } = useTheme();

  return (
    <Container onPress={onPress}>
      <IconBack
        style={{ tintColor: colors.backdrop.onMain }}
        source={require("../../../assets/icons/chevron-left.png")}
      />
    </Container>
  );
};

export default BackButton;
