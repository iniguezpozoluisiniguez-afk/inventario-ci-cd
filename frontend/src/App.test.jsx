import { render, screen } from "@testing-library/react";
import App from "./App";
test("render title", ()=>{render(<App/>);expect(screen.getByText(/Inventario Web/)).toBeDefined();});