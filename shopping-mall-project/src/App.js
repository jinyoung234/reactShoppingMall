/* eslint-disable-next-line */
import '../src/css/Main.css';
import '../src/css/ErrorPage.css';
import '../src/css/EventPage.css';
import './css/Detail.css'

// Route, Link import
import {Routes, Route} from 'react-router-dom';
// Outlet import
import { Outlet } from 'react-router-dom';
// useState import
import { useState, createContext } from 'react';
// axios import
import axios from 'axios';

// Detail Page import
import DetailPage from './pages/detail';
// NavigationBar import
import NavigationBar from './component/navBar';
// mainPage Component import
import { MainImg, MainLayout } from './pages/main';
// data import
import  data  from './utils/data';

// 상태 관리 위한 context create
export let Context = createContext()

function App() {
  let [shoes, setShoes] = useState(data);
  
  // shoes state modify
  let modifyShoes = (data) => {
    let copy = [...shoes];
    copy.push(data);
    setShoes(copy.flat()); 
  }

  let [loadingState, setLoadingState] = useState(false);

  // 더보기 버튼 누를 시 추가 데이터 가져오기 위한 함수
  let getItem = async () => {
    try {
      if(buttonCount > 3) {
        alert('더 이상 상품 목록이 없습니다.');
      } else {
        let res = await axios.get(`https://codingapple1.github.io/shop/data${buttonCount}.json`);
        modifyShoes(res.data);
      }
    } catch(err) {
      console.log('error');
    }
  }

  // 더보기 버튼 횟수 세기 위한 state
  let[buttonCount, setButtonCount] = useState(2);

  let[stock,setStock] = useState([10,11,12])

  return (
    <div className="App">
      <NavigationBar></NavigationBar>      
      <Routes>
          <Route path="/"
                 element={
                  <>
                    <MainImg></MainImg>
                    <MainLayout shoes={shoes}></MainLayout>
                    <div className='containerRow'>
                      { loadingState === true ? <div>로딩중입니다.</div> : '' }
                      <button 
                        className='mt-4 btn btn-primary'
                        onClick={()=>{
                          setLoadingState(true);
                          setButtonCount(buttonCount+1); 
                          getItem();
                          setLoadingState(false);
                        }}
                      >더보기</button>
                    </div>
                  </>
                 }
          />
          <Route path="/detail/:id" 
                 element={
                 <>
                    <Context.Provider value={{stock, shoes}}>
                      <DetailPage shoes={shoes}></DetailPage>                                      
                    </Context.Provider>
                 </> 
                 }
          />
          <Route 
            path="*" 
            element={ 
              <div className='errorPage'>404 에러 페이지 입니다.</div> 
            } 
          />
          <Route
            path="/event"
            element={
              <div className='event-title'>
                <h1 className='mt-3 mb-3'>오늘의 이벤트</h1>
                <Outlet></Outlet>
              </div>
            }
          >
            <Route path="one" element={<h4>첫 주문 시 양배추즙 서비스</h4>}></Route>
            <Route path="two" element={<h4>생일 기념 쿠폰 받기</h4>}></Route>
          </Route>         
      </Routes>
    </div>
  );
}


export default App;
