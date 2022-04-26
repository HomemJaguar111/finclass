import React, { useState } from "react";
import Input from "../../components/Input";
import Separator from "../../components/Separator";
import Text from "../../components/Text";

import search from "../../../assets/icons/search.png";
import close from "../../../assets/icons/close.png";
import emptyResultsIcon from "../../../assets/icons/empty/empty-results.png";

import {
  CenterText,
  CloseIcon,
  Container,
  ContainerEmpty,
  ContainerHeader,
  EmptyIcon,
  SearchIcon,
} from "./styles";

import { useTheme } from "styled-components";
import { Pressable } from "react-native";
import Dots from "../../components/Dots";

const Search: React.FC = () => {
  const { colors } = useTheme();

  const [searchText, setSearchText] = useState("");
  const [hasFocus, setHasFocus] = useState(false);

  const handleCleanText = () => setSearchText("");

  return (
    <Container>
      <Separator height={20} />
      <ContainerHeader>
        <Text type="bold" size={22}>
          Buscar
        </Text>
        {!!searchText && (
          <Text onPress={handleCleanText} type="bold" size={12}>
            Cancelar
          </Text>
        )}
      </ContainerHeader>
      <Separator height={12} />
      <Input
        onBlur={() => setHasFocus(false)}
        onFocus={() => setHasFocus(true)}
        value={searchText}
        onChangeText={(value) => setSearchText(value)}
        leftIcon={
          <SearchIcon
            style={{ tintColor: colors.backdrop.onMain }}
            source={search}
          />
        }
        rightIcon={
          !!searchText && (
            <Pressable onPress={handleCleanText}>
              <CloseIcon
                style={{ tintColor: colors.backdrop.onMain }}
                source={close}
              />
            </Pressable>
          )
        }
        placeholder="Pesquiser por título, autor ou ..."
      />
      {hasFocus && (
        <>
          <Separator height={20} />
          <Text type="bold" size={22}>
            Últimas Buscas
          </Text>
          <Separator height={20} />
          <Text size={12}>Nenhuma busca recente...</Text>
        </>
      )}
      {!!searchText && !hasFocus && (
        <ContainerEmpty>
          <EmptyIcon resizeMode="contain" source={emptyResultsIcon} />
          <Separator height={60} />
          <CenterText
            size={22}
            type="bold"
          >{`Nenhum resultado \ndisponível`}</CenterText>
          <Separator height={60} />
          <Dots amount={6} />
        </ContainerEmpty>
      )}
    </Container>
  );
};

export default Search;
