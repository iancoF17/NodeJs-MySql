
var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "c@tolic@",
    database: "aula3005"
});

con.connect(
    function(err){
        if (err) throw err;
        console.log("Conexão realizada com sucesso!");

        var SQL = "CREATE TABLE agenda (nome VARCHAR (255), endereco VARCHAR(255));";

        con.query(SQL, function(err, result) {
            if (err) throw err;
            console.log("Tabela criada com sucesso!")
        }

    );
}
);

//con.end();
