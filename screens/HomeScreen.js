import React, { Component } from 'react';
import { Alert, Text, View, Image, TextInput, FlatList, Animated, StyleSheet, Platform, TouchableOpacity, Modal} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'

const Header_Maximum_Height = 250;

const Header_Minimum_Height = (Platform.OS === 'ios') ? 20 : 24;

export default class HomeScreen extends Component {

  constructor(prope){
    super(prope)
    this.state = { 
      text:"",
      listItem: [],
      fadeAnim: new Animated.Value(0),
      modalVisible: false,
    }

    this.AnimatedHeaderValue = new Animated.Value(0);
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  pushListItem(){
    let listItem = this.state.listItem
    if (this.state.text == '') {
      return
    }

    let price = this.state.text.split(' ')
    this.setState(
      {
        listItem:[
          {
            key: `key${(listItem.length+1)}`,
            message: price[0],
            price: price[1],
            time: "12.01"
          },
          ...this.state.listItem
        ]
      }
    )
    listItem = '';
    this.setState({text: ""})
  }

  render(){
  const AnimateHeaderHeight = this.AnimatedHeaderValue.interpolate(
  {
    inputRange: [ 0, ( Header_Maximum_Height - Header_Minimum_Height ) ],
    outputRange: [ Header_Maximum_Height, Header_Minimum_Height ],
    extrapolate: 'clamp'
  });

  const AnimateProfileHeight = this.AnimatedHeaderValue.interpolate(
    {
      inputRange: [ 0, 250 ],
      outputRange: [ 100, 80 ],
      extrapolate: 'clamp'
    });

  const MarginTopInput = this.AnimatedHeaderValue.interpolate(
    {
      inputRange: [ 0, 230 ],
      outputRange: [ 350, (Platform.OS === 'ios') ? 100 : 104 ],
      extrapolate: 'clamp'
    });

    return (
      <View style={{paddingTop: (Platform.OS == 'ios') ? 20 : 24}}>

        <ScrollView
          scrollEventThrottle = { 16 }
          contentContainerStyle = {{ paddingTop: Header_Maximum_Height+150}}
          onScroll = { Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.AnimatedHeaderValue }}}]
        )}>
          <View style={{flex:1, minHeight: 300}}>
            <View>
              <FlatList
                data={this.state.listItem}
                renderItem={({item}) => <ListExpense key={item.key} message={item.message} price={item.price}  time={item.time}></ListExpense>}
              />
            </View>
          </View>
        </ScrollView>
      
        <TouchableOpacity style={styles.buttonTop} onPress={()=>{this.setModalVisible(true)}}>
          <Icon
          name='list'
          color='#fff'
          size={40}
          />
        </TouchableOpacity>

        <Animated.View style={[styles.HeaderStyle,{flex:1},{backgroundColor:"#cfd8dc"},{height: AnimateHeaderHeight}]}> 

          <Animated.Image
          source={require('../assets/images/cover.jpg')}
          style={{height:AnimateHeaderHeight}}
          />
        </Animated.View>

        <Animated.View style={[{position: 'absolute'},{zIndex: 21},{width:"100%"},{flex:1}, {backgroundColor:"#788B91"}, {height:AnimateProfileHeight},{marginTop: AnimateHeaderHeight}]}>
          <View style={{flex:1, flexDirection:"row", marginHorizontal:15}}>
            <View style={{justifyContent:"center", alignItems:"center"}}>
              <Image style={{width:60,height:60, borderRadius: (60/2)}} source={require('../assets/images/me.jpg')}></Image>
            </View>
            <View style={{justifyContent:"center", paddingLeft: 10}}>
              <Text style={{fontSize:20, fontWeight:"bold", color:"#fff"}}>Panuwat koktomchai</Text>
                <View>
                  <Text style={{color:"#e2e0e0"}}>Programmer</Text>
                  <Text style={{color:"#d4d4d4"}} >@piesoft</Text>
                </View>
            </View>
          </View>
        </Animated.View>

        <Animated.View style={[{marginTop: MarginTopInput},styles.animatedInputBox]}>
          <View bounces={false} style={styles.InputBox}>
            <TextInput
              style={styles.InputStyle}
              placeholder="วันนี้คุณจ่ายอะไรบ้าง"
              onChangeText={(text) => this.setState({text})}
              onSubmitEditing={this.pushListItem.bind(this)}
              value={this.state.text}
            />
          </View>
        </Animated.View>
        
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false)
          }}>
          <View style={{backgroundColor: "rgba(0, 0, 0, 0.5)", height: "100%", width: "100%"}} >
            <View style={{marginTop: 40, marginRight: 50,marginLeft: 20, backgroundColor: "#fff", borderRadius: 10,}}>
              <View>
                <Text style={{flex: 1,fontSize: 25, color: "#cfd8dc", textDecorationLine: "underline", fontWeight: "bold", marginLeft: 10}}>Setting</Text>
                <TouchableOpacity style={styles.modalList}>
                  <Icon name="assignment_ind" size={30}/>
                  <Text style={{textAlign:"left"}}>Edit profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalList}>
                  <Icon name="work" size={30}/>
                  <Text style={{textAlign:"left"}}>Management account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalList} onPress={()=>{this.setModalVisible(false)}}>
                  <Icon name="close" size={30}/>
                  <Text style={{textAlign:"left"}}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
            </View>
        </Modal>

      </View>
    );
  }
}

