/**
 * Created by kid on 2017/5/18
 * Function: 操作oil表
 * Desc:
 */

import oilTable from '../table/oilInfo';
import m from '../model/oilInfo';
import Realm from 'realm';
import {  View, Alert } from "react-native";
export default class oilInfo {

    constructor() {
   
     
        this.realm = new Realm({ schema: [oilTable] });

    }

    addInfo(addDate, price, total, trip, preTrip, realTrip) {
        let oInfo = new m(addDate, price, total, trip, preTrip, realTrip);
        this.realm.write(() => {
            this.realm.create('oilInfo', oInfo);

        })


    }
    editInfo(addDate, price, total, trip, preTrip, realTrip) {
        let oInfo = new m(addDate, price, total, trip, preTrip, realTrip);
        this.realm.write(() => {
            this.realm.create('oilInfo', oInfo, true);

        })

    }
    deleteInfo(addDate) {
        this.realm.write(() => {
            let oils = this.realm.objects('oilInfo');
            let oil = oils.filtered('id==' + addDate);
            this.realm.delete(oil);
        })

    }
    queryAll() {
        let oils = this.realm.objects('oilInfo');
        return oils;
    }
    queryOne(addDate) {
        let oils = this.realm.objects('oilInfo');
        let oil = oils.filtered('id==' + addDate);
        return oil;
    }

}