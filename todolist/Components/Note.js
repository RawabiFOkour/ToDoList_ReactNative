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
            // <View key={this.props.keyval} style={styles.note}>
            //     <Text style={styles.noteText}>
            //      {this.props.note.date}
            //     </Text>
            //     <Text style={styles.noteText}>
            //      {this.props.note.note}
            //     </Text>
                // <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                //     <Image source={require('data:image/png;base64,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')} style={styles.noteDeleteText}></Image>
                // </TouchableOpacity>

            // </View>
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
                         {/* <Text style={styles.noteDeleteText}>D</Text> */}
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