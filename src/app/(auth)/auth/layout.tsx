import { type PropsWithChildren } from "react";

export function AuthLayout({ children }: PropsWithChildren) {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4">
      {children}
    </main>
  );
}

export default AuthLayout;
