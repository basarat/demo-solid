import { elephants } from "./AppStore";

export const ElephantCount = () => {
  return (
    <div>Elephants: {elephants()} 🐘</div>
  );
}