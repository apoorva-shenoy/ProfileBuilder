import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {
  // Basic routes - prefix all routes with /api

  // Health check: used to verify the server is up and responding
  app.get("/api/health", (_req, res) => {
    res.json({
      status: "ok",
      message: "ProfileBuilder API running",
    });
  });

  // Example of using storage (already exported from ./storage)
  // Uncomment and implement more routes as needed.
  // app.get('/api/users', async (req, res) => {
  //   const users = await storage.getUsers();
  //   res.json(users);
  // });

  return httpServer;
}
