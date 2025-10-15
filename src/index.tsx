import "dotenv/config";
import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { logger } from "hono/logger";
import { serveStatic } from "@hono/node-server/serve-static";

import { Layout } from "./Layout";
import { Circles } from "./Circles";

const { DISCORD_KEY } = process.env;

const app = new Hono();

app.use(logger());
app.use("/static/*", serveStatic({ root: "./" }));

app.get("/", (c) =>
  c.html(
    <Layout title="Nessa Mitchell-Wood">
      <Circles />
    </Layout>
  )
);

app.get("/.well-known/discord", (c) => c.text(DISCORD_KEY as string));

const server = serve(
  { fetch: app.fetch, port: 3000 },
  (info) => `running nmw.art on port ${info.port}...`
);

process.on("SIGINT", () => {
  server.close();
  process.exit(0);
});
process.on("SIGTERM", () => {
  server.close((err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    process.exit(0);
  });
});
