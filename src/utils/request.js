import axios from 'axios'

export function request(params) {
  const host = import.meta.env.VITE_API_HOST

  return axios.request({
    ...params,
    url: `${host || ''}${params.url}`
  })
}

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.headers['content-type'] !== 'application/json') {
      return response
    }
    const data = response.data
    if (data.code !== '0000') {
      return Promise.reject(data.msg || '网络错误')
    }
    return data.appdata
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)
