import Stripe from "stripe";
import { getEnv } from "@/env";

const stripeApiKey = getEnv("STRIPE_API_KEY", "");
export const stripeInstance = new Stripe(stripeApiKey, {
  apiVersion: "2020-08-27",
});
