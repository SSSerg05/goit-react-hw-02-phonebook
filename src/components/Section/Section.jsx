import PropTypes from 'prop-types'; // ES6'


export const Section = ({ title, children }) => {
  return (
    <section>
      { title && <h3>{ title }</h3> }
      { children }
    </section>
  );
}

Section.propTypes = {
  title : PropTypes.string,
}