import { IUIState } from "./UIProvider";

type UIActionType = 
| { type: '[UI] - UPDATE URL FRAGMENT', payload: {actualFragmentURL: string} }


export const uiReducer = (state: IUIState, action: UIActionType):IUIState => {

switch (action.type) {
    case '[UI] - UPDATE URL FRAGMENT':
        return {
            ...state, 
            ...action.payload
        }

    default:
        return state;
    }
}