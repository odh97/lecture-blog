/* esLint-disable */


import { useState } from 'react';
import './App.css';

function App() {

  let test = '깃허브 테스트용 텍스트';

  let post = '강남 우동 맛집';
  let [글제목, setState] = useState(['남자 코트 추천', '남자 아우터 추천', '남자 미니멀 패션']);
  let [good, goodchage] = useState(0);


  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      {/* <h4 style={{color:"red", fontSize:"16px"}}>{post}</h4> */}
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
    </div>
  );
}

export default App;
