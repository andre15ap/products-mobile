import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';

import { useCart } from '../../providers/cart';
import { IProduct } from '../../services/api/products';
import { convertToMoney } from '../../common/convert-money';

import { Header } from '../../components/header';
import { RowItem } from '../../components/row-item';

import {
  Container,
  ContentScroll,
  Title,
  Button,
  Text,
  Footer,
} from './styles';

type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
};

type Props = StackScreenProps<RootStackParamList, 'Cart'>;

function CartScreen({ navigation }: Props) {
  const { products: cartProducts, price, removeItem, cleanCart } = useCart();

  const hasItems = cartProducts && cartProducts.length > 1;

  const handleRemove = (product: IProduct) => {
    removeItem?.(product);
  };

  const handleFinish = () => {
    cleanCart?.();
    navigation.goBack();
  };

  const handleClick = () => {
    navigation.goBack();
  };

  const getLabel = () => {
    if (hasItems) {
      return `${cartProducts?.length} produtos adicionados:`;
    }
    return `${cartProducts?.length} produto adicionado:`;
  };

  return (
    <Container>
      <Header actionBack={handleClick} />
      <ContentScroll>
        <Title testID="cart-label">{getLabel()}</Title>
        {cartProducts?.map(product => (
          <RowItem
            key={product.id}
            product={product}
            actionRemove={handleRemove}
          />
        ))}
        <Footer>
          <Title testID="cart-price-total">
            {`Total R$: ${convertToMoney(price || 0)}`}
          </Title>
        </Footer>
        <Button
          testID="cart-button"
          disabled={!hasItems}
          onPress={handleFinish}>
          <Text>Finalizar Compra</Text>
        </Button>
      </ContentScroll>
    </Container>
  );
}

export { CartScreen };
