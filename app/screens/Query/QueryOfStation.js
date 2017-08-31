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
  render() {
    return (
      <View > 
          <View style={{  height:200  }}>
                <SearchButton/>
          </View>
          <View style={{ height:200 }}>
              <History text="常用路线"/>
          </View>
        
     </View>
      );
  }

}