import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { initializeObserver } from './intersection-observer.js';

export const ObserverContext = createContext(null);

export const ObserverContextConsumer = ObserverContext.Consumer;

export default function ObserverStore(props) {
  const { children } = props;

  const [observer, setObserver] = useState(null);

  useEffect(() => {
    const _obs = initializeObserver();
    setObserver(_obs);
  }, []);

  return (
    <ObserverContext.Provider value={observer}>
      {children}
    </ObserverContext.Provider>
  );
}

ObserverStore.propTypes = {
  children: PropTypes.node.isRequired,
};
