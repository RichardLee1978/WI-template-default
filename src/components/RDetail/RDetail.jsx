import Taro, { Component } from '@tarojs/taro'
import { View, Text,ScrollView,Image,Swiper, SwiperItem } from '@tarojs/components'
import { AtTag,AtIcon,AtDivider,AtTabs, AtTabsPane, AtTabBar, AtAvatar } from 'taro-ui'
import './RDetail.less'
import 'taro-ui/dist/style/components/article.scss'
import 'taro-ui/dist/style/components/tabs.scss';
import 'taro-ui/dist/style/components/divider.scss'
import 'taro-ui/dist/style/components/icon.scss'
import 'taro-ui/dist/style/components/tab-bar.scss'
import 'taro-ui/dist/style/components/badge.scss'
import 'taro-ui/dist/style/components/avatar.scss'
import 'taro-ui/dist/style/components/tag.scss'

class RDetail extends Component {
    constructor () {
        super(...arguments)
        this.state = {
          currentTab: 0,
        }
      }
    tabClick (value) {
        this.setState({
            currentTab: value
        })
    }
    tabBarClick(e) {
        console.log(e)
        if(e==0){
            Taro.navigateTo({
                url: '/pages/schedule/schedule',
              });
        }
    }
    preView(e){
        Taro.previewImage({
            urls:[e.currentTarget.dataset.src]
        })
    }
    render() {
        return (
            <View className='r-detail'>
                <Swiper
                className='r-detail-swiper'
                indicatorColor='#999'
                indicatorActiveColor='#333'
                circular
                indicatorDots
                autoplay>
                    <SwiperItem>
                        <Image data-src='https://ke-image.ljcdn.com/110000-inspection/pc1_gZUHsrDci_1.jpg!m_fill,w_280,h_210,f_jpg?from=ke.com'  
                            src='https://ke-image.ljcdn.com/110000-inspection/pc1_gZUHsrDci_1.jpg!m_fill,w_280,h_210,f_jpg?from=ke.com'
                            onClick={this.preView}
                            >

                        </Image>
                    </SwiperItem>
                    <SwiperItem>
                        <Image data-src='https://ke-image.ljcdn.com/110000-inspection/pc1_7uJvt5YhE_1.jpg!m_fill,w_280,h_210,f_jpg?from=ke.com'  
                            src='https://ke-image.ljcdn.com/110000-inspection/pc1_7uJvt5YhE_1.jpg!m_fill,w_280,h_210,f_jpg?from=ke.com'
                            onClick={this.preView}
                            >

                        </Image>
                    </SwiperItem>
                    <SwiperItem>
                        <Image data-src='https://ke-image.ljcdn.com/110000-inspection/pc1_fE7KqKp1X_1.jpg!m_fill,w_280,h_210,f_jpg?from=ke.com'
                            src='https://ke-image.ljcdn.com/110000-inspection/pc1_fE7KqKp1X_1.jpg!m_fill,w_280,h_210,f_jpg?from=ke.com'
                            onClick={this.preView}
                            >

                        </Image>
                    </SwiperItem>
                </Swiper>
                <View className='at-article'>
                    <View className='at-article__h1 r-detail-title'>
                        嘉定北站 桃园小区 62平精装 满二诚意急售 看房方便哦
                    </View>
                    <AtDivider content='基础信息' fontColor='#666' lineColor='#666' ></AtDivider>
                    <View className='r-detail-brief'>
                        <View className='r-detail-brief-item'>
                            <View className='r-detail-brief-item-value'>187万</View>
                            <View className='r-detail-brief-item-name'>售价</View>
                        </View>
                        <View className='r-detail-brief-item'>
                            <View className='r-detail-brief-item-value'>2室1厅</View>
                            <View className='r-detail-brief-item-name'>房型</View>
                        </View>
                        <View className='r-detail-brief-item'>
                            <View className='r-detail-brief-item-value'>57m²</View>
                            <View className='r-detail-brief-item-name'>建筑面积</View>
                        </View>
                    </View>
                    <View className='r-detail-infolist'>
                        <View className='r-detail-infolist-item-half'>
                            <Text className='r-detail-infolist-item-name'>单价:</Text>
                            <Text className='r-detail-infolist-item-value'>23622/平</Text>
                        </View>
                        <View className='r-detail-infolist-item-half'>
                            <Text className='r-detail-infolist-item-name'>挂牌:</Text>
                            <Text className='r-detail-infolist-item-value'>2019.09.19</Text> 
                        </View>
                        <View className='r-detail-infolist-item-half'>
                            <Text className='r-detail-infolist-item-name'>朝向:</Text>
                            <Text className='r-detail-infolist-item-value'>南</Text>
                        </View>
                        <View className='r-detail-infolist-item-half'>
                            <Text className='r-detail-infolist-item-name'>楼层:</Text>
                            <Text className='r-detail-infolist-item-value'>高楼层(共22层)</Text>
                        </View>
                        <View className='r-detail-infolist-item-half'>
                            <Text className='r-detail-infolist-item-name'>楼型:</Text>
                            <Text className='r-detail-infolist-item-value'>板楼</Text>
                        </View>
                        <View className='r-detail-infolist-item-half'>
                            <Text className='r-detail-infolist-item-name'>电梯:</Text>
                            <Text className='r-detail-infolist-item-value'>有</Text>
                        </View>
                        <View className='r-detail-infolist-item-half'>
                            <Text className='r-detail-infolist-item-name'>装修:</Text>
                            <Text className='r-detail-infolist-item-value'>精装</Text>
                        </View>
                        <View className='r-detail-infolist-item-half'>
                            <Text className='r-detail-infolist-item-name'>年代:</Text>
                            <Text className='r-detail-infolist-item-value'>2016年建成</Text>
                        </View>
                        <View className='r-detail-infolist-item-half'>
                            <Text className='r-detail-infolist-item-name'>用途:</Text>
                            <Text className='r-detail-infolist-item-value'>普通住宅</Text>
                        </View>
                        <View className='r-detail-infolist-item-half'>
                            <Text className='r-detail-infolist-item-name'>权属:</Text>
                            <Text className='r-detail-infolist-item-value'>商品房</Text>
                        </View>
                        <View className='r-detail-infolist-item'>
                            <Text className='r-detail-infolist-item-name'>首付预算:</Text>
                            <Text className='r-detail-infolist-item-value'>净首付80.3万，月供、税费点击查看详情</Text>
                        </View>
                        <View className='r-detail-infolist-item'>
                            <Text className='r-detail-infolist-item-name'>小区:</Text>
                            <Text className='r-detail-infolist-item-value'>新城悠活城</Text>
                        </View>
                    </View>
                    <AtDivider content='户型图' fontColor='#666' lineColor='#666' ></AtDivider>
                    <View className='r-detail-floorplan'>
                        <View className='r-detail-floorplan-desc'>
                            <View className='r-detail-floorplan-desc-title'>户型分间</View>
                            <View className='r-detail-floorplan-desc-item'>客厅: 13.46 ㎡/ 东南 / 落地窗</View>
                            <View className='r-detail-floorplan-desc-item'>餐厅: 13.92 ㎡/ 暂无数据 / 无窗</View>
                            <View className='r-detail-floorplan-desc-item'>卧室A: 13.96 ㎡/ 东南 / 普通窗</View>
                        </View>
                        <Image className='r-detail-floorplan-image' 
                            data-src='https://ke-image.ljcdn.com/hdic-frame/standard_d8c1b26e-cb22-4f04-a202-98133bb75ef6.png.750x.jpg?from=ke.com'
                            src='https://ke-image.ljcdn.com/hdic-frame/standard_d8c1b26e-cb22-4f04-a202-98133bb75ef6.png.750x.jpg?from=ke.com'
                            onClick={this.preView}
                            >

                        </Image>
                    </View>
                    <AtDivider content='地图指南' fontColor='#666' lineColor='#666' ></AtDivider>
                    <AtDivider content='房源介绍' fontColor='#666' lineColor='#666' ></AtDivider>
                    <AtTabs
                    current={this.state.currentTab}
                    scroll
                    tabList={[
                        { title: '核心卖点' },
                        { title: '户型介绍' },
                        { title: '税费解析' },
                        { title: '周边配套' },
                        { title: '交通出行' }
                    ]}
                    onClick={this.tabClick.bind(this)}>
                        <AtTabsPane current={this.state.currentTab} index={0}>
                            <View className='r-detail-desc'>
                            小区花坛位置，双南户型，中间优质楼层，业主自住精装修。
                            </View>
                        </AtTabsPane>
                        <AtTabsPane current={this.state.currentTab} index={1}>
                            <View className='r-detail-desc'>
                            房龄：房龄新环境好，配套成熟。
                            楼层结构：高楼层，无遮挡采光好。
                            </View>
                        </AtTabsPane>
                        <AtTabsPane current={this.state.currentTab} index={2}>
                            <View className='r-detail-desc'>
                            此房满两年，运气评有无增值税 个税：2% 契税：首套1.5%，二套3%.整体税费较少，具体可以电话联系我
                            </View>
                        </AtTabsPane>
                        <AtTabsPane current={this.state.currentTab} index={3}>
                            <View className='r-detail-desc'>出小区就是嘉定西站。物业管理不错。</View>
                        </AtTabsPane>
                        <AtTabsPane current={this.state.currentTab} index={4}>
                            <View className='r-detail-desc'>上海地铁11号线嘉定西站，出小区大门就是地铁站，交通方便。公交车资源丰富，嘉定5路，嘉定11路，嘉定12路，嘉定19路，嘉定56路，嘉唐华线公交线路等公交车路线边上200米有嘉定客运站，坐虹桥枢纽9号线大巴车可直达虹桥火车站</View>
                        </AtTabsPane>
                   
                    </AtTabs>
                    <AtDivider content='经纪人' fontColor='#666' lineColor='#666' ></AtDivider>
                    <View className='r-detail-agent'>
                        <View className='r-detail-agent-desc'>
                            <View className='r-detail-agent-desc-avatar'>
                                <AtAvatar circle image='https://img.ljcdn.com/usercenter/images/uc_ehr_avatar/5a5e5635-ae1b-482a-a1db-ecf12cd4a334.jpg.480x640.jpg'></AtAvatar>
                            </View>
                            <View className='r-detail-agent-desc-names'>
                                <View className='r-detail-agent-desc-names-item'>
                                    <Text className='r-detail-agent-desc-names-item-nromalsize'>张雪峰</Text>
                                    
                                    <AtTag name='tag-1' type='primary' circle size='small'>
                                        链家
                                    </AtTag>
                                </View>
                                <View className='r-detail-agent-desc-names-item'>
                                    <Text className='r-detail-agent-desc-names-item-smallsize'>
                                    带看本房1次 2019/12/22带看过
                                    </Text>
                                    
                                    </View>
                            </View>
                        </View>
                    </View>
                    
                </View>
                <AtTabBar
                     backgroundColor='#fff'
                     color='#6190E8'
                    fixed
                    tabList={[
                       
                        { title: '马上预约看房',  iconType: 'message'},
                        { title: '立刻打电话', iconType: 'phone'}
                    ]}
                    onClick={this.tabBarClick}
                    current={0}
                    />
            </View>
        )
    }
}