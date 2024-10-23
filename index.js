const cron = require("node-cron");
const axios = require("axios");
const url = `https://unhappy-jemima-hng-internship-25402da6.koyeb.app/api/hello?visitor_name=Idibia`


cron.schedule("*/5 * * * *", () => {
    console.log(`data is returned every ${new Date().getMinutes()} minutes.`)
})
