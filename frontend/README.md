# Next.js Frontend for AI Mental Coach

A modern, responsive Next.js frontend for the FastAPI backend that provides a chat interface with an AI mental coach.

## Features

- **Next.js App Router** - Built with the latest Next.js 14 App Router architecture
- **Dark Mode UI** - High contrast dark theme with soft blue/purple accents
- **Mobile-First Design** - Responsive layout that works on all device sizes
- **Clean UX** - Simple, intuitive interface with a textarea input and submit button
- **Real-time Chat** - Send messages to the backend API and display responses

## Prerequisites

- Node.js 18+ (or use a Node version manager like `nvm`)
- npm or yarn package manager
- The FastAPI backend running on `http://localhost:8000` (or configure `NEXT_PUBLIC_API_URL`)

## Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

## Running the Frontend

### Development Mode

Start the Next.js development server:

```bash
npm run dev
# or
yarn dev
```

The frontend will be available at `http://localhost:3000`.

The page will automatically reload when you make changes to the code.

### Production Build

To build and run in production mode:

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Configuration

### API URL

By default, the frontend connects to `http://localhost:8000` for the API. To change this, create a `.env.local` file in the `frontend` directory:

```bash
NEXT_PUBLIC_API_URL=http://your-api-url:port
```

For example, if your backend is running on a different port or domain:
```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## Usage

1. Make sure your FastAPI backend is running (see the `api/README.md` for instructions)
2. Start the Next.js frontend using `npm run dev`
3. Open your browser to `http://localhost:3000`
4. Type your message in the textarea
5. Click "Send Message" or press Enter
6. View the AI coach's response below

## Project Structure

```
frontend/
├── app/
│   ├── layout.tsx       # Root layout component
│   ├── page.tsx         # Main chat page component
│   ├── page.module.css  # Page-specific styles
│   └── globals.css      # Global styles and theme
├── package.json         # Dependencies and scripts
├── next.config.js       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── README.md           # This file
```

## Styling

The frontend follows a dark mode theme with:
- High contrast text for readability
- Soft blue/purple gradient accents (#667eea to #764ba2)
- Minimal animations for better performance
- Mobile-first responsive design
- Clean, spacious layouts

## Troubleshooting

### CORS Errors

If you encounter CORS errors, make sure:
- The FastAPI backend has CORS middleware configured (which it does by default)
- Both frontend and backend are running

### Connection Errors

If you can't connect to the API:
- Verify the backend is running on the expected port (default: 8000)
- Check the `NEXT_PUBLIC_API_URL` environment variable if set
- Ensure there are no firewall issues blocking the connection

### Port Already in Use

If port 3000 is already in use, Next.js will automatically try the next available port. You can also specify a port:

```bash
npm run dev -- -p 3001
```

## Deployment

This frontend is configured for deployment on Vercel. The backend should be deployed separately and the `NEXT_PUBLIC_API_URL` should point to the deployed backend URL.
