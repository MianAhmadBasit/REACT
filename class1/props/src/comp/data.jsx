import React from 'react'
import PBI from '../pbi.png'
function Data({ name, age , srno }) {
    return (
        <div>
      <img src={PBI} width={55} />
            <h1>
            <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />


           {srno}     My Name is {name} & my age is {age}
            </h1>
        </div>
    )
}

export default Data