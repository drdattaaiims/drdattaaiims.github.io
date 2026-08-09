import { useLocation } from "wouter";
import ContentPage from "@/components/pages/ContentPage";
import RedirectPage from "@/components/pages/RedirectPage";
import Portfolio from "@/pages/Portfolio";
import { routeForPath } from "@/lib/routes";

function App() {
  const [location] = useLocation();
  const route = routeForPath(location);

  if (route.kind === "home") return <Portfolio route={route} />;
  if (route.kind === "redirect") return <RedirectPage route={route} />;
  return <ContentPage route={route} />;
}

export default App;
