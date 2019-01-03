from flask import Flask
from random import randrange
import get_pokemon_info as gpi


app = Flask(__name__)

@app.route('/get/random')
def get_random():
	return gpi.get_info(randrange(803))


@app.route('/get/<ID>')
def get_pokemon(ID):
	return gpi.get_info(ID)


if __name__ == '__main__':
	app.run()
