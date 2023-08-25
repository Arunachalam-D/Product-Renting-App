import React from 'react'
import IntroPage from './IntroPage/index'
import Creators from './Creators'
import Layout from '../Layout/Layout'

function Main() {
  return (
    <div>
        <Layout>
        <div><IntroPage/></div>
        <div><Creators/></div>
        </Layout>
    </div>
  )
}

export default Main