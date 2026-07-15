# HimShakti AI Product Description Generator

## Description

An AI-powered web application that generates SEO-friendly e-commerce product descriptions for food products using AI.

## Tech Stack

### Frontend

* React
  

### Backend

* Express.js

### Database

* Mongo DB

### AI Integration

* Google Gemini API

### Deployment

* Vercel
* Render

## Setup

Setup — coming soon.

## Database Choice

This project uses MongoDB Atlas as the cloud database.

Reasons:
- NoSQL document database
- Easy integration with FastAPI using PyMongo
- Flexible schema for product information
- Free cloud hosting through MongoDB Atlas

## Database Schema

Product

- id (Integer)
- name (String)
- ingredients (String)
- weight (String)
- features (String)
- tone (String)


## Set up the Database

1. Create a MongoDB Atlas account.
2. Create a cluster.
3. Create a database user.
4. Add your IP address to Network Access.
5. Copy the connection string.
6. Create a `.env` file:

MONGO_URI=your_mongodb_connection_string

7. Install dependencies:

pip install -r requirements.txt

8. Start the backend:

uvicorn app.main:app --reload

## Database Schema

The following diagram represents the MongoDB database schema used in the project.

![Database Schema](images/schema_diagram.png)