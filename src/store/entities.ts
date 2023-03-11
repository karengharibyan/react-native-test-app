export interface LoadableData<T = undefined> {
  data: T;
  status: 'idle' | 'loading' | 'failed';
  error?: unknown;
}
