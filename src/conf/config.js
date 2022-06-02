module.exports = {
  port: process.env.NUXT_ENV_port   || 8081,
  host_api:  process.env.NUXT_ENV_host_api  || "http://dev.bitkeep.top:8880",
 
  host_poster_cdn: process.env.NUXT_ENV_host_poster_cdn || "https://cdn.bitkeep.vip",


  //host_operation
  host_operation:  process.env.NUXT_ENV_operation_api  ||   "http://dev.bitkeep.top:8880/operationweb"  || "http://dev.bitkeep.top:8898" 
};



