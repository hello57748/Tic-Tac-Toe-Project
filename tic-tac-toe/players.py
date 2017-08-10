from google.appengine.ext import ndb

class Player(ndb.Model):
	name1 = ndb.StringProperty(required=True)
	x_score = ndb.IntegerProperty()