from flask import Flask, render_template, jsonify, request
from routes import challenge,account,category
app=Flask(__name__,static_folder='build/static',template_folder='build')
app.register_blueprint(challenge.bp,url_prefix="/api/challenge")
app.register_blueprint(account.bp,url_prefix="/api/account")
app.register_blueprint(category.bp,url_prefix="/api/category")

@app.route("/")
def hello_world():
    return render_template("index.html")
