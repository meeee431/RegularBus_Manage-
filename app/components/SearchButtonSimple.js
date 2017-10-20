/**
 * Created by kid on 2017/5/17
 * Function: 组合式搜索框（可上下对调）
 * Desc:
 */
import React, { Component } from 'react';
import { View, TextInput, StyleSheet,Image } from 'react-native';
import  {Images} from '../resource'
export default class SearchButton extends Component {
    //设置默认值
    static defaultProps = {  
 
      }  
      
  constructor(props) {
    super(props);
 
  }

    render() {
        return (

            <View style={styles.Container}>
                 <Image source={Images.ic_ridenow} style={styles.searchIcon}/>  
                 <TextInput  
                        placeholder={this.props.placeholder}
                        underlineColorAndroid='transparent' 
                        style={styles.inputText}
                        value={this.props.text}
                        onChangeText={ this.props.click} />  
                <Image source={Images.ic_ridenow} style={styles.cancelIcon}/>  
            </View>



        )
    }
 
}

const styles = StyleSheet.create({

     Container: {
        height: 50,
        flexDirection: 'row',
        borderRadius: 80,  // 设置圆角边
        backgroundColor: 'white',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 12,
        marginTop:10,
        top:10,
        borderWidth:1,
        borderColor:'#bacac6'

    },
    searchIcon: {  
        marginLeft: 6,  
        marginRight: 6,  
        width: 16.7,  
        height: 16.7,  
        resizeMode: 'stretch'  
    },  
    inputText: {  
        flex: 1,  
        backgroundColor: 'transparent',  
        fontSize: 14  
    },
    cancelIcon: {  
        marginLeft: 6,  
        marginRight: 6,  
        width: 16.7,  
        height: 16.7,  
        resizeMode: 'stretch'  
    },  

});