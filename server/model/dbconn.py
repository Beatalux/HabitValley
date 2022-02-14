
import pymysql


class Database():
    def __init__(self):
        self.db=pymysql.connect(host="localhost",user='root',password="ys3338",db="todo")
        self.cursor=self.db.cursor(pymysql.cursors.DictCursor)


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
