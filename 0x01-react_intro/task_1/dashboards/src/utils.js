import React from 'react'

function GetFullYear() {

  let date = new Date()

   let year = date.getFullYear()
  return (
    <div>
      <h1>{year}</h1>
    </div>
  )
}

export default GetFullYear

