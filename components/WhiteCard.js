import React,{useState} from 'react'
import { View, Text, TextInput, FlatList } from 'react-native'

export default function WhiteCard() {

    const [isfocus, setIsFocus] = useState(false)

    return (
        <View style={{ backgroundColor: 'white', borderRadius: 10, elevation: 7, flex: 1, width: '90%', marginVertical: 20, marginHorizontal: 20 }}>

            <Text style={{ marginLeft: 25, marginVertical: 20, fontWeight: 'bold' }}>About</Text>

            <View style={{ marginHorizontal: 25, marginBottom: 10 }}>
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ color: isfocus ? '#DC143C' : 'grey' }}>Current Title</Text>
                    <TextInput
                        onFocus={()=>setIsFocus(true)}
                        style={{ height: 40, borderColor: isfocus ? '#DC143C' : 'lightgrey', borderBottomWidth: 1, }}
                    />
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ color: 'grey' }}>Current Company</Text>
                    <TextInput
                        onFocus={()=>setIsFocus(true)}
                        style={{ height: 40, borderColor: 'lightgray', borderBottomWidth: 1 }}
                    />
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ color: 'grey' }}>Total Year of Experience</Text>
                    <TextInput
                        onFocus={()=>setIsFocus(true)}
                        style={{ height: 40, borderColor: 'lightgray', borderBottomWidth: 1 }}
                    />
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ color: 'grey' }}>Location</Text>
                    <TextInput
                        onFocus={()=>setIsFocus(true)}
                        style={{ height: 40, borderColor: 'lightgray', borderBottomWidth: 1 }}
                    />
                </View>
            </View>
        </View>
    )
}