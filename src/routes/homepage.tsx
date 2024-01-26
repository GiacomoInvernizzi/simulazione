import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <>
      <div>Questa è la homepage</div>
      <nav>
        <Link to={"/detail"}>Dettaglio</Link>
      </nav>
    </>
  );
};
