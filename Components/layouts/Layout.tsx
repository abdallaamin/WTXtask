import React from 'react'
import Nav from '../Nav'

type Props = {
    children: any
}

const Layout = ({children}: Props) => {
  return (
    <div>
        <Nav/>
        <div>
        {children}
        </div>
    </div>
  )
}

export default Layout