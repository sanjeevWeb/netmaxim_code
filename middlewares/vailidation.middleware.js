const validateBook = (req, res, next) => {
    if (req.method !== "POST" && req.method !== "PUT") return next();

    const { title, author, year } = req.body;
    const currentYear = new Date().getFullYear();

    if (typeof title !== "string" || title.trim() === "") {
        return res.status(400).json({ error: "Title must be a non-empty string" });
    }
    if (typeof author !== "string" || author.trim() === "") {
        return res.status(400).json({ error: "Author must be a non-empty string" });
    }
    if (typeof year !== "number" || year < 1900 || year > currentYear) {
        return res.status(400).json({ error: `Year must be a number between 1900 and ${currentYear}` });
    }
    next();
};

module.exports = validateBook