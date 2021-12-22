import React from 'react'
import SmallText from "./SmallText";
import {TouchableOpacity} from "react-native";
import {styles} from "../styles";

const CoinButton = ({press, text, icon, principal = true}) => {
  return(
    <TouchableOpacity
      style={principal ? styles.button : styles.outlineButton}
      onPress={press}
    >
      {text && <SmallText text={text}/>}
      {icon}
    </TouchableOpacity>
  )
}

export default CoinButton
