import React from 'react'
import { useMemo, useState } from 'react'

const UseMemo = () => {

    const [count, setCount] = useState(0);
    const [item, setItem] = useState(2);

    // function multiFun() {
    //     console.log("multiple time calling");
    //     return count * 5;
    // }

    const multiFunction = useMemo(
        function multiFun(){
            console.log("multiple time calling")
            return count * 5;
        },[count]
    )

    return (
        <div>

            <h1>Hook UseMemo</h1>
            <h1> {count} </h1>
            <button onClick={()=>setCount(count+1)}>Click Me</button>
            {/* <h1>{multiFun()}</h1> */}
            <h1>{multiFunction}</h1>
            <h1>{item}</h1>
            <button onClick={()=>setItem(item * 10)}>Item</button>

        </div>
    )
}

export default UseMemo
