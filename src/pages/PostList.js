import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Post from "../components/Post";
import SelectButton from "../components/SelectButton";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configureStore";
import { actionCreators as postActions } from "../redux/modules/post";
import CommonTable from '../components/CommonTable';
import CommonTableColumn from '../components/CommonTableColumn';
import CommonTableRow from '../components/CommonTableRow';
import { postList } from '../Data';
import axios from "axios";

const PostList = props => {
  
  const [dataList, setDataList ] = useState([]);
  // const [cd, setCode] = React.useState("");
  // const [ms, setMassage] = React.useState("");
  // const [{}, setData] = React.useState("");
  // const [time, setTimestamp] = React.useState("");
  const dispatch = useDispatch();
  // const post_list = useSelector((state) => state.post.list);
  

  // const changeCode = (e) => {
  //   console.log(e.target.value);
  //   setCode(e.target.value);
  // };

  // const changeMassage = (e) => {
  //   console.log(e.target.value);
  //   setMassage(e.target.value);
  // };

  // const changeData = (e) => {
  //   console.log(e.target.value);
  //   setData(e.target.value);
  // };

  // const changeTimestamp = (e) => {
  //   console.log(e.target.value);
  //   setTimestamp(e.target.value);
  // };

  useEffect(() => {
    window.scrollTo(0,0);

      axios.get(`/api/v1/trips`)
          .then(res => {
              console.log(res.data);
              setDataList(res.data.data);
          })
  }, [])

  dispatch(postActions.getAllPostDB());
 

  return (
    <>
      <CommonTable headersName={['글번호', '제목', '경비', '작성자']}>
        {
          dataList ? dataList.map((item, index) => {
            return (
              <CommonTableRow key={index}>
                <CommonTableColumn>{ item.id }</CommonTableColumn>
                <CommonTableColumn>
                  <Link to={`/postView/${item.id}`}>{ item.title }</Link>
                </CommonTableColumn>
                {/*<CommonTableColumn>{ item.region }</CommonTableColumn>*/}
                <CommonTableColumn>{ item.full_cost }</CommonTableColumn>
                <CommonTableColumn>{ item.user_id }</CommonTableColumn>
              </CommonTableRow>
            )
          }) : ''
        }
      </CommonTable>
      </>    
 ) 
} 




export default PostList;
