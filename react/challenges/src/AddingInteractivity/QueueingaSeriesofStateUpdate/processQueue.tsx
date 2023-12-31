export function getFinalState(baseState, queue) {
  let finalState = baseState;

  // TODO: do something with the queue...
  for (let update of queue) {
    if (typeof update === 'function') {
      // Apply the updater function.
      finalState = update(finalState);
    } else {
      // Replace the next state.
      finalState = update;
    }
  }
  return finalState;
}
