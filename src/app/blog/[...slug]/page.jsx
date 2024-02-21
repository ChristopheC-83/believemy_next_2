export default function Article({ params: { slug } }) {
  console.log(slug);
  return (
    <div>
      <h1 className="my-8 text-3xl">
        Article {slug[0]}
        {slug
          .slice(1)
          .map((item, index) => item && <span key={index}> / {item}</span>)}
      </h1>
    </div>
  );
}
