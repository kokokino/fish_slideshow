# Source
https://github.com/kokokino/html_vanilla_js_skeleton

# Summary
This is a simple skeleton project (empty workspace) for you to use when tackling javascript challenges either on your own or for the coding part of an interview. 

Simple javascript apps are good for interacting with REST services and having a quick setup to solve problems without a lot of configuration. Unfortunately people often get tripped up with security issues preventing their projects from working. This skeleton structure solves most of those pitfalls. 

# Web browser
You will need a web browser. Chrome, Firefox, Safari, Microsoft Edge are all good choices. You probably already have one of these installed. 

# Web server
You will also need to launch a simple web server. That's because features of your app won't work by accessing files on disk without going through a local web server. Also, many webservers try to cache files which is no good when you are developing. You need the latest file all the time. Many people recommend using Python to run a webserver but they typically have the caching problem. Perhaps the easiest way to get a webserver going is with Node.js and the "http-server" project. 

First, install Node.js - there are many ways to do this depending on your operating system. 

Next, run this command from your prompt or terminal to have it available no matter where you are:
npm install --global http-server

Lastly, dive inside your project and run the following command to launch the webserver
http-server -c-1 -p 8000

The -c-1 essentially disables caching (cache up to a second) while the -p sets the port to connect to at 8000.

For more in-depth discussion see this article:
https://github.com/http-party/http-server

# Text Editor
You can use any tool for text editing but avoid word processors like Microsoft Word. If you don't have a favorite, I suggest Microsoft "Visual Studio Code." It's fast, lean, and works well. It even detects Javascript syntax errors as you type. Get it here: 
https://code.visualstudio.com

# CORS workaround
CORS stands for "Cross Origin Resource Sharing" which is a fancy way of trying to protect resources from being used across websites. Often times, it's a mistake on the setup of the server but it can be troubling to not be able to access a public REST service because of CORS errors. Fortunately there is a workaround that allows you to forward your requests through a local service to avoid CORS problems. 

First, install Node.js - there are many ways to do this depending on your operating system. 

Use the sub directory called "cors_anywhere" inside this project. Move into there and from your prompt or terminal do:
npm install cors-anywhere

Next run the command from your prompt or terminal: 
node cors-anywhere.js

You will then be able to preface your REST URL from within your Javascript app with: http://localhost:8080/

More info about this technique can be found here:
https://www.npmjs.com/package/cors-anywhere
https://github.com/Rob--W/cors-anywhere

Happy coding!