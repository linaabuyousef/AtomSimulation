import HttpClient from "./HttpClient";

export default class ElectronService extends HttpClient {
    getElectron(electronType: string, N: number, K: number, dimension: string) {
        return this.get(`http://localhost:5001/api/electron/`, {electronType, N, K, dimension});
    }
}