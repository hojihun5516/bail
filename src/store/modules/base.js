import { handleActions, createAction } from "redux-actions";
import produce from "immer";

const SET_HEADER_VISIBILITY = "base/SET_HEADER_VISIBILITY"; // 헤더 렌더링 여부 설정

export const setHeaderVisibility = createAction(SET_HEADER_VISIBILITY); // visible

const initialState = {
  header: {
    visible: true
  }
};

export default handleActions(
  {
    [SET_HEADER_VISIBILITY]: (state, action) =>
      produce(state, draft => {
        draft.header.visible = action.payload;
        console.log(action.payload);
      })
  },
  initialState
);
