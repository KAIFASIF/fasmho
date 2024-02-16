import React from 'react'

const Child1 = ({first}:any) => {
    console.log("child 1 rendered")

  return (
    <div>Child1
        {first}
    </div>
  )
}

export default React.memo(Child1);