/* esLint-disable */


import { useState } from 'react';
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 변경글제목] = useState(['남자 코트 추천', '아우터 추천', '미니멀 패션']);
  let [good, goodchage] = useState(0);

  function categoryChage(){
      let copy = [...글제목];
      copy[0] = '여자 코트 추천';
      변경글제목(copy);
  }


  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      {/* <h4 style={{color:"red", fontSize:"16px"}}>{post}</h4> */}
      <button className='chage-box' onClick={categoryChage}>카테고리 버튼</button>
      <button className='chage-box' onClick={
        ()=>{
          let copySt = [...글제목];
          copySt.sort(function(a, b){
            return a > b ? 1 : -1;
          });
          변경글제목(copySt);
        }
      }>정렬</button>
      <div className='list'>
        <h4>{글제목[0]}<span onClick={()=>{goodchage(good+1)}}>👍</span> {good} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 15일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>2월 12일 발행</p>
      </div>

      <Modalfn/>
      
    </div>
  );
}

function Modalfn(){
 return(
  <>
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  </>
 );
};

export default App;
