import {StyleSheet} from 'react-native';
import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: theme.colors.background
    },
    content:{
        marginTop:-40,
        paddingHorizontal: 50
    },
    image:{
        width: '100%',
        height: 360
    },
    title:{
        color: theme.colors.reading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16
    },
    subTitle:{
        color: theme.colors.reading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64
    }
});