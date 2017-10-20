/**
 * Created by kid on 2017/8/10
 * Function:主页视图
 * Desc:
 */
import React, { Component } from "react";
import { View,Dimensions,Text  } from "react-native";
import { TabBar  } from 'antd-mobile';
import { Constants, Images } from "../../resource/";
import QueryInfo from "../Query/QueryInfo";
var screenW = Dimensions.get('window').width;
var screenH = Dimensions.get('window').height;
export default class IndexScreen extends Component {
  static navigationOptions = {
    title: '查询',
     
    headerTitleStyle:{
     color:'red',
 
    },
 
  };
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: Constants.string_IndexScreen_TabBar1,
    };
    //当前路由名称
    console.log('当前路由名称'+this.props.navigation.state.routeName);
  }
 
  onChangeTab(tabName) {
    this.setState({
      selectedTab: tabName,
    });
  }

  render() {
   
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#FFFFFF"
      >
        <TabBar.Item
        icon={Images.m_search}
          title="查询"
         
          selected={this.state.selectedTab === Constants.string_IndexScreen_TabBar1}
          onPress={() => this.onChangeTab(Constants.string_IndexScreen_TabBar1)}
        >
          <QueryInfo/>
        </TabBar.Item>
        <TabBar.Item
        
        icon={Images.m_search}
          title="乘车"
          selected={this.state.selectedTab === Constants.string_IndexScreen_TabBar2}
          onPress={() => this.onChangeTab(Constants.string_IndexScreen_TabBar2)}
        >
        
        </TabBar.Item>
 
        <TabBar.Item
     
        icon={Images.m_search}
          title="我的"
          selected={this.state.selectedTab === Constants.string_IndexScreen_TabBar3}
          onPress={() => this.onChangeTab(Constants.string_IndexScreen_TabBar3)}
        >
       
        </TabBar.Item>
      </TabBar>
    );
  }


}