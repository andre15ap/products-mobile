import React, { useState, useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { useCart } from '../../providers/cart';

import { getProducts, IProduct } from '../../services/api';

import { Header } from '../../components/header';
import { Product } from '../../components/product';

import { Container, ContentList } from './styles';

type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
};

type Props = StackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen({ navigation }: Props) {
  const { products: cartProducts } = useCart();

  const [products, setProducts] = useState<IProduct[]>([]);

  const getResponse = async () => {
    const result = await getProducts();
    setProducts(result);
  };

  const handleClick = () => {
    navigation.navigate('Cart');
  };

  useEffect(() => {
    getResponse();
  }, []);

  return (
    <Container>
      <Header
        actionClickCart={handleClick}
        countItems={cartProducts?.length || 0}
      />
      <ContentList
        data={products}
        renderItem={({ item }) => <Product product={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </Container>
  );
}

export { HomeScreen };
