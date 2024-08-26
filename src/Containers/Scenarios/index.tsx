import React from 'react';

import { useScenarios } from 'eka-components';


interface Scenario {
  id: string;
  name: string;
}


function Scenarios() {


  const { getScenarios } = useScenarios();
  const { data, isLoading, isError } = getScenarios();


  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div>
      {data?.map((scenario: Scenario) => (
        <div key={scenario.id}>
          <h3>{scenario.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Scenarios;