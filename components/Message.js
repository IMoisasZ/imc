import {StyleSheet, Text} from 'react-native'

export default function Message ({children, type}) {
    return (
        <Text style={styles[type]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    error: {
        backgroundColor: 'red',
        padding: '6',
        color: '#fff',
    },

    success: {
        backgroundColor: 'green',
        padding: '6',
        color: '#000',
    }
})