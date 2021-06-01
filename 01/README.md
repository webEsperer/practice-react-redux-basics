> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s2e06-react-redux-basics` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#01` React i Redux: Podstawy


Twoim zadaniem będzie wykorzystać klasę `Subject`, która implementuje wzorzec obserwator i jest zlokalizowana w `./src/libs/Subject.js`. 

Obecnie w momencie uruchomienia zdarzenia `click` są uruchamiane 3 różne funkcje. Spróbuj zmodyfikować ten kod w taki sposób, aby podczas kliknięcia była rozgłaszana ta informacja do wszystkich zainteresowanych funkcji poprzez metodą `notify()` w `Subject`.

Ten sposób implementacji zwiększy elastyczność Twojego rozwiązania, co znacznie ułatwi dodawanie kolejnych funkcji mających wykonywać operacje związane z tym zdarzeniem.

To zadanie ma na celu zaprezentować Ci w jaki sposób Magazyn (ang. Store) emituje informacje do Widoku (ang. View), który jest reprezentowany przez komponenty.

&nbsp;

> :arrow_left: ~~*poprzednie zadanie*~~ | [*następne zadanie*](./../02) :arrow_right:
