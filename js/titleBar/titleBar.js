const { remote } = require("electron");
const { BrowserWindow } = remote;
const maximize = () => {
    const max = `<svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="square"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                >
                    <path
                        fill="currentColor"
                        d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm16 400c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v352z"
                    ></path>
                </svg>`;
    const res = `<svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="minus-square"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                >
                    <path
                        fill="currentColor"
                        d="M400 64c8.8 0 16 7.2 16 16v352c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h352m0-32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-60 242c6.6 0 12-5.4 12-12v-12c0-6.6-5.4-12-12-12H108c-6.6 0-12 5.4-12 12v12c0 6.6 5.4 12 12 12h232z"
                    ></path>
                </svg>`;
    if (BrowserWindow.getFocusedWindow().isMaximized()) {
        BrowserWindow.getFocusedWindow().restore();
        document.querySelector(".maximize").innerHTML = max;
    } else {
        BrowserWindow.getFocusedWindow().maximize();
        document.querySelector(".maximize").innerHTML = res;
    }
};
document.querySelector(".minimize").addEventListener("click", () => {
    BrowserWindow.getFocusedWindow().minimize();
});
document.querySelector(".maximize").addEventListener("click", () => {
    maximize();
});
document.querySelector(".close").addEventListener("click", () => {
    BrowserWindow.getFocusedWindow().close();
});
document.querySelector(".titleBar").addEventListener("dblclick", (e) => {
    e.preventDefault();
    maximize();
});
