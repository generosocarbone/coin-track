import React from 'react'
import SmallText from "./SmallText";
import {TouchableOpacity} from "react-native";

const CoinButton = ({press, text, icon}) => {
  return(
    <TouchableOpacity
      onPress={press}
    >
      {text && <SmallText text={text}/>}
      {icon}
    </TouchableOpacity>
  )
}

export default CoinButton
