import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export function MenuItem({
  title,
  to,
  icon,
}: PropsWithChildren<{ to: string; icon: string; title: string }>) {
  return (
    <li className="nav-item">
      <Link to={to} className="nav-link align-middle px-0">
        <i className={`fs-4 ${icon}`}></i>
        <span className="ms-1 d-none d-sm-inline">{title}</span>
      </Link>
    </li>
  );
}
