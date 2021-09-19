import config from '../config';
import store from '../store';
// import { signOutAction } from '../store/actions';

const API_URL = config.api.url;
let accessToken: string = '';

const getHeaders = (
  headers: Map<string, string> | {} = {},
  isFormData: boolean
): Headers => {
  const allHeaders = new Headers();
  allHeaders.append('Accept', 'application/json');
  if (!isFormData) {
    // we don't need to set `Content-Type` manually if we use form-data
    allHeaders.append('Content-Type', 'application/json');
  }
  allHeaders.append('token', accessToken);
  Object.entries(headers).forEach(([key, value]) =>
    allHeaders.append(key, value)
  );

  if (!accessToken) {
    accessToken = store.getState().auth.user.accessToken;
  }
  allHeaders.append('Authorization', `Bearer ${accessToken}`);

  return allHeaders;
};

interface IFetchAsyncParams {
  headers?: Map<string, string>;
  method: string;
  body?: object;
}

interface IFetchParams {
  headers: Headers;
  method: string;
  body?: any;
}

const fetchAsync = async (
  url: string,
  { method = 'GET', body, headers }: IFetchAsyncParams
) => {
  // await response of fetch call
  const params: IFetchParams = {
    headers: new Headers(),
    method: '',
  };

  const isFormData: boolean = body instanceof FormData;

  params.headers = getHeaders(headers, isFormData);
  params.method = method;

  if (body && method !== 'GET' && method !== 'HEAD') {
    if (isFormData) {
      params.body = body;
    } else {
      params.body = JSON.stringify(body);
    }
  }
  let response: Response;
  try {
    response = await fetch(url, params);
  } catch (e) {
    // eslint-disable-next-line
    throw {
      error: 'Something went wrong',
      message: [],
    };
  }

  if (response && (response.status === 401 || response.status === 403)) {
    // store.dispatch(signOutAction());
    accessToken = '';
  }

  // only proceed once promise is resolved
  const result: { data: any; statusCode: number } = {
    data: null,
    statusCode: response.status,
  };

  if (response.ok) {
    if (response.headers.get('content-type')?.includes('pdf')) {
      result.data = await response.blob();
    } else {
      try {
        result.data = await response.json();
      } catch (e) {
        result.data = {};
      }
    }
  } else {
    throw await response.json();
  }
  return result;
};

export const setAuthToken = (token: string) => {
  accessToken = token;
};

export const resetAuthToken = () => {
  accessToken = '';
};

export const appendToFd = (
  fd: FormData,
  obj: any,
  name?: string,
  isUriEncode: boolean = false
): void => {
  if (name && obj instanceof Date) {
    fd.append(name, obj.toJSON());
  } else if (obj && typeof obj === 'object') {
    Object.keys(obj).forEach((k) => {
      appendToFd(fd, obj[k], name ? `${name}[${k}]` : k, isUriEncode);
    });
  } else if (name && obj !== null && obj !== undefined) {
    fd.append(name, isUriEncode ? encodeURIComponent(obj) : obj);
  }
};

export const parseQuery = (query?: object | string) => {
  let queryString = '';

  if (query && typeof query === 'string') {
    return `?${query}`;
  }

  if (query && typeof query === 'object' && Object.keys(query).length) {
    const fd = new FormData();
    appendToFd(fd, query, undefined, true);
    return (
      '?' +
      [...(fd.entries() as any)]
        .filter(([k, v]) => v !== '')
        .map(([k, v]) => `${k}=${v}`)
        .join('&')
    );
  }

  return queryString;
};

export const get = async (endpoint: string, query?: object | string) => {
  let url = `${API_URL}/${endpoint}`;

  url += parseQuery(query);

  const data = await fetchAsync(url, { method: 'GET' });

  return data;
};

export const post = async (endpoint: string, data?: object, query?: object) => {
  let url = `${API_URL}/${endpoint}`;
  url += parseQuery(query);
  const res = await fetchAsync(url, { method: 'POST', body: data });

  return res;
};

export const put = async (endpoint: string, data?: object, query?: object) => {
  let url = `${API_URL}/${endpoint}`;
  url += parseQuery(query);
  const res = await fetchAsync(url, { method: 'PUT', body: data });

  return res;
};

export const patch = async (
  endpoint: string,
  data?: object,
  query?: object
) => {
  let url = `${API_URL}/${endpoint}`;
  url += parseQuery(query);
  const res = await fetchAsync(url, { method: 'PATCH', body: data });

  return res;
};

export const deleteRequest = async (endpoint: string, query?: object) => {
  let url = `${API_URL}/${endpoint}`;

  url += parseQuery(query);

  const res = await fetchAsync(url, { method: 'DELETE' });

  return res;
};