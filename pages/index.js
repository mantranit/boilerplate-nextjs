import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { END } from 'redux-saga'
import { wrapper } from '../redux/store'
import { types, tickClock } from '../redux/dashboard/action'
import Page from '../components/page'

const Index = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: types.START_CLOCK })
  }, [dispatch])

  return <Page title="Index Page" linkTo="/other" NavigateTo="Other Page" />
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(tickClock(false))
  if (!store.getState().dashboard.placeholderData) {
    store.dispatch({ type: types.LOAD_DATA })
    store.dispatch(END)
  }

  await store.sagaTask.toPromise()
})

export default Index
