import { useEffect } from "react";

export default function Discord() {
  useEffect(() => {
    window.location.assign(process.env.NEXT_PUBLIC_DISCORD_URL);
  });
  return <></>;
}
