import React, { useState, useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useCart } from '../../providers/cart';

import { getProducts, IProduct } from '../../services/api';

import { Product } from '../../components/product';

import {
  Container,
  ContentList,
  ContainerIcon,
  AlertItem,
  Text,
} from './styles';

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

  const renderBadge = () => {
    if (cartProducts?.length) {
      return (
        <AlertItem>
          <Text>{cartProducts?.length}</Text>
        </AlertItem>
      );
    }
  };

  useEffect(() => {
    getResponse();
  }, []);

  return (
    <Container>
      <ContainerIcon>
        <Icon name="shopping-cart" size={30} onPress={handleClick} />
        {renderBadge()}
      </ContainerIcon>
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
