import React from "react";
import './globals.css'

export const metadata = {
  title: 'Flame Dashboard | CN: Reaper',
  description: 'reaper',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <head>
      <meta charSet={"UTF-8"} />
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
      />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>{metadata.title}</title>
    </head>
    <body>
    <main>
      <div className="dashboard-base">
        <aside>
          <div className="dashboard-sidebar">
            <a href="/">
              <h3>dashboard</h3>
            </a>
            <a href="/user">
              <h3>user</h3>
            </a>
            <a href="/generate">
              <h3>generate</h3>
            </a>
          </div>
        </aside>
        {children}
      </div>
    </main>
    </body>
    </html>
  );
}
