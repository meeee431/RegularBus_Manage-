/**
 * Created by kid on 2017/5/17
 * Function:新增视图
 * Desc:
 */
'use strict';
import React, { Component } from "react";
import { View, Alert } from "react-native";
import { Container, Content, ListItem, InputGroup, Input, Icon, Text, Picker, Button, Item } from "native-base";
import oilInfo from '../../resource/db/control/oilInfo'


import { DatePicker, List } from 'antd-mobile';
//时间类型转换工具
import moment from 'moment';
export default class AddNewScreen extends Component {

    constructor(props) {
        super(props);
        const gmtNow = moment().utcOffset(0);
        this.state = {
            selectedItem: undefined,
            selected1: 'key0',
            results: {
                items: [],
            },
            addDate: gmtNow,

        };
    }
    onValueChange(value: string) {
        this.setState({
            selected1: value,
        });
    }
    AddNew() {

        let a = new oilInfo();

        a.addInfo(new Date(this.state.addDate),
            Number.parseFloat(this.state.price),
            Number.parseFloat(this.state.total),
            Number.parseInt(this.state.trip),
            Number.parseInt(this.state.preTrip),
            Number.parseInt(this.state.realTrip));
        let oils = a.queryAll();

        this.props.navigation.state.params.oils(oils);

        const { goBack } = this.props.navigation;
        goBack();

    }
    onChange = (addDate) => {

        this.setState({
            addDate,
        });
    }
    onChange_price = (price) => {

        this.setState({
            price,
        });
    }
    onChange_total = (total) => {

        this.setState({
            total,
        });
    }
    onChange_trip = (trip) => {

        this.setState({
            trip,
        });
    }
    onChange_preTrip = (preTrip) => {

        this.setState({
            preTrip,
        });
    }
    onChange_realTrip = (realTrip) => {

        this.setState({
            realTrip,
        });
    }
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <DatePicker mode="date" title="选择日期"
                            value={this.state.addDate}
                            onChange={this.onChange}>
                            <List.Item arrow="horizontal">
                                选择日期
                            </List.Item>
                        </DatePicker>
                        <List.Item>
                            <InputGroup>
                                <Icon name="ios-car" style={{ color: '#0A69FE' }} />
                                <Input placeholder="油价" keyboardType="numeric"
                                    onChangeText={this.onChange_price} />
                            </InputGroup>
                        </List.Item>
                        <List.Item>
                            <InputGroup>

                                <Input placeholder="总价" keyboardType="numeric"
                                    onChangeText={this.onChange_total} />
                            </InputGroup>
                        </List.Item>
                        <List.Item>
                            <InputGroup>

                                <Input placeholder="当前里程" keyboardType="numeric"
                                    onChangeText={this.onChange_trip} />
                            </InputGroup>
                        </List.Item>
                        <List.Item>
                            <InputGroup>

                                <Input placeholder="预计里程" keyboardType="numeric"
                                    onChangeText={this.onChange_preTrip} />
                            </InputGroup>
                        </List.Item>
                        <List.Item>
                            <InputGroup>

                                <Input placeholder="实际里程" keyboardType="numeric"
                                    onChangeText={this.onChange_realTrip} />
                            </InputGroup>
                        </List.Item>
                    </List>
                    <Button onPress={() => this.AddNew()} style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }} >
                        <Text>保存</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}