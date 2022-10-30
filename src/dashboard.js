import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, logout } from "./firebase";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
  }, [user]);

  function signOut() {
    logout();
  }

  if (!user) return <div></div>;

  return (
    <div>
      <h1>Hello {user.displayName}! This is a dashboard I think</h1>
      <button onClick={signOut}>sign out</button>
    </div>
  );
}

export { Dashboard };
