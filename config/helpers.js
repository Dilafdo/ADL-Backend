const MySqli =  require('mysqli');

let conn = new MySqli( {
    host: 'localhost',
        post: 3306,
        user: 'dilan',
        passwd: 'Dila@123',
        db: 'news'
});

let db = conn.emit(false, '');

module.exports = {
    database: db
};

