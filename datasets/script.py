import json

nome_arquivo = "./dataset.json"

mapa_chaves = {
    "idcontrato": "_id",
}

# Abrir o arquivo para leitura com encoding 'utf-8'
with open(nome_arquivo, "r", encoding='utf-8') as file:
    data = json.load(file)

for item in data:
    for chave_antiga, chave_nova in mapa_chaves.items():
        if chave_antiga in item:
            item[chave_nova] = item.pop(chave_antiga)

json_string = json.dumps(data, indent=2, ensure_ascii=False)  

# Abrir o arquivo para escrita com encoding 'utf-8'
with open(nome_arquivo, "w", encoding='utf-8') as file: 
    file.write(json_string)