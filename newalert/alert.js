const newAlertRootElement = document.createElement('div');
document.body.appendChild( newAlertRootElement );

/**
  * @param {"success"|"error"|"warning"|"info"} type type of message
  * @param {String} message show message
  * @return {String}
  */
function newAlert( type, message ) {
    const AlertElement = document.createElement('div');
    const mimeType = {
        success: {
            color: "#155724",
            border: "#c3e6cb",
            background: "#d4edda"
        },
        error: {
            color: "#721c24",
            border: "#f8d7da",
            background: "#f5c6cb"
        },
        warning: {
            color: "#856404",
            border: "#fff3cd",
            background: "#ffeeba"
        },
        info: {
            color: "#0c5460",
            border: "#d1ecf1",
            background: "#bee5eb"
        }
    };
    const Select = mimeType[type];
    AlertElement.className = "new-alert";
    AlertElement.innerHTML = `<div class="new-alert show" style="color:${Select.color};border:1px solid ${Select.border};background:${Select.background}"><section class="alert-content"><span class="alert-message">${message}</span></section><div class="alert-button"><img onclick='this.parentNode.parentNode.classList.add("hide")' alt="close" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAW0lEQVRIiWNgGAWjgNZAjUpqcGr8z8DA0I9HTT9UDdmWtOOxpIMIB5BtCT6LyQJ9UAP70NhUBTBXk+RyJmq7glxA0yDCllqQI5mR2oZTzRK6ZDSaFhWjYBQQBwBAmiOYHlHAKAAAAABJRU5ErkJggg=="></div></div><style>@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap);.new-alert{font-family:Poppins,sans-serif;box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;border-radius:2px;background:#d4edda;border:1px solid #c3e6cb;color:#155724;font-weight:700;padding:4px 6px 4px 12px;align-items:center;transition:.3s;position:fixed;display:flex;left:-100%;top:.5rem;font-size:10pt;max-width:calc(100vw - 2rem)}.new-alert.show{left:.5rem;opacity:1}.new-alert.hide{left:-100%;opacity:0}.new-alert .alert-message{font-weight:300}.new-alert .alert-button{display:flex;padding-left:10px;align-items:center}.new-alert img{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;width:17px}</style>`;
    newAlertRootElement.innerHTML = "";
    newAlertRootElement.appendChild(AlertElement);
    return message
}
