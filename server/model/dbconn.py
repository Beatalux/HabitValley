
import pymysql

from dotenv import load_dotenv
load_dotenv()
import os


class Database():
    def __init__(self):
        try:
            self.db=pymysql.connect(host= os.getenv("HOST"),user=os.getenv("USERNAME"),password=os.getenv("PASSWORD"),db= os.getenv("DATABASE"), ssl_verify_identity=True, ssl={"ca": "/etc/ssl/cert.pem"})
            self.cursor=self.db.cursor(pymysql.cursors.DictCursor)
        except Exception as e:
            print("dbconn error",e)



    def execute(self,query,args={}):
        self.cursor.execute(query,args)


    def executeOne(self,query,args={}):
        self.cursor.execute(query,args)
        rows=self.cursor.fetchone()
        return rows

    def executeAll(self,query,args={}):
        self.cursor.execute(query,args)
        rows=self.cursor.fetchall()
        return rows

database=Database()
