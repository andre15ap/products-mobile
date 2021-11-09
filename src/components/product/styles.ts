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

export const Content = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  elevation: 2;
  border-radius: 5px;
  background-color: ${COLORS.SECONDARY};
  justify-content: space-around;
  padding-bottom: 10px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  flex: 1;
  width: ${width * 0.4}px;
  height: ${width * 0.45}px;
`;

export const Section = styled.View`
  flex: 1;
  align-items: flex-start;
  width: ${width * 0.4}px;
  margin: 10px 0;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${COLORS.GRAY_LIGHT};
`;

export const TextPrice = styled.Text`
  font-size: 12px;
  color: ${COLORS.GRAY_LIGHT};
`;

export const Text = styled.Text`
  font-size: 14px;
  color: ${(props: Props) => (props.inCart ? COLORS.DANGER : COLORS.SUCCESS)};
`;

export const Button = styled.TouchableOpacity`
  padding: 5px 15px;
  width: ${width * 0.4}px;
  border-radius: 5px;
  background-color: ${COLORS.WHITE};
  elevation: 2;
  align-items: center;
`;
