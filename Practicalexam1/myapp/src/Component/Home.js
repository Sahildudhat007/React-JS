import React from 'react'
import PropsData from './Data'
import PropsCard from './Card'

const Home = (props) => {
  return (
    <div>

      <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'center' }}>

        {PropsData.map((cvalue, index, array) => {
          console.log(cvalue, "cvalue")
          return <PropsCard key={index} id={cvalue.id} name={cvalue.name} age={cvalue.age} button={cvalue.button} image={cvalue.image} />
        })}

      </div>

    </div>
  )
}

export default Home
