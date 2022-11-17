/* esLint-disable */


import { useState } from 'react';
import './App.css';

function App() {

  let [글제목, 변경글제목] = useState(['남자 코트 추천', '아우터 추천', '미니멀 패션']);
  let [modal, setModal] = useState(false);

  let data = [];
  글제목.map(function(event, index){
    data.push({id : index, like : 0});
  });
  let [good, goodChage] = useState(data);


  function categoryChage(){
      let copy = [...글제목];
      copy[0] = '여자 코트 추천';
      변경글제목(copy);
  }

  let clickToggle = ()=>{
    let copySt = [...글제목];
    copySt.sort(function(a, b){
      return a > b ? 1 : -1;
    });
    변경글제목(copySt);
  }


  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      {/* <h4 style={{color:"red", fontSize:"16px"}}>{post}</h4> */}
      <button className='chage-box' onClick={categoryChage}>카테고리 버튼</button>
      <button className='chage-box' onClick={clickToggle}>정렬</button>
      {/* <div className='list'>
        <h4>{글제목[0]}<span onClick={()=>{goodChage(good+1)}}>👍</span> {good} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 15일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{ setModal(!modal)}}>{글제목[2]}</h4>
        <p>2월 12일 발행</p>
      </div> */}

      
      {
        글제목.map(function(e, i){
          return(
          <div className='list' key={i}>
            <h4 onClick={()=>{ setModal(!modal)}}>{글제목[i]}<span onClick={()=>{

              let likePush = [...good];
              likePush[i].like += 1;
              goodChage(likePush);

              }}>👍</span>{good[i].like}</h4>
            <p>2월 15일 발행</p>
          </div>
          )
        })
      }
      {true === modal ? <Modalfn background={'yellow'} 글제목={글제목}/> : null}

      
    </div>
  );
}



function Modalfn(props){

  let [title, setTitle] = useState(props.글제목);
  console.log(title);

  function categoryChage(){
    let copy = [...title];
    copy[0] = '여자 코트 추천';
    setTitle(copy);
  }

 return(
  <>
    <div className='modal' style={{background : 'skyblue'}}>
      <h4>{title[0]}</h4>
      <p style={{background : props.background}}>날짜</p>
      <p>상세내용</p>
      <button onClick={categoryChage}>글제목 바꾸기 버튼</button>
    </div>
  </>
 );
};

export default App;
