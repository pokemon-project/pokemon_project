import requests
from bs4 import BeautifulSoup


def get_description(pokemon):
    link = "https://pokemondb.net/pokedex/" + pokemon.lower()
    site = requests.get(link)
    if site.status_code != requests.codes.ok:
        return
    soup = BeautifulSoup(site.text, "html.parser")
    description = soup.find('div', {"class":"grid-col"})
    clean_d = description.text.replace("\n", "")
    fixed = clean_d.replace("é", "e")

    return fixed.split(". ")[0]
