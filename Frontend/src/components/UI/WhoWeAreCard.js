import classes from './WhoWeAreCard.module.css';

const WhoWeAreCard = (props) => {
  return (
    <section
      className={`${classes.card} ${props.className ? props.className : ''}`}
    >
      {props.children}
    </section>
  );
};

export default WhoWeAreCard;
