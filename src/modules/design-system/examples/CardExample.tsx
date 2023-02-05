import React from 'react';
import styled from 'styled-components/native';
import {faUsers, faRoute} from '@fortawesome/free-solid-svg-icons';

import Container from '../components/Container';
import Card from '../components/Card';

const List = styled.FlatList``;

const mockDescrion = `⚠️ MISSÃO CAÇA AO CIENTISTA 

Aenean tristique purus a suscipit porta. Sed quis tortor nunc. Etiam ex massa, volutpat vitae velit sollicitudin, sollicitudin fringillanunc. Pellentesque interdum sem at purus imperdiet aliquam. Morbi
            quis magna pulvinar justo porta lacinia. Quisque in volutpat nibh.
            Vivamus non nisi in lacus semper cursus id ut lacus. Nunc purus
            urna, interdum lobortis tristique sit amet, posuere id est. Nullam
            posuere vitae mauris sit amet ultrices. Nulla euismod mi ipsum, eu
            laoreet sapien egestas nec. Etiam sed posuere lacus. Vivamus nec
            pellentesque nisl, quis tristique risus. Quisque molestie egestas
            gravida. Nulla pulvinar sagittis viverra. Nullam scelerisque eu nibh
            a lacinia. Nunc gravida tempus mauris sit amet molestie. Integer
            rhoncus lorem dictum est congue hendrerit. Nullam vitae nulla non
            ligula mattis tincidunt eu non est. Sed pulvinar imperdiet leo, eu
            consectetur ex ornare nec. Proin suscipit scelerisque augue, sed
            lobortis nisi malesuada id. Cras dignissim interdum massa in
            finibus. Aliquam est lectus, semper a ipsum sit amet, ornare aliquam
            eros. Donec venenatis aliquam massa, a rhoncus dui lobortis at.`;

const CardExample: React.FC = () => {
  const data = [
    {
      id: 1,
      image:
        'https://i.pinimg.com/originals/c5/f9/38/c5f938de2fc8d225933c6315d5586302.jpg',
    },
    {
      id: 2,
      image:
        'https://images-platform.99static.com/s0rf_sKiOqppTbHnzHKxY2EYGn4=/299x0:1741x1442/500x500/top/smart/99designs-contests-attachments/73/73519/attachment_73519103',
    },
    {
      id: 3,
      image:
        'https://images-platform.99static.com/VIgm-w5KKiMwvUn6DNa3gjj0EmA=/422x0:1502x1080/500x500/top/smart/99designs-contests-attachments/77/77781/attachment_77781441',
    },
    {
      id: 4,
      image:
        'https://www.pngkit.com/png/full/337-3374400_modern-airsoft-logo.png',
    },
    {
      id: 5,
      image:
        'https://instagram.fsod8-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/29095111_2030861563845018_8858773993969156096_n.jpg?_nc_ht=instagram.fsod8-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=is1KkwYsWIwAX8Y1zMj&edm=AP_V10EBAAAA&ccb=7-4&oh=be4fff96ebd873670f8a9a97f88ac561&oe=60F22C09&_nc_sid=4f375e',
    },
  ];

  const renderItem = ({item}: any) => {
    return (
      <Card
        image={item.image}
        title="Warriors Airsoft"
        subtitle="14/06/2021"
        description={mockDescrion}
        footerTitle="Sorocaba - SP"
        textFirstAction="250"
        iconFirstAction={faUsers}
        textSecondAction="40,4 KM"
        iconSecondAction={faRoute}
        onPress={() => console.log(`Pressed ${item.id}`)}
        onLongPress={() => console.log(`Long Pressed ${item.id}`)}
        delayLongPress={300}
      />
    );
  };

  return (
    <Container removeScrollView>
      <List
        // numColumns={1}
        // columnWrapperStyle={{justifyContent: 'space-around'}}
        data={data}
        keyExtractor={(item: any) => item.id}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default React.memo(CardExample);
