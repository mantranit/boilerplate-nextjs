import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { loadData, startClock, tickClock } from '../actions'
import Page from '../components/page'

const IndexPage = (props) => {
  useEffect(() => {
    props.dispatch(startClock());
  }, [])
  
  return (
    <Page title="Index Page" linkTo="/other" NavigateTo="Other Page" />
  )
}

IndexPage.getInitialProps = async (props) => {
  const { store, isServer } = props.ctx;
  store.dispatch(tickClock(isServer))

  if (!store.getState().placeholderData) {
    store.dispatch(loadData());
  }

  return { isServer }
}

export default connect()(IndexPage)
