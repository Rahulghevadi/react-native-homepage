import React, { Component } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const image1 = require('../images/orange.jpg');
const image2 = require('../images/tomato.jpg');
const image3 = require('../images/greens.jpg');
const image4 = require('../images/onion.jpg');
const image5 = require('../images/apple.jpg');


const data = [
    {
        id: 1,
        image: image1,
        name: 'Orange',
        price: 10,
        amountTaken: 3
    }, {
        id: 2,
        image: image2,
        name: 'Tomato',
        price: 5,
        amountTaken: 4
    }, {
        id: 3,
        image: image3,
        name: 'Green',
        price: 16,
        amountTaken: 2
    }, {
        id: 4,
        image: image4,
        name: 'Onion',
        price: 3,
        amountTaken: 3
    }, {
        id: 5,
        image: image5,
        name: 'Apple',
        price: 20,
        amountTaken: 1
    },
];

class Item extends Component {
    _renderItem({ item, index }) {
        const {
            containerStyle,
            lastItemStyle,
            imageStyle,
            textStyle,
            counterStyle,
            priceStyle } = styles;

        return (<View>
            <View style={(index + 1 === data.length) ? lastItemStyle : containerStyle}>
                <Image source={item.image} style={imageStyle} />

                <View style={textStyle}>
                    <Text style={{ color: '#2e2f30', fontSize: 20, }}>{item.name}</Text>

                    <View style={priceStyle}>
                        <Text style={{ color: '#2e2f30', fontSize: 20 }}>Rs.{item.price}/-</Text>
                    </View>
                </View>

            </View>

            <View style={counterStyle}>
                <Icon.Button
                    name="remove"
                    size={25}
                    color='black'
                    backgroundColor='#fff'
                    style={{ borderRadius: 15, backgroundColor: '#bbb', height: 40, width: 40 }}
                    iconStyle={{ marginRight: 0 }}
                />

                <Text>{item.amountTaken}</Text>

                <Icon.Button
                    name="add"
                    size={25}
                    color='black'
                    style='bold'
                    backgroundColor='#fff'
                    style={{ borderRadius: 15, backgroundColor: '#bbb', height: 40, width: 40 }}
                    iconStyle={{ marginRight: 0 }}
                />

            </View>
        </View>);
    }


    render() {
        return (
            <FlatList
                data={data}
                renderItem={this._renderItem}
                keyExtractor={(item) => item.id}
            />
        );
    }
}

const styles = {
    containerStyle: {
        flexDirection: 'row',
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#e2e2e2',
        padding: 10,
        paddingLeft: 15,
        backgroundColor: '#fff',
        marginTop: 10,
    },
    lastItemStyle: {
        flexDirection: 'row',
        flex: 1,
        padding: 10,
        paddingLeft: 15,
        backgroundColor: '#fff',
        marginTop: 10,
    },
    imageStyle: {
        width: 150,
        height: 150,
        marginRight: 20
    },
    textStyle: {
        flex: 2,
        // justifyContent: 'center'
    },
    priceStyle: {
        // backgroundColor: '#ddd',
        // width: ,
        // alignItems: 'center',
        marginTop: 20,
        borderRadius: 3
    },
    counterStyle: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
    }
};

export default Item;