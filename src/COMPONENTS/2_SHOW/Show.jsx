import Card from "../CARD/Card";
import Api from "../API/Api";
import Loading from "../LOADING/Loading";

export default function Show() {
  const [data] = Api();
  return (
    <div className="container d-flex justify-content-center align-content-center gap-5 flex-wrap show">
      {data.length ? (
        data.map((item) => {
          const { id, image, title, description } = item;
          return (
            <Card
              key={id}
              id={id}
              img={image}
              title={title}
              text={description}
            />
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
}
