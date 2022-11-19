import Cookies from 'js-cookie';
const isDoctor = localStorage.getItem("isDoctor");

export const accessKey = isDoctor === "true" ? 'accessKeyForDoctor' :'accessKey';

export const AccessKey = {
    get: () => Cookies.get(accessKey),
    set: (key) => Cookies.set(accessKey, key, {expires: 30}),
    remove: () => Cookies.remove(accessKey)
};

export const isLogin = () => {
    const accessKey = AccessKey.get();
    if (accessKey === 'undefined') return false;
    if (typeof accessKey === 'undefined') return false;
    return !!accessKey;
};

export const handleAuthorization = (unauthorized) => {
    const accessKey = AccessKey.get();
    const activePatientPhone = localStorage.getItem('activePatientPhone');
    const uuid = localStorage.getItem('uuid');

    if (accessKey && activePatientPhone && uuid && !unauthorized) {
        return true;
    } else {
        localStorage.removeItem('activePatientPhone');
        localStorage.removeItem('uuid');
        return false;
    }
};