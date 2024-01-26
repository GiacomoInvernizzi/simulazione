import { Link, Outlet } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div>Questa è la header</div>
      <nav>
        <Link to={"/"}>Home</Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
};
