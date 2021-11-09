import { Dimensions } from 'react-native';

import styled from 'styled-components/native';
import { COLORS } from '../../constants/colors';

const { width } = Dimensions.get('screen');

export const Container = styled.View`
  flex: 1;
  max-height: ${width * 0.15}px;
  background-color: ${COLORS.PRIMARY};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.TouchableOpacity`
  padding: 6px;
  align-items: flex-end;
  position: relative;
`;

export const Text = styled.Text`
  font-size: 10px;
  color: ${COLORS.WHITE};
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
  right: 5px;
`;
