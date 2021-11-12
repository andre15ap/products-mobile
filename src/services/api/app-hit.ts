import { API_COUNT } from '../../config/service';

import { apiCount, api } from './index';

async function postAppHit(value: number) {
  await api.post('/app-hits', {
    value,
    namespace: API_COUNT.NAMESPACE,
    key: API_COUNT.KEY,
  });
}

export async function appHit(): Promise<void> {
  try {
    const response = await apiCount.get(
      `/${API_COUNT.NAMESPACE}/${API_COUNT.KEY}`,
    );
    const { data } = response;
    await postAppHit(data.value);
  } catch {
    return;
  }
}
