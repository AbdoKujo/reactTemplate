import React, { useState } from "react";

function Counter() {
  // Déclare un état local "count" avec une valeur initiale de 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Le compteur est à : {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
    </div>
  );
}

export default Counter;
