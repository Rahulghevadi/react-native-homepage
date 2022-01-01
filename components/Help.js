import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Help = () => {
    return (
        <View style={styles.helpcontainer}>
            <Text>Let Me Help You</Text>
        </View>
    )
}

export default Help

const styles = StyleSheet.create({
    helpcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
