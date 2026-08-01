import { Switch, Route } from "wouter";
import Portfolio from "@/pages/Portfolio";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      {/*
        GitHub Pages serves the homepage at both "/" and "/index.html", and the
        statically-served subpages link back with the explicit filename. Without
        this route the latter falls through to NotFound on a 200 response.
      */}
      <Route path="/index.html" component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
