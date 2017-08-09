/**
 * Created by kid on 2017/5/17
 * Function: 程序主入口
 * Desc: 在这里做一些全局配置，比如全局 Navigator配置，全局变量初始化等。
 */

import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';

import HomeScreen from './screens/home/HomeScreen';
 import AddNewScreen from './screens/addnew/AddNewScreen';

const App = StackNavigator({
        Main: {screen: HomeScreen},
        AddNew: {screen: AddNewScreen},
        
    }, {
        headerMode: 'none',
    },   
);


//如果使用template 创建，需要将‘MarnoRN’替换成你自己项目的名称
AppRegistry.registerComponent('RealmTest', () => App);