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

choice = [1, 2, 3, 4, 5, 6, 7, 8, 9]

class MainHandler(webapp2.RequestHandler):
    def get(self):
        self.response.write('Make choice')

    template = jinja_environmet.get_template('tic-tac-toe/main.html')
        self.response.out.write(template.render(variables))



def player(turn):
    for turn in range(0, 9):
        if turn==0 or turn ==2 or turn==4 or turn==6 or turn==8:
            player_one_turn = True
        elif turn==1 or turn==3 or turn==5 or turn==7:
            player_one_turn = False

player_symbol=

# def post():
#     if player_one_turn:
#         play_val = "x"
#     else:


        # if _ _ _ _ _ :
        #     turn +=1
        # print player_one_turn




player(0)



app = webapp2.WSGIApplication([
    ('/', MainHandler)
], debug=True)
