import React, { useEffect, useState } from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { Container } from "./styles";
import { Props } from "./types";

const Step = ({ isActive }: Props) => {
  const [config] = useState({ duration: 250 });

  const width = useSharedValue(24);

  const animatedStyles = useAnimatedStyle(() => {
    return { width: width.value };
  });

  useEffect(() => {
    if (isActive) {
      width.value = withTiming(24, config);
    } else {
      width.value = withTiming(12, config);
    }
  }, [isActive, width]);

  return <Container style={[animatedStyles]} isActive={isActive} />;
};

export default Step;
