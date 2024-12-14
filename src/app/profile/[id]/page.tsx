import React from 'react'

export default function page({params}:any) {
  return (
    <div>
        <h2>Profile-Page</h2>
        <h2>{params.id}</h2>
    </div>
  )
}


