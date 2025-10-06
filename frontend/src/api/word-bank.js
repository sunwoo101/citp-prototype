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

    // ✅ Log full request details
    console.log("API Request:", {
        url: `${controller}/get`,
        params,
    });

    // Make the request
    return await api.get(`${controller}/get`, { params });
};
