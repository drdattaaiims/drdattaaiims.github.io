export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6">
      <div className="max-w-md text-center space-y-2">
        <h1 className="text-2xl font-serif font-semibold">Page not found</h1>
        <p className="text-ink-quiet">
          Try the <a href="/index.html" className="text-primary hover:underline">homepage</a>.
        </p>
      </div>
    </div>
  );
}
