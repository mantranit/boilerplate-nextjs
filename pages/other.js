import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { wrapper } from '../redux/store'
import { types, tickClock } from '../redux/dashboard/action'
import Page from '../components/page'

const Other = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: types.START_CLOCK })
  }, [dispatch])

  return <Page title="Other Page" linkTo="/" NavigateTo="Index Page" />
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(tickClock(false))
})

export default Other
