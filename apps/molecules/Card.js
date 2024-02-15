import React from 'react';
import View from '../atoms/View';
import {MEDIUM, SMALL} from '../theme/style';
import {GREY_COLOR, LIGHT_GREY} from '../theme/colors';

const Card = ({children, ...restProps}) => {
  return (
    <View
      flexRow
      margin={SMALL}
      borderWidth={1}
      borderRadius={MEDIUM}
      paddingVertical={MEDIUM}
      borderColor={GREY_COLOR}
      paddingHorizontal={SMALL}
      backgroundColor={LIGHT_GREY}
      {...restProps}>
      {children}
    </View>
  );
};

export default Card;
