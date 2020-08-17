import { ReducerState, ReducerAction } from 'types';
import initialReducerState from './initialReducerState';

export default function reducer<State extends ReducerState<any>>(
  state: State,
  action: ReducerAction
): State {
  switch (action.type) {
    case 'start':
      return <State>initialReducerState;
    case 'resolve':
      return { ...state, data: action.payload, loading: false };
    case 'reject':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
