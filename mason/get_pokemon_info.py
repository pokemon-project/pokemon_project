import requests
import json
from bs4 import BeautifulSoup
import pokebase as pb


def get_description(pokemon):
    link = "https://pokemondb.net/pokedex/" + pokemon.lower()
    site = requests.get(link)
    if site.status_code != requests.codes.ok:
        return "No description available."
    soup = BeautifulSoup(site.text, "html.parser")
    description = soup.find('div', {"class":"grid-col"})
    clean_d = description.text.replace("\n", "")
    fixed = clean_d.replace("é", "e")
    return fixed.split(". ")[0]


def get_info(ID):
    try:
        pokemon = pb.pokemon(ID)
        data = {
            "Name" : pokemon.name.capitalize(),
    		"ID" : pokemon.id,
    		"Description" : get_description(pokemon.name),
            "Type" : pokemon.types[0].type.name.capitalize(),
    		"Moves" : [move.move.name.capitalize() for move in pokemon.moves[:4]],
    		"Weight" : pokemon.weight,
    		"XP" : pokemon.base_experience,
    		"Picture" : pokemon.sprites.front_default
            }
    except ValueError:
        data = {
            "Name" : "Error",
            "ID" : 0,
            "Description" : "Pokemon not found.",
            "Type" : "",
            "Moves" : [],
            "Weight" : 0,
            "XP" : 0,
            "Picture" : "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.bbU3UEm62vuPiONlcNx09gHaHZ%26pid%3D15.1&f=1"
        }
    json_data = json.dumps(data)
    return json_data
