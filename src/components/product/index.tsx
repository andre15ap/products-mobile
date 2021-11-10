import React from 'react';
import { IProduct } from '../../services/api/products';
import { useCart } from '../../providers/cart';
import { convertToMoney } from '../../common/convert-money';

import {
  Container,
  Image,
  Button,
  Text,
  Title,
  Content,
  Section,
  TextPrice,
} from './styles';

interface IPropsProduct {
  product: IProduct;
}

function Product({ product }: IPropsProduct) {
  const { image, name, price } = product;

  const { products: cartProducts, addItem, removeItem } = useCart();
  const itemInCart = cartProducts?.find(item => item.id === product.id);

  const handlePress = () => {
    if (itemInCart) {
      return removeItem?.(product);
    }
    addItem?.(product);
  };

  return (
    <Container>
      <Content>
        <Image source={{ uri: image }} />
        <Section>
          <Title>{name}</Title>
          <TextPrice>{`R$: ${convertToMoney(price)}`}</TextPrice>
        </Section>

        <Button onPress={handlePress}>
          <Text inCart={!!itemInCart}>
            {itemInCart ? 'Remover' : 'Adicionar'}
          </Text>
        </Button>
      </Content>
    </Container>
  );
}

export { Product };
