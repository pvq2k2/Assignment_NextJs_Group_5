import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { IUser } from "../../models/user";

type PrivateRouteProps = {
  children: any;
  roleAccept?: number;
};

const PrivateRoute = ({ children, roleAccept = 1 }: PrivateRouteProps) => {
  const isLogged = useSelector((state: any) => state.auth.isLogged);
  const currentUser = useSelector((state: any) => state.auth.currentUser) as IUser;
  const router = useRouter();

 useEffect(() => {
  if (!isLogged) {
    router.push("signin");
    return;
  } else if (currentUser.user.role !== 1 && currentUser.user.role !== roleAccept) {
    router.push("/");
    return;
  }
  }, [currentUser.user?.role, isLogged, roleAccept, router])


  return children;
};

export default PrivateRoute;