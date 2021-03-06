import { Action } from '@ngrx/store';

import * as gqlSchema from '../../actions/gql-schema/gql-schema';

export interface State {
    introspection: object;
    schema: object;
    allowIntrospection: boolean;
}

export const initialState: State = {
    introspection: null,
    schema: null,
    allowIntrospection: true
};

export function gqlSchemaReducer(state = initialState, action: gqlSchema.Action): State {
    switch (action.type) {
        case gqlSchema.SET_INTROSPECTION:
        case gqlSchema.SET_INTROSPECTION_FROM_DB:
            return Object.assign({}, state, { introspection: action.payload });
        case gqlSchema.SET_SCHEMA:
            return Object.assign({}, state, { schema: action.payload });
        case gqlSchema.SET_ALLOW_INTROSPECTION:
            return Object.assign({}, state, { allowIntrospection: action.payload });
        default:
            return state;
    }
}
