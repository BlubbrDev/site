import React from "react";

// This page contains an embedded dashboard of spac information, powered by Tableau.
// If you have any questions, you should contact @StevenK
function Spacs() {
  let divElement = document.getElementById("tableau-container");
  let vizElement = document.getElementById("tableau-visualization");
  let width = divElement.offsetWidth;
  vizElement.style.width = "100%";
  if (width > 800 || width > 500) {
    vizElement.style.height = divElement.offsetWidth * 0.75 + "px";
    vizElement.style.height = divElement.offsetWidth * 0.75 + "px";
  } else {
    vizElement.style.height = "1127px";
  }
  let scriptElement = document.createElement("script");
  scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
  vizElement.parentNode.insertBefore(scriptElement, vizElement);

  return (
    <div
      className="tableauPlaceholder"
      id="tableau-container"
      style={{ position: "relative" }}
    >
      <noscript>
        <a href="/">
          <img
            alt="Blubbr SPAC Visualizations"
            src="https://public.tableau.com/static/images/Bl/BlubbrVisualizations/NotiFiDataDashboard_1/1_rss.png"
            style={{ border: "none" }}
          />
        </a>
      </noscript>
      <object id="tableau-visualization" style={{ display: "none" }}>
        <param name="host_url" value="https://public.tableau.com/" />
        <param name="embed_code_version" value="3" />
        <param name="site_root" value="" />
        <param name="name" value="BlubbrVisualizations/NotiFiDataDashboard_1" />
        <param name="tabs" value="no" />
        <param name="toolbar" value="yes" />
        <param
          name="static_image"
          value="https://public.tableau.com/static/images/Bl/BlubbrVisualizations/NotiFiDataDashboard_1/1.png"
        />
        <param name="animate_transition" value="yes" />
        <param name="display_static_image" value="yes" />
        <param name="display_spinner" value="yes" />
        <param name="display_overlay" value="yes" />
        <param name="display_count" value="yes" />
        <param name="language" value="en" />
        <param name="filter" value="publish=yes" />
      </object>
    </div>
  );
}

export default Spacs;
