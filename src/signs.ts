export interface Sign {
  code: string;
  name: string;
  description: string;
  category: Category;
  img: string;
}

export type Category =
  | 'ostrzegawcze'
  | 'zakazu'
  | 'nakazu'
  | 'informacyjne'
  | 'kierunku'
  | 'uzupelniajace'
  | 'kolejowe'
  | 'poziome'
  | 'szlaki_rowerowe'
  | 'tabliczki';

export interface CategoryInfo {
  name: string;
  description: string;
  color: string;
}

export const CATEGORIES: Record<Category, CategoryInfo> = {
  ostrzegawcze: { name: 'Ostrzegawcze', description: 'Znaki ostrzegawcze (seria A)', color: '#eab308' },
  zakazu: { name: 'Zakazu', description: 'Znaki zakazu (seria B)', color: '#ef4444' },
  nakazu: { name: 'Nakazu', description: 'Znaki nakazu (seria C)', color: '#3b82f6' },
  informacyjne: { name: 'Informacyjne', description: 'Znaki informacyjne (seria D)', color: '#22c55e' },
  kierunku: { name: 'Kierunku i miejscowości', description: 'Znaki kierunku i miejscowości (seria E)', color: '#6366f1' },
  uzupelniajace: { name: 'Uzupełniające', description: 'Znaki uzupełniające (seria F)', color: '#f97316' },
  kolejowe: { name: 'Kolejowe', description: 'Znaki dodatkowe przed przejazdami kolejowymi (seria G)', color: '#991b1b' },
  poziome: { name: 'Poziome', description: 'Znaki drogowe poziome (seria P)', color: '#64748b' },
  szlaki_rowerowe: { name: 'Szlaki rowerowe', description: 'Dodatkowe znaki szlaków rowerowych (seria R)', color: '#a855f7' },
  tabliczki: { name: 'Tabliczki', description: 'Tabliczki do znaków drogowych (seria T)', color: '#78716c' },
};

const ZNAK_SERIES = new Set(['E', 'P', 'R']);
const ZNAK_OVERRIDES = new Set(['F-11', 'F-15', 'T-25a']);

function img(code: string): string {
  const series = code.split('-')[0];
  const prefix = ZNAK_SERIES.has(series) || ZNAK_OVERRIDES.has(code) ? 'Znak' : 'PL_road_sign';
  return `https://commons.wikimedia.org/wiki/Special:Redirect/file/${prefix}_${code}.svg`;
}

