import { useState } from "react";

const App = () => {
  const [medalList, setMedalList] = useState([]);
  const [medalData, setMedalData] = useState({
    country: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });

  //인풋값 적용
  const medalInputHandler = (e) => {
    const { name, value } = e.target;
    setMedalData((prev) => {
      return { ...prev, [name]: name === "country" ? value : +value };
    });
  };

  //인풋창 초기화
  const inputReset = () => {
    setMedalData({
      country: "",
      gold: 0,
      silver: 0,
      bronze: 0,
    });
  };
  //서브밋 핸들러
  const submitHandler = (e) => {
    //새로고침 막기
    e.preventDefault();
    //유효성검사 - 공백
    if (!medalData.country.trim()) {
      alert("국가명에는 공백을 입력할 수 없습니다.");
      return;
    }

    //유효성 검사 - 이미 존재하는 국가명
    const countryOfMedalList = medalList.map((medal) => {
      return medal.country;
    });
    console.log('countryOfMedalList', countryOfMedalList)
    if (countryOfMedalList.includes(medalData.country)) {
      alert("이미 존재하는 국가명입니다. 업데이트를 입력해주세요");
      return;
    }

    // 입력된 데이터를 새로운 객체로
    const newMedalList = {
      country: medalData.country.trim(),
      gold: medalData.gold,
      silver: medalData.silver,
      bronze: medalData.bronze,
    };
    //기존리스트에 새 리슽트 추가
    setMedalList((prev)=>{
      const sortedList = [...prev, newMedalList].sort((a,b) =>{
        return b.gold - a.gold;
      })
      return sortedList;
    });
    console.log(medalList);
    //인풋창 초기화
    inputReset();
  };

  const deleteHandler = (country) => {
    //medallist에서 country와 일치하는 나라만 제외하고 다시 리스트 만들기...
    const newMedalList = medalList.filter((medal) => {
      return medal.country !== country;
    });
    setMedalList(newMedalList);
    // alert(`삭제 완료`);
  };

  //메달리스트 업데이트
  const updateHandler = () => {
    // 메달리스트안에 현재 나라명이 있는지 확인하고,
    // 메달리스트를 다시 map
    const countryOfMedalList = medalList.map((medal) => {
      return medal.country;
    });

    if (!countryOfMedalList.includes(medalData.country)) {
      alert(
        `이미 존재하는 국가만 업데이트 할 수 있습니다. 국가명을 확인해 주세요.`
      );
      return;
    }

    const newMedalList = medalList.map((medal) => {
      return medal.country === medalData.country ? medalData : medal;
    });
    alert(`${medalData.country}의 메달리스트가 업데이트 됩니다.`);
    setMedalList([...newMedalList].sort((a,b)=>{
      return b.gold - a.gold
    }));
    inputReset();
  };





  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="country">국가명</label>
        <input
          type="text"
          name="country"
          id="country"
          placeholder="국가명을 입력해주세요"
          value={medalData.country}
          onChange={medalInputHandler}
        />
        <label htmlFor="gold">금메달</label>
        <input
          type="number"
          name="gold"
          id="gold"
          placeholder="0"
          value={medalData.gold}
          onChange={medalInputHandler}
        />
        <label htmlFor="silver">은메달</label>
        <input
          type="number"
          name="silver"
          id="silver"
          placeholder="0"
          value={medalData.silver}
          onChange={medalInputHandler}
        />
        <label htmlFor="bronze">동메달</label>
        <input
          type="number"
          name="bronze"
          id="bronze"
          placeholder="0"
          value={medalData.bronze}
          onChange={medalInputHandler}
        />
        <button type="submit">추가하기</button>
        <button type="button" onClick={updateHandler}>
          업데이트
        </button>
      </form>
      <div>
        <ul>
          
          {medalList.map((medal) => {
            return (
              
              <li key={medal.country}>
                <p>{medal.country}</p>
                <p>{medal.gold}</p>
                <p>{medal.silver}</p>
                <p>{medal.bronze}</p>
                <button
                  type="button"
                  onClick={() => {
                    deleteHandler(medal.country);
                  }}
                >
                  삭제
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default App;
