
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getGeminiResponse = async (history: ChatMessage[], prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: "You are HyperAI, the intelligent assistant integrated into HyperOS 3. You are concise, helpful, and technically savvy. Keep your responses short and suitable for a mobile screen.",
        temperature: 0.7,
      }
    });
    return response.text || "I'm sorry, I couldn't process that.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection error. Please check your settings.";
  }
};
