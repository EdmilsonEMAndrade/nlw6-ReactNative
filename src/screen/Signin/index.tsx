import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import IllustrationImg from '../../assets/illustration.png';
import { styles } from './style';
import { ButtonIcon } from '../../component/ButtonIcon';
import DiscordImg from '../../assets/discord.png';


export function SingIn() {

  const navigation = useNavigation();

  function handleSignIn(){
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>      
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode='stretch'
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'}
          e organize {'\n'}
          suas jogatinas 
        </Text>
        <Text style={styles.subTitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>
        <ButtonIcon
          title={'Entrar com Discord'}
          image={DiscordImg}
          onPress= {handleSignIn}
        />
      </View>
    </View>
  );
}