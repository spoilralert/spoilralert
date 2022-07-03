import PropTypes from "prop-types";

interface Props {
  text: string;
}

export default function Paragraph({ text }: Props) {
  return <p>{text}</p>;
}

Paragraph.propTypes = {
  title: PropTypes.string,
};
