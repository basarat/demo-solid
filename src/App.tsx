import { Component, createSignal, For } from 'solid-js';
import { createCounter, CounterProps, Counter } from './Counter';

const App: Component = () => {
  const [counters, setCounters] = createSignal<CounterProps[]>([]);
  const addCounter = () => {
    setCounters([...counters(), createCounter()]);
  };
  
  return (<>
    <button onClick={addCounter}>Add Counter</button>
    <p>Total Count: {counters().reduce((a, c) => a + c.count(), 0)}</p>
    
    <For each={counters()}>
      {counter => <Counter {...counter} />}
    </For>
  </>);
};

export default App;