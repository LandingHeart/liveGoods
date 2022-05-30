import React from "react";
import BottomNav from "./components/BottomNav";
import AppRouter from "./routes";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <>
      <Navigation />
      <AppRouter />
      <BottomNav />
    </>
  );
}
