import React, { useEffect } from "react";

function GoogleMap(props) {
    useEffect(() => {
        const ifameData = document.getElementById("iframeId")
        const lat = props.lat;
        const lon = props.long;
        ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    })
    return (
        <div>
            <iframe id="iframeId" height="500px" width="100%"></iframe>
        </div>
    );
}
export default GoogleMap;