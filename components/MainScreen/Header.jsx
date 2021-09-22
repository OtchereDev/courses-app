import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import tailwind from 'tailwind-rn'

const Header = () => {
    return (
        <View style={tailwind("w-full items-center pt-16")}>
            <View style={tailwind("w-10/12 flex items-center")}>
            <Image source={require("../../assets/bust-1.png")} />

            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})
