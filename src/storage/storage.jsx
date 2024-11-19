const storage = {
    get(key) {
        const val = window.localStorage.getItem(key);
        if (!val) {
            return null;
        }
        return JSON.parse(val);
    },
    set(Key, value) {
        value = JSON.stringify(value);
        window.localStorage.setItem(Key, value);
    },
    remove(key) {
        window.localStorage.removeItem(key);
    }

}

export default storage;