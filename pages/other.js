import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { startClock, tickClock } from '../actions'
import Page from '../components/page'

const OtherPage = (props) => {
  useEffect(() => {
    props.dispatch(startClock())
  }, []);

  return (
    <Page title="Other Page" linkTo="/" NavigateTo="Index Page" />
  )
}

OtherPage.getInitialProps = async (props) => {
  const { store, isServer } = props.ctx
  store.dispatch(tickClock(isServer))
  return { isServer }
}

export default connect()(OtherPage)
