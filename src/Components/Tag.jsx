import React from 'react'
import '../style/Tag.scss'

export default function Tag(props) {
  return (
    <div>
      <div className='tagContainer'>{props.tag}</div>
    </div>
  )
}