import React from 'react';

import { CountProvider, useCount } from './context';

const CountConsum1 = () => {
  const { state, dispatch } = useCount() ?? {};

  return (
    <div>
      CountConsum1: {state?.count}
      <button onClick={() => dispatch?.({ type: 'increment'} )}>changeCount</button>
    </div>
  );
}

const Index = () => {
  return (
    <CountProvider>
      <CountConsum1 />
    </CountProvider>
  )
};

export default Index;