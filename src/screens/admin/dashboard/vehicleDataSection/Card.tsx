import React from 'react'
import RoundedBox from '../../../../components/RoundedBox'

const Card = () => {
  return (
    <div className=" flex justify-center items-center px-4 bg-gray-100 rounded-lg border-2 border-gray-300 w-full shrink-0 h-20 ">
        <RoundedBox title="------"  className="py-2" />
    </div>
  )
}

export default React.memo(Card)