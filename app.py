from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/')
def index():
    return "FTPTA Flask API"

if __name__ == '__main__':
    app.run(debug=True)

clothes = [
    {'id': 1, 'name': 'T-Shirt', 'category': 'Casual'},
    {'id': 2, 'name': 'Jeans', 'category': 'Casual'}
]

@app.route('/clothes', methods=['GET'])
def get_clothes():
    return jsonify({'clothes': clothes})

@app.route('/clothes', methods=['POST'])
def add_clothes():
    new_clothes = request.json
    clothes.append(new_clothes)
    return jsonify(new_clothes), 201