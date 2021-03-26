import { useEffect } from "react";

/**
 * Redirects the user to the discord invite URL stored as an environment variable.
 */
export default function Discord() {
  useEffect(() => {
    window.location.assign(process.env.NEXT_PUBLIC_DISCORD_URL);
  });
  return <></>;
}
