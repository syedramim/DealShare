import { Appbar, TextInput, Button } from 'react-native-paper'
import { ScrollView, View, StyleSheet } from 'react-native'
import Spacer from '../components/Spacer'
import React, {useState} from 'react'


const AddDealScreen = () => {
    const [placeOfPurchase, setPlaceOfPurchase] = useState('')
    const [dateOfPurchase, setDateOfPurchase] = useState('')
    const [titleOfDeal, setTitleOfDeal] = useState('')
    const [previousPrice, setPreviousPrice] = useState(0.00)
    const [dealPrice, setDealPrice] = useState(0.00)
    const [description, setDescription] = useState('')
    const [dealImage, setdealImage] = useState('')
    const [category, setCategory] = useState('Food')


    return (
        <View style={styles.container}>
            <ScrollView>
                <Appbar.Header>
                    <Appbar.Content title= "Add Deal" />
                </Appbar.Header>

                <TextInput 
                    label="Store Name"
                    value={placeOfPurchase}
                    onChangeText={text => setPlaceOfPurchase(text)}    
                />

                <TextInput 
                    label="Date Purchased"
                    value={dateOfPurchase}
                    onChangeText={text => setDateOfPurchase(text)}    
                />  

                <TextInput 
                    label="Deal Title"
                    value={titleOfDeal}
                    onChangeText={text => setTitleOfDeal(text)}    
                />

                <TextInput 
                    label="Original Price"
                    value={previousPrice}
                    onChangeText={text => setPreviousPrice(text)}    
                />

                <TextInput 
                    label="Discounted Price"
                    value={dealPrice}
                    onChangeText={text => setDealPrice(text)}    
                />

                <TextInput 
                    label="Description of Deal"
                    value={description}
                    onChangeText={text => setDescription(text)}    
                />

                <TextInput 
                    label="ImageHolder"
                    value={dealImage}
                    onChangeText={text => setdealImage(text)}    
                />

            </ScrollView>

            <Spacer />

            <Button
                mode='contained-tonal'
            >
                Submit
            </Button>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding: 10,
            justifyContent: 'space-evenly'
        }
    }
)

export default AddDealScreen