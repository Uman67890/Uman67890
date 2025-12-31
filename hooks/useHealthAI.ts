import { useState, useCallback } from "react";

export interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
    timestamp: Date;
}

const INITIAL_MESSAGE: Message = {
    id: "1",
    role: "assistant",
    content: "Hello! I'm your AI Health Assistant. I can help you understand symptoms, provide general health tips, and guide you to better well-being. How are you feeling today?",
    timestamp: new Date(),
};

export function useHealthAI() {
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const [isTyping, setIsTyping] = useState(false);

    const generateResponse = (userText: string): string => {
        const text = userText.toLowerCase();

        if (text.includes("headache")) {
            return "I'm sorry to hear you have a headache. Common causes include dehydration, stress, or eye strain. Try drinking water and resting in a dark room. If it persists or is severe, please consult a doctor.";
        }
        if (text.includes("fever") || text.includes("temperature")) {
            return "A fever can be a sign of infection. Make sure to stay hydrated and monitor your temperature. If it exceeds 39°C (102°F) or lasts more than 3 days, seek medical attention immediately.";
        }
        if (text.includes("tired") || text.includes("fatigue")) {
            return "Fatigue can be caused by lack of sleep, poor nutrition, or stress. Ensure you're getting 7-9 hours of sleep and eating a balanced diet. If symptoms persist, it might be worth a check-up.";
        }
        if (text.includes("stomach") || text.includes("pain")) {
            return "Stomach pain varies widely in cause. Avoid heavy meals and try ginger tea. If the pain is sharp, severe, or accompanied by other symptoms, please see a healthcare provider.";
        }
        if (text.includes("hello") || text.includes("hi")) {
            return "Hello there! How can I assist you with your health today?";
        }

        return "I understand. While I can provide general information, symptoms can be complex. could you describe more details? Remember, I am an AI and not a replacement for professional medical advice.";
    };


    const sendMessage = useCallback((content: string) => {
        const userMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setIsTyping(true);

        // Simulate network delay
        const delay = Math.random() * 1500 + 1000;

        setTimeout(() => {
            const responseText = generateResponse(content);
            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: responseText,
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, aiMessage]);
            setIsTyping(false);
        }, delay);
    }, []);

    return {
        messages,
        sendMessage,
        isTyping,
    };
}
