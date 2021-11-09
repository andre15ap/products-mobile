import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { COLORS } from '../../constants/colors';
import { IProduct } from '../../services/api';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${COLORS.BACKGROUND};
`;

export const ContentList = styled(FlatList as new () => FlatList<IProduct>)`
  flex: 1;
  background-color: ${COLORS.GRAY_LIGHT};
  width: 100%;
`;

export const Text = styled.Text`
  font-size: 10px;
  color: ${COLORS.WHITE};
`;

export const ContainerIcon = styled.View`
  padding: 5px;
  align-items: flex-end;
  position: relative;
`;

export const AlertItem = styled.View`
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  border-radius: 8px;
  background-color: ${COLORS.DANGER};
  top: 0;
  right: 0;
`;
