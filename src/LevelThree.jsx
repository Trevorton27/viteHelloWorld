import PropTypes from 'prop-types';

function LevelThree({ helloWorld }) {
  return (
    <div>
      <h1>{helloWorld}</h1>
    </div>
  );
}
LevelThree.propTypes = {
  helloWorld: PropTypes.string.isRequired
};
export default LevelThree;
