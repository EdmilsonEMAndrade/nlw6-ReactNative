import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

type Props={
    title: string;
    subTitle: string;    
}

export function ListHeader(props:Props){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                {props.title}
            </Text>
            <Text style={styles.subTitle}>
                {props.subTitle}
            </Text>

        </View>
    )
}