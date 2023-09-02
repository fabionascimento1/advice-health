import { MenuItem } from "./MenuItem";

export function Sidebar() {
  return (
    <>
      <span className="fs-5 d-none d-sm-inline">Menu</span>
      <ul
        className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
        id="menu"
      >
        <MenuItem to="/" icon="bi-house" title="Área de Trabalho" />

        <MenuItem
          to="/appointment-scheduling"
          icon="bi-table"
          title="Agendamento de Consulta"
        />

        <MenuItem
          to="/schedule-consultation"
          icon="bi-speedometer2"
          title="Consulta de Agendamentos"
        />
      </ul>
    </>
  );
}
