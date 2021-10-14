import { increasePopulation } from "./AppStore";

export const AddElephantButton = () => {
  return (
    <button onClick={increasePopulation}>
      Add an elephant to the room
    </button>
  );
}