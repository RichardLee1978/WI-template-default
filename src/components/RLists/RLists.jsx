import Taro, { Component } from '@tarojs/taro'
import { View, Text,ScrollView,Image } from '@tarojs/components'
import { AtTag,AtIcon } from 'taro-ui'
import './RLists.less'
import 'taro-ui/dist/style/components/tag.scss'
import 'taro-ui/dist/style/components/icon.scss'
class RLists extends Component {
    handleSwitchClick(e) {
        
        Taro.navigateTo({
            url: e.currentTarget.dataset.url,
          });
    }
    render() {
        
        return(
            <View className='r-lists'>
                <View className='r-lists-item' data-url='/pages/detail/detail' onClick={this.handleSwitchClick}>
                    <Image className='r-lists-item-img' src='https://ke-image.ljcdn.com/110000-inspection/pc1_pcNIR3bgL_1.jpg!m_fill,w_265,h_205,f_jpg?from=ke.com'/>
                    <View className='r-lists-item-brief'>
                        <View className='r-lists-item-brief-title'><AtIcon value='eye' size='26' color='#F00'></AtIcon>整租.嘉定北站 桃园小区 二室一厅</View>
                        <View className='r-lists-item-brief-location'><AtIcon value='map-pin' size='18' color='#F00'></AtIcon>2室一厅/61.69m²/南/桃园小区(嘉定)</View>
                        <View className='r-lists-item-brief-tag'>
                        
                            <AtTag 
                                name='tag-1' 
                                type='primary' 
                                circle 
                                size='small'
                                >
                                新上
                            </AtTag>
                            
                            <AtTag 
                                name='tag-1' 
                                type='primary' 
                                circle 
                                size='small'
                                >
                                随时可看
                            </AtTag>
                            
                        </View>
                        <View className='r-lists-item-brief-price'><AtIcon value='sketch' size='18' color='#F00'></AtIcon>4200/月</View>
                    </View>
                </View>
                <View className='r-lists-item' data-url='/pages/detail/detail' onClick={this.handleSwitchClick}>
                    <Image className='r-lists-item-img' src='https://ke-image.ljcdn.com/110000-inspection/pc1_pcNIR3bgL_1.jpg!m_fill,w_265,h_205,f_jpg?from=ke.com'/>
                    <View className='r-lists-item-brief'>
                        <View className='r-lists-item-brief-title'><AtIcon value='eye' size='26' color='#F00'></AtIcon>合租.嘉定西 悠活城 3室1厅 南</View>
                        <View className='r-lists-item-brief-location'><AtIcon value='map-pin' size='18' color='#F00'></AtIcon>3室1厅/161.79m²/南北通</View>
                        <View className='r-lists-item-brief-tag'>
                        
                            <AtTag 
                                name='tag-1' 
                                type='primary' 
                                circle 
                                size='small'
                                >
                                电器齐全
                            </AtTag>
                            <AtTag 
                                name='tag-1' 
                                type='primary' 
                                circle 
                                size='small'
                                >
                                押一付一
                            </AtTag>
                            <AtTag 
                                name='tag-1' 
                                type='primary' 
                                circle 
                                size='small'
                                >
                                随时可看
                            </AtTag>
                            
                        </View>
                        <View className='r-lists-item-brief-price'><AtIcon value='sketch' size='18' color='#F00'></AtIcon>2200/月</View>
                    </View>
                </View>
            </View>
        ) 
    }
}