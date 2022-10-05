import React from 'react'
import {Navbar, NavItem, Icon} from 'react-materialize'
import './nav.css'
const Nav = () => {
  return (
    <div className='nav__bar'>
      <Navbar
       alignLinks="left"
       brand={<a className="brand-logo" href="#home">Api Aplication</a>}
       centerLogo
       id="mobile-nav"
       menuIcon={<Icon>menu</Icon>}
       options={{
         draggable: true,
         edge: 'left',
         inDuration: 250,
         onCloseEnd: null,
         onCloseStart: null,
         onOpenEnd: null,
         onOpenStart: null,
         outDuration: 200,
         preventScrolling: true
       }}>
        <NavItem href="#home">
        Api Application
        </NavItem>
      </Navbar></div>
  )
}

export default Nav