import RingMark from "@/components/RingMark";
import { footerLinks, SITE_NAME, SITE_UPDATED } from "@/lib/site-config";

export default function SiteFooter() {
  return (
    <footer className="site-footer" data-ui="site-footer">
      <div className="site-container site-footer__inner">
        <RingMark className="site-footer__mark" />
        <span>© 2026 {SITE_NAME}.</span>
        <span>Last updated: {SITE_UPDATED}</span>
        {footerLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
