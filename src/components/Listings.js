import React ,{useState, useEffect, }from 'react'
import { useMarketplace } from '@thirdweb-dev/react'
import './listings.css'

const Listings = () => {

 // 0xfA54C14Da59b4DCC79A2d30120e55Cd82852f57A  => marketplace address

 const [listings , setListings]  = useState([])

    
    const contract = useMarketplace('0xfA54C14Da59b4DCC79A2d30120e55Cd82852f57A')

    useEffect(()=>{

        const data = async ()=>{
            const nfts = await contract.getActiveListings();
            setListings(nfts)
        }

        data()
    },[])

   
    console.log(listings)
 
  return (
    <>

        {
           ( listings.length !== 0 )?
            <div className='data'>
                {
                    listings.map((item,key)=>{
                    return(
                        <div>
                            <h1>{item.asset.name}</h1>
                            <img src={item.asset.image}/>
                            <h1>{item.buyoutCurrencyValuePerToken.displayValue}</h1>
                            <button onClick={
                                    ()=> {
                                        try{
                                       contract.buyoutListing(item.id, 1)
                                        }
                                        catch(error){
                                           <h2> error  </h2>
                                        }

                                        
                                    }
                                        }>
                                   Buy now
                            </button>
                        </div>    
                    )                   
                    })
                }
            </div>
            :
            <div>
                <h1>Loading ...</h1>
            </div>
        }
    </>
  )
}

export default Listings