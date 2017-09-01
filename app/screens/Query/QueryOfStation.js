/**
 * Created by kid on 2017/8/24
 * Function:查询
 * Desc:
 */
'use strict';
import React, { Component } from "react";
import { View, Text,TextInput } from 'react-native';
import { InputItem } from 'antd-mobile';
import  {SearchButton,History} from '../../components';
export default class QueryOfStation extends Component {
      //设置默认值
      constructor(props) {
        super(props);
        this.state={
            history:[],
        }
      }
  render() {
    return (
      <View > 
          <View style={{  height:200  }}>
                <SearchButton submit={this.submit}/>
          </View>
          <View style={{ height:200 }}>
              <History text="常用路线" data={this.state.history} click={this.submit}/>
          </View>
        
     </View>
      );
  }
  //提交
  submit=(start,end)=>{
      let his={start,end};
      let old=this.state.history;
      let newdata=old.concat(his);
 
      this.setState({
        history:newdata,
      });

      

  }
}