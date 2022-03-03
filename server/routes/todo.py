from cgi import test
from sre_constants import SUCCESS
from flask import Blueprint, jsonify, request
from model.dbconn import database
import jwt
from middlewares.auth import valid_user

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
    try:
        decoded_data=valid_user(request)
    except Exception as e:
        print(e)
        return 'ERROR'
    data=request.form.get('todo')
    database.execute("INSERT INTO todo(todo,author) values (%s,%s)",(data, decoded_data['email']))
    return "SUCCESS"

@bp.route("<id>",methods = ['PUT'])
def update_todo(id):
    try:
        decoded_data=valid_user(request)
    except Exception as e:
        print(e)
        return 'ERROR'
    data=request.form.get('todo')
    author=database.executeOne('select author from todo where id=%s',id)
    print('author',author)
    if author==None:
        return 'No_Data'
    if author['author']!=decoded_data['email']:
        return 'Invalid_User'
    print('decoded_data',decoded_data['email'])
    database.execute("update todo set todo=%s where id=%s",(data,id))
    return 'put_todo'

@bp.route("<id>",methods = ['DELETE'])
def delete_todo(id):
    result=database.execute("delete from todo where id=%s",(id))
    return "delete"