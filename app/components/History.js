/**
 * Created by kid on 2017/8/31
 * Function: 搜索历史
 * Desc:
 */
import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Image, Text, ScrollView } from 'react-native';
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

export default class History extends Component {
    constructor(props) {
        super(props);

    }

    render() {
 
        let hisstoryitem = this.props.data.map(data => {
         
            return (<Item onClick={()=> 
                     this.props.click(data.start,data.end)
               } > <Text style={styles.ItemText}>{data.start}--{data.end}</Text></Item>)

        })
        return (

            <View style={{ flex: 1 }}>
                <View style={styles.Up}>
                    <Text style={styles.Text}>{this.props.text}</Text>
                </View>

                <List style={{ flex: 1 }}>
                    {hisstoryitem}
                </List>

            </View>



        )
    }
    //
    itemclick=(a,b)=>{
        alert(a);

    }
}

const styles = StyleSheet.create({
    Up: {

        height: 40,
        backgroundColor: '#c2ccd0',


    },

    Text: {
        fontSize: 20,
        color: 'black',
        marginLeft: 20,
        top: 5,
        justifyContent:'center',
        alignItems:'center',
    },
    ItemText: {

        color: 'blue',

    }
});

