# Hogyan lesz majd nekünk a nyers response text ből js objektum:

```js
.then(response => response.json()) 
    .then(result => {})
```

A `.then(response => response.json())` hívás automatikusan elvégzi a HTTP válaszban kapott JSON szöveg parse-olását, és egy Promise-t ad vissza, amely a parse-olt JavaScript objektumot tartalmazza. Tehát a `response.json()` metódus átalakítja a nyers, JSON formátumú szöveget egy JS objektummá, amit aztán a következő `.then(result => { ... })` ágban érhetünk el a `result` változóban.

Így működik a folyamat lépésről lépésre:

1. **HTTP válasz fogadása:** A fetch() meghívásával egy HTTP válasz objektumot kapunk.
2. **JSON parse-olása:** A `response.json()` hívás a válasz szövegét parse-olja, és Promise-ként adja vissza a JavaScript objektumot.
3. **Objektum elérése:** A következő `.then(result => { ... })` blokkban a `result` már a parse-olt, használatra kész JS objektum, amelyből kiolvashatjuk a szükséges adatokat.

Ez a módszer a modern webalkalmazásokban bevett módja a JSON adatok feldolgozásának a kliensoldalon.