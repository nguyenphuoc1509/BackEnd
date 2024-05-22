const accountsRoutes = require("./accounts.route");
const systemConfig = require("../../../../config/system");
const authRoutes = require("./auth.route");

module.exports = (app) => {

    const version = "/api/v1";
    const PATH_ADMIN = `/${systemConfig.prefixAdmin}`;
    
    app.use(version + `${PATH_ADMIN}` , authRoutes);

    app.use(version + `${PATH_ADMIN}/accounts` , accountsRoutes);

}