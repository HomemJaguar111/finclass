import React, { useMemo, useState } from "react";
import { useTheme } from "styled-components";

import openEye from "../../../assets/icons/openEye.png";
import closeEye from "../../../assets/icons/closeEye.png";

import * as Styled from "./styles";
import { Props } from "./types";

const Input = ({
  error,
  name,
  placeholder,
  secureTextEntry,
  rightIcon,
  leftIcon,
  onBlur,
  onFocus,
  ...rest
}: Props) => {
  const { colors } = useTheme();

  const [hasFocus, setHasFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const borderColor = useMemo(() => {
    if (error) return colors.error.main;
    if (hasFocus) return colors.primary.main;
    return colors.background.main;
  }, [error, hasFocus, colors]);

  return (
    <Styled.Container>
      {!!name && (
        <Styled.Label type="semiBold" size={12}>
          {name}
        </Styled.Label>
      )}
      <Styled.Content>
        {!!leftIcon && (
          <Styled.LeftIconContainer>{leftIcon}</Styled.LeftIconContainer>
        )}
        <Styled.TextInput
          borderColor={borderColor}
          onFocus={(e) => {
            setHasFocus(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setHasFocus(false);
            onBlur?.(e);
          }}
          hasLeftIcon={!!leftIcon}
          hasRightIcon={!!rightIcon}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry && !showPassword}
          placeholderTextColor={colors.placeholder.main}
          selectionColor={colors.placeholder.onMain}
          {...rest}
        />
        {!!rightIcon && (
          <Styled.RightIconContainer>{rightIcon}</Styled.RightIconContainer>
        )}
        {secureTextEntry && (
          <Styled.ToggleEye onPress={() => setShowPassword((old) => !old)}>
            <Styled.EyeIcon
              style={{ tintColor: colors.placeholder.main }}
              source={showPassword ? openEye : closeEye}
            ></Styled.EyeIcon>
          </Styled.ToggleEye>
        )}
      </Styled.Content>
      {!error && (
        <Styled.Error size={10} type="bold">
          {error}
        </Styled.Error>
      )}
    </Styled.Container>
  );
};

export default Input;
