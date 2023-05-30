
var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "c@tolic@"
});

con.connect(
    function(err){
        if (err) throw err;
        console.log("Conexão realizada com sucesso!");

        var SQL = "CREATE DATABASE aula3005";
        con.query(SQL, function(err, result) {
            if (err) throw err;
            console.log("Banco de Dados criado com sucesso!")
        }

    );
}
);

//con.end();
