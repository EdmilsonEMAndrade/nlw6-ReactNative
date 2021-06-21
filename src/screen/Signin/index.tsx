import React from 'react';
import { View, Text, TextInput, Image, StatusBar } from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { styles } from './style';
import { ButtonIcon } from '../../component/ButtonIcon';
import DiscordImg from '../../assets/discord.png'

export function SingIn() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode='stretch'
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Ortganize {'\n'}
          suas jogatinas {'\n'}
          facilmente
        </Text>
        <Text style={styles.subTitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>
        <ButtonIcon
          title={'Entrar com Discord'}
          image={DiscordImg}
          activeOpacity={0.7}
        />
      </View>
    </View>

  );
}