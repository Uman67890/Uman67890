"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Activity, MoreHorizontal, ShieldAlert } from "lucide-react";
import { useHealthAI } from "@/hooks/useHealthAI";
import { cn } from "@/lib/utils";

export function ChatInterface() {
    const { messages, sendMessage, isTyping } = useHealthAI();
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!inputValue.trim()) return;
        sendMessage(inputValue);
        setInputValue("");
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="flex flex-col h-[85vh] w-full max-w-2xl bg-white/80 dark:bg-black/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden relative">
            {/* Header */}
            <div className="flex items-center justify-between p-6 bg-white/50 dark:bg-black/50 border-b border-gray-200 dark:border-gray-800 backdrop-blur-md z-10">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-400 to-emerald-600 flex items-center justify-center shadow-lg">
                        <Bot className="h-7 w-7 text-white" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Health Guard AI</h2>
                        <p className="text-xs text-teal-600 dark:text-teal-400 font-medium flex items-center gap-1">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                            </span>
                            Always Active
                        </p>
                    </div>
                </div>
                <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors cursor-pointer">
                    <Activity className="h-5 w-5" />
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-800">
                <AnimatePresence>
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className={cn(
                                "flex w-full",
                                msg.role === "user" ? "justify-end" : "justify-start"
                            )}
                        >
                            <div
                                className={cn(
                                    "flex max-w-[80%] items-start gap-3",
                                    msg.role === "user" ? "flex-row-reverse" : "flex-row"
                                )}
                            >
                                <div
                                    className={cn(
                                        "h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm",
                                        msg.role === "user" ? "bg-indigo-500" : "bg-teal-500"
                                    )}
                                >
                                    {msg.role === "user" ? (
                                        <User className="h-5 w-5 text-white" />
                                    ) : (
                                        <Bot className="h-5 w-5 text-white" />
                                    )}
                                </div>

                                <div
                                    className={cn(
                                        "p-4 rounded-2xl shadow-sm text-sm leading-relaxed",
                                        msg.role === "user"
                                            ? "bg-indigo-500 text-white rounded-tr-none"
                                            : "bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-100 rounded-tl-none border border-gray-100 dark:border-gray-700"
                                    )}
                                >
                                    {msg.content}
                                    <span className={cn(
                                        "text-[10px] block mt-1 opacity-70",
                                        msg.role === "user" ? "text-indigo-100 text-right" : "text-gray-400 text-left"
                                    )}>
                                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {isTyping && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start w-full"
                    >
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-teal-500 flex items-center justify-center shadow-sm">
                                <Bot className="h-5 w-5 text-white" />
                            </div>
                            <div className="bg-white dark:bg-zinc-800 p-4 rounded-2xl rounded-tl-none border border-gray-100 dark:border-gray-700 shadow-sm">
                                <MoreHorizontal className="h-5 w-5 text-gray-400 animate-pulse" />
                            </div>
                        </div>
                    </motion.div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white dark:bg-black/50 border-t border-gray-100 dark:border-gray-800 z-10 backdrop-blur-sm">
                {/* Disclaimer Mini */}
                <div className="flex items-center gap-2 justify-center mb-3 text-xs text-gray-400">
                    <ShieldAlert className="h-3 w-3" />
                    <span>AI can make mistakes. Not a substitute for professional medical advice.</span>
                </div>

                <div className="flex items-center gap-2 bg-gray-100 dark:bg-zinc-900/50 p-1.5 rounded-full border border-gray-200 dark:border-zinc-800 focus-within:ring-2 focus-within:ring-teal-500/50 transition-all shadow-inner">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Describe your symptoms or ask a health question..."
                        className="flex-1 bg-transparent px-4 py-3 text-sm focus:outline-none text-gray-800 dark:text-gray-100 placeholder-gray-500"
                    />
                    <button
                        onClick={handleSend}
                        disabled={!inputValue.trim() || isTyping}
                        className={cn(
                            "h-10 w-10 flex items-center justify-center rounded-full transition-all duration-200 shadow-sm",
                            inputValue.trim() && !isTyping
                                ? "bg-teal-500 hover:bg-teal-600 text-white scale-100"
                                : "bg-gray-300 dark:bg-zinc-700 text-gray-500 cursor-not-allowed scale-95"
                        )}
                    >
                        <Send className="h-4 w-4 ml-0.5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
