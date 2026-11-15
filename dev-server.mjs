import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {extname, join, normalize} from 'node:path';
const root=process.cwd();
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8'};
createServer(async(req,res)=>{try{const url=new URL(req.url,'http://localhost');const file=normalize(join(root,url.pathname==='/'?'index.html':url.pathname));if(!file.startsWith(root)){res.writeHead(403);return res.end('Forbidden')}const body=await readFile(file);res.writeHead(200,{'content-type':types[extname(file)]||'application/octet-stream'});res.end(body)}catch{res.writeHead(404);res.end('Not found')}}).listen(4173,'127.0.0.1',()=>console.log('Instakross preview: http://127.0.0.1:4173'));
