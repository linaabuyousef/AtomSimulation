export type SphericalData = {
     t: number;
     r: number;
     rPrime: number;
     rDoublePrime: number;
     phi: number;
     phiPrime: number;
     theta?: number;
     thetaPrime?: number;
     thetaDoublePrime?: number;
     deltaPhi: number;
}

export type Orbits = {
     x: number;
     y: number;
     z?: number;
}