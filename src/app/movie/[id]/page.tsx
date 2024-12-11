interface ProductProps {
  params: {
    id: string;
  };
}

export default function Movie(props: ProductProps) {
  return (
    <div>
      <h1>{props.params.id}</h1>
    </div>
  );
}
