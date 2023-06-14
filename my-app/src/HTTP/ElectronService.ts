import HttpClient from "./HttpClient";
import {Electron} from "../types/Electron";
// import {get_id} from "src/utils/db";

export default class ElectronService extends HttpClient {
    getElectron(electronType: string, N: number, K: number, dimension: string) {
        return this.get(`http://localhost:5001/api/electron/`, {electronType, N, K, dimension});
    }

    // getElectrons(product: string, version: string, sortFieldName: string, sortBy: string) {
    //     return this.get<Electron[]>("/api/Electrons/", {product, version, sortFieldName, sortBy});
    // }

    // tagBulkDeletion(ElectronIdArray: string[] , tagArray: any) {
    //     return this.post(`/api/Electrons/bulkTagDelete`, {ElectronIdArray, tagArray});
    // }

    // isPorudctElectronsLoading() {
    //     return this.get(`/api/Electrons/isProductLoading`);
    // }

    // addElectron(product: string, version: string, paths: string[]) {
    //     return this.put(`/api/Electrons/`, {product, version, paths});
    // }

    // deleteElectron(ElectronId: string, text: string) {
    //     return this.delete(`/api/Electrons/`, {ElectronId, text});
    // }

    // getElectronsPath(product: string, version: string) {
    //     return this.get<any>(`/api/Electrons/files`, {product, version});
    // }

    // getInitCleanupParams(product: string, version: string) {
    //     return this.get("/api/Electrons/getInitCleanupParams", {product, version});
    // }

    // getElectronStatisticObject(id: string) {
    //     return this.get("/api/Electrons/ElectronStatisticObject", {id});
    // }

    // uploadElectrons(data: FormData) {
    //     const config = {
    //         headers: {
    //             "Content-type": "multipart/form-data"
    //         }
    //     };
    //     return this.post("/api/Electrons/upload-Electrons", data, config);
    // }

    // // When new Electron has been added to TM - email will be sent to all users
    // sendNewElectronEmail(product: string, version: string) {
    //     return this.get("/api/Electrons/newElectronNotification", {product, version});
    // }
}