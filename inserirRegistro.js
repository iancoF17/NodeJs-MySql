
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

        var Nome = "Pedro";
        var Endereco = "Sobradinho 2";

        var SQL = "INSERT INTO agenda (nome, endereco) VALUES";
        SQL = SQL + "('" + Nome + "', '"+ Endereco +"')";

        con.query(SQL, function(err, result) {
            if (err) throw err;
            console.log("Dados registrados com sucesso!")
        }

    );
}
);

//con.end();
