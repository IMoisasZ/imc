import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View} from 'react-native'

export default function Container ({children}) {
    return (
        <View style={styles.container}>
            {children}
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });