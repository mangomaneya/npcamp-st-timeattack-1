import { useState } from "react";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  const [ medalList, setMedalList ] 

  return (
    <>
      <form>
        <label htmlFor="country"></label>
        <input type="text" id="country" onChange={medalInputChangeHandler}/>
        <label htmlFor="gold"></label>
        <input type="number" id="gold" />
        <label htmlFor="silver"></label>
        <input type="text" id="silver" />
        <label htmlFor="bronze"></label>
        <input type="number" id="bronze" />

        <div>
          <button>국가추가</button>
          <button>업데잍트</button>
        </div>
      </form>
    </>
  );
}

export default App;
