import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BackButton from "../../components/BackButton";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Separator from "../../components/Separator";
import Text from "../../components/Text";
import lock from "./../../../assets/icons/lock/icon.png";
import { schemaLogin } from "./validation";
import useAuth from "../../hooks/useAuth";
import {
  Container,
  Content,
  Header,
  LockIcon,
  OptionRightHeader,
} from "./styles";

const Login: React.FC = () => {
  const navigation = useNavigation();
  const { login } = useAuth();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleGoBack = () => navigation.goBack();

  const onSubmit = async () => {
    await handleSubmit(({ email, password }) => {
      login();
    })();
  };

  return (
    <Container>
      <Content>
        <Separator height={20} />
        <Header>
          <BackButton onPress={handleGoBack} />
          <OptionRightHeader>
            <Text size={13}>Recuperar Senha</Text>
            <Separator height={10} />
            <LockIcon source={lock} />
          </OptionRightHeader>
        </Header>
        <Separator height={30} />
        <Text size={22} type="bold">
          {"Acessar\nminha conta"}
        </Text>
        <Separator height={35} />
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <Input
                autoCompleteType="email"
                autoCapitalize="none"
                keyboardType="email-address"
                name="E-mail"
                placeholder="Insira seu e-mail"
                onChange={onChange}
                onChangeText={(text) => setValue("email", text)}
                onBlur={onBlur}
                value={value}
                error={errors.email?.message}
              />
            );
          }}
        />
        <Separator height={25} />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <Input
                autoCompleteType="password"
                autoCapitalize="none"
                name="Senha"
                placeholder="Insira sua senha"
                secureTextEntry
                onChange={onChange}
                onChangeText={(text) => setValue("password", text)}
                onBlur={onBlur}
                value={value}
                error={errors.password?.message}
              />
            );
          }}
        />
        <Separator height={70} />
        <Button title="Entrar" onPress={onSubmit} textType="semiBold" />
      </Content>
    </Container>
  );
};

export default Login;
