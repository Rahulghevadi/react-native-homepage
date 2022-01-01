import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Fruits = () => {
    return (
        <View style={styles.FruitesContainer}>
            <Text>Fruits</Text>
        </View>
    )
}

export default Fruits

const styles = StyleSheet.create({
    FruitesContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
