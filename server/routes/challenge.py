from sre_constants import SUCCESS
from flask import Blueprint, jsonify, request
from model.dbconn import database

bp=Blueprint('challenge',__name__)



@bp.route("/<id>",methods = ['GET'])
def get_challenge_with_params(id):
    print("inparamsssss")
    result=database.executeOne("SELECT * FROM challenges WHERE id=%s",(id))
    print("params_id",id,result)
    return jsonify(result)


@bp.route("",methods = ['GET'])
def get_challenge():
    args=request.args
    print("in get chagllenge args:",args)
    category=args.get("category")

    try:
        result=database.executeAll("SELECT * FROM challenges ch left join category ca on ch.category=ca.id where ca.name=%s",category)
        print("what;s the result",result)
        return jsonify(result)
    except Exception as e:
        print('error_log',e)
        return 'ERROR' 
    

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