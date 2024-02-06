import LevelTwo from './LevelTwo';
import PropTypes from 'prop-types';

function LevelOne({ helloWorld }) {
  return (
    <div>
      <LevelTwo helloWorld={helloWorld} />
    </div>
  );
}

LevelOne.propTypes = {
  helloWorld: PropTypes.string.isRequired
};

export default LevelOne;
