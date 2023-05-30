
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

        var SQL = "SELECT * FROM agenda ORDER BY nome";
        
        con.query(SQL, function(err, result) {
            if (err) throw err;
            console.log("Dados da tabela")
            result.forEach(
                (row) => {
                    console.log(row);
                }
            );
        }

    );
}
);

//con.end();
