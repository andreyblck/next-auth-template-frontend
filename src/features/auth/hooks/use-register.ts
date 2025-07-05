import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { RegisterSchemaType } from "@/features/auth/schemas";
import { authService } from "@/features/auth/services";

import { toastMessageHandler } from "@/shared/utils";

export const useRegister = () => {
  const { mutate: register, isPending: isRegisterPending } = useMutation({
    mutationKey: ["register"],
    mutationFn: ({
      values,
      recaptcha,
    }: {
      values: RegisterSchemaType;
      recaptcha: string;
    }) => {
      return authService.register(values, recaptcha);
    },
    onSuccess: () => {
      toast.success("User registered successfully", {
        description: "Please check your email for verification",
      });
    },
    onError: error => {
      console.log(error);
      toastMessageHandler(error);
    },
  });

  return { register, isRegisterPending };
};
