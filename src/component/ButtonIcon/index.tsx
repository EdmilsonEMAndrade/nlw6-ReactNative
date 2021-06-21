import React from 'react';
import { View, Text, TextInput, Image, StatusBar, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import DiscordImg from '../../assets/discord.png'
import { styles } from './style';

type Props = TouchableOpacityProps & {
  title: string;
  image: HTMLImageElement;
}

export function ButtonIcon({ title, image, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={image} style={styles.icon} />
      </View>
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>

  );
}