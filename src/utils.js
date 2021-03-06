import axios from './AxiosConfig';

export const fetchData = async (url) => {
    return await axios
        .get(url)
        .then((res) => {
            const data = [];
            if(!res.data)return;
            for (const [key, value] of Object.entries(res.data)) {
                data.push({ ...value, key });
            }
            return Promise.resolve(data);
        })
        .catch((err) => Promise.reject(err));
};