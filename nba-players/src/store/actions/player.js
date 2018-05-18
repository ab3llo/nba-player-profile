import {GET_PLAYER} from './actionType';

export function getPlayer (firstName, surname){
    return{
        type: GET_PLAYER,
        payload: {firstName,surname}
    }
}