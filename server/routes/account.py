
from flask import Blueprint, jsonify, request
from model.dbconn import database
import bcrypt
import jwt

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
    nickname=request.form.get('nickname')
    email=request.form.get('email')
    password=request.form.get('password')
    encrypted_password=bcrypt.hashpw(password.encode('utf-8'),bcrypt.gensalt())
    database.execute("INSERT INTO account(nickname, email, password) values (%s, %s, %s)",(nickname,email,encrypted_password))
    print(nickname,email,password)
    return "SUCCESS"
  except:
    print('error')

@bp.route("/login",methods = ['POST'])
def login():
  try:
    print("request form",request.form)
    email=request.form.get('email')
    password=request.form.get('password')
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
    print('error_log',e)
    return 'ERROR'