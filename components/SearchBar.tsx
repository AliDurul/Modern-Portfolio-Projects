import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface SearchBarProps {
  onPress?: () => void;
  placeholder: string;
}

export default function SearchBar({ onPress, placeholder }: SearchBarProps) {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
      <Image source={icons.search} className='size-5' resizeMode='contain' tintColor="#ab8bff" />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        placeholderTextColor="#ab8bff"
        value=''
        onChange={() => { }}
        className='flex-1 ml-3 text-white'
      />
    </View>
  )
}