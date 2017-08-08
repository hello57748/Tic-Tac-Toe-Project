from google.appengine.ext import ndb

class Player(ndb.Model):
	name_one = ndb.StringProperty(required=True)
	name_two = ndb.StringProperty(required=True)