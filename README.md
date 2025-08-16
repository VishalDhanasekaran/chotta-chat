# Chotta Chat

A simple, clean chat interface built with Next.js (Typescript), powered by Ollama for local AI conversations.

## Overview

Chotta Chat is a lightweight chat application that provides a streamlined interface for conversing with AI models running locally through Ollama. The application features a clean, responsive design with real-time streaming responses.

## Features

- Clean and intuitive chat interface
- Real-time message streaming
- Local AI model integration via Ollama
- Responsive design for desktop and mobile
- TypeScript support for enhanced development experience
- Character count display for input messages
- Auto-focus and keyboard shortcuts for improved UX

## Prerequisites

Before running this application, ensure you have the following installed:

- Node.js (version 18 or higher)
- npm or yarn package manager
- Ollama (for local AI model hosting)

## Installation

1. Clone the repository:
   ```bash
   git clone 
   cd chotta-chat
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install required AI packages:
   ```bash
   npm install ai ollama-ai-provider
   ```

## Ollama Setup

1. Install Ollama on your system by visiting [ollama.ai](https://ollama.ai)

2. Start the Ollama service:
   ```bash
   ollama serve
   ```

3. Pull the phi3 model (or any other model you prefer):
   ```bash
   ollama pull phi3
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`

3. Begin chatting with the AI model through the clean interface

## Project Structure

```
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # API endpoint for chat functionality
│   └── page.tsx                  # Main application page
├── components/
│   ├── common/
│   │   └── input/
│   │       └── ChatInput.tsx     # Chat input component
│   └── ui/
│       └── ChatPage.tsx          # UI components and styled elements
├── hooks/
│   └── useChat.ts                # Custom hook for chat functionality
└── README.md
```

## Key Components

### useChat Hook
Custom React hook that manages chat state, message handling, and integration with the AI SDK.

### ChatInput Component
Responsive input component with keyboard shortcuts, character counting, and submission handling.

### API Route
Next.js API route that handles communication with Ollama models and streams responses back to the client.

## Configuration

The application uses Ollama's default configuration:
- Base URL: `http://localhost:11434`
- Default model: `phi3`

To use a different model, update the model name in `/app/api/chat/route.ts`:

```typescript
const result = await streamText({
  model: ollama('your-model-name'),
  messages,
});
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Technologies Used

- Next.js 14+ with App Router
- TypeScript
- AI SDK by Vercel
- Ollama AI Provider
- Styled Components (inferred from component structure)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request
