/**
 * Created by kid on 2017/8/24
 * Function:查询
 * Desc:
 */
'use strict';
import React, { Component } from "react";
import { View, Text } from 'react-native';
import { Tabs,WingBlank  } from 'antd-mobile';
const TabPane = Tabs.TabPane;
export default class QueryOfStation extends Component {
    render() {
      return (
        <View style={{ flex: 1}}>

          <Tabs defaultActiveKey="1" >
            <TabPane tab="地点查询" key="1">

            </TabPane>
            <TabPane tab="线路查询" key="2">
 
            </TabPane>
            <TabPane tab="活动查询" key="3">
 
            </TabPane>
          </Tabs>
          
        </View>
      );
    }
  
  }