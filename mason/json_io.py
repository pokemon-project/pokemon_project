from flask import Flask
from random import randrange
import description
import pokebase as pb
import json


app = Flask(__name__)

@app.route('/get/random')
def get_random():
	return get_info(randrange(803))


@app.route('/get/<ID>')
def get_pokemon(ID):
	return get_info(ID)


def get_info(ID):
    pokemon = pb.pokemon(ID)
    data = {
        "Name" : pokemon.name.capitalize(),
        "Type" : pokemon.types[0].type.name.capitalize(),
		"Description" : description.get_description(pokemon.name),
		"Moves" : [move.move.name.capitalize() for move in pokemon.moves[:4]],
		"XP" : pokemon.base_experience,
		"Picture" : pokemon.sprites.front_default
        }
    json_data = json.dumps(data)

    return json_data


if __name__ == '__main__':
	app.run()
