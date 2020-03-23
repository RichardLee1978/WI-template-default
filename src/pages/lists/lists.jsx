import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import { AtTabBar,AtSearchBar } from 'taro-ui'
import RLists from '../../components/RLists/RLists'
import RDistrict from '../../components/RDistrict/RDistrict'
import 'taro-ui/dist/style/components/tabs.scss'
import 'taro-ui/dist/style/components/search-bar.scss'

class Lists extends Component {
    constructor () {
        super(...arguments)
        this.state = {
          currentTabIndex:0, 
          type:'sell'    
        }
      }
    onGetRegion (region) {
        // 参数region为选择的省市区
        //console.log(region);
        // this.setState({
        //     states:region.state,
        //   cities:region.cities,
        //   counties:region.counties,
        //   circles:region.circles
        // })
      }
    onTabClick(e) {
        console.log(e)
    }  
    render (){
        return (
            <ScrollView>
                <AtSearchBar actionName='搜一下'/>
                <AtTabBar
                    current={this.state.currentTabIndex}
                    fontSize={14}
                    scroll
                    tabList={[
                        { title: '买房' },
                        { title: '租房' }
                    ]}
                    onClick={this.onTabClick.bind(this)}
                >  
                </AtTabBar>
                <View className='at-row at-row__align--center'>
                    <View className='at-col'>
                        <RDistrict onGetRegion={this.onGetRegion.bind(this)} limitProvince='' limitCity='' parentStyle='font-size:28rpx;text-align:center;'></RDistrict>
                    </View>
                    <View className='at-col'>

                    </View>
                    <View className='at-col'>
                        
                    </View>
                </View>
                <RLists></RLists>
            </ScrollView>
        )
    }
}