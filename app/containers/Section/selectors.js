import { createSelector } from 'reselect';

const selectGlobal = () => (state) => state.get('section');


const selectLoading = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('loading')
);

const selectError = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('error')
);

const selectSection = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('section')
);

const selectCurrentSubsectionIndex = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('currentSubsectionIndex')
);

const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  selectLoading,
  selectError,
  selectSection,
  selectLocationState,
  selectCurrentSubsectionIndex,
};
