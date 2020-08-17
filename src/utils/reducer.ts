import { ReducerState, ReducerAction } from 'types';
import initialReducerState from './initialReducerState';

export default function reducer<State extends ReducerState<any>>(
  state: State,
  action: ReducerAction
): State {
  const responses: { [key in ReducerAction['type']]: () => State } = {
    start: () => <State>initialReducerState,
    resolve: () => ({ ...state, data: action.payload, loading: false }),
    reject: () => ({ ...state, error: action.payload, loading: false })
  };

  return responses[action.type]();
}
