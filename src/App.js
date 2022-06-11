import React from 'react'
import {ThirdwebProvider , ChainId } from '@thirdweb-dev/react' 
import Authentication  from './components/Authentication'

const App = () => {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Rinkeby}>

      <Authentication />

    </ThirdwebProvider>

  )
}

export default App