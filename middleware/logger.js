//middleware
const logger = (req, res, next) => {
    console.log("Hello World!");
    next();
};

module.exports = logger;
