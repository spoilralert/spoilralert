import Loader from "../public/images/logo_rooster_edge2.svg";

export default function Loading() {
  return (
    <>
      <h1>Loading..</h1>
      <div className="container__loading__rooster">
        <Loader id="loading__rooster" />
      </div>
    </>
  );
}
