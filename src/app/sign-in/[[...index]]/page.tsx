import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <div className="min-h-screen flex justify-center items-center">
    <SignIn
      routing="path"
      path="/sign-in"
      signUpUrl="/sign-up"
      afterSignInUrl={"/"}
    />
  </div>
);
export default SignInPage;
