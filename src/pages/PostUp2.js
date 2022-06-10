import React, {useState} from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { actionCreators as postActions } from "../redux/modules/post";

const Postup2 = (props) => {
    const dispatch = useDispatch();
    const [l_id, setLocation_id] = React.useState("");
  //  const [t_id, setTrip_id] = React.useState("");
   const [moment, setMoment] = React.useState("");
   const [ct, setCost] = React.useState("");

   //  const changeTrip_id = (e) => {
  //    console.log(e.target.value);
  //    setTrip_id(e.target.value);
  //  };

  const changeLocation_id = (e) => {
    console.log(e.target.value);
    setLocation_id(e.target.value);
  };

  const changeMoment = (e) => { // 게시물 본문
    console.log(e.target.value);
    setMoment(e.target.value);
  };

  const changeCost = (e) => { // 항공비를 제외한 경비
   console.log(e.target.value);
   setCost(parseInt(e.target.value, 10));
 };

 const Postup2 = () => { // 본문이 비어있을 경우
    if (moment=== "") {
      window.alert("본문이 비어있습니다.");
      return;
    }
    
    console.log(l_id, moment, ct);
    dispatch(postActions.getPostMomentDB(l_id, moment, ct));
    console.log(localStorage.getItem("id"));
    console.log("등록 성공");
};

return (
    <React.Fragment>
      <Div>
        <h1 align="center"> 여정 작성</h1>
        <P>항공비 제외 경비 <br></br>(숫자로 입력해주세요)</P>
        <Input onChange={changeCost}></Input>
        <P>본문</P>
        <Input2 onChange={changeMoment}></Input2> 

          <Button onClick={Postup2}>등록 하기</Button>
          <Button
          onClick={() => {
          history.push("/PostMain");
        }}
      >
        게시판으로 이동
      </Button>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }} 
        >
          
        </div>
      </Div>
    </React.Fragment>
  );

}

export default Postup2;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 0px auto;
  margin-top: 100px;
  border: 1px solid #b0b0b0;
  border-radius: 20px;
  padding: 70px 50px 70px 50px;
`;

const P = styled.p`
  font-size: 20px;
  color: #fda970;
  margin: 0px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 250px;
  height: 40px;
  margin: 0px 0px 10px 0px;
`;
const Input2 = styled.input`
  width: 500px;
  height: 500px;
  margin: 0px 0px 10px 0px;
`;
const Input3 = styled.input`
  width: 500px;
  height: 40px;
  margin: 0px 0px 10px 0px;
`;

const Button = styled.button`
  width: 500px;
  height: 45px;
  margin: 10px 5px 10px 5px;
  background-color: #ffd0b0;
  border: 0px solid #ffd0b0;
  border-radius: 5px;
`;
