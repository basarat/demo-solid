import { Component, createSignal } from 'solid-js';

// Component State
export function createCounter() {
  const [count, setCount] = createSignal(0);
  return { count, setCount };
}

// Component Props
export type CounterProps = ReturnType<typeof createCounter>;

// Component
export const Counter: Component<CounterProps> = (props) => {
  return (
    <div>
      <p>You clicked {props.count()} times</p>
      <button onClick={() => props.setCount(props.count() + 1)}>
        Click me
      </button>
    </div>
  );
}
