import React from 'react';
import { ActivityIndicator } from 'react-native';

import { COLORS } from '../../constants/colors';

function Loading() {
  return <ActivityIndicator size="large" color={COLORS.PRIMARY} />;
}

export { Loading };
