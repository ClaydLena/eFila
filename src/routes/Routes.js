import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import { Home, Panel, Senha, Service, SpecialNeeds } from "../pages/index"


const NotFound = () => {
  return (
    <h1 style={{ textAlign: 'center' }}>Page Not Found</h1>
  )
}

const Rotas = () => (
  <HashRouter>
    <Routes>
      {/* <Route exact path="/" element={<Login />} />
      <Route exact path="/reset_password" element={<Reset />} /> */}
      <Route element={<Home />} path="/">
        <Route element={<Panel />} path="panel" />
        <Route element={<Senha />} path="senha" />
        <Route element={<Service />} path="service" />
        <Route element={<SpecialNeeds />} path="specialNeeds" />
      </Route>
      <Route element={<NotFound />} path="*" />
    </Routes>
  </HashRouter>
);

export default Rotas;