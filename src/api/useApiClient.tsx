import { useState }  from 'react';
import { ApiClient } from './ApiClient';

export function useApiClient() {
  const [apiClient] = useState<ApiClient>(new ApiClient());
  return apiClient;
}
