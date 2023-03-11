
export interface IAppState {
  status: 'idle' | 'loading' | 'failed';
  error?: unknown;
}
