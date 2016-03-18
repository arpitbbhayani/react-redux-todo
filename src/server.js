import config from '../config/config.js';

// Create express app
import express from 'express';
const app = express();

app.use('/js/?', express.static(__dirname + '/../build/js'));

app.get('/', function(req, res) {
  res.send(`
     <html>
     <head>
         <title>JSGuild</title>
     </head>
     <body>
        <div id="maincontainer"></div>
        <script type="text/javascript" src="/js/vendors.js"></script>
        <script type="text/javascript" src="/js/jsGuildHome.js"></script>
     </body>
     </html>`
  );
});

const port = process.env.PORT || config.serverPort;
app.listen(port, function() {
  console.log('Listening on ' + port);
});
