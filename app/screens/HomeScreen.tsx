import { View, Text, ScrollView } from 'react-native'
import { Appbar, Searchbar, Chip } from "react-native-paper"
import React, { useState } from 'react'
import DealsCard from '../components/dealsCard'

const HomeScreen = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const categories: string[] = ["All", "Food", "Tech", "More1", "More1", "More1", "More1"]

  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title= "Deals Feed" />
      </Appbar.Header>

      <Searchbar 
        placeholder='Search Deals'
        onChangeText={setSearchQuery}
        value={searchQuery}
      />

      <ScrollView horizontal={true}>
        {categories.map((cat) => (
            <Chip icon="information"> {cat} </Chip>
        ))}
      </ScrollView>

      <ScrollView>
      {categories.map((cat) => (
           <DealsCard />
        ))}
      </ScrollView>
    </View>
  )
}

export default HomeScreen