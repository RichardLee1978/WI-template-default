import Taro, { Component } from '@tarojs/taro'
import { View, Text, Picker } from '@tarojs/components'
import { AtButton,AtIcon,AtDivider, AtNoticebar, AtTag } from 'taro-ui'
import './schedule.less'
class Schedule extends Component {
    constructor () {
        super(...arguments)
        this.state = {
          schedule_id:50,
          schedule_title:'',
          schedule_date:'',
          schedule_time:'',
          cellphone:''
        }
      }
    pickerDateChange(e){
        
        this.setState({
            schedule_date:e.detail.value
        })
    }
    pickerTimeChange(e){
        this.setState({
            schedule_time:e.detail.value
        })
    }
    getPhone(e) {
         //console.log(e);
         if (e.detail.errMsg == 'getPhoneNumber:fail user deny'){  
 
             Taro.showModal({  
             
                       title: '提示',  
             
                       showCancel: false,  
             
                       content: '没有手机号无法联系到您哦',  
             
                       success: function (res) { }  
             
                   })  
             
                 } else {  
             
                 
             
                 }  
     }
    render(){
        return(
            <View className='schedule'>
               
                <View className='schedule-title'>
                <AtIcon value='map-pin' size='18' color='#F00'></AtIcon>嘉定北站 桃园小区 62平精装 满二诚意急售 看房方便哦
                </View>
                <AtDivider content='最近已预约记录' fontColor='#2d8cf0' lineColor='#2d8cf0' />
                <AtTag name='tag-1' type='primary' circle >2020-03-01</AtTag>
                <AtTag name='tag-1' type='primary' circle >2020-04-01</AtTag>
                <AtDivider content='选择预约日期' fontColor='#2d8cf0' lineColor='#2d8cf0' />
                <View className='schedule-date'>
                    <View className='schedule-date-item'>
                        <Picker mode='date' onChange={this.pickerDateChange} value='2020-04-02' start='2020-04-02' end='2020-05-02'>
                            <View>
                            当前选择：{this.state.schedule_date}
                            </View>
                        </Picker>
                    </View>
                </View>
                
                <AtDivider content='选择预约时间(8:30~16:30)' fontColor='#2d8cf0' lineColor='#2d8cf0' />
                <View className='schedule-date'>
                    <View className='schedule-date-item'>
                        <Picker mode='time' onChange={this.pickerTimeChange} start='8:30' end='16:30'>
                            <View>
                            当前选择：{this.state.schedule_time}
                            </View>
                        </Picker>
                    </View>
                </View>
                <View className='schedule-button'>
                    <AtNoticebar>请注意预约记录已预约的时间，预约时间最终以经纪人决定时间为准，请提前与经纪人联系，避免看房时间冲突</AtNoticebar>
                </View>
                <View className='schedule-button'>
                    <AtButton circle={true} type='primary' lang='zh_CN' openType='getPhoneNumber' onGetPhoneNumber={this.getPhone} full={true}>立刻预约</AtButton>
                </View>
                
            </View>
        )
    }
}