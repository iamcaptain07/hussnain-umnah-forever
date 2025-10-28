import React, { useEffect } from 'react';
import confetti from '../utils/confetti';

const Confetti: React.FC<{ trigger: boolean }> = ({ trigger }) => {
  useEffect(() => {
    if (trigger) {
      confetti();
    }
  }, [trigger]);

  return null;
};

export default Confetti;