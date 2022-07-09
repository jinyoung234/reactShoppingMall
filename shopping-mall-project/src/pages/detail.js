// useParams import
import { useParams } from "react-router-dom";
import Btn from "../component/button";

// 상세 페이지에 들어갈 컴포넌트
function DetailPage (props) {
    // 사용자가 상세페이지에서 입력한 id를 변수에 저장
    let {id} = useParams();
    let findShoes = props.shoes.find((x) => x.id == id)
      return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6">
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

export default DetailPage;
