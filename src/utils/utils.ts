export default {
    config_path: process.env.ENV === "dev" ? "./config.json" : "/data/config/config.json"
}