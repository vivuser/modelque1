import React from 'react'
import Radios from '../components/Radio';
import { buildOptions, genderOptions, ratingOptions } from '../utils/dummyData/radioData';


const Peers = () => {
  return (
    <div className='m-20 flex flex-col'>
      <Radios field="Gender" defaultValue="male" options={genderOptions} />
      <Radios field="Rating" defaultValue="1" options={ratingOptions} />
      <Radios field="Build" defaultValue="medium" options={buildOptions} />
    </div>
  )
}

export default Peers;
