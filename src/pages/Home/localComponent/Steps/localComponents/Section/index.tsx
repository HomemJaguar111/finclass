import React from "react";
import { View } from "react-native";
import { useTheme } from "styled-components";
import Text from "../../../../../../components/Text";
import Separator from "../../../../../../components/Separator";

import icon from "../../../../../../../assets/icons/chevron-left.png";
import { Container, RightChevron, Row } from "./styles";
import { Props } from "./types";

const Section = ({ leftNode }: Props) => {
  const { colors } = useTheme();
  return (
    <Container>
      {leftNode}
      <Row>
        <Text type="semiBold">ver todos</Text>
        <Separator width={20} />
        <RightChevron
          source={icon}
          style={{ tintColor: colors.primary.main }}
        />
      </Row>
    </Container>
  );
};

export default Section;
