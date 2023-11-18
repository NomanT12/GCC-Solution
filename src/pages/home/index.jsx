import React from 'react'

import NotificationBar from 'components/notification-bar'
import { HeaderContainer } from 'components/common'
import MainHeader from 'components/main-header'
import BusinessSetupComponent from 'components/steps-section'

const Home = () => {
  
  return (
    <>
      <NotificationBar />
      <HeaderContainer> <MainHeader /> </HeaderContainer>
      <BusinessSetupComponent/>
    </>
  )
}

export default Home