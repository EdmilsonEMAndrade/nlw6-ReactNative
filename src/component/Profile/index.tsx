import React from 'react';
import {View, Text} from 'react-native';
import { styles } from './style';
import { Avatar } from '../Avatar';

type Props = {
    urlImage: string,
    username: string
}

export function Profile(props:Props){   
    return(
        <View style={styles.container}>
            <Avatar urlImage={props.urlImage}/>
            <View>
            <View style={styles.user}>
                <Text style={styles.greeting}>
                    Olá,
                </Text>
                <Text style={styles.username}>
                    {props.username}
                </Text>
            </View>
                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
            </View>


        </View>
    )
}