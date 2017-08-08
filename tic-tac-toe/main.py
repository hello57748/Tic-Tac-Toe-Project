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
import jinja2
import os

jinja_environment = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)))

cells = {"player_symbol0": "", "player_symbol1": "", "player_symbol2": "",
        "player_symbol3": "", "player_symbol4": "", "player_symbol5": "",
        "player_symbol6": "", "player_symbol7": "", "player_symbol8": ""}
turn = 0

class MainHandler(webapp2.RequestHandler):
    def player(self, space):
        global turn
        global cells
        if turn == 0:
            cells["player_symbol" + str(space)] = "x"
            turn = 1
        elif turn == 1:
            cells["player_symbol" + str(space)] = "o"
            turn = 0

    def get(self):
        global turn
        global cells
        # turns = [{'player': '1', 'symbol': 'x'},
        #          {'player': '2', 'symbol': 'o'}]
        #
        # for i in range(9):
        #    if i % 2 == 0:
        #        turns['turn_' + str(i)] = 'x'
        #    else:
        #        turns['turn_' + str(i)] = 'o'
        self.response.write('Make choice')
        template = jinja_environment.get_template('main.html')
        self.response.out.write(template.render(cells))







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
