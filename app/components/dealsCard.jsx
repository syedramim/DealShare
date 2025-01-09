import { View } from 'react-native'
import { Card, Text, Button } from 'react-native-paper'
import { HeartIcon as Heart } from 'react-native-heroicons/outline'
import React from 'react'

const dealsCard = () => {
    const placeOfPurchase = 'Henrys'
    const dateOfPurchase = '01/02/2020'
    const titleOfDeal = "Crazy Deal"
    const previousPrice = 20.00
    const dealPrice = 12.00
    const likeCount = 3
      

  return (
    <View>
      <Card mode='outlined' elevation={2}>
        <Card.Title title={`${placeOfPurchase}`} subtitle={`${dateOfPurchase}`} />
        <Card.Content>
            <Text>{titleOfDeal}</Text>
            <Text>{`Was $${previousPrice} \nNow ${dealPrice}`}</Text>
        </Card.Content>

        <Card.Actions>
            <Button icon={Heart} >{likeCount}</Button>
        </Card.Actions>
      </Card>
    </View>
  )
}

export default dealsCard