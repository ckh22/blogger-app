import {CREATE_PROJECT, UPDATE_PROJECT, DELETE_PROJECT} from '../Constants/projectConstants.js'

const initialState = {
    projects: [{
        title: 'Project #1',
        description: 'Lorem ipsum dolor sit amet, graeco oblique qui ad. Cibo possit euripidis cu qui, te nam alii atomorum. At vim quot albucius, dicta placerat eam et, cu dicta accusamus contentiones vis. Vis tale tamquam cu, ex delectus perpetua comprehensam mea.'
    }]
}

export default function projectReducer(state = initialState, {
    type,
    payload
}) {
    switch (type) {
        case CREATE_PROJECT:
            return {
                ...state,
                projects: [
                    ...state.projects,
                    payload
                ]
            }
        case UPDATE_PROJECT:
            return {
                ...state,
                projects: [
                    ...state.projects.filter((prj) => prj.id !== payload.id),
                    payload,
                ]
            };
        case DELETE_PROJECT:
            return {
                ...state,
                projects: [...state.projects.filter((prj) => prj.id !== payload)]
            };
        default:
            return state;
    }
}
