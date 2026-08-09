import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";
import { routeForPath } from "@/lib/routes";

export function render(pathname: string) {
  const route = routeForPath(pathname);
  const html = renderToString(
    <Router ssrPath={pathname}>
      <App />
    </Router>,
  );
  return { html, routeId: route.id };
}
