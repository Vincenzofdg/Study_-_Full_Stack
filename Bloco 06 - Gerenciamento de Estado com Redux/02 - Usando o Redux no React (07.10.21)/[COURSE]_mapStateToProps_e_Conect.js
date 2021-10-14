// MAPSTATETOPROPS:

import React from 'react';
import { connect } from 'react-redux';

class FirstComponent extends React.Component {
  render() {
    const { myFirstState } = this.props;
    return (
      <div>
        <div>
          {myFirstState.map((element,index) => (
            <p key={ index }>{element}</p>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  myFirstState: state.myReducer.state});

export default connect(mapStateToProps, null)(FirstComponent);

// CONECT:
// Nos primeiros parênteses, devem estar presentes os métodos nativos do Redux. No caso de utilizar somente o
// mapDispatchToProps , o primeiro parâmetro desses parênteses deverá ser null , já no caso de utilizar somente o
// mapStateToProps , que veremos logo a frente, o segundo parâmetro desses parênteses deverá ser null . Portanto,
// no caso de utilizar ambos mapStateToProps e mapDispatchToProps , essa é a sintaxe que o connect apresentará:

export default connect(mapStateToProps, mapDispatchToProps)(Component)