import { CardPostContainer } from "./styles";

interface CardPostProps {
  title: string;
  body: string;
}

export function CardPost({ title, body }: CardPostProps) {
  return (
    <CardPostContainer>
      <div>
        <h3>{title}</h3>
        <p>Há um dia</p>
      </div>
      <section>
        <p>{body}</p>
      </section>
    </CardPostContainer>
  );
}
