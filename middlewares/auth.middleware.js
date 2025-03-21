
const authenticate = (req, res, next) => {
    if (req.method === "GET" && req.path === "/books") return next();

    const apiKey = req.header("x-api-key");
    if (apiKey !== "secret123") {
        return res.status(401).json({ error: "Unauthorized" });
    }
    next();
};

module.exports = authenticate