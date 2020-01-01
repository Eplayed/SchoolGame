import { ajax, request_json } from "@/utils/http";

export const getUserBaseInfo = () => {
  return ajax({
    url: `/api/userInfo/baseInfo`,
    method: "get",
  });
};

export const getUserCommentList = (data) => {
  return ajax({
    url: `/api/u/comment/list`,
    data,
    method: "get",
  });
};

export const getUserDiscussList = (data) => {
  return ajax({
    url: `/api/u/discuss/list`,
    data,
    method: "get",
  });
};

export const getUserHistoryList = (data) => {
  return ajax({
    url: `/api/u/view/history/list`,
    data,
    method: "get",
  });
};

export const getUserFavoriteList = (data?) => {
  return ajax({
    url: `/api/u/favorite/list`,
    data,
    method: "get",
  });
};

export const getUserFollowList = (data?) => {
  return ajax({
    url: `/api/u/follow/list`,
    data,
    method: "get",
  });
};

export const getUserJoinList = (data?) => {
  return ajax({
    url: `/api/u/join/list`,
    data,
    method: "get",
  });
};