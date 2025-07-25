import { LoginForm } from "@/features/auth";

import { AuthWrapper } from "@/shared/ui";

export function LoginPage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <AuthWrapper
        heading="Login"
        description="Sign in to your account"
        isShowSocial
        backButtonLabel="Don't have an account? Register"
        backButtonHref="/auth/register">
        <LoginForm />
      </AuthWrapper>
    </main>
  );
}
