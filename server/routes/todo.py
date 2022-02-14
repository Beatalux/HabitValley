from sre_constants import SUCCESS
from flask import Blueprint, jsonify, request
from model.dbconn import database

bp=Blueprint('todo',__name__)


@bp.route("",methods = ['GET'])
def get_todo():
    print(database)
    result=database.executeAll("SELECT * FROM TODO")
    return jsonify(result)

@bp.route("<id>",methods = ['GET'])
def get_todo_with_params(id):
    result=database.executeOne("SELECT * FROM TODO where id=%s",(id))
    print("id",id)
    return jsonify(result)

@bp.route("",methods = ['POST'])
def post_todo():
    data=request.form.get('todo')
    database.execute("INSERT INTO todo(value) values (%s)",(data))
    return "SUCCESS"

@bp.route("<id>",methods = ['PUT'])
def update_todo(id):
    data=request.form.get('todo')
    database.execute("update todo set value=%s where id=%s",(data,id))
    return 'put_todo'

@bp.route("<id>",methods = ['DELETE'])
def delete_todo(id):
    result=database.execute("delete from todo where id=%s",(id))
    return "delete"