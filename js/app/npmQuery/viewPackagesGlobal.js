const loadModule = () => {
    $(".loader").show();
    const { exec } = require("child_process");
    exec("npm ls -g --depth 0 --silent", (err, stdout, stderr) => {
        $(".loader").hide();
        let res = stdout;
        res = stdout.split("-- ");
        if (res[1].startsWith("(empty)")) {
            document.querySelector(".result").innerHTML = "Nothing Installed!";
        } else {
            for (var i = 1; i < res.length; i++) {
                let t = res[i].split("@");
                document
                    .querySelector(".result")
                    .appendChild(
                        createCard(t[0], t[1].split("\n")[0], i, res.length)
                    );
            }
        }
    });
};
loadModule();
