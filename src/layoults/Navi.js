import React from 'react'
import CartSummary from './CartSummary'
import { Button, Container, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignnedIn from './SignnedIn'
 
export default function Navi() {
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
          <CartSummary/>
          <SignedOut/>
          <SignnedIn/>
        </Menu.Menu>
            </Container>
      </Menu>
        </div>
    )
}
