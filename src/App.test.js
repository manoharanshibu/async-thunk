import { fetch_post, thunk_action_creator } from './actions/fetchAction';
import * as types from './actions/ActionTypes';
import store from './store';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

const mockData = [{
    "type": types.FETCH_POST
}, {
    "data": "test data",
    "type": types.FETCHED_POST
}]

describe("sample test", () => {
    it("This is a sample test", () => {
        expect(1 + 2).toEqual(3);
    })
});

// Testing action
describe('actions', () => {
    it('should create an action to fetch posts', () => {
        const expectedAction = {
            type: types.FETCH_POST
        }
        expect(fetch_post()).toEqual(expectedAction)
    })
});

// Testing async action creators
describe('action creators', () => {

    afterEach(() => {
        fetchMock.reset()
    })

    it('should create FETCHED POST', () => {
        fetchMock.getOnce(`https://api.github.com/users/manoharanshibu`, mockData);

        const expectedActions = [{ type: types.FETCH_POST }, { "data": mockData, "type": types.FETCHED_POST }]

        const store = mockStore()

        return store.dispatch(thunk_action_creator('manoharanshibu'))
            .then((data) => {
                expect(store.getActions()).toEqual(expectedActions)
            })
    })
})
