import React, { useState } from "react";

const IncDec = () => {
    const [count, setCount] = useState(0)

    const Increment = () => {
        setCount(count + 1)
    }

    const Decrement = () => {
        setCount(count - 1)
    }

    const Reset = () => {
        setCount(0)
    }

    return (
        <div className="stock">
            <div className='card'>
                <h3 className='count'> {count} </h3>
                <button onClick={Increment} className="border px-4 py-2 rounded-md">Increment</button>
                <button onClick={Decrement} className="border px-3 py-2 rounded-md">Decrement</button>
                <button onClick={Reset} className="border px-9 py-2 rounded-md">Reset</button>
            </div>
        </div>
    );
}

export default IncDec