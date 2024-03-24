import { selectCurrentUser } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useAppSelector(selectCurrentUser);
  const navigate = useNavigate();
  if (!user) {
    navigate("/login");
    return null;
  } else {
    return children;
  }
};

export default ProtectedRoute;
