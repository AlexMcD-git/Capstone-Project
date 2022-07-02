import { useState, useEffect } from "react"

import Login from './Login';

function App() {
  const [admin, setAdmin] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((admin) => setAdmin(admin));
      }
    });
  }, []);
  
  console.log(admin)

  if (admin) {
    return <h2>Welcome, {admin.username}!</h2>;
  } else {
    return <Login setAdmin={setAdmin} setLoggedIn={setLoggedIn} />;
  }
}

export default App;
