import React, { useState } from "react";
import Register from "./Register";
import Welcome from "./Welcome";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {user ? (
        <Welcome user={user} />
      ) : (
        <Register onRegister={(user) => setUser(user)} />
      )}
    </div>
  );
}

export default App;
