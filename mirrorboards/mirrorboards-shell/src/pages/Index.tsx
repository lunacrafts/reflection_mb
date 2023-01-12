import { Link } from "@tanstack/react-location";

export const Index = () => {
  return (
    <div>
      <div>Layouts:</div>
      <Link to={"/layouts/reflection"}>Reflection</Link>
    </div>
  );
};
