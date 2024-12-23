import { Hono } from "hono";
import { BlankSchema } from "hono/types";
import { Env } from "../store/cache.service";

export type IHonoEnv = Hono<{ Bindings: Env }, BlankSchema, '/'>;