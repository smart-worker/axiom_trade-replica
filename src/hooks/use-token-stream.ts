"use client";

import { useState, useEffect, useRef } from 'react';
import type { Token } from '@/lib/types';
import { getInitialTokens } from '@/lib/mock-data';

export function useTokenStream() {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const dataRef = useRef<Token[]>([]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    // Initial load with a delay to show skeleton
    const initialLoadTimeout = setTimeout(() => {
      try {
        const initialTokens = getInitialTokens();
        dataRef.current = initialTokens;
        setTokens(initialTokens);
        setIsLoading(false);

        // Start the mock stream
        interval = setInterval(() => {
          // Simulate a potential error
          if (Math.random() < 0.01) { // 1% chance of error
            const err = new Error("WebSocket connection lost");
            setError(err);
            clearInterval(interval);
            return;
          }

          const newTokens = dataRef.current.map(token => {
            // ~30% chance to update a token
            if (Math.random() < 0.3) {
              const changePercent = (Math.random() - 0.5) * 0.05; // max 2.5% change
              const newPrice = token.price * (1 + changePercent);
              const priceChange = newPrice - token.price;
              
              const volumeChange = (Math.random() - 0.4) * 0.1; // max 10% change, slightly biased to increase
              const newVolume = Math.max(0, token.volume24h * (1 + volumeChange));
              
              const newPriceChange24hPercent = token.priceChange24hPercent + (changePercent * 100);

              return {
                ...token,
                price: newPrice,
                priceChange24h: token.priceChange24h + priceChange,
                priceChange24hPercent: newPriceChange24hPercent,
                volume24h: newVolume,
              };
            }
            return token;
          });
          dataRef.current = newTokens;
          setTokens(newTokens);
        }, 2000); // Update every 2 seconds
      } catch (e) {
        setError(e instanceof Error ? e : new Error("Failed to fetch initial data"));
        setIsLoading(false);
      }
    }, 1500); // Simulate network delay

    return () => {
      clearTimeout(initialLoadTimeout);
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  return { tokens, isLoading, error };
}
