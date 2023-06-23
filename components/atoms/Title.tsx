import React from 'react'

type Props = {
  text:string
}

const Title = ({text}: Props) => {
  return (
    <h3 className='font-bold text-2xl'>{text}</h3>
  )
}

export default Title