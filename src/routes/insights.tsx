import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/insights")({
  beforeLoad: () => {
    throw redirect({
      to: "/hispanic-marketing-insights",
      statusCode: 301,
    });
  },
});
