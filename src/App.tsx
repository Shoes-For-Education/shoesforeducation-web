import React from 'react';
import { useUsers } from './hooks/useUsers';

function App() {
  const users = useUsers();

  console.log(users);

  return (
    <div>

    </div>
  );
}

export default App;
