import reduceReducers from 'reduce-reducers';
import { Count,loginSubmit  } from './reducer'


let reducer = reduceReducers(//合并reducer
    Count,
    loginSubmit
)
export default reducer