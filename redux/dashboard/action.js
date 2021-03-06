export const types = {
  FAILURE: 'FAILURE',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  START_CLOCK: 'START_CLOCK',
  TICK_CLOCK: 'TICK_CLOCK'
}

export const urls = {
  USERS: 'https://jsonplaceholder.typicode.com/users',
}

export function tickClock(isServer) {
  return {
    type: types.TICK_CLOCK,
    light: !isServer,
    ts: Date.now(),
  }
}