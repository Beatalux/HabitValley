from sre_constants import SUCCESS
from flask import Blueprint, jsonify, request
from model.dbconn import database

bp=Blueprint('category',__name__)

@bp.route("/<category>",methods = ['GET'])
def get_challenge_with_cparams(category):
    print("get_challenge_with_cparams",category)

    try:
        result=database.executeAll("SELECT * FROM challenges ch left join category ca on ch.category=ca.id where ca.name=%s",category)
        print("what;s the result",result)
        return jsonify(result)
    except Exception as e:
        print('error_log',e)
        return 'ERROR' 



@bp.route("",methods = ['GET'])
def get_category():
    args=request.args
    print("this is get category args",args)
    try:
        result=database.executeAll("SELECT * FROM category" )
        print("result undr category api",result)
        return jsonify(result)
    except Exception as e:
        print('error_log',e)
        return 'ERROR' 
