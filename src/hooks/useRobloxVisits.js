import { useState, useEffect } from 'react';

const PLACE_ID = '131378148336503';
const UNIVERSE_ID = '7089588429';
const DEFAULT_RAW_VISITS = 492440055;

// Match Roblox's exact display: truncate (floor) to 1 decimal, e.g. 491,350,000 → "491.3M+"
export function formatVisits(rawVisits) {
  const count = Number(rawVisits);
  if (!count || isNaN(count)) return '492.4M+';
  if (count >= 1000000000) {
    // Floor to 1dp: e.g. 1,234,567,890 → "1.2B+"
    return `${Math.floor(count / 100000000) / 10}B+`;
  }
  if (count >= 1000000) {
    // Floor to 1dp: e.g. 492,440,000 → "492.4M+" | 491,350,000 → "491.3M+"
    return `${Math.floor(count / 100000) / 10}M+`;
  }
  return count.toLocaleString() + '+';
}

function getInitialState() {
  try {
    const cachedRaw = localStorage.getItem('dds_roblox_visits_raw');
    const cachedText = localStorage.getItem('dds_roblox_visits_text');
    if (cachedRaw && cachedText) {
      const parsed = parseInt(cachedRaw, 10);
      if (!isNaN(parsed) && parsed >= DEFAULT_RAW_VISITS) {
        return { raw: parsed, text: cachedText };
      }
    }
  } catch (e) {
    // Ignore localStorage errors
  }
  return { raw: DEFAULT_RAW_VISITS, text: formatVisits(DEFAULT_RAW_VISITS) };
}

export function useRobloxVisits() {
  const initial = getInitialState();
  const [visitsText, setVisitsText] = useState(initial.text);
  const [rawVisits, setRawVisits] = useState(initial.raw);

  useEffect(() => {
    let isMounted = true;

    async function fetchVisits() {
      const endpoints = [
        `/api/roblox/games/v1/games?universeIds=${UNIVERSE_ID}`,
        `https://games.roproxy.com/v1/games?universeIds=${UNIVERSE_ID}`,
        `https://corsproxy.io/?https://games.roblox.com/v1/games?universeIds=${UNIVERSE_ID}`,
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
          } else if (typeof data?.contents === 'string') {
            const parsed = JSON.parse(data.contents);
            if (parsed?.data?.[0]?.visits) {
              count = parsed.data[0].visits;
            }
          }

          if (count && !isNaN(count) && count > 0 && isMounted) {
            const formatted = formatVisits(count);
            setRawVisits(count);
            setVisitsText(formatted);

            try {
              localStorage.setItem('dds_roblox_visits_raw', count.toString());
              localStorage.setItem('dds_roblox_visits_text', formatted);
            } catch (e) {
              // Ignore storage write errors
            }
            break;
          }
        } catch (err) {
          // Continue to next endpoint
        }
      }
    }

    // Fetch immediately on mount (every page refresh)
    fetchVisits();

    // Auto-refresh every 1 hour (3,600,000 ms)
    const ONE_HOUR = 60 * 60 * 1000;
    const intervalId = setInterval(fetchVisits, ONE_HOUR);

    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, []);

  return { visitsText, rawVisits };
}
