import { useState, useSyncExternalStore } from "react";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  const [medalList, setMedalList] = useState([]);
  // const [medalData, setMedalData] = useState({
  //   country: "",
  //   gold: 0,
  //   silver: 0,
  //   bronze: 0,
  // });
  const [country, setCountry ] =useState("");
  const [gold, setGold ] = useState(0);
  const [silver, setSilver ] = useState(0);
  const [bronze, setBronze ] = useState(0);

  // 인풋값 처리
  const countryInputChangeHandler = (e) => {
    // const [id, value] = e.target;
    setCountry(e.target.value);  
  };
  const goldInputChangeHandler = (e) => {
    // const [id, value] = e.target;
    setGold(e.target.value);
    
  };
  const silverInputChangeHandler = (e) => {
    // const [id, value] = e.target;
    setSilver(e.target.value);
    
  };
  const bronzeInputChangeHandler = (e) => {
    // const [id, value] = e.target;
    setBronze(e.target.value);
   
  };

  //
  const medalListSubmitHandler = (e) => {
    e.preventDefault();
    // 유효성검사 - 국가명 입력 체크
    if(!country.trim()){
      alert("국가명을 공백없이 입력해주세요.");
      return;
    }
    // 유효성 검사 - 국가명 중복 체크
    // if(medalList.includes(country)){
    //   alert("이미 존재하는 국가는 업데이트를 눌러주세요.");
    //   return;
    // }

    const newMedalList = {
      country: country,
      gold: Number(gold),
      silver: Number(silver),
      bronze: Number(bronze),
    };
    // console.log(newMedalList);
    setMedalList([...medalList, newMedalList ])
    // console.log(medalList)
    //인풋창 초기화 
    setCountry("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  const deleteListHandler = (e)=>{
    //key와 일치하는 국가명의 나라를 제외하고 medallist를 재배열
    //filter
    console.log(e.key);
    const deletedList = medalList.filter((list)=>{
      if(!list.country === key){
        return list;
      }
    })
    return deletedList;
  }

  return (
    <>
      <form onSubmit={medalListSubmitHandler}>
        <label htmlFor="country">국가명</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={countryInputChangeHandler}
        />
        <label htmlFor="gold">금메달</label>
        <input
          type="number"
          id="gold"
          value={gold}
          onChange={goldInputChangeHandler}
        />
        <label htmlFor="silver">은메달</label>
        <input
          type="number"
          id="silver"
          value={silver}
          onChange={silverInputChangeHandler}
        />
        <label htmlFor="bronze">동메달</label>
        <input
          type="number"
          id="bronze"
          value={bronze}
          onChange={bronzeInputChangeHandler}
        />

        <div>
          <button>국가추가</button>
          <button>업데이트</button>
        </div>
      </form>
      <div>
        <ul>
          {medalList.map((list)=>{
            // console.log(list);
            return <li key={list.country}>
              <p>{list.country}</p>
              <p>{list.gold}</p>
              <p>{list.silver}</p>
              <p>{list.bronze}</p>
              <button onClick={deleteListHandler}>삭제</button>
            </li>
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
