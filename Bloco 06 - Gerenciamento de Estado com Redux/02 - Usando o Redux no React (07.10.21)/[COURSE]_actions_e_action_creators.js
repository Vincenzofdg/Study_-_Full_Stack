// Esse objeto pode possuir apenas a key type ou mais outras keys, caso seja conveniente
// Neste caso foi criada apenas uma key => state

export const newAction = (state) => ({ 
  type: 'NEW_ACTION', state
});
