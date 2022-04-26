import React from "react";
import Text from "../../../../components/Text";
import chevron from "../../../../../assets/icons/chevron-left.png";

import { Container, Group, RightArrow } from "./styles";
import { Props } from "./types";
import { useTheme } from "styled-components";
import Separator from "../../../../components/Separator";

const ListTile = ({ title, icon, onPress }: Props) => {
  const { colors } = useTheme();
  return (
    <Container onPress={onPress}>
      <Group>
        {icon}
        <Separator width={10} />
        <Text type="bold" size={12}>
          {title}
        </Text>
      </Group>
      <RightArrow
        style={{ tintColor: colors.placeholder.main }}
        source={chevron}
      />
    </Container>
  );
};

export default ListTile;
