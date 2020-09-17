//initial state 

const initState ={
    counter:0
}
// create the reducer

const rootReducer=(state=initState,action)=>{
    switch(action.type) {
        case 'INCREMENT':
          return {
            counter: state.counter + 1
          };
        case 'DECREMENT':
          return {
            counter: state.counter - 1
          };
       
        default:
          return state;
      }
  
}

export default rootReducer;