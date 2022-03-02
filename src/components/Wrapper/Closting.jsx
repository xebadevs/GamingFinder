import React from 'react'
import NavbarHooks from '../NavbarHooks/NavbarHooks'
import By_Platform from '../../components/NavbarHooks/By_Platform'

export default function Closting() {
  return (
      <div>
        <NavbarHooks />
        <h1>Closting Component</h1>
        <By_Platform endpoint='games' platform='pc' title='PC' />
      </div>
  )
}
