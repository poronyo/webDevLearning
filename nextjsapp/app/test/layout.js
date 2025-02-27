export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <div>Test Header</div>
        {children}
        <div>Test Footer</div>
      </body>
    </html>
  );
}
