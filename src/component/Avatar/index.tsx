import React from 'react';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './style';
import { theme } from '../../global/styles/theme';

type Props = {
    urlImage: string
}

export function Avatar(props:Props){
    const {secondary70,secondary50} = theme.colors;    
    return(
        <LinearGradient
            style={styles.container}
            colors={[secondary50, secondary70]}        >
            <Image
            source={{uri:props.urlImage}}
            style={styles.avatar}
            />
        </LinearGradient>
    )
}