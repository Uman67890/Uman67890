# AI Health Chatbox

An intelligent, responsive health assistant interface built with Next.js, TypeScript, and Tailwind CSS. This application simulates an AI-powered health chatbox that allows users to describe symptoms and receive general health advice.

![AI Health Chatbox Screenshot](https://via.placeholder.com/800x400?text=AI+Health+Chatbox+Preview)
*(Note: Replace the placeholder above with a real screenshot of your application)*

## 🚀 Features

- **Interactive Chat Interface**: A clean, modern chat UI with real-time typing indicators.
- **AI Simulation**: Simulates AI responses for common queries like headaches, fever, fatigue, and stomach pain.
- **Responsive Design**: Fully responsive layout that works seamlessly on desktop and mobile devices.
- **Dark Mode Support**: Built with a sleek design that adapts to system preferences (or includes specific dark mode styling).
- **Smooth Animations**: powered by Framer Motion for a premium user experience.

## 🛠️ Technology Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Utilities**: `clsx` and `tailwind-merge` for efficient class handling.

## 📦 Installation

Follow these steps to set up the project locally:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Uman67890/Uman67890.git
    cd Uman67890
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open the app**
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📖 Usage

1.  **Start a conversation**: Type a message in the input field, such as "I have a bad headache" or "My stomach hurts".
2.  **Receive Advice**: The "AI" will parse your key terms and provide relevant, general health tips.
3.  **Simulated Delay**: Experience a realistic chat flow with typing indicators and network latency simulations.

> **Disclaimer**: This application is for demonstration purposes only. It replaces professional medical advice. Always consult a qualified healthcare provider for personal medical questions.

## 📂 Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Main entry point rendering the ChatInterface
├── components/
│   └── ChatInterface.tsx # Core chat component handling UI and input
├── hooks/
│   └── useHealthAI.ts  # Custom hook creating the value/logic for the AI simulation
├── lib/
│   └── utils.ts        # Helper functions (cn for tailwind class merging)
└── public/             # Static assets
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
