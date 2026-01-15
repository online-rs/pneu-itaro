
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface AIImageProps {
  prompt: string;
  className?: string;
  aspectRatio?: "1:1" | "3:4" | "4:3" | "9:16" | "16:9";
  alt: string;
}

const AIImage: React.FC<AIImageProps> = ({ prompt, className = "", aspectRatio = "1:1", alt }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const generateImage = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ text: prompt }],
          },
          config: {
            imageConfig: {
              aspectRatio: aspectRatio,
            },
          },
        });

        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            const base64Data = part.inlineData.data;
            setImageUrl(`data:image/png;base64,${base64Data}`);
            setLoading(false);
            return;
          }
        }
        throw new Error("No image part found");
      } catch (err) {
        console.error("Error generating image:", err);
        setError(true);
        setLoading(false);
      }
    };

    generateImage();
  }, [prompt, aspectRatio]);

  if (loading) {
    return <div className={`skeleton rounded-lg ${className}`} style={{ minHeight: '200px' }}></div>;
  }

  if (error || !imageUrl) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center rounded-lg text-gray-400 text-xs p-4 text-center ${className}`}>
        Falha ao carregar imagem profissional. <br/> (Verifique sua conexão ou API Key)
      </div>
    );
  }

  return <img src={imageUrl} alt={alt} className={`rounded-lg shadow-lg object-cover ${className}`} />;
};

export default AIImage;
