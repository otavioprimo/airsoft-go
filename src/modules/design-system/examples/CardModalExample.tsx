import React, {useRef, useState} from 'react';
import {State, TapGestureHandler} from 'react-native-gesture-handler';

import {faRoute, faUsers} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components/native';

import CardModal, {CardModalRefProps} from '../components/CardModal';
import Container from '../components/Container';
import Card from '../components/Card';
import {View} from 'react-native';

const List = styled.FlatList``;

const CardModalExample: React.FC = () => {
  const modalRef = useRef<CardModalRefProps>();
  const [modalActive, setModalActive] = useState(false);

  const showModal = () => {
    modalRef.current?.show({});
    setModalActive(true);
  };

  const _handleGestureStateChange = ({nativeEvent}: any) => {
    if (nativeEvent.state === State.END) {
      setModalActive(false);
      modalRef.current?.hide();
    }
  };

  const renderItem = () => {
    return (
      <Card
        image="https://i.pinimg.com/originals/c5/f9/38/c5f938de2fc8d225933c6315d5586302.jpg"
        title="Warriors Airsoft"
        subtitle="14/06/2021"
        description="Biruleibe leibe do biruleibe"
        footerTitle="Sorocaba - SP"
        textFirstAction="250"
        iconFirstAction={faUsers}
        textSecondAction="40,4 KM"
        iconSecondAction={faRoute}
        onLongPress={showModal}
        delayLongPress={300}
      />
    );
  };

  return (
    <TapGestureHandler onHandlerStateChange={_handleGestureStateChange}>
      <View style={{flex: 1}}>
        <Container removeScrollView>
          <List
            scrollEnabled={!modalActive}
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-around'}}
            style={{paddingHorizontal: 8, marginTop: 16}}
            data={[1, 2, 3, 4, 5, 6, 7]}
            keyExtractor={(item: any) => item}
            renderItem={renderItem}
          />
          <CardModal ref={modalRef} />
        </Container>
      </View>
    </TapGestureHandler>
  );
};

export default CardModalExample;
