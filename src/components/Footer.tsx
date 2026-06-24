export function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Deepak S. All rights reserved.</p>
        <p>Built with React, TanStack Start & Tailwind CSS.</p>
      </div>
    </footer>
  );
}