import { SphericalData, Orbits } from "./SphericalData";


const electronTypes = ["NonRelativistic", "Relativistic"];

export const ElectronTypes = electronTypes.map((type, index) => ({
  key: index === 0 ? 'm' : 'f',
  text: type,
  value: type,
}));


export type Electron = {
    data: SphericalData[];
    orbits: Orbits[];
    M?: Number;
}
