{
  url: '/user',
  baseURL: 'https://some-domain.com/api/',
  method: 'get',
  transformRequest: [function (data) {
    return data;
  }],
  transformResponse: [function (data) {
    return data;
  }],
  headers: {'X-Requested-With': 'XMLHttpRequest'},
/*  params: {*/
/*    ID: 12345*/
/*  },*/
/*  paramsSerializer: function(params) {*/
/*    return Qs.stringify(params, {arrayFormat: 'brackets'})*/
/*  },*/
/*  data: {*/
/*    firstName: 'Fred'*/
/*  },*/
  timeout: 1000,
  withCredentials: false,
/*  auth: {*/
/*    username: 'janedoe',*/
/*    password: 's00pers3cret'*/
/*  }*/
  responseType: 'json', // default
  xsrfCookieName: 'XSRF-TOKEN', // default
  xsrfHeaderName: 'X-XSRF-TOKEN' // default
}