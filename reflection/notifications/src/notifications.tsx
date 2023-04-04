import { toast } from "sonner";

type SuccessArgs = Parameters<typeof toast.success>

export const success = (...args: SuccessArgs) => {
  toast.success(...args);
}
