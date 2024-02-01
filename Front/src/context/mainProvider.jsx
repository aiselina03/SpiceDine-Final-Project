import React from 'react'
import BasketProvider from './basketContext'
import WishlistProvider from './wishlistContext'

function MainProvider({children}) {
  return (
   <BasketProvider>
    <WishlistProvider>
      {children}
    </WishlistProvider>
   </BasketProvider>
  )
}

export default MainProvider