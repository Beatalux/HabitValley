from flask import Flask, jsonify, request
from routes import todo
app=Flask(__name__)
app.register_blueprint(todo.bp,url_prefix="/api/todo")

@app.route("/")
def hello_world():
    return "<h1>Hello world!</h1>"
