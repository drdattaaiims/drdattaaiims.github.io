import RingMark from "@/components/RingMark";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6">
      <div className="max-w-md text-center space-y-4">
        <RingMark className="w-12 h-12 mx-auto text-navy opacity-30" />
        <h1 className="font-display text-2xl font-bold text-navy">Page not found</h1>
        <p className="text-ink-quiet">
          Try the{" "}
          <a href="/" className="text-navy underline underline-offset-4">
            homepage
          </a>
          .
        </p>
      </div>
    </div>
  );
}
