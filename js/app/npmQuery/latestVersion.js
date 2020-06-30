const { exec } = require("child_process");

const latestVersion = (name) => {
    const command = "npm view " + name + " version";
    return new Promise((resolve, reject) => {
        exec(command, (err, stdout, stderr) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(stdout);
        });
    });
};
