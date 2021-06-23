import React, { ReactNode } from 'react';
import { Image, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './style';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';


export function GuildIcon() {
    const uri = 'https://i.pinimg.com/originals/19/09/10/190910840fbc6d833ff3523a2122a9b9.jpg';
    return (       
            <Image 
            source={{uri}}            
            style={styles.image}
            resizeMode='cover'
            />
    )
}