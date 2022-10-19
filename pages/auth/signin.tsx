import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Signin() {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      console.log("No JWT");
      console.log(status);
      void signIn("okta");
    } else if (status === "authenticated") {
      void router.push("/");
    }
  }, [status]);

  return <div></div>;
}