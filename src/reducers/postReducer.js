import {FETCH_POSTS, NEW_POST} from '../actions/types';

const initialState = {
  items : [],
  item : {}
}

export default function(state = initialState , action){
  switch (action.type) {
    case FETCH_POSTS:
    console.log('reducer called for fetching posts')
      return {
        ...state,
        items : action.payload
      }

      case NEW_POST:
      console.log('reducer called for new post')
        return {
          ...state,
          item : action.payload
        }
    default:
      return state;
  }
}
