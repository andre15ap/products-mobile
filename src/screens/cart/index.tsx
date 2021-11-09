import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useCart } from '../../providers/cart';
import { IProduct } from '../../services/api';
import { convertToMoney } from '../../services/convert-money';

import { COLORS } from '../../constants/colors';

import {
  Container,
  ContentScroll,
  Title,
  Row,
  Text,
  TextPrice,
  Image,
  Button,
  Section,
  Footer,
  Content,
} from './styles';

function CartScreen() {
  const { products: cartProducts, price, removeItem } = useCart();

  const handleRemove = (product: IProduct) => {
    removeItem?.(product);
  };

  const getLabel = () => {
    if (cartProducts && cartProducts.length > 1) {
      return `${cartProducts?.length} produtos encontrados`;
    }
    return `${cartProducts?.length} produto encontrado`;
  };

  return (
    <Container>
      <ContentScroll>
        <Title>{getLabel()}</Title>
        {cartProducts?.map(product => (
          <Row key={product.id}>
            <Section>
              <Image source={{ uri: product.image }} />
              <Content>
                <Text>{product.name}</Text>
                <TextPrice>{`R$: ${product.price}`}</TextPrice>
              </Content>
            </Section>
            <Button onPress={() => handleRemove(product)}>
              <Icon name="close" size={18} color={COLORS.DANGER} />
            </Button>
          </Row>
        ))}
        <Footer>
          <Title>{`Total R$ ${convertToMoney(price || 0)}`}</Title>
        </Footer>
      </ContentScroll>
    </Container>
  );
}

export { CartScreen };
