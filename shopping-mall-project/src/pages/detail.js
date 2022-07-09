// useParams import
import { useParams } from "react-router-dom";
import Btn from "../component/button";
import { useEffect, useState, useContext } from 'react';
import { Nav } from "react-bootstrap";

// css import
import '../css/Detail.css';
// context import
import { Context } from "./../App";

// 상세 페이지에 들어갈 컴포넌트
function DetailPage (props) {
  // 사용자가 상세페이지에서 입력한 id를 변수에 저장
  let {id} = useParams();
  let findShoes = props.shoes.find((x) => x.id == id)

  // alert 창이 껏다 켜지게 하기 위해 state 설정
  let [alertState,setAlertState] = useState(true);

  // 2초 후 alert 삭제하는 deleteAlert
  useEffect(()=> {setTimeout(()=> {
    setAlertState(false);
  }, 2000)},[])

  // 수량 확인 state
  let [quantity, setQuantity] = useState(0);

  // tab state
  let [tabState, setTabState] = useState(0);

  return (
    <div className="container">
      {/* 처음엔 컴포넌트가 있다가 2초 후 사라짐 */}
      {
        alertState == true ? <Alert/> : null
      }
      <div className="row containerRowStart">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 containerColumnCenter">
          {
              isNaN(quantity) === true ? 
              <div style={{paddingBottom:'2px'}} className="alert alert-warning col-5"><p style={{textAlign:'center'}}>다시 입력해주세요.</p></div> : null
          }
          <h4>{findShoes.title}</h4>
          <span>수량</span>
          <input onChange={(e) => {
             setQuantity(e.target.value);
          }} 
                 style={{marginLeft:'4px'}} 
                 className="col-1" 
                 type="text"
          />
          <p>{findShoes.content}</p>
          <p>{findShoes.price}</p>
          <Btn bg="#dc3545">주문하기</Btn>
        </div>
        <div className="col-md-12 containerColumn">
          <TabNav tabState={tabState} setTabState={setTabState}/>
          <TabContent tabState={tabState}/>
        </div>
      </div>
    </div>     
  )
}

function Alert() {
  return (
    <div className="mt-4 alert alert-warning">
      <p style={{paddingTop: '15px', textAlign:'center'}}>2초 이내 구매 시 할인</p>
    </div>
  )
}

function TabNav(props) {
  return (
    <Nav style={{width:'100%'}} variant="tabs">
      <Nav.Item onClick={()=>{props.setTabState(0)}}>
        <Nav.Link eventKey="a">1</Nav.Link>
      </Nav.Item>
      <Nav.Item onClick={()=>{props.setTabState(1)}}>
        <Nav.Link eventKey="b">2</Nav.Link>
      </Nav.Item>
      <Nav.Item onClick={()=>{props.setTabState(2)}}>
        <Nav.Link eventKey="c">3</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

function TabContent(props) {
  let {stock, shoes} =  useContext(Context);
  let [fade, setFade] = useState('');

  useEffect(() => {
    setTimeout(() => {setFade('end')}, 10);
    
    return () => {
      setFade('')
    }
  }, [props.tabState])

  return (
    <div className={`start ` + fade}>
      {[<div>{shoes[0].title}</div>, <div>2</div>, <div>3</div>][props.tabState]}
    </div>
  )
}

export default DetailPage;
