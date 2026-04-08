# Basic Informational Site 🌐

A simple Node.js project that serves static HTML pages using the built-in HTTP module.

## 🚀 Features

* Serves multiple pages:

  * Home (`/`)
  * About (`/about`)
  * Contact (`/contact`)
  * 404 Error page
* Uses Node.js core modules (`http`, `fs`)
* No external frameworks (pure Node.js)

##  Project Structure

```
.
├── index.js
├── index.html
├── about.html
├── contact-me.html
├── 404.html
```

##  Setup & Run

1. Install dependencies (optional if using nodemon):

```
npm install
```

2. Run the server:

```
node index.js
```

Or using nodemon:

```
nodemon index.js
```

3. Open in browser:

```
http://localhost:8080
```

## Notes

* Make sure all HTML files are in the root directory.
* Server runs on port **8080**.

## Learning Purpose

This project is built to understand:

* Node.js HTTP module
* File system operations
* Basic routing without frameworks

---

Made for learning Node.js 🚀
