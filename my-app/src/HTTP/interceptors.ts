import {AxiosError} from "axios";
import {toast} from "react-toastify";
// import {alertResourcesConnectivityIssueText} from "../shared/components/ToastWarning"

const currentVersion = document.documentElement.getAttribute('tm-version');

/**
 * Intercept error responses.
 * For login errors- let the login screen handle it.
 * For all other errors- show an error toast.
 *
 * Returns a rejected promise.
 * @param {AxiosError} error
 */
// const onError = (error: AxiosError) => {
//     if (error.config.url.endsWith("login") && error.response.status === 401) {
//         // do nothing, login screen handle these
//     } else if (error.response.status === 401) {
//         console.warn('Unauthorized');
//         toast.error('You are unauthorized to perform this action');
//     } else {
//         const errorMsg = `${error.response.status}: ${error.response.statusText}`;
//         console.error(`API Error:`, errorMsg);
//         toast.error(errorMsg);
//     }
//     return Promise.reject(error.response);
// };

/**
 * Show a toast when a server version is different than client version
 */
const alertNewVersion = () => {
    if (!toast.isActive(101)) {
        toast("New TestManager update is available, reload using (CTRL + F5) to see latest changes.", {
            position: toast.POSITION.BOTTOM_CENTER,
            className: 'new-version-toast',
            bodyClassName: 'new-version-toast-body',
            autoClose: false,
            toastId: 101,
            closeButton: false,
            closeOnClick: true,
            draggable: false,
            onClose: () => window.location.replace(window.location.origin)
        });
    }
};

// export const alertResourcesConnectivityIssue = (resourcesConnectivityList: Object) => {
//     if (!toast.isActive(102)) {
//         toast(alertResourcesConnectivityIssueText(resourcesConnectivityList), {
//             position: toast.POSITION.TOP_CENTER,
//             className: 'connectivity-issue-toast',
//             bodyClassName: 'connectivity-issue-toast-body',
//             autoClose: false,
//             toastId: 102,
//             closeButton: false,
//             closeOnClick: true,
//             draggable: false,
//         });
//     }
// }

const onSuccess = (res: { headers: { [x: string]: any; }; }) => {
    const serverVersion = res.headers['x-tm-version'];
    if (currentVersion && serverVersion && serverVersion !== currentVersion) {
        alertNewVersion();
    }
    return res;
};

export default [onSuccess];