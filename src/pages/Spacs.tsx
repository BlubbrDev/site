import React, { useEffect } from "react";

// This page contains an embedded dashboard of spac information, powered by Tableau.
// If you have any questions, you should contact @StevenK
export default function Spacs() {
  useEffect(() => _loadTableau());
  return (
    <div
      className="tableauPlaceholder"
      id="viz1614816342907"
      style={{ position: "relative", maxHeight: "100vh" }}
    >
      <noscript>
        <a href="/">
          <img
            alt=" "
            src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bl&#47;BlubbrVisualizations&#47;NotiFiDataDashboard_1&#47;1_rss.png"
            style={{ border: "none", maxHeight: "100vh" }}
          />
        </a>
      </noscript>
      <object
        className="tableauViz"
        style={{ display: "none", maxHeight: "100vh" }}
      >
        <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
        <param name="embed_code_version" value="3" />
        <param name="site_root" value="" />
        <param
          name="name"
          value="BlubbrVisualizations&#47;NotiFiDataDashboard_1"
        />
        <param name="tabs" value="no" />
        <param name="toolbar" value="yes" />
        <param
          name="static_image"
          value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bl&#47;BlubbrVisualizations&#47;NotiFiDataDashboard_1&#47;1.png"
        />
        <param name="animate_transition" value="yes" />
        <param name="display_static_image" value="yes" />
        <param name="display_spinner" value="yes" />
        <param name="display_overlay" value="yes" />
        <param name="display_count" value="yes" />
        <param name="language" value="en" />
        <param name="filter" value="publish=yes" />
      </object>
      <script>{_loadTableau}</script>
    </div>
  );
}

function _loadTableau() {
  var divElement = document.getElementById("viz1614816342907");
  var vizElement = divElement!.getElementsByTagName("object")[0];
  vizElement.style.width = "100%";
  if (divElement!.offsetWidth > 800) {
    vizElement.style.height = divElement!.offsetWidth * 0.75 + "px";
  } else if (divElement!.offsetWidth > 500) {
    vizElement.style.height = divElement!.offsetWidth * 0.75 + "px";
  } else {
    vizElement.style.height = "1127px";
  }
  var scriptElement = document.createElement("script");
  scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
  vizElement.parentNode!.insertBefore(scriptElement, vizElement);
}
