import React from 'react'

export const Delete = (props) => {
  return (
    <button
      key={props.index}
      onClick={props.onDelete}
      title='Delete the task'
    ><i className="fa-solid fa-trash absolute top-4 right-4 text-gray-400 text-sm
            hover:cursor-pointer hover:text-red-500 transition duration-200"></i></button>
  )
}
