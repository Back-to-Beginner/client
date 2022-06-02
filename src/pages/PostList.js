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

const PostList = props => {
  
  const [dataList, setDataList ] = useState([]);
  // const [cd, setCode] = React.useState("");
  // const [ms, setMassage] = React.useState("");
  // const [{}, setData] = React.useState("");
  // const [time, setTimestamp] = React.useState("");
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  const together = post_list.slice(0, 101);

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
    setDataList(postList);
  }, [ ])

  dispatch(postActions.getOnePostDB());
 

  return (
    <>
      <CommonTable headersName={['글번호', '제목', '등록일', '조회수']}>
        {
          dataList ? dataList.map((item, index) => {
            return (
              <CommonTableRow key={index}>
                <CommonTableColumn>{ item.no }</CommonTableColumn>
                <CommonTableColumn>
                  <Link to={`/postView/${item.no}`}>{ item.title }</Link>
                </CommonTableColumn>
                <CommonTableColumn>{ item.createDate }</CommonTableColumn>
                <CommonTableColumn>{ item.readCount }</CommonTableColumn>
              </CommonTableRow>
            )
          }) : ''
        }
      </CommonTable>
      <div
        style={{
          width: "980px",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          margin: "0px auto",
        }}
      >
        {together.map((p, idx) => {
          const momentId = p.momentId;
          return (
            <div
              style={{
                width: "calc(25% - 44px)",
                marginRight: "44px",
                marginBottom: "56px",
              }}
              onClick={() => {
                history.push(`/detail/${momentId}`);
              }}
            >
              <Post key={p.momentId} {...p} />
            </div>
          );
        })}  
        </div>
    </>
  )
}

export default PostList;
// const PostList = () => {
//   const dispatch = useDispatch();
//   const post_list = useSelector((state) => state.post.list);

//   const together = post_list.slice(0, 101);

//   React.useEffect(() => {
//     window.scrollTo(0, 0);

//     dispatch(postActions.getPostDB());
//   }, []);

//   return (
//     <React.Fragment>
//       <div></div>
//       <h1 style={{ textAlign: "center", fontSize: "38px", marginTop: "50px" }}>
//        사람들의 다양한 여정
//       </h1>

//       <div
//         style={{
//           width: "890px",
//           display: "flex",
//           justifyContent: "flex-end",
//           margin: "0px auto",
//           marginBottom: "30px",
//         }}
//       ></div>



      
//     </React.Fragment>
//   );
// };

// export default PostList;
