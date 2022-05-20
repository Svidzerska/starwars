import { Entities } from "./Entities";

export interface Data {
  data: Entities | null;
  isPending: boolean;
  error: string | null;
}
