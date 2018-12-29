from flask import Flask
import pokebase as pb
import json

app = Flask(__name__)

@app.route('/get/<name>')
def get_pokemon(name):
	return get_info(name)

#Getting info from API
def get_info(name):
    pokemon = pb.pokemon(name)
    data = {
        "Name" : pokemon.name.capitalize(),
        "Type" : pokemon.types[0].type.name.capitalize(),
		"Picture" : pokemon.image()
        }
    moves = [move.move.name.capitalize() for move in pokemon.moves[:4]]
    for i, move in enumerate(moves):
        data["Move %d" % (i + 1)] = move
    json_data = json.dumps(data)

    return json_data


if __name__ == '__main__':
	app.run()
