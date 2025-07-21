//useMemo
import { useMemo, useState } from 'react';

export const Test = ({ someProp }) => {
  const [planets, setPlanets] = useState(['Earth', 'Mars', 'Jupiter', 'Venus']);
  const [query, setQuery] = useState('');
  const [clicks, setClicks] = useState(0);

  const filteredPlanets = useMemo(
    () => planets.filter(planet => planet.includes(query)),
    [planets, query]
  );

  return (
    <div>
      <div>Some prop: {someProp}</div>
      <button onClick={() => setClicks(clicks + 1)}>
        Number of clicks: {clicks}
      </button>
      <div>
        {filteredPlanets.map(planet => {
          console.log('🌍 Rendering planet:');
          return <div key={planet}>{planet}</div>;
        })}
      </div>
    </div>
  );
};
