import React from 'react'
import { View, Text } from 'react-native'
import tailwind from 'tailwind-rn'

export default function DescriptionText() {
    return (
        <View style={tailwind("items-center")} >
            <View style={tailwind("w-10/12 ")}>

                <Text style={tailwind("text-lg text-center")}>
                    Find out how our new matching tool can help you learn another way
                </Text>
            </View>
        </View>
    )
}
