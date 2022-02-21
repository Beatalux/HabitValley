
import pymysql


class Database():
    def __init__(self):
        try:
            self.db=pymysql.connect(host="localhost",user='root',password="ys3338",db="habbit_project")
            self.cursor=self.db.cursor(pymysql.cursors.DictCursor)
        except:
            print("error")



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
