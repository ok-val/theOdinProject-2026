// Extract a Card component from the markup below, and use the children
// prop to pass different JSX to it:

/**
 * <Card>
 *   <Card-content />
 * </Card>
 * <Card>
 *   <Card-content />
 * </Card>
 */

function Card({ children }) {
  return <div className="card">{children}</div>;
}

function CardContent_Photo() {
  return (
    <div className="card-content">
      <h1>Photo</h1>
      <img
        className="avatar"
        src="https://react.dev/images/docs/scientists/OKS67lhm.jpg"
        alt="Aklilu Lemma"
        width={70}
        height={70}
      />
    </div>
  );
}

function CardContent_About({ description }) {
  return (
    <div className="card-content">
      <h1>About</h1>
      <p>{description}</p>
    </div>
  );
}

export default function Profile() {
  return (
    <>
      <Card>
        <CardContent_Photo />
      </Card>
      <Card>
        <CardContent_About description="Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis." />
      </Card>
    </>
  );
}
