import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";
import { getEnv } from "@/env";

@Injectable()
export class RedirectsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    if (getEnv("DOCS_URL", "") && (req.url.startsWith("/v2/docs") || req.url.startsWith("/docs"))) {
      return res.redirect(getEnv("DOCS_URL"));
    }
    next();
  }
}
