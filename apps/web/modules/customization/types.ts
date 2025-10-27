import { widgetSettingsSchema } from "./schema";
import { z } from "zod";

export type FormSchema = z.infer<typeof widgetSettingsSchema>;