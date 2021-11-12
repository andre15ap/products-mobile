import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { COLORS } from '../../constants/colors';
import { IProduct } from '../../services/api/products';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${COLORS.BACKGROUND};
`;

export const ContentList = styled(FlatList as new () => FlatList<IProduct>)`
  width: 100%;
  flex: 1;
`;
