import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { IProduct } from '../../services/api';

import { COLORS } from '../../constants/colors';

import {
  Container,
  Image,
  Content,
  TextPrice,
  Section,
  Button,
  Text,
} from './styles';

interface IProps {
  product: IProduct;
  actionRemove: (product: IProduct) => void;
}

function RowItem({ product, actionRemove }: IProps) {
  return (
    <Container>
      <Section>
        <Image source={{ uri: product.image }} />
        <Content>
          <Text>{product.name}</Text>
          <TextPrice>{`R$: ${product.price}`}</TextPrice>
        </Content>
      </Section>
      <Button onPress={() => actionRemove(product)}>
        <Icon name="close" size={18} color={COLORS.DANGER} />
      </Button>
    </Container>
  );
}

export { RowItem };
