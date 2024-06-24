import { request } from '@/utils/request'
const baseUrl = import.meta.env.VITE_ZT1026_API
const remoteControlBaseUrl = import.meta.env.VITE_ZT1026_REMOTE_CONTROL_API
import axios from 'axios'
// 获取平台人员信息
export function queryPlatformUser(param) {
  return request({
    method: 'get',
    url: baseUrl + '/platform/queryPlatformUser',
    params: param
  })
}

// 获取所有标签
export function getAllBaseLabel(param) {
  return request({
    method: 'get',
    url: baseUrl + '/platform/getAllBaseLabel',
    params: param
  })
}

// 获取标签
export function getUserLabel(param) {
  return request({
    method: 'get',
    url: baseUrl + '/platform/getUserLabel',
    params: param
  })
}

// 获取画像
export function getUserPortrait(param) {
  return request({
    method: 'get',
    url: baseUrl + '/platform/getUserPortrait',
    params: param
  })
}

// 获取案例简介
export function getCaseImage(param) {
  return request({
    method: 'get',
    url: baseUrl + '/platform/getCaseImage',
    params: param
  })
}

// 获取智能服务
export function getIntelligentServer(param) {
  return request({
    method: 'get',
    url: baseUrl + '/platform/getIntelligentServer',
    params: param
  })
}

// 获取智能服务
export function getIntelligentServer2(param) {
  return request({
    method: 'get',
    url: baseUrl + '/platform/getIntelligentServer',
    params: param
  })
}

// 获取远程控制指令
export function getRemoteControlCommand(data) {
  return request({
    method: 'post',
    url: remoteControlBaseUrl + '/board/control/getCommandParameter',
    data
  })
}

// 结束远程控制指令
export function stopRemoteControlCommand(data, cancel) {
  //如果存在 就中止
  if (cancel && cancel.cancel) cancel.cancel();
  return request({
    method: 'post',
    url: remoteControlBaseUrl + '/board/control/finishCommandParameter',
    data,
    cancelToken: cancel &&
      new axios.CancelToken(function executor(c) {
        cancel.cancel = c;
      })
  })
}