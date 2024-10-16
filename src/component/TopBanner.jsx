import React from 'react'
import data from '../../public/data/InstitueInformation.json'
import Image from 'next/image'

const TopBanner = () => {
    const Data=data[1]
  return (
    <div>
        {Data.TopBanner.map(item=>{
        return<div><Image src={item.imageUrl} alt={item.imageUrl} width={800} height={150} /></div>
        
    })}
    </div>
  )
}

export default TopBanner