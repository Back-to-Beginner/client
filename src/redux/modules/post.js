import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import axios from "axios";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const GET_POST = "GET_POST";

const setPost = createAction(SET_POST, (post_list) => ({ post_list })); //리스트가져오기
const addPost = createAction(ADD_POST, (post) => ({ post }));
const getPost = createAction(GET_POST, (post) => ({ post }));

const initialState = {
  list: [],
  post: [],
};

// const initialPost = {
//   daangnProductId: "0",
//   title: "실내 자전거",
//   img:
//     "https://dnvefa72aowie.cloudfront.net/origin/article/202104/bce02f7c25d41ea2f758c3322de4596b9768b7fc8822ed6ab1a184fd232c50ce.webp?q=82&s=300x300&t=crop",
//   price: "10,000원",
//   region: "경기도 용인시 수지구 죽전동",
//   like: "관심:3",
//   chat: "채팅:5",
// };
// getPostDB, (text = "")

// 게시물 등록

const getPostTripDB = (title, bd, ed, fc) => {
  
  return function (dispatch, getState, { history }) {
    
    let post_list = [];
    // if (text === "") {
      axios({
        method: "POST",
        url: "/api/v1/trips",
        data: {
          userId : sessionStorage.getItem("id"),
          title : title,
          beginDate : bd,
          endDate : ed,
          fullCost : fc,
          
          
        }
      })
      .then((docs) => {
        // docs=api를 가져온 값
        console.log(docs.data);
        const post_list = docs.data;
        // console.log(post_list);
        history.push("/postList");
        window.alert("게시물 등록 완료");

        dispatch(setPost(post_list));
      })
      .catch((err) => {
        window.alert("게시물 등록 실패", err);
      });
    // } else {
    //    axios({
    //      method: "POST",
    //      // url: `http://54.180.112.53:8080/api/region/${text}`,
    //    }).then((docs) => {
    //      // docs=api를 가져온 값
    //      // console.log(docs.data);
    //      const post_list = docs.data;
    //      // console.log(post_list);
    //      dispatch(setPost(post_list));
    //    });
    // // }
  };
};

// 게시물 보여주기
const getOnePostDB = (momentId) => { // 게시판에 게시물 목록 보여주기, PostList에 작성
  return function (dispatch, getState, { history }) {
    axios({
      method: "get",
      url: "/api/v1/trips/${momentId}",
      
    }).then((docs) => {
      const onePost = docs.data;
      dispatch(getPost(onePost));
    });
  };
};

// 게시글 본문
const getPostMomentDB = (l_id, t_id, moment, ct) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: "/api/v1/moments",
      data: {
        location_id : l_id, //0
        trip_id : t_id, //0
        content : moment,
        Cost : ct, // 0
      }
    })
    .then((docs) => {
      // docs=api를 가져온 값
      // console.log(docs.data);
      const post_list = docs.data;
      // console.log(post_list);
      window.alert("본문 등록 완료");

      dispatch(setPost(post_list));
    })
    .catch((err) => {
      window.alert("본문 등록 실패", err);
    });
  };
};

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list; //콘솔 찍어보기, 스테이트의 복제본
      }),
    // [ADD_POST]: (state, action) => produce(state, (draft) => {}),
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.post = action.payload.post;
      }),
  },
  initialState
);

const actionCreators = {
  setPost,
  addPost,
  getPostTripDB,
  getOnePostDB,
  getPostMomentDB,
};

export { actionCreators };
