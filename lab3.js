var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
    var url = request.url;

    // response.end(url);
    if (url == '/'){
        response.writeHead('200', {'Content-Type': 'text/html'});
        fs.readFile('index.html', function (error, data) {
            if (error == null) {
                response.write(data);
                response.end();
            }else{
                response.end(error);
            }
        });
    }
    else if(url == '/show'){
        // response.end('Trang chủ');
        fs.readFile('test.txt',

            function (error){
                if (error == null){
                    response.end("Tao file thanh cong");
                }else {
                    response.end(error);
                }
            });
    }
    else if(url == '/insert'){
        // response.end('Trang chủ');
        fs.writeFile('test.txt',
            'Thong tin muon ghi vao',
            function (error){
                if (error == null){
                    response.end("Tao file thanh cong");
                }else {
                    response.end(error);
                }
            });
    }
    else if(url == '/append'){
        // response.end('Trang chủ');
        fs.appendFile('test.txt',
            'Thong tin muon ghi vao',
            function (error){
                if (error == null){
                    response.end("Update thanh cong");
                }else {
                    response.end(error);
                }
            });
    }
    else if(url == '/unlink'){
        // response.end('Trang chủ');
        fs.unlink('test.txt',
            'Thong tin muon ghi vao',
            function (error){
                if (error == null){
                    response.end("Xoa file thanh cong");
                }else {
                    response.end(error);
                }
            });
    }
    else if(url == '/rename'){
        // response.end('Trang chủ');
        fs.rename('test.txt',
            'test2.txt',
            'Thong tin muon ghi vao',
            function (error){
                if (error == null){
                    response.end("Tao file thanh cong");
                }else {
                    response.end(error);
                }
            });
    }
    else response.end('404 Not Found');

}).listen(9999);