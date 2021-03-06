import { 
	GET_DATA, 
	DELETE_DATA, 
	ADD_ITEM 
} from './menu-types';

const INITIAL_STATE = {
    data: []
};


// Menu Reducer 

const menuReducer = ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
      case GET_DATA: 
          return {
              ...state,
              data: action.payload
          }
      case DELETE_DATA: 
          return {
              ...state,
              data: state.data.filter(data => data.id !== action.payload)
          }
			case ADD_ITEM: 
					return {
							...state,
							data: [ ...state.data, action.payload ]
					}
          default: {
              return state;
          }
  }
};

export default menuReducer;