import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';

import { useCart } from '../../providers/cart';
import { IProduct } from '../../services/api';
import { convertToMoney } from '../../services/convert-money';

import { Header } from '../../components/header';
import { RowItem } from '../../components/row-item';

import { Container, ContentScroll, Title, Footer } from './styles';

type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
};

type Props = StackScreenProps<RootStackParamList, 'Cart'>;

function CartScreen({ navigation }: Props) {
  const { products: cartProducts, price, removeItem } = useCart();

  const handleRemove = (product: IProduct) => {
    removeItem?.(product);
  };

  const handleClick = () => {
    navigation.goBack();
  };

  const getLabel = () => {
    if (cartProducts && cartProducts.length > 1) {
      return `${cartProducts?.length} produtos encontrados`;
    }
    return `${cartProducts?.length} produto encontrado`;
  };

  return (
    <Container>
      <Header actionBack={handleClick} />
      <ContentScroll>
        <Title>{getLabel()}</Title>
        {cartProducts?.map(product => (
          <RowItem
            key={product.id}
            product={product}
            actionRemove={handleRemove}
          />
        ))}
        <Footer>
          <Title>{`Total R$ ${convertToMoney(price || 0)}`}</Title>
        </Footer>
      </ContentScroll>
    </Container>
  );
}

export { CartScreen };
