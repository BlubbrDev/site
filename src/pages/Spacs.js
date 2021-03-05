import React, { useEffect, useRef } from "react";

// This page contains an embedded dashboard of spac information, powered by Tableau.
// If you have any questions, you should contact @StevenK
function Spacs() {
  const tableauContainer = useRef(null);
  const tableauViz = useRef(null);

  useEffect(() => {
    tableauViz.current.style.width = "100%";
    if (tableauContainer.current.offsetWidth > 800) {
      tableauViz.current.style.height =
        tableauContainer.current.offsetWidth * 0.75 + "px";
    } else if (tableauContainer.current.offsetWidth > 500) {
      tableauViz.current.style.height =
        tableauContainer.current.offsetWidth * 0.75 + "px";
    } else {
      tableauViz.current.style.height = "1127px";
    }
    var scriptElement = document.createElement("script");
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    tableauViz.current.parentNode.insertBefore(
      scriptElement,
      tableauViz.current
    );
  });

  return (
    <div ref={tableauContainer} style={{ position: "relative" }}>
      <noscript>
        <a href="/">
          <img
            alt="Blubbr SPAC Visualization"
            src="https://public.tableau.com/static/images/Bl/BlubbrVisualizations/NotiFiDataDashboard_1/1_rss.png"
            style={{ border: "none" }}
          />
        </a>
      </noscript>
      <object ref={tableauViz} style={{ display: "none" }}>
        <param name="host_url" value="https://public.tableau.com/" />{" "}
        <param name="embed_code_version" value="3" />{" "}
        <param name="site_root" value="" />
        <param name="name" value="BlubbrVisualizations/NotiFiDataDashboard_1" />
        <param name="tabs" value="no" />
        <param name="toolbar" value="yes" />
        <param
          name="static_image"
          value="https://public.tableau.com/static/images/Bl/BlubbrVisualizations/NotiFiDataDashboard_1/1.png"
        />{" "}
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
