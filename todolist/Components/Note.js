import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    // TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';

export default class Note extends Component {
    render() {
        return (
            
            <View key={this.props.keyval} style={styles.note}>
            <Text style={styles.noteText}>
             {this.props.val.note}
            </Text>
            <Text style={styles.noteText}>
                 {this.props.val.date}
           </Text>
           <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                    <Image style={{width: 30, height: 30}}  source={{uri: 'https://st4.depositphotos.com/14695324/19790/v/1600/depositphotos_197908148-stock-illustration-rubbish-bin-icon-vector-illustration.jpg'}}  
                        ></Image>
           </TouchableOpacity>
        </View>
         
        )
    }
}

const styles = StyleSheet.create({
    note: {
        position:'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63',
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems:'center',
        padding:10,
        top:10,
        bottom:10,
        right:10,
    }
    ,
    noteDeleteText: {
        color:'white',
    }
    
});