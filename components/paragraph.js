import PropTypes from "prop-types";

export default function Paragraph({ text }) {
  return <p>{text}</p>;
}

Paragraph.propTypes = {
  title: PropTypes.string,
};
