import { Electron } from "./Electron";
 
export type ObjectId = { $oid: string };

export interface InitialState {
    electron: Electron[];
    K: number;
    N: number;
    electronsFetch: boolean;
    dimension: string;
    type: string;
}