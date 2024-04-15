import React, { Component } from 'react'
import './IncDec.css'

class ClassIncrement extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
        }
    }

    increment = () => {
        // console.log("increment");
        this.setState({ count: this.state.count + 1 })
    }

    decrement = () => {
        // console.log("decrement");
        this.setState({ count: this.state.count - 1 })
    }

    reset = () => {
        // console.log("decrement");
        this.setState({ count: 0 })
    }

    render() {
        return (
            <div>
                <h2 className='text-xl'> {this.state.count} </h2>
                <button onClick={this.increment} className='border px-3 py-2 mr-4 mt-3 text-lg bg-green-500 text-slate-500'>Increment</button>
                <button onClick={this.decrement} className='border px-3 py-2 mr-4 mt-3 text-lg bg-red-500 text-slate-500'>Dcrement</button>
                <button onClick={this.reset} className='border px-7 py-2 mt-3 text-lg text-slate-500'>Reset</button>
            </div>
        )
    }
}

export default ClassIncrement