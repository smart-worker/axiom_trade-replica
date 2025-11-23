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
          const newTokens = dataRef.current.map(token => {
            // ~30% chance to update a token
            if (Math.random() < 0.3) {
              return {
                ...token,
                marketCap: token.marketCap * (1 + (Math.random() - 0.49) * 0.05),
                volume: token.volume * (1 + (Math.random() - 0.4) * 0.1),
                txCount: token.txCount + Math.floor(Math.random() * 5),
                stats: {
                  ...token.stats,
                  users: token.stats.users + Math.floor(Math.random() * 3) - 1,
                },
                solAmount: token.solAmount + (Math.random() - 0.5) * 0.1,
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
