# [![](../assets/img/logo-readme2.jpg)](https://devmentor.pl) &nbsp; React i Redux: Podstawy #03

> :loudspeaker: Jeśli chciałbyś więcej tego typu zadań to zapraszam do :moneybag: [wsparcia mojego konta](https://github.com/sponsors/devmentor-pl)!

&nbsp;

Tym razem do naszego Magazynu dodamy kolejny element. Będzie to`state`, który przechowuje informacje o aktualnej dacie tj. `new Date()`. Jeśli wykonałeś prawidłowo poprzednie zadanie to odkomentowanie komponentu `<Task03 />` w `./src/components/App.js` nie powinno wywołać żadnego błędu. 

Jeśli jeszcze tego nie zrobiłeś to teraz będzie najlepszy poment, aby utworzyć wartości początkowe dla naszego stanu (ang. state). Pamiętaj, że poprzednie zadaine również musi działać prawidłowo więc wartości początkowe powinny wyglądać mniej więcej w taki sposób:
```
{
    message: 'Działa!',
    time: new Date(),
}
```

Należy również zdefiniować odpowiedni reduktor (ang. Reducer), który wykonuje zmiany w naszym Magazynie. Zwróć uwagę, że mamy zdefiniowany `onClick` w pliku `./03/Task03.js`, który uruchamia akcję `getCurrentTime`. Jej zadaniem jest aktualizacja stanu o nazwie `time` przechowującą aktualną wartość tj. `new Date()`. Musimy obsłużyć tą akcję.

Po każdym kliknięciu w przycisk `get current time` powinieneś zobaczyć informacje o aktualnej godzinie.

Na koniec podłacz do naszego Magazynu [Redux DevTools](https://github.com/zalmoxisus/redux-devtools-extension) i przetestuj działania swojego rozwiązania.

&nbsp;

> :warning: Jeśli nie posiadasz materiałów do tego zadania to znajdziesz je na stronie [devmentor.pl](https://devmentor.pl)

