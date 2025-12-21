import { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context/DataProvider";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children, msg, redirect }) {
  const [{ user }] = useContext(DataContext);
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (!user) {
      alert(msg);
      navigate(redirect || "/auth", { replace: true });
    } else {
      setIsAuthorized(true);
    }
  }, [user, navigate, msg, redirect]);

  // Only render children if authorized
  if (!isAuthorized) return null;

  return <>{children}</>;
}

export default ProtectedRoute;
