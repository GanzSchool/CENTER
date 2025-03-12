

## 1️⃣ **Az alap: Math.random()**

```javascript
Math.random()
```

🔹 Ez egy **beépített függvény**, ami **0 (benne van)** és **1 (nincs benne)** közötti **véletlenszerű lebegőpontos (tört)** számot ad vissza.

### Példák:
```javascript
console.log(Math.random()); // Pl.: 0.48372637
console.log(Math.random()); // Pl.: 0.92134721
console.log(Math.random()); // Pl.: 0.10293847
```

➡️ Tehát mindig **0 és 1 közötti tört szám**.

---

## 2️⃣ **Hogyan lesz ebből egész szám?**

Ha pl. 0 és 100 közötti egész számot szeretnél, akkor:

### Lépések:
1. **Szorzás**: Szorozzuk meg a `Math.random()` eredményét 100-zal:
```javascript
Math.random() * 100
```
➡️ Így kapsz 0 és 100 közötti **tört** számot.

2. **Egész számra alakítás (kerekítés lefelé)**: 
```javascript
Math.floor(Math.random() * 100)
```
➡️ Így lesz belőle **egész szám**, pl. 56, 32, 88 stb.

### Példák:
```javascript
console.log(Math.floor(Math.random() * 100)); // Pl.: 56
console.log(Math.floor(Math.random() * 100)); // Pl.: 32
console.log(Math.floor(Math.random() * 100)); // Pl.: 88
```

---

## 3️⃣ **Hogyan lesz 1-től 100-ig?**

Mert a `Math.floor(Math.random() * 100)` 0-tól 99-ig ad számot! Ha 1-től 100-ig szeretnéd:

```javascript
Math.floor(Math.random() * 100) + 1
```

### Példa:
```javascript
console.log(Math.floor(Math.random() * 100) + 1); // Pl.: 73
console.log(Math.floor(Math.random() * 100) + 1); // Pl.: 5
console.log(Math.floor(Math.random() * 100) + 1); // Pl.: 99
```

---

## 4️⃣ **Általános képlet:**

Ha **min** és **max** közötti szám kell (pl. 50 és 150 között), a képlet:

```javascript
Math.floor(Math.random() * (max - min + 1)) + min
```

### Példa 50 és 150 között:
```javascript
Math.floor(Math.random() * (150 - 50 + 1)) + 50;
```

➡️ Ez 50 és 150 közötti egész számot ad vissza.

---

## ✅ **Összefoglalva lépésenként:**

| Mit szeretnél?                | Kód                                                      |
|------------------------------|----------------------------------------------------------|
| 0 és 1 közötti tört szám      | `Math.random()`                                          |
| 0 és 99 közötti egész szám   | `Math.floor(Math.random() * 100)`                        |
| 1 és 100 közötti egész szám | `Math.floor(Math.random() * 100) + 1`                    |
| min és max közötti szám     | `Math.floor(Math.random() * (max - min + 1)) + min`     |

---
