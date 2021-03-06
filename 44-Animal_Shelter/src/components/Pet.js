import React from 'react'

const Pet = props => {
  const { pet: { id, age, gender, name, type, weight, isAdopted }, onAdoptPet } = props
  return (
    <div className="card">
      <div className="content">
        <a className="header">
          { name } 
          { gender === 'male' ? '♂' : '♀'}
        </a>
        <div className="meta">
          <span className="date">{ type }</span>
        </div>
        <div className="description">
          <p>Age: { age }</p>
          <p>Weight: { weight } lbs</p>
        </div>
      </div>
      <div className="extra content">
        { isAdopted ? 
        (
          <button className="ui disabled button">Already adopted</button>
          ) : (
          <button className="ui primary button" onClick={() =>  onAdoptPet(id)}>Adopt pet</button>)
        }
        </div>
    </div>
  )
}

export default Pet
