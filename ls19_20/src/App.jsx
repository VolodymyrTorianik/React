import React, { useState } from 'react';
import { useCounter, useFetch,  useReducerExample, useRefExample,  useMemoExample, useCallbackExample } from './hooks';
import { Posts } from "./components/Posts";
import { Users } from "./components/Users";
import { Comments } from "./components/Comments";

function App() {

    const { count, increment, decrement } = useCounter(0);


    const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/todos/1');


    const { state, dispatch } = useReducerExample();


    const inputRef = useRefExample();


    const [number, setNumber] = useState(10);
    const memoizedValue = useMemoExample(number);


    const callback = useCallbackExample();

    const [active, setActive] = useState("posts");

    return (
        <div>
            <h1>Custom Hooks Demo</h1>

            <section>
                <h2>useCounter</h2>
                <p>Count: {count}</p>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <hr />
            </section>

            <section>
                <h2>useFetch</h2>
                {loading ? <p>Loading...</p> : <p>Data: {JSON.stringify(data)}</p>}
                <hr />
            </section>

            <section>
                <h2>useReducer</h2>
                <p>Count: {state.count}</p>
                <button onClick={() => dispatch({ type: 'increment' })}>+</button>
                <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
                <hr />
            </section>

            <section>
                <h2>useRef</h2>
                <input ref={inputRef} placeholder="Autofocused input" />
                <hr />
            </section>

            <section>
                <h2>useMemo</h2>
                <p>Number: {number}</p>
                <p>Memoized Value: {memoizedValue}</p>
                <button onClick={() => setNumber(number + 1)}>Increase</button>
                <hr />
            </section>

            <section>
                <h2>useCallback</h2>
                <button onClick={callback}>Trigger Callback</button>
                <hr />
            </section>
            <section>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setActive("posts")}>Posts</button>
        <button onClick={() => setActive("users")}>Users</button>
        <button onClick={() => setActive("comments")}>Comments</button>
      </div>

      {active === "posts" && <Posts />}
      {active === "users" && <Users />}
      {active === "comments" && <Comments />}

            </section>
        </div>
    );
}

export default App;
