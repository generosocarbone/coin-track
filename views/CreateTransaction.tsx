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
import SmallText from '../components/SmallText'

// todo: prima di effettuare il salvataggio controllare che la moneta o il tag non esistano già nello store
const CreateTransaction = ({
                      dispatch,
                      navigation,
                      coin
                    }) => {

  let {name, tag} = coin
  const [amount, changeAmount] = useState('');
  const [fees, onChangeFees] = useState('');

  return(
    <SafeAreaView style={styles.container}
    >
      <View style={styles.centeringRow}>
        <BigText text={`${name} (${tag})`} />
      </View>
      <SmallText text={'Amount'} />
      <TextInput
        style={styles.input}
        onChangeText={changeAmount}
        value={amount}
        placeholder="es: 0.0001574"
      />
      <BigText text={'Coin Tag'} />
      <TextInput
        style={styles.input}
        maxLength={5}
        autoCapitalize={'characters'}
        onChangeText={onChangeFees}
        value={fees}
        placeholder="es: 1.46"
      />
      <View
        style={styles.columns}
      >
        <View
          style={[styles.columnItem, styles.centeringRow]}
        >
          <CoinButton
            press={() => {
              changeAmount('')
              onChangeFees('')
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
            if(name.length > 0 && fees.length > 0) {
              let n = coins.find(c => c.name === name)
              let t = coins.find(c => c.tag === fees)
              if(!n && !t) {
                dispatch(CreateTransactionAction(name, fees))
                changeAmount('')
                onChangeFees('')
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

export default connect(mapStateToProps)(CreateTransaction)
