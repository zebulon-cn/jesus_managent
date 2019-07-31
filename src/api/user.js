import request from '@/utils/request'

const prefix = '/auth/user/v1/web'

export function login(data) {
  return request({
    url: prefix + '/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: prefix + '/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: prefix + '/logout',
    method: 'post'
  })
}
