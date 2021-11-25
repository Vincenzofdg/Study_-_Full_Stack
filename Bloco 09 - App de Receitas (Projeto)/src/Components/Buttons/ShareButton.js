import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import shareIcon from '../../images/shareIcon.svg';

export default function ShareButton({ type, id, index = '' }) {
  const [isCopied, setIsCopied] = useState(false);

  const clipboardAlert = () => {
    copy(`http://localhost:3000/${type}/${id}`);
    setIsCopied(true);
  };

  const message = () => (
    <p>Link copiado!</p>
  );

  const dataTestId = () => {
    if (index !== '') return `${index}-horizontal-share-btn`;
    return 'share-btn';
  };

  const shareButton = () => (
    <button
      type="button"
      data-testid={ dataTestId() }
      onClick={ clipboardAlert }
      src={ shareIcon }
    >
      Share
    </button>
  );

  if (isCopied === true) return message();
  return shareButton();
}

ShareButton.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
