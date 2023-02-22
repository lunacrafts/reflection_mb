import { Mirrorboards } from "mirrorboards-sdk";

export type MirrorboardModel = Omit<Mirrorboards.Mirrorboard, 'id'> & {
  title: string
  isPublic: boolean
}
