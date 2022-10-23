const fs = require('fs');


const requestHandler = (req, res) => {

    //console.log('hi there');
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html><head><title>Enter Message</title></head><body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body></html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
            //console.log('file is being written');
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();

        });

        /*
         console.log('this will be executed first before callback function gets executed');
         res.statusCode = 302;
         res.setHeader('Location', '/');
         return res.end();

         */


    }


    res.setHeader('content-type', 'text/html');
    res.write('<html><head><titel>First Page</titel></head><body>First Page</body></html>');
    res.end();
};

module.exports = requestHandler;