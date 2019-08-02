import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function LinksScreen() {
  return (
    <View style={styles.container}>
      <View style={{flex: 0.5,backgroundColor: '#CFD8DC', justifyContent: 'center', alignItems: 'center'}}>
        <Image style={styles.userIcon} source={require('../assets/images/me.jpg')}></Image>  
        <Text style={{textAlign:'center', fontSize: 20, color: 'white' }}>Panuwat_koktomchai</Text>
        <Text style={{textAlign:'center', fontSize: 18, color: 'white', textDecorationLine: 'underline' }}>Programmer @Piesoft</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={styles.buttonAdd} onPress={this.prope.navigation.navigate('AddMate')}>
          <Text style={styles.buttonAddText}>+</Text>
        </TouchableOpacity>
        <View>
          <Text style={{color: '#9DA6A9', textShadowColor:'black', marginTop: 10, }}>เพิ่มบัญชีคู่</Text>
        </View>
      </View>
    </View>
  );
}

LinksScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }, 
  userIcon: {
    width:60,
    height:60, 
    borderRadius: (60/2),
  },
  buttonAddText: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
  },
  buttonAdd: {
    backgroundColor: '#E1EAED',
    borderRadius: (80 / 2),
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
