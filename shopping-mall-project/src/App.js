/* eslint-disable-next-line */
import '../src/css/Main.css';
import '../src/css/ErrorPage.css';
import '../src/css/EventPage.css';

// Route, Link import
import {Routes, Route} from 'react-router-dom';
// Detail Page import
import DetailPage from './pages/detail';
// NavigationBar import
import NavigationBar from './component/navBar';
// mainPage Component import
import { MainImg, MainLayout } from './pages/main';
// Outlet import
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>      
      <Routes>
          <Route path="/"
                 element={
                  <>
                    <MainImg></MainImg>
                    <MainLayout></MainLayout>
                  </>
                 }
          />
          <Route path="/detail" 
                 element={
                 <>
                    <DetailPage></DetailPage>                
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
          <Route path="/event/one" element={<h4>첫 주문 시 양배추즙 서비스</h4>}></Route>
          <Route path="/event/two" element={<h4>생일 기념 쿠폰 받기</h4>}></Route>
        </Route>          
      </Routes>
    </div>
  );
}

export default App;
