import React, {useState} from 'react'
import {
  SafeAreaView,
  TextInput,
  View
} from 'react-native'
import {connect} from "react-redux";
import {styles} from '../styles'
import CoinButton from '../components/CoinButton'
import BigText from '../components/BigText'
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
        <View
          style={[styles.columnItem, styles.centeringRow]}
        >
          <CoinButton
            press={() => {
              onChangeName('')
              onChangeTag('')
            }}
            text='Cancella'
            icon={undefined}
            principal={false}
          />
        </View>
        <View
          style={[styles.columnItem, styles.centeringRow]}
        >
        <CoinButton
          press={() => {
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
          text='Salva'
          icon={undefined}
        />
        </View>
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
