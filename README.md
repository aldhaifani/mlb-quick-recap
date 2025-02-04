![logo](./public/mlb-quick-recap-icon-128.png)
# MLB Quick Recap
A modern web application that provides quick and concise recaps of MLB games, allowing users to easily browse and search through game summaries, highlights, and key statistics.

Live here: [MLB Quick Recaps](https://mld-quick-recap-frontend-150472142616.us-central1.run.app/)

## Features

- **Game Recaps**: View detailed summaries of MLB games with key highlights and events
- **Team Filtering**: Filter games by specific teams
- **Season Selection**: Browse games from different seasons (2008-present)
- **Search Functionality**: Search for specific teams or games
- **Sorting Options**: Sort games by date (newest/oldest)
- **Responsive Design**: Fully responsive interface that works on desktop and mobile devices
- **Multi-language Support**: Game summaries available in English, Spanish, and Japanese
- **Infinite Loading**: Load more games as you scroll

## Tech Stack

- React with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- React Router for navigation
- Framer Motion for animations
- Shadcn/ui for UI components

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm (preferred) or npm
- Python 3.8 or higher (for backend)
- pip (Python package manager)

### Installation

#### Backend Setup

1. Clone the backend repository:

   ```bash
   git clone https://github.com/aldhaifani/mlb-quick-recap-backend.git
   cd mlb-quick-recap-backend
   ```

2. Install backend dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Start the backend server:

   ```bash
   python app.py
   ```

   The backend will start running on `http://localhost:5000`

#### Frontend Setup

1. Clone the frontend repository:

   ```bash
   git clone https://github.com/yourusername/mlb-quick-recap.git
   cd mlb-quick-recap
   ```

2. Install frontend dependencies:

   ```bash
   pnpm install
   ```

3. Configure the backend endpoint:

   Create a `.env` file in the root directory and add:

   ```
   VITE_API_URL=http://localhost:5000
   ```

4. Start the development server:

   ```bash
   pnpm dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Select a team from the dropdown menu
2. Choose a season year
3. Click the "Load" button to fetch games
4. Use the search bar to filter games by team names
5. Click on a game card to view detailed recap
6. Use the sort button to change the order of games
7. Click "Load More" to fetch additional games
