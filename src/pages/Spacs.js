import React from 'react';

// This page contains an embedded dashboard of spac information, powered by Tableau.
// If you have any questions, you should contact @StevenK
export default function Spacs() {
    var divElement = document.getElementById('viz1614816342907');
    var vizElement = divElement.getElementsByTagName('object')[0];
    if (divElement.offsetWidth > 800) {
        vizElement.style.width = '100%';
        vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
    } else if (divElement.offsetWidth > 500) {
        vizElement.style.width = '100%'; vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
    } else {
        vizElement.style.width = '100%'; vizElement.style.height = '1127px';
    }
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);

    return (
        <div className='tableauPlaceholder' id='viz1614816342907' style={{ 'position': 'relative' }}>
            <noscript>
                <a href='/'>
                    <img alt=' ' src='https://public.tableau.com/static/images/Bl/BlubbrVisualizations/NotiFiDataDashboard_1/1_rss.png' style={{ 'border': 'none' }} />
                </a>
            </noscript>
            <object className='tableauViz' style={{ 'display': 'none' }}>
                <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                <param name='embed_code_version' value='3' />
                <param name='site_root' value='' />
                <param name='name' value='BlubbrVisualizations/NotiFiDataDashboard_1' />
                <param name='tabs' value='no' />
                <param name='toolbar' value='yes' />
                <param name='static_image' value='https://public.tableau.com/static/images/Bl/BlubbrVisualizations/NotiFiDataDashboard_1/1.png' />
                <param name='animate_transition' value='yes' />
                <param name='display_static_image' value='yes' />
                <param name='display_spinner' value='yes' />
                <param name='display_overlay' value='yes' />
                <param name='display_count' value='yes' />
                <param name='language' value='en' />
                <param name='filter' value='publish=yes' />
            </object>
        </div>
    );
}