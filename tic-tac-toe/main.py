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
        template = jinja_environment.get_template("templates/main.html")

        p_name1 = self.request.get('player_one_name')
        p_name2 = self.request.get('player_two_name')
        game = Player(name1 = p_name1, name2 = p_name2)
        game_key = game.put()
        logging.info(game_key.get().name1)
        logging.info(game_key.get().name2)

        names = {"player1": p_name1,
                 "player2": p_name2}

        self.response.write(template.render(names))


# def post():
#     if player_one_turn:
#         play_val = "x"
#     else:


        # if _ _ _ _ _ :
        #     turn +=1
        # print player_one_turn








app = webapp2.WSGIApplication([
    ('/', MainHandler)
], debug=True)
