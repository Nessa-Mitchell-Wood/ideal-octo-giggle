import "dotenv/config";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { logger } from "hono/logger";

const { DISCORD_KEY } = process.env;

const app = new Hono();

app.use(logger());

app.get("/", (c) => c.text("Hello from nmw.art!"));

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
