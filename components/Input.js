import {StyleSheet, Text, TextInput, View} from 'react-native'

export default function Input({label, handleChange, value, focus = false}) {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} autoFocus={focus} onChangeText={handleChange} value={value}/>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center'
    },

    input: {
        width: 200,
        padding: 5,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        textAlign: 'center',
        marginBottom: 10
    }

})