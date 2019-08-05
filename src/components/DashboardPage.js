import React, { useState, useContext } from 'react'
import Context from '../context/context'

const DashboardPage = () => {
  const { uid } = useContext(Context)
  const [ isHungry, setIsHungry ] = useState(true)
  console.log('isHungry', isHungry)
  return (
    <div>
      DashboardPage
      <br />
      {uid}
    </div>
  )
}
export default DashboardPage
