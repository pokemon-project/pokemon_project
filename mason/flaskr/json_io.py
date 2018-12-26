from flask import Flask
from pokefinder import get_info

app = Flask(__name__)

@app.route('/get/<name>')
def get_pokemon(name):
	return get_info(name)


if __name__ == '__main__':
	# run!
	app.run()
