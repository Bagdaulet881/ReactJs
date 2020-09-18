import React, { ReactElement, useState } from 'react'

interface Props {
    initialCount: number
}

export default function CounterHooks({initialCount}: Props): ReactElement {
   
    const [count, setCount] = useState(initialCount);

    return (
        <div>
                <button className="btn" onClick={()=>setCount(count2=>count2+1)}>+</button>
                    <span>{count}</span>
                <button className="btn" onClick={()=>setCount(count2=>count2-1)}>-</button>
        </div>
    )
}
