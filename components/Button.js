import {StyleSheet, Button} from 'react-native'

export default function MyButton ({nameBtn, handleOnClick}) {
    return (
        <Button style={styles.btn} title={nameBtn} onPress={handleOnClick} />
    )
}

const styles = StyleSheet.create({
    btn: {
        width: 20,
        backgroundColor: 'black',
        color: '#fff'
    }
})