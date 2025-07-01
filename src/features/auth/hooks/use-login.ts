import { useRouter } from "next/navigation";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { LoginSchemaType } from "@/features/auth/schemas";
import { authService } from "@/features/auth/services";

import { toastMessageHandler } from "@/shared/utils";

export const useLogin = () => {
  const router = useRouter();
  const { mutate: login, isPending: isLoginPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: (
      { values, recaptcha }: { values: LoginSchemaType; recaptcha: string }
    ) => {
      return authService.login(values, recaptcha);
    },
    onSuccess: (data: any) => {
      if (data.message) {
        toastMessageHandler(data.message);
      } else {
        toast.success("Login successful");
        router.push("/dashboard/settings");
      }
    },
    onError: error => {
      console.log(error);
      toastMessageHandler(error);
    },
  });

  return { login, isLoginPending };
};
