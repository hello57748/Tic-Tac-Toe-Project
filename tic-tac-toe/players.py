from google.appengine.ext import ndb

class Player(ndb.Model):
	name1 = ndb.StringProperty(required=True)
	x_score = ndb.IntegerProperty()
	# url_string = name1_key.urlsafe()
	# name1_key = ndb.Key(urlsafe=url_string)
	# name1 = name1_key.get()