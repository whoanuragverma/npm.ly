const searchVersion = (name, callback) => {
    const command = "npm view " + name + " versions --json";
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
