import { useEffect } from "react";
import SiteShell from "@/components/site/SiteShell";
import type { RouteDefinition } from "@/lib/routes";

export default function RedirectPage({ route }: { route: RouteDefinition }) {
  useEffect(() => {
    if (route.redirectTo) window.location.replace(route.redirectTo);
  }, [route.redirectTo]);

  return (
    <SiteShell route={route}>
      <main id="main-content" className="site-main error-page" data-ui="page-shell">
        <div className="site-container error-page__content">
          <p className="eyebrow">Page moved</p>
          <h1 data-ui="page-title">This page has moved</h1>
          <p>
            Continue to <a href={route.redirectTo}>{route.redirectTo?.startsWith("http") ? "the authoritative destination" : "Selected Talks"} →</a>
          </p>
        </div>
      </main>
    </SiteShell>
  );
}
