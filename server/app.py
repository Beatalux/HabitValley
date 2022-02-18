from flask import Flask, jsonify, request
from routes import challenge
app=Flask(__name__)
#app.register_blueprint(todo.bp,url_prefix="/api/todo")
app.register_blueprint(challenge.bp,url_prefix="/api/challenge")

@app.route("/")
def hello_world():
    return "<h1>Hello world!</h1>"
