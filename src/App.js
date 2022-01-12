import React, { useState } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Auth from './views/Auth';
import { getUser, logout } from './services/users';
import TaskForm from './Components/TaskForm';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  const logOutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            {currentUser && (
              <div>
                <h1> Welcome Back </h1>
                <button onClick={logOutUser}>Log Out</button>
                <TaskForm />
              </div>
            )}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
