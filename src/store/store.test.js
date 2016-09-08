import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', function() {
  it('Should handle creating courses', function() {

    // Arrange
    const store = createStore(rootReducer, initialState);
    const course = {
      title: 'Clean Code'
    };

    // Act
    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action);

    // Assert
    const actual = store.getState().courses[0];
    const expected = {
      title: 'Clean Code'
    };

    expect(actual).toEqual(expected);
  });
});
