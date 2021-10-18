import React from 'react';
import classes from './Pricing.module.css';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import ImageSlider from '../Sliders/imgSlider2/imgSlider2';
import GraphElement from './GraphElement/GraphElement';
import Form from './Form/Form';
import img1 from '../../img/pricing1.webp';
import img2 from '../../img/pricing2.webp';
import img3 from '../../img/pricing3.webp';

const pricing = () => (
    <>
    <Menu/>    
    <div className={classes.Conteiner}>
        <ImageSlider />
        <section className={classes.Main}>
            <p style={{fontSize:'24px'}}>Jak wyceniamy zlecenie?</p>
            <p>Nigdy wcześniej nie korzystałaś z usług firmy dekoratorskiej i nie orientujesz się jak kształtują się ceny tego typu usług? Nic nie szkodzi! Postaramy się przybliżyć Ci ten temat. {'\n'}
            Najważniejsze czego należy być świadomym to fakt, że nie ma przepisu na jedną wycenę tego usług dekoratorskich. Dla nas każda realizacja jest inna. Zależy to od takich czynników jak termin przyjęcia,
             ilość gości, konkretne miejsce realizacji, styl uroczystości, ilość i rodzaj elementów dekoratorskich. Ważne są także takie informacje jak rodzaj i ilość stołów, wielkość kompozycji kwiatowych,
              ich kolorystyka oraz rodzaj użytych kwiatów. Do sporządzenia wyceny potrzebujemy wiedzieć czy chcesz skorzystać z dodatkowych pozycji z naszej oferty, np. dekoracja ceremonii w plenerze, aranżacja strefy chillout,
            i wiele innych.
            ​</p>
            <p>Przygotowana przez nas wstępna oferta podlega modyfikacjom, można zmieniać elementy, które zaproponowaliśmy; zmniejszać ilości itp. Jesteśmy w stanie dopasować dekoracje do posiadanego budżetu.
                 Kierujemy się wyłącznie zasadą minimalnego budżetu w wysokości 4000,00 zł brutto – przy dekoracji sali i florystyce indywidualnej. Jeśli dekorowana będzie jeszcze świątynia bądź plener, budżet musi być odpowiednio wyższy.</p>
            <GraphElement header="WYNAJĘTE DEKORACJE" img={img1}>Spis wszystkich dekoracji, które chcesz zarezerwować na swoje przyjęcie. Każdy element spisany jest w ilościach, podana jest cena za sztukę oraz za komplet.
                 Następnie dopisane są szczegóły techniczne i uwagi do danej pozycji.</GraphElement>
            <GraphElement header="FLORYSTYKA" img={img2}>Spis wszystkich pozycji związanych z florystyką, np. bukiet panny młodej, butonierki, kompozycje na stoły itp.
                Ilości, wielkości i rodzaje dekoracji</GraphElement>
            <GraphElement header="KOSZTY DODATKOWE" img={img3}>W tym miejscu spisujemy takie elementy jak montaż/demontaż, transport, dodatkowe usługi typu dekoracja balonami, itp.</GraphElement>
            <p style={{marginBottom:"40px"}}>Te 3 pozycje razem podlegają podsumowaniu i klaruje się cena końcowa. Ten sposób wyceny zlecenia pozwala naszym klientom na wnikliwą analizę kosztów. Dzięki takiej wycenie jesteś w stanie ocenić z jakiego typu dekoracji chcesz zrezygnować lub czy Twój budżet pozwala na nieco więcej szaleństwa.{'\n'}
                Cena montażu, demontażu, transportu zależy wyłącznie od wielkości przedsięwzięcia i jego specyfiki. O ile ceny wynajmu dekoracji możesz sprawdzić samodzielnie w naszej wypożyczalni online, tak cenę za usługi możesz poznać wyłącznie po wstępnej rozmowie z nami, gdy poznamy szczegóły związane z Twoją uroczystością.{'\n'}
                Najlepszym rozwiązaniem jest niezobowiązujące spotkanie, podczas którego poznamy Twoje potrzeby, zapytamy o wszystkie szczegóły jakie potrzebujemy do wstępnej wyceny.
                 Zobaczysz jakim jesteśmy zespołem, jakie mamy wartości związane z naszą pracą, przekonasz się czy chcesz z nami współpracować, a kilka dni po spotkaniu otrzymasz plik z wstępną ofertą. </p>
        </section>
        <Form/>
    </div>
    <Footer/>
    </>
);

export default pricing;