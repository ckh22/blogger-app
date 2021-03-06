import {ASYNC_ACTION_ERROR, ASYNC_ACTION_FINISH, ASYNC_ACTION_START} from '../Constants/asyncConstants.js'

export function asyncActionStart() {
    return {type: ASYNC_ACTION_START};
}
export function asyncActionFinish() {
    return {type: ASYNC_ACTION_FINISH};
}
export function asyncActionError(error) {
    return {type: ASYNC_ACTION_ERROR, payload: error};
}
