var express = require('express'),
    engine = require('ejs-locals'),
    http = require('http'),
    path = require('path'),
    //autenticacaoRequerida = require('./app/infra/autenticacao').autenticacaoRequerida,
    //hash = require('./app/infra/pass').hash,
    home = require('./routes/home'),
    contato = require('./routes/contato'),
    galeria = require('./routes/galeria'),
    servicos = require('./routes/servicos');

var app = express();

app.configure(function () {
    app.engine('ejs', engine);
    app.set('port', process.env.PORT || 3000);

    // LOGIN
    //app.use(express.cookieParser('Authentication Tutorial '));
    //app.use(express.session());

    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.locals({ _layoutFile: true });
    app.use(express.favicon());
    //app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// routes

app.get('/', home.index);
app.get('/servicos', servicos.index);
app.get('/galeria', galeria.index);
app.get('/contato', contato.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
