import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => (
  <div className="min-h-screen flex justify-center items-center">
    <SignUp
      path="/sign-up"
      routing="path"
      signInUrl="/sign-in"
      afterSignUpUrl={"/"}
    />
  </div>
);
export default SignUpPage;
