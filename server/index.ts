import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production. Try multiple locations
  // to be tolerant to different build commands (dist-server/public or dist/public).
  const candidates = [
    path.resolve(__dirname, "public"), // dist-server/public (esbuild outdir)
    path.resolve(__dirname, "..", "dist", "public"), // dist/public (vite outDir)
  ];

  let staticPath: string | null = null;
  for (const c of candidates) {
    try {
      if (fs.existsSync(path.join(c, "index.html"))) {
        staticPath = c;
        break;
      }
    } catch (e) {
      // ignore
    }
  }

  if (staticPath) {
    app.use(express.static(staticPath));
    // Handle client-side routing - serve index.html for all routes
    app.get("*", (_req, res) => {
      res.sendFile(path.join(staticPath as string, "index.html"));
    });
    console.log(`Serving static files from ${staticPath}`);
  } else {
    // No static files found — don't crash, respond with a helpful message
    console.warn(
      "No static build found. Expected index.html in dist-server/public or ../dist/public"
    );
    app.get("*", (_req, res) => {
      res.status(500).send(
        "Frontend build not found on server. Please run the combined build so that frontend files are available."
      );
    });
  }

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
