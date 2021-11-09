import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { COLORS } from '../../constants/colors';

import { Container, Content, Text, AlertItem } from './styles';

interface IPros {
  name?: string;
  actionBack?: () => void;
  actionClickCart?: () => void;
  countItems?: number;
}

function Header({ actionClickCart, actionBack, countItems }: IPros) {
  const renderBadge = () => {
    if (countItems) {
      return (
        <AlertItem>
          <Text>{countItems}</Text>
        </AlertItem>
      );
    }
  };

  return (
    <Container>
      <Content onPress={actionBack}>
        {actionBack && (
          <Icon name="arrow-back" size={30} color={COLORS.GRAY_LIGHT} />
        )}
      </Content>
      {actionClickCart && (
        <Content onPress={actionClickCart}>
          <Icon name="shopping-cart" size={30} color={COLORS.WHITE} />
          {renderBadge()}
        </Content>
      )}
    </Container>
  );
}

export { Header };
