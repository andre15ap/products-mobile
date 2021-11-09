import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import { COLORS } from '../../constants/colors';

const { width } = Dimensions.get('screen');

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 15px;
`;

export const ContentScroll = styled.ScrollView`
  flex: 1;
`;

export const Content = styled.View`
  /* flex: 1; */
`;

export const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Row = styled.View`
  margin-top: 10px;
  padding: 5px;
  border-radius: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${COLORS.WHITE};
`;

export const Section = styled.View`
  flex-direction: row;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${width * 0.1}px;
  height: ${width * 0.1}px;
  margin-right: 5px;
`;

export const Text = styled.Text`
  font-size: 15px;
  border-color: ${COLORS.GRAY_DARK};
`;

export const TextPrice = styled.Text`
  font-size: 12px;
  border-color: ${COLORS.GRAY};
`;

export const Button = styled.TouchableOpacity`
  padding: 5px;
  border-radius: 15px;
  border-width: 1px;
  border-color: ${COLORS.DANGER};
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 15px;
`;
