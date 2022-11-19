/* esLint-disable */


import { useState } from 'react';
import './App.css';

function App() {

  let [글제목, 변경글제목] = useState(['남자 코트 추천', '아우터 추천', '미니멀 패션']);
  let [modal, setModal] = useState(false);
  let [clickDataNm, setClickDataNm] = useState("");
  let [titleText, setTitleText] = useState([]);
  let [good, setGood] = useState([0,0,0]);
  // goodarr.push({id : index, like : 0});
  
  let titleUp = ()=>{
    let copy = [...good];
    copy.unshift(0);
    setGood(copy);

    if(titleText != ''){
      let titleArr = [...글제목];
      titleArr.unshift(titleText);
      변경글제목(titleArr);
    }else{
      alert('저기요 작성을 하셔야 만들어드리죠 ㅡㅡ');
    }
    
  }
  

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
            <h4 onClick={()=>{setClickDataNm(i); setModal(!modal)}}>{글제목[i]}
              <span onClick={(e)=>{
                  e.stopPropagation();
                  let likePush = [...good];
                  likePush[i] += 1;
                  setGood(likePush);
                }}>👍
              </span>{good[i]}
            </h4>
            <p>2월 15일 발행</p>
            <button className='deleteBtn' onClick={()=>{
              let copy = [...글제목];
              copy.splice(i,1);
              변경글제목(copy);
              copy = [...good];
              copy.splice(i,1);
              setGood(copy);
            }}>삭제</button>
          </div>
          )
        })
      }
      <input  onChange={(e)=>{setTitleText(e.target.value);}}></input>


      <button onClick={titleUp}>타이틀 목록 생성</button>


      {true === modal ? <Modalfn clickDataNm={clickDataNm} background={'yellow'} categoryChage={categoryChage}  글제목={글제목}/> : null}

      
    </div>
  );
}



function Modalfn(props){

 return(
  <>
    <div className='modal' style={{background : 'skyblue'}}>
      <h4>{props.글제목[props.clickDataNm]}</h4>
      <p style={{background : props.background}}>날짜</p>
      <p>상세내용</p>
      <button onClick={props.categoryChage}>글제목 바꾸기 버튼</button>
    </div>
  </>
 );
};

export default App;
