import { setFailedRequest } from "./apiUtils";

export default (api) => {
    return async (req, res) => {
        const { method } = req;
        const { query: { id }, body, query } = req;
        try {
            return api[method.toLowerCase()]({id, query, body, req, res});
        } catch (e) {
            return setFailedRequest(res);
        }
    }
}