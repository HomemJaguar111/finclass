import React from "react";
import { useWindowDimensions, View } from "react-native";
import { useTheme } from "styled-components";
import Separator from "../../../../components/Separator";
import Text from "../../../../components/Text";

import { Container, Cover } from "./styles";
import { Props } from "./types";

const Card = ({ source, title, description }: Props) => {
  const { width, height } = useWindowDimensions();
  const { colors } = useTheme();

  return (
    <Container windowWidth={width}>
      <Cover source={source} windowWidth={width} windowHeight={height} />
      <Separator height={15} />
      <Text type="bold" numberOfLines={2}>
        {description}
      </Text>
      {!!description && (
        <>
          <Separator height={15} />
          <Text
            size={10}
            color={colors.placeholder.main}
            type="bold"
            numberOfLines={2}
          >
            {title}
          </Text>
        </>
      )}
    </Container>
  );
};

export default Card;
