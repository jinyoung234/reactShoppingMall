/* eslint-disable-next-line */
import './App.css';
// nav bar import
import {Navbar, Nav} from 'react-bootstrap';
// main layout import
import {Container, Row, Col} from 'react-bootstrap';
// shoes data import
import data from './data';
// useState import
import {useState} from 'react';
// Route, Link import
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/"
                 element={
                  <>
                    <NavigationBar></NavigationBar>
                    <MainImg></MainImg>
                    <MainLayout></MainLayout>
                  </>
                 }
          />
          <Route path="/detail" 
                 element={
                 <>
                    <NavigationBar></NavigationBar>
                    <DetailPage></DetailPage>                
                 </> 
                 }
          />
      </Routes>

    </div>
  );
}

// nav bar
function NavigationBar() {
  return (
    <>
      {/* nav bar */}
      <Navbar style={{padding:'20px 40px'}} bg="dark" variant="dark">
          <Navbar.Brand href="#home">JMall</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="nav-text" to="/">Home</Link>
            </Nav.Link>
            <Nav.Link className="nav-text">
              <Link className="nav-text" to="/detail">Detail</Link>
            </Nav.Link>
          </Nav>
      </Navbar>
      {/* end nav bar */}
    </>     
  )
}

// main img
function MainImg () {
  return (
    <>
      {/* main img */}
      <section className="main-bg">
        <img/>
      </section>
      {/* main img */}      
    </>
  )
}

// mainLayout (Layout의 부모 컴포넌트)
function MainLayout () {
  let [layoutImgState, setlayoutImgState] = useState(["https://codingapple1.github.io/shop/shoes1.jpg", "https://codingapple1.github.io/shop/shoes2.jpg", "https://codingapple1.github.io/shop/shoes3.jpg"]);
  return (
    <>
      {/* main layout */}
      <Container>
        <Row>
          <Layout data={data} layoutImgState={layoutImgState}></Layout>
        </Row>
      </Container>      
      {/* end main layout */}
    </>
  )
}

// MainLayout의 자식 컴포넌트(map 함수를 통해 실질적으로 화면에 보여지는 layout 구성)
function Layout (props) {
  return (
      props.data.map((a, index) => {
      return (
        <>
          <Col 
              sm={4}
              className='main-layout'
          >
              <img
                  src={props.layoutImgState[index]}
                  style={{width:'80%'}}
              />
              <p>{props.data[index].title}</p>
              <p>{props.data[index].content}</p>
              <p>{props.data[index].price}</p>
          </Col>
        </> 
      )
    })
  )
}

// 상세 페이지에 들어갈 컴포넌트
function DetailPage () {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div>     
  )
}

export default App;
