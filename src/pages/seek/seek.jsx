import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import RDistrict from '../../components/RDistrict/RDistrict'
import { AtSlider,AtDivider,AtTag,AtButton,AtIcon } from 'taro-ui'
import 'taro-ui/dist/style/components/icon.scss'
import 'taro-ui/dist/style/components/slider.scss'
import 'taro-ui/dist/style/components/tag.scss'
import 'taro-ui/dist/style/components/button.scss'
import './seek.less'
class Seek extends Component {
    constructor () {
        super(...arguments)
        this.state = {
          defvalue:50,
          text: '50万',
          types:{
              'room1':false,
              'room2':false,
              'room3':false,
              'room4':false,
              'room5':false,
              'room5plus':false,
              'yzxq':false,
              'ldtj':false,
              'shbl':false,
              'nbtt':false,
              'lhlg':false,
              'ddt':false,
              'bydc':false,
              'bydic':false,
              'cwcz':false,
              'glc':false,
              'zjlc':false,
              'yzwy':false
          },
          state:'',
          cities:'',
          counties:'',
          circles:''
        }
      }
      onGetRegion (region) {
        // 参数region为选择的省市区
        //console.log(region);
        this.setState({
            states:region.state,
          cities:region.cities,
          counties:region.counties,
          circles:region.circles
        })
      }
    handleChange (value) {
        //console.log(value)
        if(value===2000){
            this.setState({
                text: '2000万以上',
                defvalue:value
            })
        } else {
            this.setState({
                text: value.toString()+'万',
                defvalue:value
            })
        }
        
    }
    tabClick(e){
        
        let that = this;
        let temp = that.state.types;
       
            temp[e.name]=that.state.types[e.name]==true?false:true;
        
      
        this.setState({
            tabs:temp
        },()=>{
            
        })
        
    }
    getPhone(e) {
       // console.log(e);
        if (e.detail.errMsg == 'getPhoneNumber:fail user deny'){  

            Taro.showModal({  
            
                      title: '提示',  
            
                      showCancel: false,  
            
                      content: '您需要授权才能完成提交',  
            
                      success: function (res) { }  
            
                  })  
            
                } else {  
            
                
            
                }  
    }
    render() {
        return (
            <ScrollView>
                <View className='seek'>
                    <AtDivider content='您的预算是多少?(万)' fontColor='#2d8cf0' lineColor='#2d8cf0' />
                    <View style='width:100%;height32rpx;text-align:center;color:#4285F4;font-size:32rpx;'>{this.state.text}</View>
                    <AtSlider step={1} onChange={this.handleChange.bind(this)} value={this.state.defvalue} min={50} max={2000} activeColor='#4285F4' backgroundColor='#BDBDBD' blockColor='#4285F4' blockSize={22}></AtSlider>
                    <AtDivider content='想买什么户型?' fontColor='#2d8cf0' lineColor='#2d8cf0' />
                    <View className='seek-tags'>
                        <View className='seek-tags-item'>
                            <AtTag name='room1'  active={this.state.types['room1']} onClick={this.tabClick.bind(this)}>1居室</AtTag>
                        </View>
                        <View className='seek-tags-item'>
                            <AtTag name='room2'    active={this.state.types['room2']} onClick={this.tabClick.bind(this)}>2居室</AtTag>
                        </View>
                        <View className='seek-tags-item'>
                            <AtTag name='room3'  active={this.state.types['room3']} onClick={this.tabClick.bind(this)}>3居室</AtTag>
                        </View>
                        <View className='seek-tags-item'>
                            <AtTag name='room4'    active={this.state.types['room4']} onClick={this.tabClick.bind(this)}>4居室</AtTag>
                        </View>
                        <View className='seek-tags-item'>
                            <AtTag name='room5'  active={this.state.types['room5']} onClick={this.tabClick.bind(this)}>5居室</AtTag>
                        </View>
                        <View className='seek-tags-item'>
                            <AtTag name='room5plus'    active={this.state.types['room5plus']} onClick={this.tabClick.bind(this)}>5居室以上</AtTag>
                        </View>
                    </View>
                    <AtDivider content='所在区域' fontColor='#2d8cf0' lineColor='#2d8cf0' />
                    <View className='seek-regions'>
                       
                        <View className='seek-regions-item'>
                            <AtIcon value='map-pin' size='26' color='#ddd'></AtIcon>
                        </View>
                        <View className='seek-regions-item'>
                            {this.state.states}
                        </View>
                        <View className='seek-regions-item'>
                            {this.state.cities}
                        </View>
                        <View className='seek-regions-item'>
                            {this.state.counties}
                        </View>
                        <View className='seek-regions-item'>
                            {this.state.circles}
                        </View>
                        <View className='seek-regions-item'>
                            <RDistrict onGetRegion={this.onGetRegion.bind(this)} limitProvince='' limitCity='' ></RDistrict>
                        </View>
                        
                    </View>
                    <AtDivider content='需要个性需求' fontColor='#2d8cf0' lineColor='#2d8cf0' />
                    <View className='seek-tags'>
                        <View className='seek-tags-item'>
                            <AtTag name='yzxq'   active={this.state.types['yzxq']} onClick={this.tabClick.bind(this)}>优质学区</AtTag>
                        </View>
                        <View className='seek-tags-item'>
                            <AtTag name='ldtj'    active={this.state.types['ldtj']} onClick={this.tabClick.bind(this)}>离地铁近</AtTag>
                        </View>
                        <View className='seek-tags-item'>
                            <AtTag name='shbl'  active={this.state.types['shbl']} onClick={this.tabClick.bind(this)}>生活便利</AtTag>
                        </View>
                        <View className='seek-tags-item'>
                            <AtTag name='nbtt'    active={this.state.types['nbtt']} onClick={this.tabClick.bind(this)}>南北通透</AtTag>
                        </View>
                        <View className='seek-tags-item'>
                            <AtTag name='lhlg'  active={this.state.types['lhlg']} onClick={this.tabClick.bind(this)}>绿化率高</AtTag>
                        </View>
                        <View className='seek-tags-item'>
                            <AtTag name='ddt'    active={this.state.types['ddt']} onClick={this.tabClick.bind(this)}>带电梯</AtTag>
                        </View>
                        <View className='seek-tags-item'>
                            <AtTag name='bydc'    active={this.state.types['bydc']} onClick={this.tabClick.bind(this)}>不要顶层</AtTag>
                        </View>
                        <View className='seek-tags-item'>
                            <AtTag name='bydic'    active={this.state.types['bydic']} onClick={this.tabClick.bind(this)}>不要底层</AtTag>
                        </View>
                        <View className='seek-tags-item'>
                            <AtTag name='cwcz'    active={this.state.types['cwcz']} onClick={this.tabClick.bind(this)}>车位充足</AtTag>
                        </View>
                        <View className='seek-tags-item'>
                            <AtTag name='glc'    active={this.state.types['glc']} onClick={this.tabClick.bind(this)}>高楼层</AtTag>
                        </View>
                        <View className='seek-tags-item'>
                            <AtTag name='zjlc'    active={this.state.types['zjlc']} onClick={this.tabClick.bind(this)}>中间楼层</AtTag>
                        </View>
                        <View className='seek-tags-item'>
                            <AtTag name='yzwy'    active={this.state.types['yzwy']} onClick={this.tabClick.bind(this)}>优质物业</AtTag>
                        </View>
                        
                    </View>
                   
                    

                    
                    

                   

                    
                </View>
                <AtButton circle={true}  type='primary' lang='zh_CN' openType='getPhoneNumber' onGetPhoneNumber={this.getPhone} full={true}>立刻咨询</AtButton>
            </ScrollView>
        )
    }
}