import LevelThree from './LevelThree';
import PropTypes from 'prop-types';

function LevelTwo({ helloWorld }) {
  return (
    <div>
      <LevelThree helloWorld={helloWorld} />
    </div>
  );
}
LevelTwo.propTypes = {
  helloWorld: PropTypes.string.isRequired
};
export default LevelTwo;
