/**
 * Created by kid on 2017/8/10
 * Function:主页视图
 * Desc:
 */
import React, { Component } from "react";
import { View, Alert, Text } from "react-native";
import { TabBar, SearchBar } from 'antd-mobile';


export default class IndexScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
    };
  }

  renderContent(pageText) {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
        <SearchBar
          placeholder="搜索"
          showCancelButton
        />
        <Text style={{ margin: 50 }}>{pageText}</Text>
      </View>
    );
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
        barTintColor="#ccc"
      >
        <TabBar.Item
          title="生活"
        
   
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => this.onChangeTab('blueTab')}
        >
          {this.renderContent('生活 Tab')}
        </TabBar.Item>
        <TabBar.Item
        
       
          title="口碑"
          badge={2}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => this.onChangeTab('redTab')}
        >
          {this.renderContent('口碑 Tab')}
        </TabBar.Item>
        <TabBar.Item
       
       
          title="朋友"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => this.onChangeTab('greenTab')}
        >
          {this.renderContent('朋友 Tab')}
        </TabBar.Item>
        <TabBar.Item
          icon="home"
        
          title="我的"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => this.onChangeTab('yellowTab')}
        >
          {this.renderContent('我的 Tab')}
        </TabBar.Item>
      </TabBar>
    );
  }


}