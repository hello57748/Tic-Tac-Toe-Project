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

choice = [1, 2, 3, 4, 5, 6, 7, 8, 9]

class MainHandler(webapp2.RequestHandler):

    def player(turn):
        if turn %2 == 0:
            player_symbol = "x"
            button_input = "<input type=\"button\" id='place0' value="+ player_symbol +">"
        elif turn %2 != 0:
            player_symbol = "o"
            button_input = "<input type=\"button\" id='place0' value="+ player_symbol +">"
        return player_symbol


    def get(self):
    	main_template = jinja_environment.get_template('main.html')
        self.response.write(main_template.render())

    def post(self):
    	p_name = self.request.get('player_one_name')
    	p_name = self.request.get('player_two_name')

    	first_player = Player(name_one = p_name)
    	second_player = Player(name_two = p_name)

    	ones_key = first_player.put()
    	seconds_key = second_player.put()
    	logging.info(ones_key.get().name_one)
    	logging.info(seconds_key.get().name_two)

        self.response.write('Make choice')
        template = jinja_environment.get_template('main.html')
        self.response.out.write(template.render(variables))







# def post():
#     if player_one_turn:
#         play_val = "x"
#     else:


        # if _ _ _ _ _ :
        #     turn +=1
        # print player_one_turn







>>>>>>> 815f3fb2ebe5d49ec81641f446043bb770a909fd

app = webapp2.WSGIApplication([
    ('/', MainHandler)
], debug=True)
