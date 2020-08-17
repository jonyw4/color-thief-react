import { ReducerState } from '../types';

const initialReducerState: ReducerState<any> = {
  loading: true,
  data: undefined,
  error: undefined
};

export default initialReducerState;
