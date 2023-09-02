import { PropsWithChildren } from "react";
import { Sidebar } from "../Sidebar";

export function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Sidebar />
          </div>
        </div>
        <div className="col py-3">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
