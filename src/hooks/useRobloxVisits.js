import { useState, useEffect } from 'react';

const PLACE_ID = '131378148336503';
const UNIVERSE_ID = '7089588429';

export function formatVisits(rawVisits) {
  if (!rawVisits || isNaN(rawVisits)) return '489.4M+';
  if (rawVisits >= 1000000) {
    return `${(rawVisits / 1000000).toFixed(1)}M+`;
  }
  return rawVisits.toLocaleString() + '+';
}

export function useRobloxVisits() {
  const [visitsText, setVisitsText] = useState('489.4M+');
  const [rawVisits, setRawVisits] = useState(489425078);

  useEffect(() => {
    let isMounted = true;

    async function fetchVisits() {
      const endpoints = [
        `https://games.roproxy.com/v1/games?universeIds=${UNIVERSE_ID}`,
        `https://apis.roblox.com/universes/v1/places/${PLACE_ID}/universe`,
        `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://games.roblox.com/v1/games?universeIds=${UNIVERSE_ID}`)}`
      ];

      for (const url of endpoints) {
        try {
          const res = await fetch(url);
          if (!res.ok) continue;
          const data = await res.json();

          let count = null;
          if (data?.data?.[0]?.visits) {
            count = data.data[0].visits;
          } else if (data?.universeId) {
            const gameRes = await fetch(`https://games.roproxy.com/v1/games?universeIds=${data.universeId}`);
            if (gameRes.ok) {
              const gameData = await gameRes.json();
              count = gameData?.data?.[0]?.visits;
            }
          }

          if (count && isMounted) {
            setRawVisits(count);
            setVisitsText(formatVisits(count));
            break;
          }
        } catch (err) {
          // Continue to fallback endpoint
        }
      }
    }

    // Fetch immediately on mount
    fetchVisits();

    // Auto-refresh every 1 hour (3,600,000 milliseconds)
    const ONE_HOUR = 60 * 60 * 1000;
    const intervalId = setInterval(fetchVisits, ONE_HOUR);

    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, []);

  return { visitsText, rawVisits };
}
