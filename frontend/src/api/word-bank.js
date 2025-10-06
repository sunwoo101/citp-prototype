import api from "./api";

const controller = "WordBank";

export const get = async (
    englishPartial,
    category,
    pageNumber,
    resultsPerPage,
) => {
    const params = {
        englishPartial,
        category,
        pageNumber,
        resultsPerPage,
    };

    return await api.get(`${controller}/get`, { params });
};

export const count = async () => {
    return await api.get(`${controller}/count`);
};

export const add = async (english, kky, tsc, category, submittedBy) => {
    return await api.post(`${controller}/add`, {
        english,
        kky,
        tsc,
        category,
        submittedBy,
    });
};
