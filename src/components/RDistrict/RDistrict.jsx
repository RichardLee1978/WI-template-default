import Taro, { Component } from '@tarojs/taro'
import { View, Text, Picker } from '@tarojs/components'

import regions from './data'
import { AtIcon } from 'taro-ui'
import 'taro-ui/dist/style/components/icon.scss'
class RDistrict extends Component {
    state = {
        region: '区域',
        // H5、微信小程序、百度小程序、字节跳动小程序
        range: [],
        value: [0, 0, 0, 0],
      
    }

    componentWillMount() {
        
        this.classicMount()
    }
    classicMount() {
        let limitProvince = this.props.limitProvince;
        let limitCity = this.props.limitCity;
        let range = this.state.range;
        let idx0=0;
        let idx1=0;
        let idx2=0;
        let temp = [];
        /**
         * 1.先循环省一级
         */
        for (let i = 0; i < regions.length; i++) {
            if(limitProvince!='' && limitProvince===regions[i].name) {
                temp = [];
                idx0=i;
              
                temp.push(regions[i].name);break;
            } else {
                temp.push(regions[i].name);
            }
            
        }
        range.push(temp);
         /**
         * 2.循环市一级
         */
        temp = [];
        for (let i = 0; i < regions[idx0].cities.length; i++) {
            if(limitCity!=''&&limitCity===regions[idx0].cities[i].name) {
                temp=[];
                idx1=i;
                temp.push(regions[idx0].cities[i].name);break;
            } else {
                temp.push(regions[idx0].cities[i].name);
            }
            
        }
        range.push(temp);
        /**
         * 3.循环区一级
         */
        temp = [];

        for (let i = 0; i < regions[idx0].cities[idx1].counties.length; i++) {
            temp.push(regions[idx0].cities[idx1].counties[i].name);
        }
        range.push(temp);
        /**
         * 4.循环商圈一级
         */
        temp = [];

        for (let i = 0; i < regions[idx0].cities[idx1].counties[0].circles.length; i++) {
            temp.push(regions[idx0].cities[idx1].counties[0].circles[i].name);
        }
        range.push(temp);
        this.setState({
            range: range,
            value: [idx0, idx1, idx2,0]
        })
       
    }
    /**
     * 简单版初始化方法
     */
    simpleMount() {
        let limitProvince = this.props.limitProvince;
        let limitCity = this.props.limitCity;
        let idx0=0;
        let idx1=0;
        let range = this.state.range;
        let temp = [];
        //let cityname=[];
        /**
         * 1.先循环省一级
         */
        for (let i = 0; i < region.length; i++) {
            if(limitProvince!='' && limitProvince===region[i].name) {
                temp = [];
                idx0=i;
              
                temp.push(region[i].name);break;
            } else {
                temp.push(region[i].name);
            }
            
        }
        range.push(temp);
        /**
         * 2.循环市一级
         */
        temp = [];
        for (let i = 0; i < region[idx0].city.length; i++) {
            if(limitCity!=''&&limitCity===region[idx0].city[i].name) {
                temp=[];
                idx1=i;
                temp.push(region[idx0].city[i].name);break;
            } else {
                temp.push(region[idx0].city[i].name);
            }
            
        }
        range.push(temp);
        /**
         * 3.循环区一级
         */
        temp = [];

        for (let i = 0; i < region[idx0].city[idx1].districtAndCounty.length; i++) {
            temp.push(region[idx0].city[idx1].districtAndCounty[i]);
        }
       
        range.push(temp);
        this.setState({
            range: range,
            value: [idx0, idx1, 0]
        })
    }
    /**
     * 简版change
     */
    simpleOnChange() {
        let regionTemp = this.state.region;
        let rangeTemp = this.state.range;
        let valueTemp = this.state.value;
        //console.log(this.state)
        //valueTemp = e.detail.value;
        this.props.onGetRegion({
            province:region[valueTemp[0]].name,
            city:region[valueTemp[0]].city[valueTemp[1]].name,
            region:region[valueTemp[0]].city[valueTemp[1]].districtAndCounty[valueTemp[2]]
        })
    }
    // 点击确定后发生的事件
    onChange = (e) => {
        let valueTemp = this.state.value;
        this.props.onGetRegion({
            state:regions[valueTemp[0]].name,
            cities:regions[valueTemp[0]].cities[valueTemp[1]].name,
            counties:regions[valueTemp[0]].cities[valueTemp[1]].counties[valueTemp[2]].name,
            circles:regions[valueTemp[0]].cities[valueTemp[1]].counties[valueTemp[2]].circles[valueTemp[3]].name
        })
    }
    classicOnColumnChange(e){
        let rangeTemp = this.state.range;
        let valueTemp = this.state.value;
        //拨动列的索引值
        let column = e.detail.column;
        //拨动行的索引值
        let row = e.detail.value;
       
        valueTemp[column] = row;
        
        switch (column) {
            case 0:
                let citiesTemp = [];
                let countiesTemp = [];
                let circlesTemp = [];
                for (let i = 0; i < regions[row].cities.length; i++) {
                    citiesTemp.push(regions[row].cities[i].name);
                }
                for (let i = 0; i < regions[row].cities[0].counties.length; i++) {
                    countiesTemp.push(regions[row].cities[0].counties[i].name);
                }
                for (let i = 0; i < regions[row].cities[0].counties[0].circles.length; i++) {
                    circlesTemp.push(regions[row].cities[0].counties[0].circles[i].name);
                }
                valueTemp[1] = 0;
                valueTemp[2] = 0;
                valueTemp[3] = 0;
                rangeTemp[1] = citiesTemp;
                rangeTemp[2] = countiesTemp;
                rangeTemp[3] = circlesTemp;
                this.setState({
                    range: rangeTemp,
                    value: valueTemp
                })
                break;
            case 1:
                let countiesTemp1 = [];
                let circlesTemp1 = [];
                for (let i = 0; i < regions[valueTemp[0]].cities[row].counties.length; i++) {
                    countiesTemp1.push(regions[valueTemp[0]].cities[row].counties[i].name);
                }
                for (let i = 0; i < regions[valueTemp[0]].cities[row].counties[0].circles.length; i++) {
                    circlesTemp1.push(regions[valueTemp[0]].cities[row].counties[0].circles[i].name);
                }
                valueTemp[2] = 0;
                valueTemp[3] = 0;
                rangeTemp[2] = countiesTemp1;
                rangeTemp[3] = circlesTemp1;
                this.setState({
                    range: rangeTemp,
                    value: valueTemp
                })
                break;
            case 2:
                let circlesTemp2 = [];
              
                for (let i = 0; i < regions[valueTemp[0]].cities[valueTemp[1]].counties[row].circles.length; i++) {
                    circlesTemp2.push(regions[valueTemp[0]].cities[valueTemp[1]].counties[row].circles[i].name);
                }
               
                valueTemp[3] = 0;
                rangeTemp[3] = circlesTemp2;
                this.setState({
                    range: rangeTemp,
                    value: valueTemp
                })
                break;
            case 3:
                this.setState({
                    value: valueTemp
                })
                break;

        }
    }
    /**
     * 简版ColumnChange
     */
    simpleOnColumnChange(e) {
        let rangeTemp = this.state.range;
        let valueTemp = this.state.value;
        //拨动列的索引值
        let column = e.detail.column;
        //拨动行的索引值
        let row = e.detail.value;
       
        valueTemp[column] = row;
        
        switch (column) {
            case 0:
                let cityTemp = [];
                let districtAndCountyTemp = [];
                for (let i = 0; i < region[row].city.length; i++) {
                    cityTemp.push(region[row].city[i].name);
                }
                for (let i = 0; i < region[row].city[0].districtAndCounty.length; i++) {
                    districtAndCountyTemp.push(region[row].city[0].districtAndCounty[i]);
                }
                valueTemp[1] = 0;
                valueTemp[2] = 0;
                rangeTemp[1] = cityTemp;
                rangeTemp[2] = districtAndCountyTemp;
                this.setState({
                    range: rangeTemp,
                    value: valueTemp
                })
                break;
            case 1:
                let districtAndCountyTemp2 = [];
                for (let i = 0; i < region[valueTemp[0]].city[row].districtAndCounty.length; i++) {
                    districtAndCountyTemp2.push(region[valueTemp[0]].city[row].districtAndCounty[i]);
                }
                valueTemp[2] = 0;
                rangeTemp[2] = districtAndCountyTemp2;
                this.setState({
                    range: rangeTemp,
                    value: valueTemp
                })
                break;
            case 2:
                this.setState({
                    value: valueTemp
                })
                break;
        }

    }
    //拨片滚动时发生的事件
    onColumnChange = (e) => {
        
        this.classicOnColumnChange(e);
    }

    

    render () {
        return (
            <View style={this.props.parentStyle}>
                {
                    // 使用多列选择器实现省市区选择器，支持H5、微信小程序、百度小程序、字节跳动小程序
                    // PS：微信小程序、百度小程序、字节跳动小程序支持设置Picker的属性mode='region'实现省市区选择器，但本组件均采用多列选择器方式实现
                        <View style={this.props.childStyle}>
                        
                            <Picker
                              mode='multiSelector' 
                              onChange={this.onChange}
                              onColumnChange={this.onColumnChange}
                              range={this.state.range}
                              value={this.state.value}
                            >
                                <View>
                                    区域
                                    <AtIcon value='chevron-down' size='22' color='#999'></AtIcon>
                                </View>
                            </Picker>
                        </View>
                }
            </View>
        )
    }
}