import React from 'react'
import { useAddress , useMetamask , useDisconnect} from '@thirdweb-dev/react'
import Listings from './Listings'
import Owned from './Owned' 
import {  Route, Routes } from 'react-router-dom'

const Authentication = () => {
  const address = useAddress()
  const connectWithMetamask = useMetamask()
  const disconnect = useDisconnect()
  return (
    <>
        <h1>web 3 marketplace</h1>

        {
          address?
          <div>
            <h1>{address}</h1>
            <button onClick={disconnect}>
                Disconnect
            </button>

        <Routes>
                  < Route exact path='/' element={<Listings/>}  />
                  <Route path='/owned' component={<Owned/>} />
        </Routes>
          </div>
        :
          <div>
            <button onClick={connectWithMetamask}>
               Connect With Metamask
            </button>
          </div>
        }
        
    </>
  )
}

export default Authentication 