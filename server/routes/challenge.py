from sre_constants import SUCCESS
from flask import Blueprint, jsonify, request
from model.dbconn import database

bp=Blueprint('challenge',__name__)


@bp.route("",methods = ['GET'])
def get_challenge():
    args=request.args
    print(args)
    category=args.get("category").replace("zzz",'&')
  
    result=database.executeAll("SELECT * FROM challenges ch left join category ca on ch.category=ca.id where ca.name=%s",category)
    return jsonify(result)

@bp.route("<id>",methods = ['GET'])
def get_challenge_with_params(id):
    result=database.executeOne("SELECT * FROM challenges where id=%s",(id))
    print("id",id)
    return jsonify(result)

@bp.route("",methods = ['POST'])
def post_challenge():
    data=request.form.get('challenge')
    database.execute("INSERT INTO challenges(value) values (%s)",(data))
    return "SUCCESS"

@bp.route("<id>",methods = ['PUT'])
def update_challenge(id):
    data=request.form.get('challenge')
    database.execute("update challenges set value=%s where id=%s",(data,id))
    return 'put_challenge'

@bp.route("<id>",methods = ['DELETE'])
def delete_challenge(id):
    result=database.execute("delete from challenges where id=%s",(id))
    return "delete"