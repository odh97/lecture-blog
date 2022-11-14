import { useState } from 'react';
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, b] = useState(['남자 코트 추천', '남자 아우터 추천', '남자 미니멀 패션']);

  let num = [1, 2];

  let [a, c] = [1, 2];

  // let a = num[0];
  // let c = num[1];

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      {/* <h4 style={{color:"red", fontSize:"16px"}}>{post}</h4> */}
      <div className='list'>
        <h4>{글제목[0]}</h4>
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
