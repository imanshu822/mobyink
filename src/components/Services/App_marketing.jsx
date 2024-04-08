import React from 'react'
import AppMarketingBanner from './AppMarketingBanner'
import AppServices from './AppServices'
import { Stack } from '@mui/material'
import AppBring from './AppBring'

const App_marketing = () => {
  return (
    <Stack bgcolor={"#F5F7FF"}>
      <AppMarketingBanner />
      <AppServices />
      <AppBring/>
    </Stack>
  );
}

export default App_marketing