/**
 * Created by kid on 2017/8/10
 * Function:主页视图
 * Desc:
 */
import React, { Component } from "react";
import { View,Image,StyleSheet ,Dimensions,TextInput,Text,TouchableHighlight } from "react-native";
import { Constants, Images } from "../../resource/";
var screenW = Dimensions.get('window').width;
var screenH = Dimensions.get('window').height;
 export default class home extends Component{


    constructor(props) {
        super(props);
        this.state={
            aa:'abc',
 
        }
 
      }
    render(){
 
        return(
        <View style={styles.container}>
        <Text style={styles.regist}>注册</Text>
        <Image source={Images.ic_arrowchange} style={styles.iconStyle} />
        <TextInput underlineColorAndroid='transparent'  keyboardType={'number-pad'} placeholder={'QQ号码/手机/邮箱'} style={styles.textInputStyle}   />
        <TextInput underlineColorAndroid='transparent'   secureTextEntry={true} placeholder={'密码'} password={true} style={styles.textInputStyle} />
        <View style={styles.loginBtnStyle} >
            <TouchableHighlight onPress={ ()=>this.aa('1')}>
            <Text style={styles.loginTextStyle} >登录</Text>
            </TouchableHighlight>
        </View>
        <View style={styles.settingStyle}>
            <Text style={styles.settingTextStyle}>无法登录?</Text>
            <Text style={styles.settingTextStyle}>新用户注册</Text>
        </View>
    </View>
    );
    }
    aa=(a)=>{
        alert('aa');
    }
 }
 bb=( )=>{
    alert('aa');
}
 const styles = StyleSheet.create({
    regist:{
        alignSelf:'flex-end',
        marginTop:10,
        fontSize:18,
        paddingRight: 10,
 
 
        color:'#000'
    },
    container: {
        flex: 1,
        backgroundColor: '#E7E7E7',
        // 设置侧轴对齐方式
        alignItems:'center',
    },
    iconStyle:{
        marginTop:0,
        marginBottom:10,
        width:80,
        height:80,
        borderWidth:2,
        borderColor:'white',
        borderRadius:40
    },
    textInputStyle:{
        height:44,
        width:screenW,
        backgroundColor:'white',
        marginBottom:1,
        textAlign:'center',
        color:'#999999'
    },
    loginBtnStyle:{
        height:38,
        width:screenW * 0.85,
        backgroundColor:'#0080D6',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        borderRadius:3
    },
    loginTextStyle:{
        color:'white'
    },
    settingStyle:{
        width:screenW * 0.85,
        // 设置主轴的方向
        flexDirection:'row',
        // 主轴对齐方式
        justifyContent:'space-between',
        // 绝对定位
        position:'absolute',
        bottom:20,
        left:(screenW - screenW * 0.85) * 0.5,
    },
    settingTextStyle:{
        color:'#0080D6'
    },
});