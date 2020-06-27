const createCard = (name, version, index, lenght) => {
    let a = document.createElement("div");
    let b = document.createElement("span");
    b.setAttribute("class", "display-5");
    let c = document.createElement("span");
    c.setAttribute("class", "version lead");
    c.innerHTML = "v" + version;
    b.innerHTML = name;
    let e = document.createElement("span");
    e.setAttribute("class", "badge badge-success badge-small lead float-right");
    e.innerHTML = "Update";
    b.appendChild(c);
    a.appendChild(b);
    let f = document.createElement("span");
    f.setAttribute(
        "class",
        "badge badge-danger badge-small badge-delete lead float-right"
    );
    f.setAttribute("onclick", "$('.modal').modal('show')");
    f.innerHTML = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg> Uninstall`;
    b.appendChild(f);
    if (index != lenght - 1) {
        let d = document.createElement("div");
        d.setAttribute("class", "dropdown-divider");
        d.setAttribute("style", "margin-right:40%");
        a.appendChild(d);
    }
    latestVersion(name).then((res) => {
        if (version !== res.split("\n")[0]) {
            b.appendChild(e);
        }
        console.log(res);
    });
    searchVersion(name).then((res) => {
        res = eval(res);
        // console.warn({
        //     name: name,
        //     message: "Create dropdown with this data",
        //     res: res,
        // });
    });
    return a;
};
