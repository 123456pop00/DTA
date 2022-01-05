export function workLocalStorage(key) {
    const data = JSON.parse(localStorage.getItem(key) || '{}');
    const save = () => {
        localStorage.setItem(key, JSON.stringify(data));
    };
    let storage = {
        set(value) {
            data[key] = value;
            save();
        },
        setData(value){
            localStorage.setItem(key, JSON.stringify(value));
        },
        get(key) {
            return data[key];
        },
        removeDataInkey(key) {
            delete data[key];
            save();
        },
        removeKey(key) {
            localStorage.removeItem(key);
        },
        data(){
            console.log();
            return data && Object.keys(data).length === 0
            && Object.getPrototypeOf(data) === Object.prototype ? null : data;
        }

    }
    return storage;
}
export default  workLocalStorage;