const uninstallGlobal = (name) => {
    let a = document.createElement("button");
    a.setAttribute("class", "btn btn-danger");
    a.setAttribute("id", "uninstallButton");
    a.innerHTML = "Yes, Uninstall";
    a.addEventListener("click", () => {
        $("*[data-packageNameGlobal='" + name + "']").text("Uninstalling");
        $("*[data-packageNameGlobal='" + name + "']").removeAttr("onclick");
        $(".modal").modal("hide");
        uninstall(name).then((res) => {
            console.log(res);
            window.location.reload();
        });
        uninstall(name).then((res) => {
            console.log(res);
            window.location.reload();
        });
    });
    if ($("#uninstallButton").length) {
        $("#uninstallButton").remove();
    }
    document.querySelector(".modal-footer").appendChild(a);
};

const uninstall = (name) => {
    return new Promise((resolve, reject) => {
        exec("npm uninstall -g " + name, (err, stdout, stderr) => {
            if (err) {
                reject(stderr);
                return;
            }
            resolve(stdout);
        });
    });
};
