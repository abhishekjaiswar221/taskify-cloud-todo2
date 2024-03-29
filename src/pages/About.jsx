import FooterNavigation from "@/components/layout/FooterNavigation";
import HeaderNavigation from "@/components/layout/HeaderNavigation";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const About = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <HeaderNavigation />
      </div>
      <div className="h-screen">
        <h1>This is home page</h1>
        <div className="flex items-center justify-center my-16 card">
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
        </div>
      </div>
      <div>
        <FooterNavigation />
      </div>
    </>
  );
};

export default About;
