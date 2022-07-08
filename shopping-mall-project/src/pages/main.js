// main layout import
import {Container, Row, Col} from 'react-bootstrap';
// shoes data import
import data from '../utils/data';
// useState import
import {useState} from 'react';
 
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

export {
    MainImg,
    MainLayout,
    Layout
}