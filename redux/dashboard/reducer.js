import { types } from './action'
import { HYDRATE } from 'next-redux-wrapper'

export const initialState = {
  count: 0,
  error: false,
  lastUpdate: 0,
  light: false,
  placeholderData: null,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE: {
      const { dashboard } = action.payload
      const { count, ...rest } = dashboard // keep the count
      return { ...state, ...rest }
    }

    case types.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      }

    case types.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 },
      }

    case types.DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 },
      }

    case types.RESET:
      return {
        ...state,
        ...{ count: initialState.count },
      }

    case types.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data },
      }

    case types.TICK_CLOCK:
      return {
        ...state,
        ...{ lastUpdate: action.ts, light: !!action.light },
      }

    default:
      return state
  }
}
