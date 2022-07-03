import PropTypes from "prop-types";

interface Props {
  title: string;
}
export default function Heading({ title }: Props) {
  return <h1>{title}</h1>;
}

Heading.propTypes = {
  title: PropTypes.string,
};
