import Header from "../../components/header/Header";
import {
  Container,
  ContainerContent,
  DivImage,
  Stats,
  DivTypeAndMoves,
} from "./styled";

export default function DetailsPage() {
  return (
    <Container>
      <Header />
      <ContainerContent>
        <DivImage>{/* aqui imagem frontal e de costas */}</DivImage>
        <Stats>{/* aqui Stats */}</Stats>
        <DivTypeAndMoves>{/* aqui vai type e moves */}</DivTypeAndMoves>
      </ContainerContent>
    </Container>
  );
}
