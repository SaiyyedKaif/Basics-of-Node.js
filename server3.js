import {createServer} from 'http'

let data = [
    {
        id: 1,
        name: 'Saiyyed Kaif Aalam',
        age: 19
    }
];

const server = createServer((req, res) => {
    const { method, url } = req;
    const id = parseInt(url.split('/')[2]);

    if (url === '/data' && method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const newData = JSON.parse(body);
            const newId = data.length ? data[data.length - 1].id + 1 : 1;
            const newEntry = { id: newId, ...newData };
            data.push(newEntry);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(newEntry));
        });
    } else if (url === '/data' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    } else if (url.startsWith('/data/') && id) {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const parsedBody = body ? JSON.parse(body) : {};
            const index = data.findIndex(d => d.id === id);

            if (index !== -1) {
                switch (method) {
                    case 'PUT':
                        data[index] = { ...data[index], ...parsedBody };
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify(data[index]));
                        break;
                    case 'PATCH':
                        data[index] = { ...data[index], ...parsedBody };
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify(data[index]));
                        break;
                    case 'DELETE':
                        data.splice(index, 1);
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ message: 'Data deleted' }));
                        break;
                    default:
                        res.writeHead(405, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ message: 'Method Not Allowed' }));
                }
            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Data not found' }));
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Data not found' }));
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
