# Work Items Tracker (Frontend)

A sleek, minimal task management app built with React and React Query, designed to help users easily create, view, and organize their work items.
Each user’s data is automatically linked to their browser fingerprint — no login required.

## Live Demo:

# Features

- Add new work items with title, description, and priority

- View your list of personal work items

- Real-time updates via React Query

- Persistent identity with FingerprintJS Pro

- Beautiful, responsive UI powered by Tailwind CSS

- Smooth feedback using React Toastify

## Tech Stack

- React 18+

- TanStack React Query

- Tailwind CSS

- React Toastify

- FingerprintJS Pro

📂 Project Structure
src/
├── components/
│ ├── AddWorkButton.jsx
│ ├── AddWorkItem.jsx
│ ├── WorkItemSkeleton.jsx
│ └── WorkList.jsx
│
├── util/
│ └── http.js # Axios requests to backend API
│
├── App.jsx # Main app logic
├── app.css # Styling
└── main.jsx # Entry point

# Setup Instructions

1. Clone the Repository
   git clone https://github.com/yourusername/work-items-frontend.git
   cd work-items-frontend

2. Install Dependencies
   npm install

3. Configure Environment Variables

Create a .env file in the project root and set the backend API URL:

VITE_API_BASE_URL=https://your-backend-url.com
VITE_FINGERPRINT_API_KEY=your-fingerprintjs-api-key

4. Run Locally
   npm run dev

App will be available at:

http://localhost:5173

🧠 How It Works

The app loads a unique browser fingerprint using FingerprintJS Pro.

It uses that ID to fetch and manage tasks belonging to that specific user.

All data fetching and mutations are handled via React Query for efficient caching and UI updates.

Toast notifications are used for instant feedback on actions.