class ListExpense extends Component {
  constructor(prope){
    super(prope)
  }

  render(){
    return(
      <View style={{marginLeft:10, justifyContent:"flex-start", paddingBottom:10, paddingTop:10, flexDirection:"row"}}>
        <View>
          <Image
          style={{height:40,width:40, borderRadius:(40/2), marginRight:5}}
          source={require('../assets/images/me.jpg')}
          />
        </View>
        <View style={styles.textList}>
          <Text style={{fontSize:16, textAlign:"center"}}>{this.props.message}</Text>
          <Text style={{fontSize:14, textAlign:"center", paddingLeft:5, color: "orange"}}>{this.props.price}{(this.props.price) ? "-.": "0-."}</Text>
        </View>
        <View>
          <Text style={{fontSize:12,color:"gray"}}>12.00</Text>
        </View>
      </View>
    )
  }
}

HomeScreen.navigationOptions = {
  header: null,
};
// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);

const styles = StyleSheet.create(
  {   
      HeaderStyle:
      {
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          left: 0,
          right: 0,
          top: (Platform.OS == 'ios') ? 20 : 0,
      },
      InputBox: {
        flex:1,
        paddingTop:10,
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:"#E8F2F5",
        height:70,
        shadowColor: "red",
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 2,
        elevation: 3
      },
      InputStyle: {
        paddingLeft:10 ,
        backgroundColor:"white",
        borderRadius: 10,
        fontSize:18,
        height:50,
        justifyContent:"center"
      },
      animatedInputBox: {
        flex:1,
        position: 'absolute',
        width: "100%",
      },
      textList: {
        justifyContent:"space-around" ,
        alignSelf: 'flex-start',
        height:40,
        borderRadius:50,
        paddingLeft:10,
        backgroundColor:"#f3f3f3",
        paddingRight:10,
        alignContent:"center",
        flexDirection:"row",
        alignItems:"center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2},
        elevation: 3,
      },
      buttonTop: {
        position: "absolute",
        marginTop: (Platform.OS === 'ios') ? 30 : 34,
        marginLeft: 10 ,
        backgroundColor: "rgba(120, 139, 145, 0.3)",
        borderRadius: (50 / 2),
        width: 50,
        height: 50,
        zIndex: 20,
        justifyContent: "center",
        textAlign: "center"
      },
      modalList: {
        flex: 1,
        marginLeft: 10,
        height: 50,
        justifyContent: "space-around",
        flexDirection: "row",
      }
  });