> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s2e06-react-redux-basics` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#04` React i Redux: Podstawy


Tym razem również musisz dodać kolejny element do `state`. W tym przypadku to właściwość `users`, która początkowo jest pustą tablicą.

Po każdym uzupełnieniu pola `<input>` należy do tej tablicy dodać obiekt, który będzie przechowywać nazwę użytkownika oraz id. Identyfikator ma być kolejnym największym numerem względem obecnie przechowywanych id.

W komponencie `UserList` należy zdefiniować obsługę dodawania kolejnych użytkowników oraz ich wyświetlanie. Zwróć uwagę, że to komponent klasowy i taki ma zostać. W ten sposób masz zaimplementować obsługę Magazynu.

Drugi komponent to `UserItem`, który renderuje informacje o użytkowniku. Znajdziesz tam również `<button>`, po którego kliknięciu należy usunąć ze `state` użytkownika o danym id. Tym razem mamy komponent funkcyjny, w którym należy użyć odpowiednich hooków.

Z opisu wynika, że będziemy potrzebować dwóch Akcji:
- dodawanie kolejnego użytkownika
- usuwanie wybranego użytkownika.

Uzupełnij nasze rozwiązanie o tą funkcjonalność. Pamiętaj o tworzeniu kopii dla aktualnego stanu i modyfikowaniu tylko niezbędnych elementów. 

&nbsp;

> :arrow_left: [*poprzednie zadanie*](./../03) | [*następne zadanie*](./../05) :arrow_right:
