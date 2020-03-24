import Taro, { Component } from '@tarojs/taro'
import { ScrollView} from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtDivider,AtCard, AtGrid, AtSearchBar} from 'taro-ui'
import { add, minus, asyncAdd } from '../../actions/counter'
import RLists from '../../components/RLists/RLists'

//let test = 'MAINPAGENAME'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {

    config = {
    navigationBarTitleText: 'MAINPAGENAME'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  handleclick(e){
    
    switch(e.value){
      case '买房':
        Taro.navigateTo({
          url: '/pages/lists/lists?t=sell',
        });
        break;
        case '租房':
          Taro.navigateTo({
            url: '/pages/lists/lists?t=rent',
          });
          break;
      }
  }
  handleSeekOutClick() {
    Taro.navigateTo({
      url: '/pages/seek/seek'
    });
  }
  render () {
    return (
      <ScrollView >
        <AtSearchBar
        actionName='搜一下'
        
      />
        <AtGrid mode='rect' columnNum={2} hasBorder={false} onClick={this.handleclick.bind(this)} data={
            [
               
                {
                  image: 'https://ke-image.ljcdn.com/materials/appindexconf/44b50fa3627b67a9102c82f96ebd9189.png',
                  value: '买房'
                },
                {
                  image: 'https://ke-image.ljcdn.com/materials/appindexconf/94250adc5e77f9b816f77032e27a8412.png',
                  value: '租房'
                },
                
              ]
        } />
        {/* <AtDivider content='我想推荐' fontColor='#2d8cf0' lineColor='#2d8cf0' ></AtDivider> */}
        <AtCard
          note='来试试资深顾问给您的推荐'
          title='帮我选房'
          onClick={this.handleSeekOutClick}
        >
         500+顾问在线答疑，帮您答疑解惑买到好房
        </AtCard>
        <AtDivider content='优选二手房' fontColor='#2d8cf0' lineColor='#2d8cf0' />
        <RLists></RLists>
        
        <AtDivider content='优选好房' fontColor='#2d8cf0' lineColor='#2d8cf0' ></AtDivider>
        <RLists></RLists>
        
      </ScrollView>
    )
  }
}

export default Index
