/* forces sidebar to toggle open when viewing desktop site */

import { withPluginApi } from "discourse/lib/plugin-api";
import { reopenWidget } from "discourse/widgets/widget";

function sidebarToggle(api) {
  const applicationController = api.container.lookup("controller:application");
  /* hamburger icon is not loaded */
  api.reopenWidget("sidebar-toggle", {
    html(attrs) {
      if (this.site.desktopView == true && attrs.showSidebar == false) {
        applicationController.set("showSidebar", true);
      }
    },
  });
}

export default {
  name: "desktop-open-sidebar-always",
  initialize() {
    withPluginApi("0.10.1", sidebarToggle);
  },
};
