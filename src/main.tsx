import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.tsx";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import AppointmentScheduling from "./pages/AppointmentScheduling.tsx";
import ScheduleConsultation from "./pages/ScheduleConsultation.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/appointment-scheduling"
            element={<AppointmentScheduling />}
          />
          <Route
            path="/schedule-consultation"
            element={<ScheduleConsultation />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
