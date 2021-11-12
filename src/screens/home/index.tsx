import React, { useState, useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { useCart } from '../../providers/cart';

import { getProducts, IProduct } from '../../services/api/products';
import { appHit } from '../../services/api/app-hit';

import { Header } from '../../components/header';
import { Product } from '../../components/product';

import { Container, ContentList } from './styles';
import { Loading } from '../../components/loading';

type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
};

type Props = StackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen({ navigation }: Props) {
  const { products: cartProducts } = useCart();

  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [isFetching] = useState(false);

  const getResponse = async () => {
    setLoading(true);
    const result = await getProducts();
    setLoading(false);
    setProducts(result);
  };

  const handleClick = () => {
    navigation.navigate('Cart');
  };

  useEffect(() => {
    getResponse();
  }, []);

  useEffect(() => {
    appHit();
  }, []);

  return (
    <Container>
      <Header
        actionClickCart={handleClick}
        countItems={cartProducts?.length || 0}
      />
      {loading && <Loading />}
      <ContentList
        data={products}
        renderItem={({ item }) => <Product product={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        onRefresh={() => getResponse()}
        refreshing={isFetching}
      />
    </Container>
  );
}

export { HomeScreen };
