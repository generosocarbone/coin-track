export const CREATE_COIN = 'CREATE_COIN'
export const UPDATE_COIN = 'UPDATE_COIN'
export const DELETE_COIN = 'DELETE_COIN'

export const createCoinAction = (name: string, tag: string) => {
  return {
    type: CREATE_COIN,
    name,
    tag
  }
}
