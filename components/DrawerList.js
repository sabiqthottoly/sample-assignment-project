import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'

export default function DrawerList() {

    const listData = [{ title: 'Inbox', image: require('../images/inbox.png') },
    { title: 'Edit Profile', image: require('../images/user.png') },
    { title: 'Refer a friend', image: require('../images/refer.png') },
    { title: 'Manage Subscription', image: require('../images/message.png') },
    { title: 'Pause Activity', image: require('../images/wall-clock.png') },
    { title: 'Logout', image: require('../images/logout.png') },]

    return (
        <View>
            <View>
                <View style={{ marginTop: 50, marginBottom: 25, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View>
                        <Image source={require('../images/woman.jpg')} style={{ height: 80, width: 80, borderRadius: 80 / 2 }} />
                        <View style={{ height: 15, width: 15, backgroundColor: 'green', borderRadius: 15 / 2, borderWidth: 1, borderColor: 'white', position: 'absolute', bottom: 4, right: 7 }}></View>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'grey', textAlign: 'left' }}>Edwina</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../images/pin.png')} style={{ height: 13, width: 13, tintColor: 'grey', marginRight: 2 }} />
                            <Text style={{ fontSize: 13, color: 'grey', textAlign: 'left' }}>Bangalore,India</Text>
                        </View>
                    </View>
                </View>
                <FlatList
                    data={listData}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity style={{ flexDirection: 'row', marginHorizontal: 5, marginVertical: 10, borderTopWidth: index ? 1 : 0, borderColor: 'lightgrey' }}>
                                <Image source={item.image} style={{ height: 25, width: 25, marginRight: 10, marginTop: 20, tintColor: 'grey' }} />
                                <Text style={{ marginTop: 20, color: 'grey' }}>{item.title}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </View>
    )
}