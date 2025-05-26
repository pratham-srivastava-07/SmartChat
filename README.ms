AI Chat Application
A full-stack intelligent chat application that integrates Large Language Models (LLMs) with persistent data storage. Users can engage in meaningful conversations with an AI assistant that acts as a therapist, mentor, or general assistant, with all interactions stored and retrievable from a MySQL database.
Features

Intelligent AI Responses: LLM-powered assistant capable of therapeutic, mentoring, and general assistance conversations
Persistent Chat History: All user and AI messages stored in MySQL database
Real-time Interface: Responsive chat interface with message streaming
Conversation Management: Retrieve, search, and manage chat sessions
Role-based AI: AI can adapt its personality (therapist, mentor, assistant)
Message Threading: Organized conversation flow with timestamps
Data Analytics: Insights into conversation patterns and user engagement

Tech Stack
Backend

Node.js with Express.js framework
MySQL database for message storage
LLM Integration (OpenAI GPT, Anthropic Claude, or similar)
JWT Authentication for user sessions
WebSocket/Socket.IO for real-time messaging

Frontend

React.js with modern hooks
Tailwind CSS for styling
Axios for API communication
React Router for navigation
Socket.IO Client for real-time updates

Database Schema

Users table for authentication
Conversations table for chat sessions
Messages table for individual messages
Message types (user/ai) and timestamps

Installation
Prerequisites

Node.js (v16 or higher)
MySQL (v8.0 or higher)
LLM API key (Groq)