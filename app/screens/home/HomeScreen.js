/**
 * Created by kid on 2017/5/17
 * Function:主页视图
 * Desc:
 */
import React, { Component } from "react";
import { View, Alert } from "react-native";

import { Container, Content, Drawer, List, ListItem, Icon, Badge, Text } from "native-base";


import { Constants, Images } from "../../resource/";
import Styles from "./styles/HomeScreenStyles";

import { TitleBar, ImageButton } from '../../components/'

import oilInfo from '../../resource/db/control/oilInfo'
import moment from  'moment';
export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.oilOption = new oilInfo();
        this.oils = this.oilOption.queryAll();
        this.state = {
            oils:  this.oils ,
    
        };
    }
    
    renderList(list) {
        return list.map(item => this.renderItem(item));
    }
    renderItem(item) {
        return (

            <ListItem iconLeft>
                <Icon name="ios-car" style={{ color: '#0A69FE' }} />
                <Text>{item.price}</Text>
                <Text note>Off</Text>
            </ListItem>
        );
    }
    render() {

        return (

            <Container>
                <TitleBar
                    title={Constants.string_title_homeScreen}

                />
                <Content>


                    <List dataArray={this.state.oils}

                        renderRow={(item) =>
                            <ListItem>
                                <Icon name="ios-car" style={{ color: '#0A69FE' }} />
                                <Text>加油日期:{moment(item.addDate).format("YYYY-MM-DD")  }</Text>
                                <Text>油价:{item.price}</Text>
                                <Text>总价:{item.total}</Text>
                                <Text>当前里程:{item.trip}</Text>
                                <Text>预计行驶里程:{item.preTrip}</Text>
                                <Text>实际行驶里程:{item.realTrip}</Text>
 
                            </ListItem>
                        }
                    >

                    </List>
                </Content>
                <View style={Styles.view_bottom_menu_container}>

                    <ImageButton
                        style={Styles.image_ridenow_button}

                        source={Images.ic_ridenow}
                        onPress={() => { this.AddNew() }}
                    >
                        <Icon name="ios-add" style={{ color: '#fff' }} />

                    </ImageButton>

                </View>

            </Container>

        );
    }

    AddNew() {
  const self = this;
        this.props.navigation.navigate("AddNew",{
            oils:(info) => { self.setState({
              oils:info
            })
            }
        });
    }



}

