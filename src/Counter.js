import React from 'react';
import {connect} from 'react-redux';
import './counter.css';



const Counter=(props)=>{

//incremenet function
const increment=()=>{
    props.dispatch({type:'INCREMENT'})
}

//decremenet function
const decrement=()=>{
    props.dispatch({type:'DECREMENT'})
}
console.log(props)

    return <div>
        <h1>Counter</h1>
        <div className='div'>
        <button onClick={()=>{increment()}}>+</button>
       <span>{props.counter}</span>
        <button onClick={()=>{decrement()}}>-</button>
        </div>
    </div>
}

const mapStateToProps=(state)=>{
    return {
        counter:state.counter
    }
}


export default connect(mapStateToProps)(Counter);