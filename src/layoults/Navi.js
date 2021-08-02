import React, { useEffect, useState } from 'react'
import CartSummary from './CartSummary'
import { Button, Container, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignnedIn from './SignnedIn'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navi() {
  const { cartItems } = useSelector(state => state.cart)

  const [isAuthenticaten, setIsAuthenticaten] = useState(true)

  const history = useHistory()

  function handleSignOut() {
    setIsAuthenticaten(false)
    history.push("/")
  }

  function handleSignIn() {
    setIsAuthenticaten(true)
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item
            name='home'

          />
          <Menu.Item
            name='messages'

          />


          <Menu.Menu position='right'>
              {cartItems.length>0 && <CartSummary/>}
              {isAuthenticaten ? <SignnedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  )
}
