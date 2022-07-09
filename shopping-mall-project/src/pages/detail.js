// useParams import
import { useParams } from "react-router-dom";
import Btn from "../component/button";
import {useEffect, useState} from 'react';

// css import
import '../css/Detail.css';

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


  return (
    <div className="container">
      {/* 처음엔 컴포넌트가 있다가 deleteAlert가 실행 하면 2초 후 사라짐 */}
      {
        alertState == true ? <Alert/> : null
      }
      <div className="row containerColumn">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        {
            isNaN(quantity) === true ? 
            <div className="alert alert-warning col-md-6 containerRow mb-4">다시 입력해주세요.</div> : null
        }
        <div className="col-md-6 containerRow">
          <span>수량</span>
          <input onChange={(e) => {
             setQuantity(e.target.value);
             console.log(quantity);
          }} 
                 style={{marginLeft:'10px'}} 
                 className="col-1" 
                 type="text"
          />
        </div>
        <div className="col-md-6 containerColumn">
          <h4 className="pt-5"></h4>
          <p>{findShoes.title}</p>
          <p>{findShoes.content}</p>
          <p>{findShoes.price}</p>
          <Btn bg="#dc3545">주문하기</Btn>
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

export default DetailPage;
