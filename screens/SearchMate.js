import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class SearchMate extends Component {
    constructor(prope){
        super(prope)
        this.state = {
            mateId: '',
        }
    }

    render(){
        return(
            <View>
                <Image style={styles.userIcon} source={require('../assets/images/me.jpg')}></Image>  
            </View>
        )
    }
}

const styles = StyleSheet.create({
    userIcon: {
        width:60,
        height:60, 
        borderRadius: (60/2),
      },
})