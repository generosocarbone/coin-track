/*
  <CoinList>
    <CointItem />
    <CointItem />
    <CointItem />
    ...
    <CointItem />
  </CoinList>
*/
import React from 'react'
import CoinItem from './CoinItem'

const CoinList = ({coins}) => {
  <View>
    {
      coins.map(
        coin => <CointItem
                  key={coin.tag}
                  name={coin.name}
                  tag={coin.tag}
                  spent={coin.spent}
                  fees={coin.fees}
                />
      )
    }
  </View>
}

export default CoinList