export const SIGNS: Sign[] = [
  // === OSTRZEGAWCZE (Warning - A) ===
  { code: 'A-1', name: 'Niebezpieczny zakręt w prawo', description: 'Ostrzega o niebezpiecznym zakręcie w prawo.', category: 'ostrzegawcze', img: img('A-1') },
  { code: 'A-2', name: 'Niebezpieczny zakręt w lewo', description: 'Ostrzega o niebezpiecznym zakręcie w lewo.', category: 'ostrzegawcze', img: img('A-2') },
  { code: 'A-3', name: 'Niebezpieczne zakręty — pierwszy w prawo', description: 'Ostrzega o niebezpiecznych zakrętach, z których pierwszy jest w prawo.', category: 'ostrzegawcze', img: img('A-3') },
  { code: 'A-4', name: 'Niebezpieczne zakręty — pierwszy w lewo', description: 'Ostrzega o niebezpiecznych zakrętach, z których pierwszy jest w lewo.', category: 'ostrzegawcze', img: img('A-4') },
  { code: 'A-5', name: 'Skrzyżowanie dróg', description: 'Ostrzega o skrzyżowaniu dróg, na którym pierwszeństwo nie jest określone znakami.', category: 'ostrzegawcze', img: img('A-5') },
  { code: 'A-6a', name: 'Skrzyżowanie z drogą podporządkowaną po obu stronach', description: 'Ostrzega o skrzyżowaniu z drogą podporządkowaną występującą po obu stronach.', category: 'ostrzegawcze', img: img('A-6a') },
  { code: 'A-6b', name: 'Skrzyżowanie z drogą podporządkowaną po prawej', description: 'Ostrzega o skrzyżowaniu z drogą podporządkowaną występującą po prawej stronie.', category: 'ostrzegawcze', img: img('A-6b') },
  { code: 'A-6c', name: 'Skrzyżowanie z drogą podporządkowaną po lewej', description: 'Ostrzega o skrzyżowaniu z drogą podporządkowaną występującą po lewej stronie.', category: 'ostrzegawcze', img: img('A-6c') },
  { code: 'A-6d', name: 'Wlot drogi jednokierunkowej z prawej strony', description: 'Ostrzega o wlocie drogi jednokierunkowej z prawej strony.', category: 'ostrzegawcze', img: img('A-6d') },
  { code: 'A-7', name: 'Ustąp pierwszeństwa', description: 'Ostrzega o konieczności ustąpienia pierwszeństwa pojazdom na drodze z pierwszeństwem.', category: 'ostrzegawcze', img: img('A-7') },
  { code: 'A-8', name: 'Skrzyżowanie o ruchu okrężnym', description: 'Ostrzega o skrzyżowaniu, na którym ruch odbywa się dookoła wyspy.', category: 'ostrzegawcze', img: img('A-8') },
  { code: 'A-9', name: 'Przejazd kolejowy z zaporami', description: 'Ostrzega o przejeździe kolejowym wyposażonym w zapory lub półzapory.', category: 'ostrzegawcze', img: img('A-9') },
  { code: 'A-10', name: 'Przejazd kolejowy bez zapór', description: 'Ostrzega o przejeździe kolejowym niewyposażonym w zapory ani półzapory.', category: 'ostrzegawcze', img: img('A-10') },
  { code: 'A-11', name: 'Nierówna droga', description: 'Ostrzega o nierównej nawierzchni drogi.', category: 'ostrzegawcze', img: img('A-11') },
  { code: 'A-11a', name: 'Próg zwalniający', description: 'Ostrzega o progu zwalniającym na drodze.', category: 'ostrzegawcze', img: img('A-11a') },
  { code: 'A-12a', name: 'Zwężenie jezdni — dwustronne', description: 'Ostrzega o zwężeniu jezdni po obu stronach.', category: 'ostrzegawcze', img: img('A-12a') },
  { code: 'A-12b', name: 'Zwężenie jezdni — prawostronne', description: 'Ostrzega o zwężeniu jezdni po prawej stronie.', category: 'ostrzegawcze', img: img('A-12b') },
  { code: 'A-13', name: 'Most zwodzony', description: 'Ostrzega o moście zwodzonym lub przeprawie promowej.', category: 'ostrzegawcze', img: img('A-13') },
  { code: 'A-14', name: 'Roboty na drodze', description: 'Ostrzega o prowadzonych na drodze robotach drogowych.', category: 'ostrzegawcze', img: img('A-14') },
  { code: 'A-15', name: 'Śliska jezdnia', description: 'Ostrzega o możliwości poślizgu pojazdu z powodu śliskiej nawierzchni.', category: 'ostrzegawcze', img: img('A-15') },
  { code: 'A-16', name: 'Przejście dla pieszych', description: 'Ostrzega o przejściu dla pieszych na drodze.', category: 'ostrzegawcze', img: img('A-16') },
  { code: 'A-17', name: 'Dzieci', description: 'Ostrzega o miejscu na drodze szczególnie uczęszczanym przez dzieci.', category: 'ostrzegawcze', img: img('A-17') },
  { code: 'A-18a', name: 'Zwierzęta gospodarskie', description: 'Ostrzega o możliwości napotkania na drodze zwierząt gospodarskich.', category: 'ostrzegawcze', img: img('A-18a') },
  { code: 'A-18b', name: 'Zwierzęta dzikie', description: 'Ostrzega o możliwości napotkania na drodze dzikich zwierząt.', category: 'ostrzegawcze', img: img('A-18b') },
  { code: 'A-20', name: 'Odcinek jezdni o ruchu dwukierunkowym', description: 'Ostrzega o odcinku drogi, na którym ruch odbywa się w obu kierunkach.', category: 'ostrzegawcze', img: img('A-20') },
  { code: 'A-21', name: 'Tramwaj', description: 'Ostrzega o przejeździe przez tory tramwajowe.', category: 'ostrzegawcze', img: img('A-21') },
  { code: 'A-22', name: 'Niebezpieczny zjazd', description: 'Ostrzega o stromym zjeździe drogi.', category: 'ostrzegawcze', img: img('A-22') },
  { code: 'A-23', name: 'Stromy podjazd', description: 'Ostrzega o stromym podjeździe drogi.', category: 'ostrzegawcze', img: img('A-23') },
  { code: 'A-24', name: 'Rowerzyści', description: 'Ostrzega o miejscu, w którym rowerzyści wjeżdżają na jezdnię lub ją przecinają.', category: 'ostrzegawcze', img: img('A-24') },
  { code: 'A-25', name: 'Spadające odłamki skalne', description: 'Ostrzega o możliwości spadania na drogę odłamków skalnych.', category: 'ostrzegawcze', img: img('A-25') },
  { code: 'A-27', name: 'Nabrzeże lub brzeg rzeki', description: 'Ostrzega o nabrzeżu lub nieogrodzonym brzegu rzeki w pobliżu drogi.', category: 'ostrzegawcze', img: img('A-27') },
  { code: 'A-28', name: 'Sypki żwir', description: 'Ostrzega o nawierzchni, z której mogą wyrzucać się spod kół kamienie lub żwir.', category: 'ostrzegawcze', img: img('A-28') },
  { code: 'A-29', name: 'Sygnały świetlne', description: 'Ostrzega o skrzyżowaniu lub przejściu dla pieszych, na którym ruch jest kierowany sygnałami świetlnymi.', category: 'ostrzegawcze', img: img('A-29') },
  { code: 'A-30', name: 'Inne niebezpieczeństwo', description: 'Ostrzega o niebezpieczeństwie innego rodzaju niż określone pozostałymi znakami ostrzegawczymi.', category: 'ostrzegawcze', img: img('A-30') },
  { code: 'A-31', name: 'Niebezpieczne pobocze', description: 'Ostrzega o niebezpiecznym poboczu drogi.', category: 'ostrzegawcze', img: img('A-31') },
  { code: 'A-32', name: 'Oszronienie jezdni', description: 'Ostrzega o możliwości wystąpienia oszronienia lub gołoledzi na drodze.', category: 'ostrzegawcze', img: img('A-32') },
  { code: 'A-34', name: 'Wypadek drogowy', description: 'Ostrzega o miejscu, w którym na drodze miał miejsce wypadek drogowy.', category: 'ostrzegawcze', img: img('A-34') },

  // === ZAKAZU (Prohibition - B) ===
  { code: 'B-1', name: 'Zakaz ruchu w obu kierunkach', description: 'Oznacza zakaz ruchu na drodze wszelkich pojazdów, kolumn pieszych oraz jeźdźców i poganiaczy.', category: 'zakazu', img: img('B-1') },
  { code: 'B-2', name: 'Zakaz wjazdu', description: 'Oznacza zakaz wjazdu na drogę lub jezdnię od strony umieszczenia znaku.', category: 'zakazu', img: img('B-2') },
  { code: 'B-9', name: 'Zakaz wjazdu rowerów', description: 'Oznacza zakaz wjazdu na drogę rowerów.', category: 'zakazu', img: img('B-9') },
  { code: 'B-10', name: 'Zakaz wjazdu motorowerów', description: 'Oznacza zakaz wjazdu na drogę motorowerów.', category: 'zakazu', img: img('B-10') },
  { code: 'B-20', name: 'Stop', description: 'Oznacza zakaz wjazdu na skrzyżowanie bez zatrzymania się przed drogą z pierwszeństwem.', category: 'zakazu', img: img('B-20') },
  { code: 'B-21', name: 'Zakaz skręcania w lewo', description: 'Oznacza zakaz skręcania w lewo i zawracania.', category: 'zakazu', img: img('B-21') },
  { code: 'B-22', name: 'Zakaz skręcania w prawo', description: 'Oznacza zakaz skręcania w prawo.', category: 'zakazu', img: img('B-22') },
  { code: 'B-23', name: 'Zakaz zawracania', description: 'Oznacza zakaz zawracania od miejsca ustawienia znaku do najbliższego skrzyżowania włącznie.', category: 'zakazu', img: img('B-23') },
  { code: 'B-24', name: 'Koniec zakazu zawracania', description: 'Oznacza odwołanie zakazu zawracania.', category: 'zakazu', img: img('B-24') },
  { code: 'B-29', name: 'Zakaz używania sygnałów dźwiękowych', description: 'Oznacza zakaz używania sygnałów dźwiękowych, chyba że jest to konieczne w celu ostrzeżenia o bezpośrednim zagrożeniu.', category: 'zakazu', img: img('B-29') },
  { code: 'B-30', name: 'Koniec zakazu używania sygnałów dźwiękowych', description: 'Oznacza koniec obowiązywania zakazu używania sygnałów dźwiękowych.', category: 'zakazu', img: img('B-30') },
  { code: 'B-31', name: 'Pierwszeństwo dla nadjeżdżających z przeciwka', description: 'Oznacza zakaz wjazdu na zwężony odcinek jezdni, jeśli zmusiłoby to kierujących z przeciwka do zatrzymania się.', category: 'zakazu', img: img('B-31') },
  { code: 'B-35', name: 'Zakaz postoju', description: 'Oznacza zakaz zatrzymania pojazdu na czas dłuższy niż 1 minuta.', category: 'zakazu', img: img('B-35') },
  { code: 'B-36', name: 'Zakaz zatrzymywania się', description: 'Oznacza zakaz zatrzymywania się i postoju pojazdu.', category: 'zakazu', img: img('B-36') },
  { code: 'B-37', name: 'Zakaz postoju w dni nieparzyste', description: 'Oznacza zakaz postoju w dni nieparzyste miesiąca po stronie drogi, na której jest umieszczony.', category: 'zakazu', img: img('B-37') },
  { code: 'B-38', name: 'Zakaz postoju w dni parzyste', description: 'Oznacza zakaz postoju w dni parzyste miesiąca po stronie drogi, na której jest umieszczony.', category: 'zakazu', img: img('B-38') },
  { code: 'B-40', name: 'Koniec strefy ograniczonego postoju', description: 'Oznacza koniec strefy, w której obowiązywał ograniczony postój.', category: 'zakazu', img: img('B-40') },
  { code: 'B-42', name: 'Koniec zakazów', description: 'Oznacza odwołanie zakazów wyrażonych znakami: B-25, B-26, B-29 i B-33.', category: 'zakazu', img: img('B-42') },

  // === NAKAZU (Mandatory - C) ===
  { code: 'C-1', name: 'Nakaz jazdy w prawo (przed znakiem)', description: 'Oznacza obowiązek jazdy w prawo przed znakiem.', category: 'nakazu', img: img('C-1') },
  { code: 'C-2', name: 'Nakaz jazdy w prawo (za znakiem)', description: 'Oznacza obowiązek jazdy w prawo za znakiem.', category: 'nakazu', img: img('C-2') },
  { code: 'C-3', name: 'Nakaz jazdy w lewo (przed znakiem)', description: 'Oznacza obowiązek jazdy w lewo przed znakiem.', category: 'nakazu', img: img('C-3') },
  { code: 'C-4', name: 'Nakaz jazdy w lewo (za znakiem)', description: 'Oznacza obowiązek jazdy w lewo za znakiem.', category: 'nakazu', img: img('C-4') },
  { code: 'C-5', name: 'Nakaz jazdy prosto', description: 'Oznacza obowiązek jazdy prosto przez skrzyżowanie.', category: 'nakazu', img: img('C-5') },
  { code: 'C-6', name: 'Nakaz jazdy prosto lub w prawo', description: 'Oznacza obowiązek jazdy prosto lub w prawo.', category: 'nakazu', img: img('C-6') },
  { code: 'C-7', name: 'Nakaz jazdy prosto lub w lewo', description: 'Oznacza obowiązek jazdy prosto lub w lewo.', category: 'nakazu', img: img('C-7') },
  { code: 'C-8', name: 'Nakaz jazdy w prawo lub w lewo', description: 'Oznacza obowiązek jazdy w prawo lub w lewo.', category: 'nakazu', img: img('C-8') },
  { code: 'C-9', name: 'Nakaz jazdy z prawej strony znaku', description: 'Oznacza obowiązek objechania wysepki lub przeszkody z prawej strony znaku.', category: 'nakazu', img: img('C-9') },
  { code: 'C-10', name: 'Nakaz jazdy z lewej strony znaku', description: 'Oznacza obowiązek objechania wysepki lub przeszkody z lewej strony znaku.', category: 'nakazu', img: img('C-10') },
  { code: 'C-11', name: 'Nakaz jazdy z prawej lub lewej strony znaku', description: 'Oznacza obowiązek objechania wysepki lub przeszkody z prawej lub lewej strony znaku.', category: 'nakazu', img: img('C-11') },
  { code: 'C-12', name: 'Ruch okrężny', description: 'Oznacza, że na skrzyżowaniu ruch odbywa się dookoła wyspy lub placu w kierunku wskazanym na znaku.', category: 'nakazu', img: img('C-12') },
  { code: 'C-13', name: 'Droga dla rowerów', description: 'Oznacza drogę lub jej część przeznaczoną dla kierujących rowerami, którzy są obowiązani z niej korzystać.', category: 'nakazu', img: img('C-13') },
  { code: 'C-13a', name: 'Koniec drogi dla rowerów', description: 'Oznacza koniec drogi przeznaczonej dla rowerów.', category: 'nakazu', img: img('C-13a') },
  { code: 'C-16', name: 'Droga dla pieszych', description: 'Oznacza drogę lub jej część przeznaczoną dla pieszych, którzy są obowiązani z niej korzystać.', category: 'nakazu', img: img('C-16') },
  { code: 'C-16a', name: 'Koniec drogi dla pieszych', description: 'Oznacza koniec drogi przeznaczonej dla pieszych.', category: 'nakazu', img: img('C-16a') },

  // === INFORMACYJNE (Information - D) ===
  { code: 'D-1', name: 'Droga z pierwszeństwem', description: 'Oznacza początek lub kontynuację drogi z pierwszeństwem przejazdu na skrzyżowaniach.', category: 'informacyjne', img: img('D-1') },
  { code: 'D-2', name: 'Koniec drogi z pierwszeństwem', description: 'Oznacza koniec drogi z pierwszeństwem przejazdu.', category: 'informacyjne', img: img('D-2') },
  { code: 'D-3', name: 'Droga jednokierunkowa', description: 'Oznacza drogę lub jezdnię, na której ruch odbywa się tylko w jednym kierunku.', category: 'informacyjne', img: img('D-3') },
  { code: 'D-4a', name: 'Droga bez przejazdu (z lewej)', description: 'Oznacza, że droga boczna po lewej stronie skrzyżowania jest drogą bez przejazdu.', category: 'informacyjne', img: img('D-4a') },
  { code: 'D-4b', name: 'Droga bez przejazdu (z prawej)', description: 'Oznacza, że droga boczna po prawej stronie skrzyżowania jest drogą bez przejazdu.', category: 'informacyjne', img: img('D-4b') },
  { code: 'D-5', name: 'Pierwszeństwo na zwężonym odcinku drogi', description: 'Oznacza, że kierujący ma pierwszeństwo przejazdu na zwężonym odcinku drogi przed pojazdami nadjeżdżającymi z przeciwka.', category: 'informacyjne', img: img('D-5') },
  { code: 'D-6', name: 'Przejście dla pieszych', description: 'Oznacza miejsce przeznaczone do przechodzenia pieszych w poprzek drogi.', category: 'informacyjne', img: img('D-6') },
  { code: 'D-6a', name: 'Przejazd dla rowerzystów', description: 'Oznacza miejsce przeznaczone do przejeżdżania rowerzystów w poprzek drogi.', category: 'informacyjne', img: img('D-6a') },
  { code: 'D-6b', name: 'Przejście dla pieszych i przejazd dla rowerzystów', description: 'Oznacza miejsce przeznaczone zarówno do przechodzenia pieszych, jak i do przejeżdżania rowerzystów.', category: 'informacyjne', img: img('D-6b') },
  { code: 'D-7', name: 'Droga ekspresowa', description: 'Oznacza początek drogi ekspresowej i stosowanie się do zasad ruchu obowiązujących na drodze ekspresowej.', category: 'informacyjne', img: img('D-7') },
  { code: 'D-9', name: 'Autostrada', description: 'Oznacza początek autostrady i stosowanie się do zasad ruchu obowiązujących na autostradzie.', category: 'informacyjne', img: img('D-9') },
  { code: 'D-11', name: 'Początek pasa ruchu dla autobusów', description: 'Oznacza początek pasa ruchu przeznaczonego wyłącznie dla autobusów.', category: 'informacyjne', img: img('D-11') },
  { code: 'D-12', name: 'Pas ruchu dla autobusów', description: 'Oznacza pas ruchu przeznaczony wyłącznie dla autobusów i trolejbusów na liniach regularnych.', category: 'informacyjne', img: img('D-12') },
  { code: 'D-13', name: 'Początek pasa ruchu powolnego', description: 'Oznacza początek dodatkowego pasa ruchu przeznaczonego dla pojazdów poruszających się z małą prędkością.', category: 'informacyjne', img: img('D-13') },
  { code: 'D-14', name: 'Koniec pasa ruchu', description: 'Oznacza, że dany pas ruchu kończy się i kierujący powinien zmienić pas ruchu na sąsiedni.', category: 'informacyjne', img: img('D-14') },
  { code: 'D-15', name: 'Przystanek autobusowy', description: 'Oznacza miejsce zatrzymywania się autobusów — przystanek komunikacji zbiorowej.', category: 'informacyjne', img: img('D-15') },
  { code: 'D-16', name: 'Przystanek trolejbusowy', description: 'Oznacza miejsce zatrzymywania się trolejbusów.', category: 'informacyjne', img: img('D-16') },
  { code: 'D-17', name: 'Przystanek tramwajowy', description: 'Oznacza miejsce zatrzymywania się tramwajów.', category: 'informacyjne', img: img('D-17') },
  { code: 'D-19', name: 'Postój taksówek', description: 'Oznacza miejsce przeznaczone na postój taksówek.', category: 'informacyjne', img: img('D-19') },
  { code: 'D-20', name: 'Koniec postoju taksówek', description: 'Oznacza koniec miejsca przeznaczonego na postój taksówek.', category: 'informacyjne', img: img('D-20') },
  { code: 'D-21a', name: 'Policja', description: 'Oznacza, że w pobliżu znajduje się posterunek lub komisariat policji.', category: 'informacyjne', img: img('D-21a') },
  { code: 'D-22', name: 'Punkt opatrunkowy', description: 'Oznacza, że w pobliżu znajduje się punkt opatrunkowy lub pierwszej pomocy.', category: 'informacyjne', img: img('D-22') },
  { code: 'D-24', name: 'Telefon', description: 'Oznacza, że w pobliżu znajduje się telefon dostępny publicznie.', category: 'informacyjne', img: img('D-24') },
  { code: 'D-25', name: 'Poczta', description: 'Oznacza, że w pobliżu znajduje się placówka pocztowa.', category: 'informacyjne', img: img('D-25') },
  { code: 'D-26a', name: 'Wulkanizacja', description: 'Oznacza, że w pobliżu znajduje się punkt wulkanizacji opon.', category: 'informacyjne', img: img('D-26a') },
  { code: 'D-26c', name: 'Toaleta publiczna', description: 'Oznacza, że w pobliżu znajduje się toaleta publiczna.', category: 'informacyjne', img: img('D-26c') },
  { code: 'D-26d', name: 'Natrysk', description: 'Oznacza, że w pobliżu znajduje się natrysk (prysznic) dostępny publicznie.', category: 'informacyjne', img: img('D-26d') },
  { code: 'D-27', name: 'Bufet lub kawiarnia', description: 'Oznacza, że w pobliżu znajduje się bufet, kawiarnia lub inny obiekt gastronomiczny.', category: 'informacyjne', img: img('D-27') },
  { code: 'D-28', name: 'Restauracja', description: 'Oznacza, że w pobliżu znajduje się restauracja.', category: 'informacyjne', img: img('D-28') },
  { code: 'D-29', name: 'Hotel (motel)', description: 'Oznacza, że w pobliżu znajduje się hotel lub motel.', category: 'informacyjne', img: img('D-29') },
  { code: 'D-30', name: 'Obozowisko (kemping)', description: 'Oznacza, że w pobliżu znajduje się miejsce biwakowania — obozowisko.', category: 'informacyjne', img: img('D-30') },
  { code: 'D-31', name: 'Obozowisko z podłączeniami elektrycznymi', description: 'Oznacza, że w pobliżu znajduje się obozowisko wyposażone w podłączenia elektryczne do przyczep kempingowych.', category: 'informacyjne', img: img('D-31') },
  { code: 'D-32', name: 'Pole biwakowe', description: 'Oznacza, że w pobliżu znajduje się pole biwakowe.', category: 'informacyjne', img: img('D-32') },
  { code: 'D-33', name: 'Schronisko młodzieżowe', description: 'Oznacza, że w pobliżu znajduje się schronisko młodzieżowe.', category: 'informacyjne', img: img('D-33') },
  { code: 'D-34', name: 'Punkt informacji turystycznej', description: 'Oznacza, że w pobliżu znajduje się punkt informacji turystycznej.', category: 'informacyjne', img: img('D-34') },
  { code: 'D-37', name: 'Tunel', description: 'Oznacza wjazd do tunelu; w tunelu obowiązuje jazda z włączonymi światłami mijania.', category: 'informacyjne', img: img('D-37') },
  { code: 'D-40', name: 'Strefa zamieszkania', description: 'Oznacza wjazd do strefy zamieszkania, w której pieszy może korzystać z całej szerokości drogi.', category: 'informacyjne', img: img('D-40') },
  { code: 'D-41', name: 'Koniec strefy zamieszkania', description: 'Oznacza koniec strefy zamieszkania.', category: 'informacyjne', img: img('D-41') },
  { code: 'D-42', name: 'Obszar zabudowany', description: 'Oznacza wjazd na obszar zabudowany; obowiązuje ograniczenie prędkości do 50 km/h.', category: 'informacyjne', img: img('D-42') },
  { code: 'D-43', name: 'Koniec obszaru zabudowanego', description: 'Oznacza koniec obszaru zabudowanego.', category: 'informacyjne', img: img('D-43') },
  { code: 'D-46', name: 'Droga wewnętrzna', description: 'Oznacza początek drogi wewnętrznej (niepublicznej).', category: 'informacyjne', img: img('D-46') },
  { code: 'D-47', name: 'Koniec drogi wewnętrznej', description: 'Oznacza koniec drogi wewnętrznej.', category: 'informacyjne', img: img('D-47') },
  { code: 'D-48', name: 'Zmiana pierwszeństwa', description: 'Oznacza, że na najbliższym skrzyżowaniu zmienia się dotychczasowa organizacja pierwszeństwa przejazdu.', category: 'informacyjne', img: img('D-48') },

  // === KIERUNKU I MIEJSCOWOŚCI (Direction - E) ===
  { code: 'E-1', name: 'Tablica przeddrogowskazowa', description: 'Informuje o zbliżaniu się do skrzyżowania i wskazuje kierunki do miejscowości.', category: 'kierunku', img: img('E-1') },
  { code: 'E-1a', name: 'Tablica przeddrogowskazowa na autostradzie', description: 'Tablica przeddrogowskazowa stosowana na autostradach, informująca o zbliżającym się węźle lub zjeździe.', category: 'kierunku', img: img('E-1a') },
  { code: 'E-2a', name: 'Drogowskaz tablicowy umieszczany obok jezdni', description: 'Wskazuje kierunek do miejscowości; umieszczany obok jezdni na skrzyżowaniach.', category: 'kierunku', img: img('E-2a') },
  { code: 'E-2b', name: 'Drogowskaz tablicowy umieszczany nad jezdnią', description: 'Wskazuje kierunek do miejscowości; umieszczany nad jezdnią.', category: 'kierunku', img: img('E-2b') },
  { code: 'E-3', name: 'Drogowskaz w kształcie strzały', description: 'Drogowskaz strzałkowy wskazujący kierunek jazdy do określonej miejscowości.', category: 'kierunku', img: img('E-3') },
  { code: 'E-4', name: 'Drogowskaz do miejscowości przy drodze bocznej', description: 'Drogowskaz wskazujący kierunek do miejscowości położonej przy drodze odchodzącej od trasy głównej.', category: 'kierunku', img: img('E-4') },
  { code: 'E-5', name: 'Drogowskaz do dzielnicy miasta', description: 'Wskazuje na skrzyżowaniu kierunek dojazdu do dzielnicy lub ważnego dla podróżnych placu (ulicy) w mieście.', category: 'kierunku', img: img('E-5') },
  { code: 'E-6b', name: 'Drogowskaz do obiektu komunikacji zbiorowej', description: 'Wskazuje kierunek do dworca kolejowego, autobusowego lub przystanku komunikacji zbiorowej.', category: 'kierunku', img: img('E-6b') },
  { code: 'E-7', name: 'Drogowskaz do przystani wodnej', description: 'Wskazuje kierunek jazdy do przystani wodnej lub portu.', category: 'kierunku', img: img('E-7') },
  { code: 'E-8', name: 'Drogowskaz do plaży lub kąpieliska', description: 'Wskazuje kierunek jazdy do plaży lub kąpieliska.', category: 'kierunku', img: img('E-8') },
  { code: 'E-9', name: 'Drogowskaz do muzeum', description: 'Wskazuje kierunek jazdy do muzeum.', category: 'kierunku', img: img('E-9') },
  { code: 'E-10', name: 'Drogowskaz do zabytku', description: 'Wskazuje kierunek jazdy do obiektu zabytkowego.', category: 'kierunku', img: img('E-10') },
  { code: 'E-11', name: 'Drogowskaz do zabytku przyrody', description: 'Wskazuje kierunek do zabytku przyrody lub obiektu przyrodniczego.', category: 'kierunku', img: img('E-11') },
  { code: 'E-12a', name: 'Drogowskaz do szlaku rowerowego', description: 'Wskazuje kierunek do szlaku rowerowego.', category: 'kierunku', img: img('E-12a') },
  { code: 'E-13', name: 'Tablica kierunkowa', description: 'Stosuje się w celu potwierdzenia kierunku drogi i podania odległości do miejscowości na niej wymienionych.', category: 'kierunku', img: img('E-13') },
  { code: 'E-14', name: 'Tablica szlaku drogowego', description: 'Stosuje się w celu potwierdzenia przebiegu drogi krajowej, podania jej numeru, głównych miejscowości leżących na danym szlaku i odległości do nich.', category: 'kierunku', img: img('E-14') },
  { code: 'E-15a', name: 'Tablica numeru drogi krajowej', description: 'Tablica z numerem drogi krajowej.', category: 'kierunku', img: img('E-15a') },
  { code: 'E-17a', name: 'Miejscowość', description: 'Oznacza wjazd do miejscowości.', category: 'kierunku', img: img('E-17a') },
  { code: 'E-18a', name: 'Koniec miejscowości', description: 'Oznacza wyjazd z miejscowości.', category: 'kierunku', img: img('E-18a') },
  { code: 'E-21', name: 'Dzielnica (osiedle)', description: 'Informuje o wjeździe na teren określonej dzielnicy lub osiedla.', category: 'kierunku', img: img('E-21') },
  { code: 'E-22a', name: 'Samochodowy szlak turystyczny', description: 'Informuje o przebiegu samochodowego szlaku turystycznego.', category: 'kierunku', img: img('E-22a') },
  { code: 'E-22b', name: 'Obiekt na samochodowym szlaku turystycznym', description: 'Informuje o obiekcie znajdującym się na samochodowym szlaku turystycznym.', category: 'kierunku', img: img('E-22b') },
  { code: 'E-22c', name: 'Informacja o obiektach turystycznych', description: 'Informuje o obiektach turystycznych w danym rejonie.', category: 'kierunku', img: img('E-22c') },

  // === UZUPEŁNIAJĄCE (Supplementary - F) ===
  { code: 'F-1', name: 'Przejście graniczne', description: 'Informuje o zbliżaniu się do przejścia granicznego państwa.', category: 'uzupelniajace', img: img('F-1') },
  { code: 'F-2', name: 'Przekraczanie granicy zabronione', description: 'Informuje o zakazie przekraczania granicy państwowej w danym miejscu.', category: 'uzupelniajace', img: img('F-2') },
  { code: 'F-3', name: 'Granica obszaru administracyjnego', description: 'Informuje o wjeździe na obszar jednostki administracyjnej.', category: 'uzupelniajace', img: img('F-3') },
  { code: 'F-4', name: 'Nazwa rzeki', description: 'Informuje o nazwie rzeki, kanału lub innego cieku wodnego.', category: 'uzupelniajace', img: img('F-4') },
  { code: 'F-6', name: 'Uprzedzenie o znaku stop', description: 'Uprzedza o zbliżaniu się do skrzyżowania, na którym ustawiony jest znak B-20 (stop).', category: 'uzupelniajace', img: img('F-6') },
  { code: 'F-7', name: 'Sposób jazdy w związku z zakazem skręcania', description: 'Wskazuje dozwolony sposób dojazdu do obiektu przy drodze z zakazem skręcania.', category: 'uzupelniajace', img: img('F-7') },
  { code: 'F-8', name: 'Objazd w związku z zamknięciem drogi', description: 'Wskazuje kierunek objazdu drogi zamkniętej dla ruchu.', category: 'uzupelniajace', img: img('F-8') },
  { code: 'F-9', name: 'Prowadzenie na drodze o zmienionej organizacji ruchu', description: 'Wskazuje tymczasowy sposób prowadzenia ruchu w miejscu robót drogowych.', category: 'uzupelniajace', img: img('F-9') },
  { code: 'F-10', name: 'Kierunki na pasach ruchu', description: 'Informuje o kierunkach jazdy z poszczególnych pasów ruchu na skrzyżowaniu.', category: 'uzupelniajace', img: img('F-10') },
  { code: 'F-11', name: 'Kierunki na pasie ruchu', description: 'Informuje o kierunkach jazdy z jednego, określonego pasa ruchu.', category: 'uzupelniajace', img: img('F-11') },
  { code: 'F-15', name: 'Niesymetryczne skrzyżowanie lub wlot jednokierunkowy', description: 'Informuje o geometrii skrzyżowania, na którym wloty nie są symetryczne.', category: 'uzupelniajace', img: img('F-15') },
  { code: 'F-16', name: 'Koniec pasa ruchu', description: 'Informuje o zbliżającym się końcu pasa ruchu i konieczności zmiany pasa.', category: 'uzupelniajace', img: img('F-16') },
  { code: 'F-18', name: 'Przeciwny kierunek dla określonych pojazdów', description: 'Informuje, że wyznaczony pas ruchu jest przeznaczony dla pojazdów jadących w przeciwnym kierunku.', category: 'uzupelniajace', img: img('F-18') },
  { code: 'F-19', name: 'Pas ruchu dla określonych pojazdów', description: 'Informuje, że dany pas ruchu jest przeznaczony dla określonej kategorii pojazdów.', category: 'uzupelniajace', img: img('F-19') },

  // === KOLEJOWE (Railway crossing - G) ===
  { code: 'G-1a', name: 'Słupek wskaźnikowy (trzy kreski, prawy)', description: 'Ostrzega o zbliżaniu się do przejazdu kolejowego; umieszczany ok. 240 m przed przejazdem, po prawej stronie.', category: 'kolejowe', img: img('G-1a') },
  { code: 'G-1b', name: 'Słupek wskaźnikowy (trzy kreski, lewy)', description: 'Ostrzega o zbliżaniu się do przejazdu kolejowego; umieszczany ok. 240 m przed przejazdem, po lewej stronie.', category: 'kolejowe', img: img('G-1b') },
  { code: 'G-1c', name: 'Słupek wskaźnikowy (dwie kreski, prawy)', description: 'Ostrzega o zbliżaniu się do przejazdu kolejowego; umieszczany ok. 160 m przed przejazdem, po prawej stronie.', category: 'kolejowe', img: img('G-1c') },
  { code: 'G-1d', name: 'Słupek wskaźnikowy (dwie kreski, lewy)', description: 'Ostrzega o zbliżaniu się do przejazdu kolejowego; umieszczany ok. 160 m przed przejazdem, po lewej stronie.', category: 'kolejowe', img: img('G-1d') },
  { code: 'G-1e', name: 'Słupek wskaźnikowy (jedna kreska, prawy)', description: 'Ostrzega o zbliżaniu się do przejazdu kolejowego; umieszczany ok. 80 m przed przejazdem, po prawej stronie.', category: 'kolejowe', img: img('G-1e') },
  { code: 'G-1f', name: 'Słupek wskaźnikowy (jedna kreska, lewy)', description: 'Ostrzega o zbliżaniu się do przejazdu kolejowego; umieszczany ok. 80 m przed przejazdem, po lewej stronie.', category: 'kolejowe', img: img('G-1f') },
  { code: 'G-2', name: 'Sieć pod napięciem', description: 'Informuje o przebiegu nad przejazdem kolejowym sieci trakcyjnej pod napięciem.', category: 'kolejowe', img: img('G-2') },
  { code: 'G-3', name: 'Krzyż św. Andrzeja (jednotorowy)', description: 'Oznacza bezpośrednie miejsce przejazdu kolejowego jednotorowego; nakazuje ustąpienie pierwszeństwa pociągowi.', category: 'kolejowe', img: img('G-3') },
  { code: 'G-4', name: 'Krzyż św. Andrzeja (wielotorowy)', description: 'Oznacza bezpośrednie miejsce przejazdu kolejowego wielotorowego; nakazuje ustąpienie pierwszeństwa pociągowi.', category: 'kolejowe', img: img('G-4') },

  // === POZIOME (Horizontal road markings - P) ===
  { code: 'P-1', name: 'Linia pojedyncza przerywana', description: 'Oddziela pasy ruchu o tym samym kierunku; pozwala na zmianę pasa.', category: 'poziome', img: img('P-1') },
  { code: 'P-2', name: 'Linia pojedyncza ciągła', description: 'Zakaz przejeżdżania i najeżdżania na linię; oddziela pasy ruchu.', category: 'poziome', img: img('P-2') },
  { code: 'P-3', name: 'Linia jednostronnie przekraczalna', description: 'Linia ciągła z przerywaną obok; można ją przekraczać tylko od strony linii przerywanej.', category: 'poziome', img: img('P-3') },
  { code: 'P-4', name: 'Linia podwójna ciągła', description: 'Rozdziela ruch o przeciwnych kierunkach; zakaz przekraczania z obu stron.', category: 'poziome', img: img('P-4') },
  { code: 'P-5', name: 'Linia podwójna przerywana', description: 'Oznacza pas ruchu o zmiennym kierunku; kierunek wskazują sygnalizatory.', category: 'poziome', img: img('P-5') },
  { code: 'P-6', name: 'Linia ostrzegawcza', description: 'Linia przerywana o wydłużonych kresach; ostrzega o zbliżaniu się do linii ciągłej lub miejsca niebezpiecznego.', category: 'poziome', img: img('P-6') },
  { code: 'P-7a', name: 'Linia krawędziowa przerywana', description: 'Oznacza krawędź jezdni; dopuszcza wjazd na pobocze.', category: 'poziome', img: img('P-7a') },
  { code: 'P-7b', name: 'Linia krawędziowa ciągła', description: 'Oznacza krawędź jezdni; zabrania wjazdu na pobocze.', category: 'poziome', img: img('P-7b') },
  { code: 'P-8a', name: 'Strzałka kierunkowa na wprost', description: 'Oznacza pas przeznaczony do jazdy na wprost.', category: 'poziome', img: img('P-8a') },
  { code: 'P-8b', name: 'Strzałka kierunkowa do skręcania', description: 'Oznacza pas przeznaczony do skręcania w kierunku wskazanym przez strzałkę.', category: 'poziome', img: img('P-8b') },
  { code: 'P-8c', name: 'Strzałka kierunkowa na wprost i do skręcania', description: 'Oznacza pas przeznaczony do jazdy na wprost lub do skręcania.', category: 'poziome', img: img('P-8c') },
  { code: 'P-9', name: 'Strzałka naprowadzająca', description: 'Informuje o zbliżaniu się do miejsca, w którym konieczna jest zmiana pasa ruchu.', category: 'poziome', img: img('P-9') },
  { code: 'P-10', name: 'Przejście dla pieszych', description: 'Oznacza miejsce przeznaczone do przechodzenia pieszych przez jezdnię.', category: 'poziome', img: img('P-10') },
  { code: 'P-11', name: 'Przejazd dla rowerzystów', description: 'Oznacza miejsce przeznaczone do przejeżdżania rowerzystów przez jezdnię.', category: 'poziome', img: img('P-11') },
  { code: 'P-12', name: 'Linia bezwzględnego zatrzymania — stop', description: 'Linia ciągła poprzeczna; wymaga bezwzględnego zatrzymania pojazdu.', category: 'poziome', img: img('P-12') },
  { code: 'P-13', name: 'Linia warunkowego zatrzymania (trójkąty)', description: 'Linia złożona z trójkątów; nakazuje zatrzymanie, gdy wymagają tego warunki ruchu.', category: 'poziome', img: img('P-13') },
  { code: 'P-14', name: 'Linia warunkowego zatrzymania (prostokąty)', description: 'Linia złożona z prostokątów; nakazuje zatrzymanie przed sygnalizatorem świetlnym.', category: 'poziome', img: img('P-14') },
  { code: 'P-15', name: 'Trójkąt podporządkowania', description: 'Trójkąt namalowany na jezdni; uprzedza o obowiązku ustąpienia pierwszeństwa.', category: 'poziome', img: img('P-15') },
  { code: 'P-16', name: 'Napis STOP', description: 'Napis na nawierzchni; uprzedza o obowiązku zatrzymania się przed skrzyżowaniem.', category: 'poziome', img: img('P-16') },
  { code: 'P-17', name: 'Linia przystankowa', description: 'Oznacza miejsce zatrzymania pojazdu komunikacji zbiorowej na przystanku.', category: 'poziome', img: img('P-17') },
  { code: 'P-21', name: 'Powierzchnia wyłączona', description: 'Obszar jezdni wyłączony z ruchu, oznaczony liniami ukośnymi; zakaz wjazdu.', category: 'poziome', img: img('P-21') },
  { code: 'P-22', name: 'BUS', description: 'Napis na jezdni oznaczający pas ruchu przeznaczony dla pojazdów komunikacji zbiorowej.', category: 'poziome', img: img('P-22') },
  { code: 'P-23', name: 'Rower', description: 'Symbol roweru na jezdni; oznacza drogę lub pas dla rowerów.', category: 'poziome', img: img('P-23') },
  { code: 'P-24', name: 'Miejsce dla pojazdu osoby niepełnosprawnej', description: 'Symbol osoby na wózku inwalidzkim; oznacza miejsce parkingowe zastrzeżone dla osób niepełnosprawnych.', category: 'poziome', img: img('P-24') },
  { code: 'P-25', name: 'Próg zwalniający', description: 'Oznacza wypukłość na jezdni zastosowaną w celu spowolnienia ruchu pojazdów.', category: 'poziome', img: img('P-25') },

  // === SZLAKI ROWEROWE (Cycling route signs - R) ===
  { code: 'R-1', name: 'Szlak rowerowy krajowy', description: 'Oznacza przebieg szlaku rowerowego krajowego. Zawiera symbol roweru i kolorowy prostokąt.', category: 'szlaki_rowerowe', img: img('R-1') },
  { code: 'R-1a', name: 'Początek (koniec) szlaku rowerowego', description: 'Oznacza początek lub koniec szlaku rowerowego krajowego. Zawiera symbol roweru i kolorowe kółko.', category: 'szlaki_rowerowe', img: img('R-1a') },
  { code: 'R-1b', name: 'Zmiana kierunku szlaku rowerowego', description: 'Oznacza zmianę kierunku szlaku rowerowego krajowego. Zawiera symbol roweru i kolorową strzałkę.', category: 'szlaki_rowerowe', img: img('R-1b') },
  { code: 'R-2', name: 'Szlak rowerowy międzynarodowy', description: 'Oznacza przebieg szlaku rowerowego międzynarodowego.', category: 'szlaki_rowerowe', img: img('R-2') },
  { code: 'R-2a', name: 'Zmiana kierunku szlaku rowerowego międzynarodowego', description: 'Oznacza zmianę kierunku szlaku rowerowego międzynarodowego.', category: 'szlaki_rowerowe', img: img('R-2a') },
  { code: 'R-3', name: 'Tablica szlaku rowerowego', description: 'Tablica informacyjna szlaku rowerowego wskazująca kierunek jazdy oraz odległość do miejscowości.', category: 'szlaki_rowerowe', img: img('R-3') },

  // === TABLICZKI (Sign plates - T) ===
  { code: 'T-1', name: 'Tabliczka wskazująca odległość', description: 'Podaje odległość od znaku do miejsca, o którym informuje znak główny.', category: 'tabliczki', img: img('T-1') },
  { code: 'T-2', name: 'Tabliczka wskazująca długość odcinka niebezpiecznego', description: 'Podaje długość odcinka, na którym występuje zagrożenie.', category: 'tabliczki', img: img('T-2') },
  { code: 'T-3', name: 'Tabliczka "koniec"', description: 'Informuje o zakończeniu obowiązywania znaku, pod którym jest umieszczona.', category: 'tabliczki', img: img('T-3') },
  { code: 'T-4', name: 'Tabliczka wskazująca liczbę zakrętów', description: 'Podaje liczbę następujących po sobie zakrętów.', category: 'tabliczki', img: img('T-4') },
  { code: 'T-5', name: 'Tabliczka wskazująca początek drogi z pierwszeństwem', description: 'Podaje przebieg drogi z pierwszeństwem (schemat skrzyżowania).', category: 'tabliczki', img: img('T-5') },
  { code: 'T-6a', name: 'Tabliczka wskazująca przebieg drogi z pierwszeństwem', description: 'Schemat skrzyżowania pokazujący przebieg drogi z pierwszeństwem — odgałęzienie w lewo.', category: 'tabliczki', img: img('T-6a') },
  { code: 'T-7', name: 'Tabliczka wskazująca układ torów tramwajowych', description: 'Schemat skrzyżowania z torami tramwajowymi i drogą z pierwszeństwem.', category: 'tabliczki', img: img('T-7') },
  { code: 'T-10', name: 'Tabliczka wskazująca bocznicę kolejową', description: 'Informuje, że przejazd kolejowy dotyczy bocznicy kolejowej.', category: 'tabliczki', img: img('T-10') },
  { code: 'T-13', name: 'Tabliczka wskazująca koleinę', description: 'Wskazuje odcinek drogi, na którym występują deformacje nawierzchni w postaci kolein.', category: 'tabliczki', img: img('T-13') },
  { code: 'T-14', name: 'Tabliczka — miejsce częstych wypadków', description: 'Wskazuje miejsce, w którym często zdarzają się wypadki.', category: 'tabliczki', img: img('T-14') },
  { code: 'T-15', name: 'Tabliczka — miejsce częstych wypadków (śliska nawierzchnia)', description: 'Wskazuje miejsce częstych wypadków spowodowanych śliską nawierzchnią.', category: 'tabliczki', img: img('T-15') },
  { code: 'T-16', name: 'Tabliczka — wyjazd pojazdów uprzywilejowanych', description: 'Wskazuje miejsce, w którym pojazdy uprzywilejowane często wjeżdżają na drogę.', category: 'tabliczki', img: img('T-16') },
  { code: 'T-17', name: 'Tabliczka wskazująca granicę państwa', description: 'Wskazuje granicę państwa.', category: 'tabliczki', img: img('T-17') },
  { code: 'T-18', name: 'Tabliczka — nieoczekiwana zmiana kierunku ruchu', description: 'Wskazuje nieoczekiwaną zmianę kierunku ruchu na drodze.', category: 'tabliczki', img: img('T-18') },
  { code: 'T-19', name: 'Tabliczka — malowanie znaków poziomych', description: 'Informuje o prowadzonych pracach malowania znaków poziomych na jezdni.', category: 'tabliczki', img: img('T-19') },
  { code: 'T-20', name: 'Tabliczka wskazująca długość odcinka z zakazem', description: 'Podaje długość odcinka, na którym obowiązuje zakaz.', category: 'tabliczki', img: img('T-20') },
  { code: 'T-21', name: 'Tabliczka wskazująca odległość do początku zakazu', description: 'Podaje odległość do miejsca, w którym zaczyna obowiązywać zakaz.', category: 'tabliczki', img: img('T-21') },
  { code: 'T-22', name: 'Tabliczka — nie dotyczy rowerów jednośladowych', description: 'Wskazuje, że znak, pod którym jest umieszczona, nie dotyczy rowerów jednośladowych.', category: 'tabliczki', img: img('T-22') },
  { code: 'T-25a', name: 'Tabliczka — początek zakazu', description: 'Strzałka skierowana do przodu — oznacza początek odcinka z zakazem.', category: 'tabliczki', img: img('T-25a') },
  { code: 'T-25b', name: 'Tabliczka — kontynuacja zakazu', description: 'Strzałki w obie strony — oznaczają kontynuację obowiązywania zakazu.', category: 'tabliczki', img: img('T-25b') },
  { code: 'T-25c', name: 'Tabliczka — koniec zakazu', description: 'Strzałka skierowana do tyłu — oznacza koniec odcinka z zakazem.', category: 'tabliczki', img: img('T-25c') },
  { code: 'T-27', name: 'Tabliczka — przejście uczęszczane przez dzieci', description: 'Ostrzega, że przejście dla pieszych jest szczególnie uczęszczane przez dzieci.', category: 'tabliczki', img: img('T-27') },
  { code: 'T-29', name: 'Tabliczka — symbol osoby niepełnosprawnej', description: 'Tabliczka informująca o miejscu przeznaczonym dla pojazdu samochodowego uprawnionej osoby niepełnosprawnej o obniżonej sprawności ruchowej.', category: 'tabliczki', img: img('T-29') },
];
