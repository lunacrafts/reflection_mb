import { Mirrorboards } from "mirrorboards-sdk";

export type MirrorboardModel = Omit<Mirrorboards.Mirrorboard, 'id'>;
