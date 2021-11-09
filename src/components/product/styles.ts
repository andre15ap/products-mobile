import { Dimensions } from 'react-native';

import styled from 'styled-components/native';
import { COLORS } from '../../constants/colors';

const { width } = Dimensions.get('screen');

interface Props {
  inCart?: boolean;
}

export const Container = styled.View`
  flex: 1;
  width: ${width * 0.5}px;
  max-width: ${width * 0.5}px;
  align-items: center;
  padding: 5px 10px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${width * 0.4}px;
  height: ${width * 0.45}px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${COLORS.GRAY_DARK};
`;

export const Text = styled.Text`
  font-size: 14px;
  color: ${(props: Props) => (props.inCart ? COLORS.DANGER : COLORS.SUCCESS)};
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  padding: 5px 15px;
  width: 100%;
  border-radius: 5px;
  border-width: 1px;
  background-color: ${COLORS.WHITE};
  border-color: ${COLORS.GRAY_LIGHT};
  elevation: 2;
  align-items: center;
`;
