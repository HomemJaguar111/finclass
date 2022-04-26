import React, { useCallback, useState } from "react";
import { FlatList, ScrollView, useWindowDimensions, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "styled-components";

import finclassIcon from "../../../assets/icons/logo/Vector.png";
import finclassesIcon from "../../../assets/icons/finclasses/finclasses.png";
import finseriesIcon from "../../../assets/icons/finseries/finseries.png";
import finbooksIcon from "../../../assets/icons/finbooks/finbooks.png";

import Separator from "../../components/Separator";
import Text from "../../components/Text";
import Banner from "./localComponent/Banner";
import LastWatched from "./localComponent/LastWatched";
import Steps from "./localComponent/Steps";
import Section from "./localComponent/Steps/localComponents/Section";
import { data } from "./mock";

import {
  BannerContainer,
  Container,
  Content,
  FinclassIcon,
  IconFin,
} from "./styles";
import Card from "./localComponent/Card";

const Home: React.FC = () => {
  const { top } = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const { colors } = useTheme();

  /**
   * States   *
   */
  const [sliderPage, setSliderPage] = useState(0);

  /**
   * Callback
   */
  const setSliderPageEvent = useCallback(
    (event: any) => {
      const { x } = event.nativeEvent.contentOffset;
      const indexOfNextScreen = Math.ceil(x / width);
      if (indexOfNextScreen !== sliderPage) {
        setSliderPage(indexOfNextScreen);
      }
    },
    [sliderPage]
  );

  return (
    <Container>
      <ScrollView>
        <BannerContainer>
          <FinclassIcon top={top} source={finclassIcon} />

          <ScrollView
            onScroll={(e) => setSliderPageEvent(e)}
            decelerationRate={"fast"}
            snapToInterval={width}
            snapToAlignment="center"
            bounces={false}
            horizontal
            alwaysBounceHorizontal={false}
            pagingEnabled
            scrollEventThrottle={8}
          >
            <Banner
              source={data[0].image}
              description={data[0].desc}
              presenter={data[0].title}
            />
            <Banner
              source={data[1].image}
              description={data[1].desc}
              presenter={data[1].title}
            />
            <Banner
              source={data[2].image}
              description={data[2].desc}
              presenter={data[2].title}
            />
          </ScrollView>
          <Steps index={sliderPage} />
        </BannerContainer>
        <Separator height={45} />
        <Content>
          <Section
            leftNode={
              <Text type="bold" size={16} color={colors.placeholder.main}>
                Continue de onde parou
              </Text>
            }
          />
          <Separator height={15} />
          <LastWatched />
        </Content>
        <Separator height={30} />
        <Content>
          <Section
            leftNode={<IconFin source={finclassesIcon} resizeMode="contain" />}
          />
        </Content>
        <Separator height={30} />

        <FlatList
          style={{
            marginLeft: 20,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data.reverse()}
          ItemSeparatorComponent={() => <Separator width={15} />}
          keyExtractor={(item) => `${item.desc}+${item.title}-finclasses`}
          renderItem={({ item }) => (
            <Card
              source={item.image}
              title={item.title}
              description={item.desc}
            />
          )}
        />
        <Separator height={30} />
        <Content>
          <Section
            leftNode={<IconFin source={finseriesIcon} resizeMode="contain" />}
          />
        </Content>
        <Separator height={30} />

        <FlatList
          style={{
            marginLeft: 20,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data.reverse()}
          ItemSeparatorComponent={() => <Separator width={15} />}
          keyExtractor={(item) => `${item.desc}+${item.title}-finclasses`}
          renderItem={({ item }) => (
            <Card
              source={item.image}
              title={item.title}
              description={item.desc}
            />
          )}
        />
        <Separator height={30} />
        <Content>
          <Section
            leftNode={<IconFin source={finbooksIcon} resizeMode="contain" />}
          />
        </Content>
        <Separator height={30} />

        <FlatList
          style={{
            marginLeft: 20,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data.reverse()}
          ItemSeparatorComponent={() => <Separator width={15} />}
          keyExtractor={(item) => `${item.desc}+${item.title}-finclasses`}
          renderItem={({ item }) => (
            <Card
              source={item.image}
              title={item.title}
              description={item.desc}
            />
          )}
        />
        <Separator height={30} />
      </ScrollView>
    </Container>
  );
};

export default Home;
