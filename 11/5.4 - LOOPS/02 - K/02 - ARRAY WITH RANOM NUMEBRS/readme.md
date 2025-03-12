

### 1️⃣ **Üres tömb létrehozása:**

```javascript
var numbers = [];
```

Ez most egy **üres tömb**, amiben még **nincs semmi**.

---

### 2️⃣ **For ciklussal feltöltés:**

Például töltsük fel 1-től 5-ig a számokat:

```javascript
for (var i = 1; i <= 5; i++) {
  numbers.push(i); // Betesszük a tömbbe az aktuális i értéket
}
```

🔑 A `numbers.push(i)` hozzáadja az `i` értéket a tömb végéhez minden egyes cikluslépésben.

---

### 3️⃣ **Eredmény kiírása:**

```javascript
console.log(numbers); // [1, 2, 3, 4, 5]
```

---

### 🔵 **Példa kód teljes egészében:**

```javascript
var numbers = []; // üres tömb

for (var i = 1; i <= 5; i++) { // 1-től 5-ig
  numbers.push(i); // hozzáadás a tömbhöz
}

console.log("Feltöltött tömb:", numbers); // [1, 2, 3, 4, 5]
```

---

### ℹ️ **Tetszőleges számokkal is működik:**

```javascript
var numbers = [];

for (var i = 0; i < 5; i++) {
  var randomNum = Math.floor(Math.random() * 100) + 1; // 1 és 100 közötti véletlenszám
  numbers.push(randomNum);
}

console.log("Véletlen számokkal feltöltött tömb:", numbers);
```

---

### ✅ **Összefoglalva:**
- **Üres tömb**: `var numbers = [];`
- **For ciklus**: `for (var i = 0; i < darabszam; i++)`
- **Elem hozzáadása**: `numbers.push(érték);`

