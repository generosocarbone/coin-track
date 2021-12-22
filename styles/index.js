import React from 'react'
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#abc',
    borderColor: '#000',
    borderWidth: 1,
  },
  columnItem: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#cde',
    borderColor: '#000',
    borderWidth: 1,
    padding: 4,
  },
  columns: {
    backgroundColor: '#bcd',
    flexDirection: 'row',
    borderColor: '#000',
    borderWidth: 1,
  },
  smallText: {
    fontSize: 14,
    color: '#999',
  },
  bigText: {
    fontSize: 18,
    color: '#333',
  },
  centering: {flexDirection: 'column', justifyContent: 'center', padding: 2},
  centeringRow: {flexDirection: 'row', justifyContent: 'center', padding: 2},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    padding: 10,
    borderWidth: 1,
    width: 100,
    backgroundColor: '#333',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  outlineButton: {
    padding: 10,
    borderWidth: 1,
    width: 100,
    borderColor: '#333',
    flexDirection: 'row',
    justifyContent: 'center',
  }
})
