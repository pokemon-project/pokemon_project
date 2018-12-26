import pokebase as pb
import json


def get_info(name):
    pokemon = pb.pokemon(name)
    name = pokemon.name.capitalize()
    type = pokemon.types[0].type.name.capitalize()
    data = {
        "Name" : name,
        "Type" : type,
        }

    moves = [move.move.name.capitalize() for move in pokemon.moves[:4]]
    for i, move in enumerate(moves):
        data["Move %d" % (i + 1)] = move
    json_data = json.dumps(data)
    
    return json_data
