import { PropsWithChildren } from 'hono/jsx';

export function Layout({
  title,
  children,
}: PropsWithChildren<{ title: string }>) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/static/css/main.css" />
        <script src="/static/js/main.js" defer></script>
      </head>
      <body className="bg-black">{children}</body>
    </html>
  );
}
