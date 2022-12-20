import { Link, useMatch, useResolvedPath } from "react-router-dom";

function ActiveLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          borderBottom: match ? "2px solid white" : "none",
          color: match ? "blue" : "black",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}
export default ActiveLink;
