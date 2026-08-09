import type { ReactNode } from "react";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import type { RouteDefinition } from "@/lib/routes";

export default function SiteShell({ route, children }: { route: RouteDefinition; children: ReactNode }) {
  return (
    <div className="site-shell" data-route-id={route.id}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader route={route} />
      {children}
      <SiteFooter />
    </div>
  );
}
