import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import { routesList } from "./RoutesList";

function Rotas() {
  return (
    <Routes>
            {routesList.map(({ Component, path }) =>
                <Route key={path} path={path} element={<Component />} />
            )}
        </Routes>
  );
}

export default Rotas;