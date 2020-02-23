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

server.listen(3000, () => {
	console.log('Running at http://localhost:3000');
});
