import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hero section title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Singetan Business Group PLC/i);
  expect(linkElement).toBeInTheDocument();
});
