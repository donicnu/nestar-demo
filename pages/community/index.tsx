import { useState } from "react";

const CommunityList = () => {
  console.log("COMMUNITY COMPONENT PAGES ROUTER");
  const [title, setTitle] = useState<string>("hello");
  return (
    <div>
      Community
      <button onClick={() => alert("Hello MIT")} style={{ margin: 20 }}>
        Press Me
      </button>
    </div>
  );
};

export default CommunityList;
