import { Button } from "@/components/ui/button";
import { useState } from "react";
const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>This is home page</h1>
      <div className="flex items-center justify-center my-16 card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </div>
  );
};
export default Home;
// background-image: linear-gradient(to left bottom, #1051b3, #007bd4, #009ed1, #00bcb0, #00d581, #49d165, #6bcb47, #86c524, #6fa928, #5b8e29, #487428, #385a24);
//Colors Used : #051937-->Original Color 30% Lighten To -->#1051B3, #A8EB12, #385A24
//Website : mycolorspace
