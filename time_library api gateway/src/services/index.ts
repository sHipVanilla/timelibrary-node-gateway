import eventRoutes from "./event/routes";
import loginRoutes from "./login/routes";
import searchRoutes from "./search/routes";
import timelineRoutes from "./timeline/routes";

export default [...eventRoutes, ...loginRoutes, ...searchRoutes, ...timelineRoutes];