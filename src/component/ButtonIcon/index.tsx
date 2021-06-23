import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { View, Text, Image} from 'react-native';

import { styles } from './style';

type Props = RectButtonProps & {
  title: string;
  image: HTMLImageElement;
}

export function ButtonIcon({ title, image, ...rest }: Props) {
  return (
    <RectButton
      style={styles.container}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={image} style={styles.icon} />
      </View>
      <Text style={styles.title}>
        {title}
      </Text>
    </RectButton>

  );
}