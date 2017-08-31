/**
 * Created by kid on 2017/8/31
 * Function: 搜索历史
 * Desc:
 */
import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Image, Text } from 'react-native';
export default class History extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (

            <View >
                <View style={styles.Up}>
                    <Text style={styles.Text}>{this.props.text}</Text>
                </View>
            </View>



        )
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
    }
});

