import { RequestParams } from '@custom-types/requestParams';

export const fetchData = async <T>({
  url,
  method = 'GET',
  body,
}: RequestParams): Promise<T> => {
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  };

  const response = await fetch(url, options);
  return await response.json();
};
