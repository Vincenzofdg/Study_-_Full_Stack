import React from 'react';
import PropTypes from 'prop-types';

class BtnQuery extends React.Component {
  render() {
    const { handleSubmit, query, selectedId } = this.props;
    return (
      <div>
        <button
          type="submit"
          data-testid="query-button"
          onClick={ (event) => {
            event.preventDefault();
            handleSubmit(selectedId, query);
          } }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

BtnQuery.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  query: PropTypes.string,
  selectedId: PropTypes.string,
};

BtnQuery.defaultProps = {
  selectedId: '',
  query: '',
};

export default BtnQuery;
