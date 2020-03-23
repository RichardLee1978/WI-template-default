import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import RDetail from '../../components/RDetail/RDetail'
class Detail extends Component {
    render() {
        
        return (
            <ScrollView>
                <RDetail></RDetail>
            </ScrollView>
        )
    }
}