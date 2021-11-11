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
    <Container testID="product-item-container">
      <Content>
        <Image testID="product-image" source={{ uri: image }} />
        <Section>
          <Title testID="product-name">{name}</Title>
          <TextPrice testID="product-price">
            {`R$: ${convertToMoney(price)}`}
          </TextPrice>
        </Section>

        <Button testID="product-button" onPress={handlePress}>
          <Text testID="product-button-text" inCart={!!itemInCart}>
            {itemInCart ? 'Remover' : 'Adicionar'}
          </Text>
        </Button>
      </Content>
    </Container>
  );
}

export { Product };
