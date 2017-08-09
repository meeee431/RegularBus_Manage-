/**
 * Created by kid on 2017/5/18
 * Function:存放加油信息
 * Desc:
 */
export default class oilInfo {

  constructor(addDate,price,total,trip,preTrip,realTrip) {
    this.addDate=addDate;  
    this.price = price;
    this.total = total;
    this.trip = trip;
    this.preTrip = preTrip;
    this.realTrip = realTrip;

  }
  getaddDate() {
    return this.addDate;
  }
  getprice() {
    return this.price;
  }
  gettotal() {
    return this.total;
  }
  gettrip() {
    return this.trip;
  }
  getpreTrip() {
    return this.preTrip;
  }
  getrealTrip() {
    return this.realTrip;
  }


}