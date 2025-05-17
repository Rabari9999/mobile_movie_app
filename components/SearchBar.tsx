import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface Props {
  placeHolder: string,
  onPress ? ():void;
  value:string,
  onChangeText : (item:string)=>void
}

const SearchBar = ({placeHolder,onPress,value,onChangeText}:Props) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#333', borderRadius: 25, paddingHorizontal: 20, paddingVertical: 10 }}>
      <Image source={icons.search} style={{ width: 20, height: 20, resizeMode: 'contain', tintColor: '#ab8ff' }} />
      <TextInput 
      onPress={onPress}
      placeholder = {placeHolder}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor="#a8b5db"
      className='flex-1 ml-2 text-white'
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({})