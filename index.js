const handler = require('./serve-handler');
const http = require('http');

const server = http.createServer((request, response) => {
	return handler(request, response, {
		public: process.env.SH_DIR || ".",
		headers: [{
			"source": "**/*.sh",
			"headers": [{
				"key": "Content-Type",
				"value": "text/plain"
			}]
		}]
	});
})

server.listen(process.env.SH_LISTEN, async() => {
	console.log('Running at ', process.env.SH_LISTEN);
});
