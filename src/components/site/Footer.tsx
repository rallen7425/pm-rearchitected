export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border mt-auto">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span>© {year} Rick Allen. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <a
            href="https://fromoutofthenoise.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Substack
          </a>
          <a
            href="https://fromoutofthenoise.substack.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Subscribe
          </a>
        </div>
      </div>
    </footer>
  );
}
