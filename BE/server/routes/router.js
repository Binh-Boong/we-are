const Router = class {
  constructor() {
    this.funcs = [];
    this.root = "/we-are/api";
  }

  get(url, func) {
    this.funcs.push({
      url: url,
      func: func,
    });
  }

  register(req, res) {
    const path = req.url;
    let have = false;

    for (let i = 0; i < this.funcs.length; i += 1) {
      if (this.root + this.funcs[i].url === path) {
        this.funcs[i].func(req, {
          status: (number) => {
            res.writeHead(number, {
              "Content-Type": "text/plain; charset=UTF-8",
              "Access-Control-Allow-Origin": "*",
            });
            return {
              send: (data) => {
                res.end(JSON.stringify(data));
              },
            };
          },
          send: (data) => {
            res.end(JSON.stringify(data));
          },
        });
        have = true;
      }
    }

    if (!have) {
      const response = [
        "WE ARE - API",
        "Version: 1.0.0",
        "Author: BinhNA & WE Team",
        "WE not support API: " + req.headers.host + req.url,
      ].join("\n");
      res.end(response);
    }
  }
};

module.exports = Router;
