import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import SignInButton from "./(functions)/auth/signInButton";
import SignUpButton from "./(functions)/auth/signUpButton";
import GetUserRepos from "./(functions)/getUserRepos";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {session ? (
        <>
         <SignInButton session={session} />
         <GetUserRepos session={session} />
        </>
      ) : (
        <SignUpButton />
      )}
    </div>
  );
}
