from flask import Flask, jsonify, request
from routes import challenge,account,todo
app=Flask(__name__)
app.register_blueprint(todo.bp,url_prefix="/api/todo")
app.register_blueprint(challenge.bp,url_prefix="/api/challenge")

app.register_blueprint(account.bp,url_prefix="/api/account")

@app.route("/")
def hello_world():
    return "<h1>Hello world!</h1>"
