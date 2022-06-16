
from flask import Blueprint, jsonify, request
from model.dbconn import database
import bcrypt
import jwt

from middlewares.auth import valid_user

bp=Blueprint('account',__name__)

@bp.route("/",methods = ['GET'])
def get_account():
  try:
    account_db=database.executeAll("select * from account")
    return jsonify(account_db)
  except:
    print('error')

@bp.route("/signup",methods = ['POST'])
def signup():
  try:
    print("request form",request.form)
    data=request.get_json()
    print("data: ",data)
    nickname=data['nickname']
    email=data['email']
    password=data['password']
    print(nickname,password,email)
    encrypted_password=bcrypt.hashpw(password.encode('utf-8'),bcrypt.gensalt())
    database.execute("INSERT INTO habbit_project.account(nickname, email, password) values (%s, %s, %s)",(nickname,email,encrypted_password))
    print(nickname,email,password)
    return "SUCCESS"
  except Exception as e:
    print('error_log',e)
    return 'ERROR'

@bp.route("/login",methods = ['POST'])
def login():
  try:
    print("request form",request.form)
    data=request.get_json()

    email=data['email']
    password=data['password']
    print('login:',email,password)
    email_flag=database.executeOne("Select * from account where email=%s",email)
    print("email_flag",email_flag)
    if email_flag==None:
      return "Invaild_Email"
    if bcrypt.checkpw(password.encode('utf-8'),email_flag['password'].encode('utf-8'))==False:
      return "Wrong_Password"
    print(email,password)
    json={"email":email_flag['email'],"nickname":email_flag['nickname']}
    access_token=jwt.encode(json,"secret",algorithm="HS256")
    return jsonify({"access_token":access_token})
  except Exception as e:
    print('error_log_login',e)
    return 'ERROR'

@bp.route("/userInfo",methods = ['GET'])
def userInfo():
  try:
    response=valid_user(request)
    return jsonify(response)

  except Exception as e:
    print('error_log',e)
    return 'ERROR'
