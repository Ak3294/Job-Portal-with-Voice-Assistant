import React from 'react'

const Button = ({onClickHandler,value,title}) => {
  return (
    <button onClick={onClickHandler} value={value} className={`px-4 py-1 mb-2 border text-base hover:bg-black hover:text-white`}>
        {title}
    </button>
  )
}

export default Button