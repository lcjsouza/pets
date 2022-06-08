import type { NextPage } from "next";
import Lista from "../ui/components/Lista/Lista";
import Titulo from "../ui/components/Titulo/titulo";

const Home: NextPage = () => {
  return (
    <div>
      <Titulo 
      titulo="" 
      subtitulo={
        <span>Com um pequeno valor mensal, você <br/> pode <strong>adotar um pet virtualmente</strong></span>
      } />
      <Lista
        pets={[
          {
          id: 1,
          nome: 'Bidu',
          historia: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
          foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj_Y98tSDy1Uvcc9yMB5SkuNC6DM1RDAjWNQ&usqp=CAU'
          },
          {
          id: 2,
          nome: 'Duda',
          historia: 'Lorem Ipsum',
          foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQebX9tUID188_cC36HHY6_vn7dJKfmrWERTA&usqp=CAU'
          },
          {
          id: 3,
          nome: 'Nina',
          historia: 't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
          foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsn8crO3rEkqpZ62NNRqO96RQLu9sAOxVSOw&usqp=CAU'
          }
        ]}
      />
    </div>
  );
};

export default Home;
