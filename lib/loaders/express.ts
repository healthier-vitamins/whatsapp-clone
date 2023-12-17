import compression from "compression";
import cors from "cors";
import express, { Request, Response } from "express";
import helmet from "helmet";
import { StatusCodes } from "http-status-codes";
import ERROR_MESSAGES from "../globals/ERROR_MESSAGES";
import initialiseAllRoutes from "../routes";

const app: express.Application = express();

function init() {
  const allowedMethods = ["GET", "DELETE", "PUT", "POST", "OPTIONS"];

  app.use(function (req, res, next) {
    if (!allowedMethods.includes(req.method))
      return res
        .status(StatusCodes.METHOD_NOT_ALLOWED)
        .end("Method Not Allowed");

    // ============================================
    // only allow selected methods
    // allowed methods will attach an Access-Control-Allow-Origin to the url
    // and allow cors for the selected method with the url as well
    // ============================================
    const allowedUrlArray = process.env.ALLOWED_URL_ARRAY;
    if (allowedUrlArray) {
      // website urls allowed to connect
      allowedUrlArray
        .split(";;")
        .forEach((url) => res.setHeader("Access-Control-Allow-Origin", url));
      // cors for website's url
      app.use(
        cors({
          origin: allowedUrlArray.split(";;"),
          credentials: true,
          maxAge: 1728000,
        })
      );
    }

    // ==============================================
    // request methods you wish to allow
    // ==============================================

    // set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", "true");

    res.setHeader("Cache-Control", "no-store, max-age=0");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    // request headers you wish to allow
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, x-jwt-token, x-access-token, X-Requested-With, Content-Type, Accept, Cache-Control"
    );
    // pass to next layer of middleware
    next();
  });

  app.use(compression());
  app.use(helmet());
  app.disable("x-powered-by");
  app.use(helmet.frameguard({ action: "deny" }));

  app.use(
    helmet.contentSecurityPolicy({
      useDefaults: true,
      directives: {
        "default-src": ["'self'"],
        "base-uri": ["'self'"],
        "block-all-mixed-content": [],
        "font-src": ["'self'", "https:", "data:"],
        "frame-ancestors": ["'self'"],
        "img-src": ["'self'", "data:"],
        "object-src": ["'none'"],
        "script-src": ["'self'", "https:", "'unsafe-eval'"],
        "script-src-attr": ["'none'"],
        "style-src": ["'self'", "https:", "'unsafe-inline'"],
        "upgrade-insecure-requests": [],
      },
    })
  );

  // ==============================================
  // nodejs's middleware parser
  // parse application/json format
  // ==============================================
  app.use(
    express.json({
      limit: "50mb",
    })
  );

  // ==============================================
  // parse application/x-www-form-urlencoded format
  // ==============================================
  app.use(
    express.urlencoded({
      limit: "50mb",
      extended: true,
    })
  );

  // ==============================================
  // initialise routes
  // ==============================================
  initialiseAllRoutes(app);

  // ==============================================
  // only if url contains "/api/", to go on to the next function
  // ==============================================
  app.all("*", function (request, response, next) {
    if (request.originalUrl.includes("/api/")) {
      next();
    }
  });

  // ==============================================
  // reject all un registered urls
  // ==============================================
  app.use((req: Request, res: Response) => {
    res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: ERROR_MESSAGES.INVALID_ROUTE });
  });
}

// ==============================================
// get application instance
// ==============================================
function getAppInstance() {
  return app;
}

export default { getAppInstance, init };
