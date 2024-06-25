import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type VerticalSpacerProps ={
    height: number
}

export default function VerticalSpacer({height} : VerticalSpacerProps) {
  return (
    <View style={{height: height}}/>
  )
}