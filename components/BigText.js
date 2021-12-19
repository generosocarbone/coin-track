
import React from 'react'
import {Text, View} from 'react-native'
import {styles} from '../styles'

const BigText = ({text = 'gig text'}) => {
    return(
        <Text style={styles.bigText}>{text}</Text>
    );
}

export default BigText
