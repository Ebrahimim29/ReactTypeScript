import { useReducer } from "react";

type ActionType = {type: 'increment' | 'decrement'} | {type:'setCount', payload:number}

type StateType = {count:number}

const initialState: StateType = {count: 0};

function reducer(state: StateType, action: ActionType) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};    
        case 'setCount':
            return {count: action.payload}
        default:
            throw new Error();
    }
}

const HookReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <div className="bg-sky-500 w-[40%] h-[40%] p-5 text-center mb-3">
            <h3 className="bg-sky-800 inline-block p-2">UseReducer:</h3>
            <p>Count: {state.count}</p>
            <button className="bg-green-500 m-1 p-2 rounded-xl" onClick={()=>dispatch({type: 'increment'})}>Increase +</button>
            <button className="bg-red-500  m-1 p-2 rounded-xl" onClick={()=>dispatch({type: 'decrement'})}>Decrease -</button>
            <button className="bg-amber-500  m-1 p-2 rounded-xl" onClick={()=>dispatch({type:'setCount', payload:5})}>Payload</button>
        </div>
    )
};

export default HookReducer;