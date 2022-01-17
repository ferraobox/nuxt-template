import { createIPX, createIPXMiddleware } from "ipx";
const ipx = createIPX({"dir":"/home/runner/work/nuxt-template/nuxt-template/static","domains":[],"sharp":{},"alias":{}});
export default createIPXMiddleware(ipx);
