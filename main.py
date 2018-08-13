import webapp2
import jinja2
import os

jinja_env = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

class MainPage(webapp2.RequestHandler):
    def get(self):
        adq_template = jinja_env.get_template('templates/adq.html')

        self.response.write(adq_template.render())


routes = [('/', MainPage)]

app = webapp2.WSGIApplication(routes, debug=True)
