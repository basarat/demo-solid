import { createSignal } from "solid-js";

const [elephants, setElephants] = createSignal(0);
const increasePopulation = () => setElephants(elephants() + 1);

export {
  elephants,
  increasePopulation
};