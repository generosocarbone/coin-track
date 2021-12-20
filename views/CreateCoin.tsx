import React, {useState} from 'react'
import {
  SafeAreaView,
  TextInput, TouchableOpacity,
  View
} from 'react-native'
import {connect} from "react-redux";
import {styles} from '../styles'
import BigText from '../components/BigText'
import SmallText from '../components/BigText'
import {createCoinAction} from "../actions";


// todo: prima di effettuare il salvataggio controllare che la moneta o il tag non esistano già nello store
const CreateCoin = ({
  dispatch,
  navigation,
  coins
}) => {

  const [name, onChangeName] = useState('');
  const [tag, onChangeTag] = useState('');

  return(
    <SafeAreaView style={styles.container}
    >
      <BigText text={'Coin Name'} />
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="es: Bitcoin"
      />
      <BigText text={'Coin Tag'} />
      <TextInput
        style={styles.input}
        maxLength={5}
        autoCapitalize={'characters'}
        onChangeText={onChangeTag}
        value={tag}
        placeholder="es: BTC"
      />
      <View
        style={styles.columns}
      >
        <TouchableOpacity
          style={styles.columnItem}
          onPress={() => {
            onChangeName('')
            onChangeTag('')
          }}
        >
          <SmallText text={'Cancella'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.columnItem}
          onPress={() => {
            if(name.length > 0 && tag.length > 0) {
              let n = coins.find(c => c.name === name)
              let t = coins.find(c => c.tag === tag)
              if(!n && !t) {
                dispatch(createCoinAction(name, tag))
                onChangeName('')
                onChangeTag('')
                navigation.pop()
              } else {
                // todo: mostrare un messaggio
                console.log('duplicate money')
              }
            }
          }}
        >
          <SmallText text={'Salva'} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const mapStateToProps = ({coins}) => {
  return {
    coins
  }
}

export default connect(mapStateToProps)(CreateCoin)
