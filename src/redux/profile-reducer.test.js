import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, post: 'Hi, how are you?', likes: 12},
        {id: 2, post: 'It\'s my first post!', likes: 11}
    ]
}

it('length of posts should be incremented', () => {
    // 1. initial test data
    let action = addPostActionCreator('it-kamasutra.com');
    // 2. some action
    let newState = profileReducer(state, action);
    // 3. final expectation
    expect(newState.posts.length).toBe(3);
    expect(newState.posts[2].post).toBe('it-kamasutra.com');
});

it('post text should be equal to newPostText', () => {
    // 1. initial test data
    let action = addPostActionCreator('it-kamasutra.com');
    // 2. some action
    let newState = profileReducer(state, action);
    // 3. final expectation
    expect(newState.posts[2].post).toBe('it-kamasutra.com');
});

it('after deleting length of messages should be decrement', () => {
    // 1. initial test data
    let action = deletePost([1]);
    // 2. some action
    let newState = profileReducer(state, action);
    // 3. final expectation
    expect(newState.posts.length).toBe(1);
});

it('after deleting length of messages shouldn\'t be decrement if id is incorrect', () => {
    // 1. initial test data
    let action = deletePost([1000]);

    // 2. some action
    let newState = profileReducer(state, action);
    // 3. final expectation
    expect(newState.posts.length).toBe(2);
});