
import React from 'react'
import {Text, View} from 'react-native'
import {styles} from '../styles'

const SmallText = ({text = 'small text'}) => {
    return(
        <Text style={styles.smallText}>{text}</Text>
    );
}

export default SmallText
