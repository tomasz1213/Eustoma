import React from 'react';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import classes from './WeddingLab.module.css';
import Element from './Element/Elemet';
import {NavLink} from 'react-router-dom';
import img1 from '../../img/workshop1.webp';
import img2 from '../../img/workshop2.webp';
import img3 from '../../img/workshop3.webp';

const weddingLab = () => (
    <>
        <Menu/>
        <div className={classes.WeddingLab}>
            <p>PRACOWNIA ŚLUBNA</p>
            <NavLink exact to="/portfolio"><Element title="dlaczego my?" img={img1} atext="OBEJRZYJ ZDJĘCIA">Zależy Ci na wyjątkowej oprawie ślubu?{'\n'}

                    Marzysz by była zgodna z Twoimi oczekiwaniami?{'\n'}
                    To dobrze trafiłeś!{'\n'}
                    Oferujemy dekoracje, które stworzą bajkowy nastrój w dniu Twojego ślubu.{'\n'}
                    Nasza oferta zawiera wykonanie wszelkich dekoracji związanych z dniem ślubu.{'\n'}{'\n'}{'\n'}{'\n'}

                    Z największą starannością ozdobimy każdy ważny punkt tego wydarzenia - salę weselną, kościół, samochód, dom Państwa Młodych. Z przyjemnością wykonamy wymarzony bukiet ślubny, butonierkę i inne ozdoby. Nasza oferta zawiera również możliwość wypożyczenia dodatkowych dekoracji, tj. tablice, drogowskazy, świeczniki czy świetlne napisy i wiele innych. Dokładamy wszelkich starań, by nasze dekoracje podkreślały magiczny charakter tego wyjątkowego dnia . Każdą Młodą Parę traktujemy wyjątkowo, dla każdej przygotowujemy odrębną ofertę oraz wycenę dekoracji. 
            </Element></NavLink>
            <Element title="jak pracujemy?" img={img2} atext="SPRAWDŹ TERMIN">
                    1.Zapraszamy na niezobowiązującą kawę, przy której poznamy Wasze oczekiwania względem dekoracji weselnych, pomysły na aranżacje, wszelkie inspiracje. Odpowiadamy Wam na wszelkie pytania, które w między czasie się pojawią. {'\n'}
                    2.W zależności od sezonu czas przygotowania oferty indywidualnej to od 3-14 dni. Oferta oczywiście podlega modyfikacjom, można zmieniać elementy dekoratorskie, zmniejszać lub dodawać ilości itp. Jesteśmy w stanie dopasować dekoracje do posiadanego budżetu.  Kierujemy się wyłącznie zasadą minimalnego budżetu w wysokości 4000,00 zł brutto przy florystyce indywidualnej i dekoracji sali.{'\n'}
                    3.7 dni – to czas dla Was na zastanowienie się czy nasze doświadczenie i pomysły Wam odpowiadają. W tym czasie bezpłatnie rezerwujemy termin na Wasze przyjęcie.{'\n'}
                    4.Po upływie 7 dni od zapoznania się z ofertą zapada decyzja : ) Jeżeli zdecydujecie się na nasze usługi podpisujemy umowę, która jest podstawą naszej współpracy. Przy podpisywaniu umowy pobieramy zadatek.{'\n'}
            </Element>
            <NavLink exact to="/wycena"><Element title="co potem?" img={img3} atext="WYCENA">
                    1.Jeśli nie macie koncepcji jak mają wyglądać Wasze dekoracje, przygotujemy dla Was moodboard (czyli tablicę inspiracji) szczegółowo pokazujący wszelkie elementy dekoratorskie, które możemy dla Was stworzyć. Taka tablica inspiracji świetnie obrazuje jakie mamy możliwości i pomysły na Wasze przyjęcie. {'\n'}
                    2.Kiedy wybierzecie swoich faworytów z pośród dekoracji, my robimy dla Was szczegółowe rozliczenie. Dzięki niemu dokładnie widzicie ile dana dekoracja kosztuje, to pomaga dbać Wam o budżet weselny : ){'\n'}
                    3.Kiedy wszystko zostanie przez Was zatwierdzone przystępujemy do realizacji dekoracji.{'\n'}
                    4.W dniu wesela lub dzień wcześniej przyjeżdżamy o umówionej z restauracją godzinie – dostosowujemy się, tak by dla wszystkich było komfortowo. Kwiaty tworzymy na miejscu lub przywozimy już zrobione wcześniej. Według planu realizujemy Wasze zamówienie.{'\n'}
                    5.Jeżeli Wasze przyjęcie ma trwać 2 dni (poprawiny), wystarczy dać nam na samym początku o tym znać, a wszystkie dekoracje będą mogły zostać na Waszym przyjęciu przez 2 dni bez dodatkowych opłat za wynajem dekoracji. {'\n'}
                    6.W ustalony dzień, o ustalonej godzinie przyjeżdżamy demontować dekoracje. Nie zostawiamy tego na głownie naszych klientów!{'\n'}
                    7.Na sam koniec cierpliwie czekamy na waszą opinię : ){'\n'}
            </Element></NavLink>
        </div>
        <Footer/>
    </>

);

export default weddingLab;