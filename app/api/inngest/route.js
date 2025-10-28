import { serve } from "inngest/next";
import { inngest } from "../../../inngest/client";
import { deleteCouponOnExpiry, syncUserCreation, syncuserDeletion, syncUserUpdation } from "@/inngest/functions.js";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncuserDeletion,
    deleteCouponOnExpiry
  ],
});