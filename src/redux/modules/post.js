import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";

import axios from "axios";
import text from "../../elements/Text";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const GET_POST = "GET_POST";

const setPost = createAction(SET_POST, (post_list) => ({post_list})); //리스트가져오기
const addPost = createAction(ADD_POST, (post) => ({post}));
const getPost = createAction(GET_POST, (post) => ({post}));

const initialState = {
    list: [],
    post: [],
};


// 게시물 등록

const postTripDB = (title, region, beginDate, endDate, fullCost) => {

    return function (dispatch, getState, {history}) {
        let post_list = [];
        // if (text === "") {
        axios({
                method: "POST",
                url: "/api/v1/trips",

                data: {
                    // user_id: 8,
                    user_id: parseInt(localStorage.getItem("id")), //session "id"
                    title: title,
                    region: region,
                    begin_date: beginDate,
                    end_date: endDate,
                    full_cost: parseInt(fullCost),
                    tag_name_list: []
                },
            }
        ).then((res) => {
                // docs=api를 가져온 값
                localStorage.setItem("trip_id", res.data.data.id)
                console.log(localStorage.getItem(res.data.data.id));
                history.push("/PostUp2");
                window.alert("게시물 등록 완료");
            }
        ).catch((err) => {
            console.log(err);
            window.alert("게시물 등록 실패"+ err);
        });

    };
};

// 게시물 보여주기
const getAllPostDB = () => { // 게시판에 게시물 목록 보여주기, PostList에 작성
    return function (dispatch, getState, {history}) {
        axios({
            method: "get",
            url: `/api/v1/posts/`,

        }).then((res) => {
            const onePost = res.data;
            dispatch(getPost(onePost));
        });
    };
};

// 게시글 본문
const postMomentDB = (moment, ct) => {
    return function () {
        axios({
                method: "post",
                url: "/api/v1/moments",
                data: {
                    location_id: parseInt('1'), //0
                    trip_id: parseInt(localStorage.getItem("trip_id")), //0
                    content: moment,
                    cost: parseInt(ct), // 0
                    sequence: parseInt(sessionStorage.getItem("momentSequence"))
                }
            }
        ).then((res) => {
                // docs=api를 가져온 값
                console.log(res);
                // console.log(post_list);
                // history.push("/PostMain");
                window.alert("본문 등록 완료");

                // dispatch(setPost(post_list));
            }
        ).catch((err) => {
            window.alert(err.data);
            window.alert("본문 등록 실패" + err);
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
    postTripDB,
    getAllPostDB,
    postMomentDB,
};

export {actionCreators};
