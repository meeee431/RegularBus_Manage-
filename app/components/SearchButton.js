/**
 * Created by kid on 2017/5/17
 * Function: 组合式搜索框（可上下对调）
 * Desc:
 */
import React, { Component } from 'react';
import { View, TextInput, StyleSheet,Image,TouchableHighlight } from 'react-native';
import SearchButtonSimple from './SearchButtonSimple';
import  {Images} from '../resource';
import {Button  } from 'antd-mobile';
export default class SearchButton extends Component {
    //设置默认值
   constructor(props) {
    super(props);
    this.state={
        start:'',
        end:'',
    }
  }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerUp}>
                    <View style={styles.containerUpLeft}>
                    <SearchButtonSimple text={this.state.start} placeholder="出发地"  click={this.startchange}/>
                    <SearchButtonSimple  text={this.state.end} placeholder="目的地" click={this.endchange}/>
                    </View>
                    <TouchableHighlight onPress={this.change}>
                    <View style={styles.containerUpRight}>
                 
                    <Image source={Images.ic_arrowchange} style={styles.change}/>  

                       
                    </View>
                    </TouchableHighlight>
                     
                </View>
                <View style={styles.containerDown}>
                    
                    <Button  type="primary" style={styles.submit} onClick={this.click} >查询</Button>
           
                </View>

            </View>


        )
    }
    //出发地
    //因为这里要设置this.state所以用箭头函数
    startchange=(value)=>{
      
        this.setState({  
            start: value
          })  ;
        
    }
    //目的地
    endchange=(value)=>{
        this.setState({  
            end: value
          })  ;
    }
    click=()=>{
    
       this.props.submit(this.state.start,this.state.end);
    }
    //切换
    change=()=>{
        let start=this.state.start;
        let end=this.state.end;

        this.setState({  
            start: end,
            end:start
          })  ;
    }
 
}

const styles = StyleSheet.create({
    //整体页面
    container: {
        flexDirection: 'column',

    },
    //上半部份
    containerUp: {
        flexDirection: 'row',
        height: 140,
    },
    //左上半部份
    containerUpLeft: {
        flex: 10,
    },
    //左上半部份_上
    containerUpLeft_Up: {
        flex: 1,
        backgroundColor: 'powderblue',

    },
    //左上半部份_下
    containerUpLeft_Down: {
        flex: 1,
        backgroundColor: 'steelblue'
    },
    //右上半部份
    containerUpRight: {
        flex: 1,
     
    },
    //下半部份
    containerDown: {
        flex: 1,

    },
    change: {  
        marginLeft: 6,  
        marginRight: 6, 
        top:50, 
        width: 16.7,  
        height:40,  
    
    },  
    submit:{
        borderRadius: 80,  // 设置圆角边
        marginLeft: 20,
        marginRight: 40,
        backgroundColor:"skyblue",
        alignItems:'center'
    }


});