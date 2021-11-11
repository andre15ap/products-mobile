import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { convertToMoney } from '../../common/convert-money';
import { IProduct } from '../../services/api/products';

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
    <Container testID="row-item-container">
      <Section>
        <Image testID="row-item-image" source={{ uri: product.image }} />
        <Content>
          <Text testID="row-item-name">{product.name}</Text>
          <TextPrice testID="row-item-price">
            {`R$: ${convertToMoney(product.price)}`}
          </TextPrice>
        </Content>
      </Section>
      <Button testID="row-item-button" onPress={() => actionRemove(product)}>
        <Icon name="close" size={18} color={COLORS.DANGER} />
      </Button>
    </Container>
  );
}

export { RowItem };
