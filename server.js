const app = require('./app');

app.set('port', process.env.PORT || 8080);

// Listenning port 8080 and write out url page in console log

const server = app.listen(app.get('port'), () => {
    console.log(`Listening on http://localhost:${ server.address().port }`);
});