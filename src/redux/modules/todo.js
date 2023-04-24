// Action value
const ADD_TODO = "ADD_TODO"
const REMOVE_TODO = "REMOVE_TODO"
const COMPLETE_TODO = "COMPLETE_TODO"
const CANCEL_TODO = "CANCEL_TODO"

// Action Creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};
export const removeTodo = (payload) => {
	return { type: REMOVE_TODO, payload };
};
export const completeTodo = (payload) => {
	return { type: COMPLETE_TODO, payload };
};
export const cancelTodo = (payload) => {
	return { type: CANCEL_TODO, payload };
};


// initial State
const initialState = {
  todos: [
    {
		    id: 1, 
        title: '스타 이즈 본', 
        contents: '드라마, 멜로/로맨스', 
        isDone: false,
      },
      { 
        id: 2, 
        title: '기묘한 이야기', 
        contents: 'SF 시리즈', 
        isDone: false,
    },
  ],
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
	case REMOVE_TODO:
		return{
			...state,
			todos : action.payload
		}

	case COMPLETE_TODO:
		return{
			...state,
			todos : action.payload
		}

	case CANCEL_TODO:
		return{
			...state,
			todos : action.payload
		}  
    default:
      return state;
  }
};

export default todos;