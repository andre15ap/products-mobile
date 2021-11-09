import styled from 'styled-components/native';

import { COLORS } from '../../constants/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${COLORS.BACKGROUND};
`;

export const ContentScroll = styled.ScrollView`
  flex: 1;
  padding: 15px;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 15px;
`;
