/**
 * Created by kid on 2017/5/17
 * Function: 程序主入口
 * Desc: 在这里做一些全局配置，比如全局 Navigator配置，全局变量初始化等。
 */

import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';

import IndexScreen from './screens/home/IndexScreen';
 
 


const App = StackNavigator({
        Main: {screen: IndexScreen },

        
    }, {
       //headerMode: 'none',
    },   
);


 
AppRegistry.registerComponent('RegularBus_Manage', () => App);