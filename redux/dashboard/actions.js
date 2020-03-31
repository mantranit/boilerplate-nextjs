import { types } from './index';

export function increment() {
  return { type: types.INCREMENT }
}

export function decrement() {
  return { type: types.DECREMENT }
}

export function reset() {
  return { type: types.RESET }
}

export function loadData() {
  return { type: types.LOAD_DATA }
}

export function startClock() {
  return { type: types.START_CLOCK }
}

export function tickClock(isServer) {
  return {
    type: types.TICK_CLOCK,
    light: !isServer,
    ts: Date.now(),
  }
}