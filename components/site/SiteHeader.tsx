import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import RingMark from "@/components/RingMark";
import { navigationItems, SITE_NAME } from "@/lib/site-config";
import type { RouteDefinition } from "@/lib/routes";

function activeState(route: RouteDefinition, key: string) {
  if (route.navKey === key) return "page";
  if (route.parentNavKey === key) return "location";
  return undefined;
}

export default function SiteHeader({ route }: { route: RouteDefinition }) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    const controlled = Array.from(document.querySelectorAll<HTMLElement>('[data-ui="page-shell"], [data-ui="site-footer"]'));
    const previousOverflow = document.body.style.overflow;
    controlled.forEach((element) => { element.inert = true; });
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 900) setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    window.addEventListener("resize", handleResize);
    return () => {
      controlled.forEach((element) => { element.inert = false; });
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKey);
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

  const renderLinks = (mobile: boolean) => navigationItems.map((item, index) => {
    const current = activeState(route, item.key);
    return (
      <li key={item.key}>
        <a
          ref={mobile && index === 0 ? firstLinkRef : undefined}
          href={item.href}
          aria-current={current}
          className={current ? "is-active" : undefined}
          onClick={() => setOpen(false)}
        >
          {item.label}
        </a>
      </li>
    );
  });

  return (
    <header className="site-header" data-ui="site-header">
      <div className="site-container site-header__bar">
        <a className="site-brand" href="/" aria-current={route.id === "home" ? "page" : undefined}>
          <RingMark className="site-brand__mark" />
          <span>{SITE_NAME}</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary">
          <ul>{renderLinks(false)}</ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <>
          <button className="menu-backdrop" aria-label="Close menu" onClick={() => setOpen(false)} />
          <nav id="mobile-navigation" className="mobile-nav" aria-label="Primary mobile">
            <div className="site-container">
              <ul>{renderLinks(true)}</ul>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
