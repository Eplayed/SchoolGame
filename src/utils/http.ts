import Taro from "@tarojs/taro";
import { getStore } from "./utils";
import { baseUrl } from "../config/baseUrl";

export { baseUrl };

const interceptor = function (chain) {
  const requestParams = chain.requestParams;
  // const { method, data, url } = requestParams;
  // console.log("开始请求");
  Taro.showLoading({
    title: "请求中...",
  });

  return chain.proceed(requestParams).then((res) => {
    const data = res.data;
    // console.log("结束请求");
    Taro.hideLoading();
    if (data.code === "OK") {
      return data;
    } else {
      Taro.showToast({
        title: data.message,
        icon: "none",
      });
      return data;
    }
  });
};

Taro.addInterceptor(interceptor);

const request = ({ url, data = null, method }) => {
  const token = getStore("userToken");
  return Taro.request({
    url: baseUrl + url,
    data,
    method,
    header: {
      "content-type": "application/x-www-form-urlencoded",
      "Authorization": `Bearer ${token}`,
    },
  });
};
const request_json = ({ url, data = null, method }) => {
  const token = getStore("userToken");
  if (token) {
    return Taro.request({
      url: baseUrl + url,
      data,
      method,
      header: {
        "Authorization": `Bearer ${token}`,
      },
    });
  } else {
    Taro.showToast({
      title: '请登录',
      icon: 'none'
    }).then(() => {
      setTimeout(() => {
        Taro.switchTab({
          url: "/pages/personal/index",
        })
      }, 2000)
    })
    return false
  }

};
const ajax = request

export { ajax, request_json };
