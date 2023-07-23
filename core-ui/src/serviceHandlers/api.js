// import axios from "axios";
// import FormData from "form-data";
// import querystring from "querystring";

// export function postFormData(url, params, headers) {
//   const formData = new FormData();
//   for (const key in params) {
//     formData.append(key, params[key]);
//   }
//   const config = {
//     method: "post",
//     url: url,
//     headers: headers,
//     data: formData,
//   };
//   return axios(config)
//     .then((res) => {
//       if (res.status === 200) {
//         return res.data;
//       }
//     })
//     .catch((error) => {
//       console.error("POST API ERR: ", error);
//       return {
//         error: true,
//         errMsg: error.toString(),
//         errorResp: error.response.data,
//       };
//     });
// }

// export function postJsonData(url, params, headers) {
//   const config = {
//     method: "post",
//     url: url,
//     headers: { "Content-Type": "application/json", ...headers },
//     data: JSON.stringify(params),
//   };
//   return axios(config)
//     .then((res) => {
//       if (res.status === 200) {
//         return res.data;
//       }
//     })
//     .catch((error) => {
//       console.error("POST API ERR: ", error);
//       return {
//         error: true,
//         errMsg: error.toString(),
//         errorResp: error.response.data,
//       };
//     });
// }

// export function postFormDataSearchParams(url, params) {
//   const formData = new URLSearchParams(params);
//   const config = {
//     method: "POST",
//     headers: {
//       "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//     },
//     body: formData,
//   };
//   return fetch(url, config).then((res) => res.json());
// }

// export function getData(url, options, headers) {
//   const axiosConf = {
//     headers: headers,
//   };
//   const qs = querystring.stringify(options);

//   if (qs) {
//     url += "&" + qs;
//   }

//   return axios
//     .get(url, axiosConf)
//     .then((res) => {
//       if (res.status === 200) {
//         return res.data;
//       }
//     })
//     .catch((error) => {
//       console.error("API ERR: ", new Date().toString(), error.code, error.toString(), url);
//       return { error: true, errMsg: error.toString(), errorResp: error };
//     });
// }

// export function postDataWithPathParams(url, options, headers, pathParams) {
//   let path = "";
//   pathParams.forEach((item) => {
//     path += item + "/";
//   });
//   url += path;
//   const config = {
//     method: "post",
//     url: url,
//     headers: { ...headers, "Content-Type": "application/json" },
//     data: JSON.stringify(options),
//   };

//   return axios(config)
//     .then((res) => {
//       if (res.status === 200) {
//         return res.data;
//       }
//     })
//     .catch((error) => {
//       console.error("POST API ERR: ", error);
//       return {
//         error: true,
//         errMsg: error.toString(),
//         errorResp: error.response.data,
//       };
//     });
// }