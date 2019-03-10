const createStore = require("./createStore.js")

const incrementAction = {
    type: "INCREMENT"
}

const decrementAction = {
    type: "DECREMENT"
}

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type){
        case "INCREMENT":
            return {count: state.count + 1} 
        case "DECREMENT":
            return {count: state.count - 1} 
    }
    return { ...state }
} 


const store = createStore(countReducer)
store.subscribe(() => console.log(store.getState()))
store.dispatch(incrementAction)
store.dispatch(incrementAction)
store.dispatch(decrementAction)
store.dispatch(incrementAction)

