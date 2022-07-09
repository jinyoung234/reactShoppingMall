/* eslint-disable-next-line */
import '../src/css/Main.css';
import '../src/css/ErrorPage.css';
import '../src/css/EventPage.css';

// Route, Link import
import {Routes, Route} from 'react-router-dom';
// Outlet import
import { Outlet } from 'react-router-dom';
// useState import
import { useState } from 'react';

// Detail Page import
import DetailPage from './pages/detail';
// NavigationBar import
import NavigationBar from './component/navBar';
// mainPage Component import
import { MainImg, MainLayout } from './pages/main';
// data import
import  data  from './utils/data';


function App() {
  let [shoes] = useState(data);
  return (
    <div className="App">
      <NavigationBar></NavigationBar>      
      <Routes>
          <Route path="/"
                 element={
                  <>
                    <MainImg></MainImg>
                    <MainLayout shoes={shoes}></MainLayout>
                  </>
                 }
          />
          <Route path="/detail/:id" 
                 element={
                 <>
                    <DetailPage shoes={shoes}></DetailPage>                
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
