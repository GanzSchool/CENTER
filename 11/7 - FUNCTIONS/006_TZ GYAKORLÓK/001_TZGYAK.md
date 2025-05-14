# TÉMAZÁRÓ GYAKORLÓ 001

- Mindegy egyes feladatot külön JavaScript fileban kell megcsinálni.
- Minden feladatot úgy kell elnevezni, ahogy a feladat írja, mert különben egyes.
- A 4 db kész filet be kell csomagolni és a teljes neved kell, hogy legyen a mappa neve kis betűkkel elválasztás és ékezet nélkül. (Pl.: Kiss Béla -> kiss_bela)
- Segítséget nem lehet igénybevenni.
- A képernyő rögzítésre kerül.

**A kész dolgozatot a classroomba kell feltölteni a megadott helyre!**

## 1. projek: elsofeladat

### 1. Feladat: "Pozitív értékelések szűrése"

Egy termékről készült felhasználói értékelések listája.
Minden értékelés egy egész szám: lehet pozitív, negatív, vagy nulla.

Írj egy **függvényt**, ami:

* megkap egy **értékelésekből álló tömböt**,
* és visszaadja **csak a pozitív értékeléseket** egy új tömbben!

---

#### Példa:

```javascript
const reviews = [5, -2, 0, 3, -1, 4, -3];
```

**Elvárt eredmény:**

```javascript
[5, 3, 4]
```

---

#### Útmutató:

* A függvény neve legyen: `filterPositiveReviews()`.
* Kapjon egy paramétert `reviews` néven.
* Használj `for` ciklust, ami végigmegy a tömb elemein.
* `if` feltétellel ellenőrizd, hogy az érték nagyobb-e mint 0.
* Ha igen, `push` segítségével add hozzá egy új tömbhöz.
* A függvény a végén adja vissza az új tömböt.
* Konzolra írasd ki az eredményt!

### 2. Feladat: Refactoráld a fenti függvényt három különböző módon.

## 2. projek: masodikfeladat

### 1. Feladat: "Magas emberek kiválogatása"

Egy emberekről szóló listában minden személyhez tartozik:

* a neve,
* a testmagassága centiméterben.

Írj egy **függvényt**, ami:

* megkapja a személyek listáját,
* visszaadja **csak azoknak az embereknek a nevét**, akik **legalább 180 cm magasak**!

---

#### Példa:

```javascript
const people = [
  { name: 'Laci', height: 175 },
  { name: 'Bence', height: 182 },
  { name: 'Niki', height: 168 },
  { name: 'Kata', height: 180 },
  { name: 'Áron', height: 185 }
];
```

**Elvárt eredmény:**

```javascript
['Bence', 'Kata', 'Áron']
```

---

#### Útmutató:

* A függvény neve legyen: `findTallPeople()`.
* Kapjon egy paramétert `people` néven.
* Használj `for` ciklust, ami végigmegy a tömb elemein.
* `if` feltétellel ellenőrizd, hogy a `height >= 180`.
* Ha igaz, `push` segítségével add hozzá a nevüket egy új tömbhöz.
* A függvény a végén adja vissza az új tömböt.
* Konzolra írasd ki az eredményt!


### 2. Feladat: Refactoráld a fenti függvényt három különböző módon.

## 3. projek: harmadikfeladat

### 1. Feladat: "Túlsúlyos csomagok"

Egy postán minden feladott csomagról tudjuk:

* a címzett nevét,
* és a csomag súlyát kilogrammban.

A posta szabályzata szerint **csak azok a csomagok számítanak túlsúlyosnak**, amelyek **több mint 10 kilogrammosak**.

---

Írj egy **függvényt**, ami:

* megkapja a csomagok listáját,
* és visszaadja azoknak a **címzetteknek a nevét**, akiknek **túlsúlyos csomagjuk van**!

---

#### Útmutató

* A függvény neve legyen: `findHeavyPackages()`
* A paraméter neve legyen: `packages`
* A `packages` egy tömb, amelynek minden eleme egy objektum: `{ name: string, weight: number }`
* Csak azok a nevek kerüljenek a visszaadott tömbbe, ahol `weight > 10`

---

#### Példa:

```javascript
const packages = [
  { name: 'Kiss Anna', weight: 8 },
  { name: 'Nagy Péter', weight: 15 },
  { name: 'Tóth Bence', weight: 10 },
  { name: 'Farkas Lili', weight: 13 },
  { name: 'Szabó Gergő', weight: 5 }
];

console.log(findHeavyPackages(packages));
// Eredmény: ['Nagy Péter', 'Farkas Lili']
```

### 2. Feladat: Refactoráld a fenti függvényt három különböző módon.

## 4. projek: negyedikfeladat

### 1. Feladat: "Korán kelő alkalmazottak"

Egy cégnél minden alkalmazottról tudjuk:

* a nevét,
* és hogy **hány órakor** érkezik reggel a munkahelyére (egész szám, 0–23).

A vezetőség szerint **csak azok számítanak korán kelőnek**, akik **legkésőbb 7 órakor megérkeznek**.

---

Írj egy **függvényt**, ami:

* megkapja az alkalmazottak listáját (név és érkezési idő),
* visszaadja **a korán érkező dolgozók nevét**!

---

#### Útmutató:

* A függvény neve legyen: `findEarlyBirds()`.
* `employees` egy tömb objektumokkal: `{ name, arrival }`.
* Csak azok a nevek kerüljenek a visszaadott tömbbe, ahol `arrival <= 7`.

---

#### Példa:

```javascript
const employees = [
  { name: 'András', arrival: 6 },
  { name: 'Bori', arrival: 9 },
  { name: 'Csanád', arrival: 7 },
  { name: 'Dóra', arrival: 8 },
  { name: 'Elemér', arrival: 5 }
];

console.log(findEarlyBirds(employees));
// Eredmény: ['András', 'Csanád', 'Elemér']
```

### 2. Feladat: Refactoráld a fenti függvényt három különböző módon.



