$(".form-inline.main").submit((e) => {
    $(".spinner-border.text-light").show();
    $(".progress").hide();
    e.preventDefault();
    const name = $("input").val();
    loadDetail(name);
    loadDetail(name);
});

const loadDetail = (name) => {
    latestVersion(name)
        .then((res) => {
            $("#selectVersion").empty();
            let a = document.createElement("option");
            a.setAttribute("disabled", "true");
            a.setAttribute("selected", "true");
            a.innerHTML = "Choose Version";
            document.querySelector("#selectVersion").appendChild(a);
            $(".spinner-border.text-light").hide();
            $(".name1").text(name);
            $(".version").text(res);
            $(".resultSearch").fadeIn();
            searchVersion(name).then((res) => {
                res = eval(res);
                for (let i = res.length - 1; i > 0; i--) {
                    let a = document.createElement("option");
                    a.innerHTML = res[i];
                    document.querySelector("#selectVersion").appendChild(a);
                }
            });
        })
        .catch(() => {
            $(".resultSearch").text("No package found!");
            $(".resultSearch").fadeIn();
            $(".spinner-border.text-light").hide();
        });
};

$("#iMain").on("click", (e) => {
    $(".progress").show();
    setInterval(progress, 1000);
    e.preventDefault();
    const name = $(".name1").text();
    const global = $("#globalInstall:checked").val();
    const dep = $("#depInstall:checked").val();
    const ver = $("#selectVersion").val();
    let query = "";
    if (global) {
        query += "-g ";
    }
    if (dep) {
        query += "--save ";
    }
    if (ver) {
        query += name + "@" + ver;
    } else {
        query += name;
    }
    install(query).then((res) => {
        $(".progress-bar").css("width", "100%");
        console.log(res);
        setTimeout(function () {
            window.location.reload();
        }, 1500);
    });
    install(query).then((res) => {
        $(".progress-bar").css("width", "100%");
        console.log(res);
        setTimeout(function () {
            window.location.reload();
        }, 1500);
    });
});

const install = (query) => {
    return new Promise((resolve, reject) => {
        exec("npm i " + query, (err, stdout, stderr) => {
            if (err) {
                reject(stderr);
                return;
            }
            resolve(stdout);
        });
    });
};

const progress = () => {
    let width = parseFloat($(".progress-bar").css("width").split("p")[0]);
    width += Math.random() * 10;
    if (width < 0.75 * window.innerWidth) {
        $(".progress-bar").css("width", width + "px");
    }
};
