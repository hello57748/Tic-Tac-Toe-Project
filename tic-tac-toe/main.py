#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
import os
import jinja2
import logging

from players import Player

jinja_environment = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)))

class MainHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/register.html')
        self.response.write(template.render())

    def post(self):
        p_name1 = self.request.get('player_one_name')
        p_name2 = self.request.get('player_two_name')

<<<<<<< HEAD
        first_player = Player("name_one" : p_name)
        second_player = Player("name_two" : p_name)

        ones_key = first_player.put()
        seconds_key = second_player.put()
        logging.info(ones_key.get().name_one)
        logging.info(seconds_key.get().name_two)


        self.response.write(main_template.render())
=======
        game = Player(name1 = p_name1, name2 = p_name2)
        game_key = game.put()
>>>>>>> b9c824c7a9b6e5081c92f3efe3c221cda05da5c7

        logging.info(game_key.get().name1)
        logging.info(game_key.get().name2)

class SecondHandler(webapp2.RequestHandler):
    def post(self):
        template = jinja_environment.get_template("templates/main.html")
        self.response.write(template.render())


# def post():
#     if player_one_turn:
#         play_val = "x"
#     else:


        # if _ _ _ _ _ :
        #     turn +=1
        # print player_one_turn








app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ("/main", SecondHandler)
], debug=True)
