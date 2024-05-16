# Persistência de Dados: 

No que toca a persistência de dados utilizei o mongoDB.
    


# Setup de Bases de Dados: 

Transformei o ficheiro csv num ficheiro json, denominando-o de "dataset.json"

Utilizei o ficheiro "script.py" para alterar as instâncias de "idcontador" para "_id"

Para o setup de bases de dados corri um script ("setup-container.py") que cria um container que utiliza a última versão do mongo, no qual copio o
ficheiro json para dentro da base de dados, através do comando:

-> mongoimport --host mongodb -d {db_name} -c {collection_name} --type json --file /datasets/plantas.json --jsonArray

Onde db_name = contratos e collection_name = contratos.

Depois basta fazer "npm i" e "npm start" dentro de cada diretoria criada.