import SiteShell from "@/components/site/SiteShell";
import { contentForRoute, type RouteDefinition } from "@/lib/routes";

export default function ContentPage({ route }: { route: RouteDefinition }) {
  const content = contentForRoute(route);
  if (!content) throw new Error(`Route ${route.id} has no page content`);

  if (route.kind === "notfound") {
    return (
      <SiteShell route={route}>
        <main id="main-content" className="site-main error-page" data-ui="page-shell">
          <div className="site-container error-page__content" dangerouslySetInnerHTML={{ __html: content.pageBodyHtml }} />
        </main>
      </SiteShell>
    );
  }

  return (
    <SiteShell route={route}>
      <main id="main-content" className={`site-main content-page${route.kind === "journey" ? " content-page--journey" : ""}`} data-ui="page-shell">
        <div className="site-container content-page__grid">
          <div className="page-intro" data-ui="page-title" dangerouslySetInnerHTML={{ __html: content.pageHeadHtml }} />
          <article
            className={`page-body${route.kind === "journey" ? " timeline" : ""}`}
            data-ui="page-body"
            dangerouslySetInnerHTML={{ __html: content.pageBodyHtml }}
          />
        </div>
        {content.pageMetaHtml && (
          <div className="site-container page-meta" dangerouslySetInnerHTML={{ __html: content.pageMetaHtml }} />
        )}
      </main>
    </SiteShell>
  );
}
