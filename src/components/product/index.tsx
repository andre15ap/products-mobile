import React from 'react';
import { IProduct } from '../../services/api';
import { useCart } from '../../providers/cart';

import { Container, Image, Button, Text, Title } from './styles';

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
      <Image source={{ uri: image }} />
      <Title>{name}</Title>
      <Title>{`R$: ${price}`}</Title>
      <Button onPress={handlePress}>
        <Text inCart={!!itemInCart}>
          {itemInCart ? 'Remover' : 'Adicionar'}
        </Text>
      </Button>
    </Container>
  );
}

export { Product };
