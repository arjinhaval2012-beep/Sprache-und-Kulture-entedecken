```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sprache und Kultur entdecken</title>

<style>
body{
    margin:0;
    font-family:Arial, sans-serif;
    background:#f4f4f4;
}

header{
    text-align:center;
    background:white;
    padding:30px;
}

header img{
    width:300px;
    max-width:90%;
    border-radius:15px;
    box-shadow:0 10px 25px rgba(0,0,0,.2);
}

h1{
    color:#0b3d91;
}

.grid{
    width:90%;
    max-width:1000px;
    margin:40px auto;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:20px;
}

.card{
    background:white;
    padding:25px;
    border-radius:15px;
    text-align:center;
    text-decoration:none;
    color:#222;
    box-shadow:0 5px 15px rgba(0,0,0,.1);
    transition:.3s;
}

.card:hover{
    transform:translateY(-5px);
}

footer{
    text-align:center;
    padding:30px;
}
</style>

</head>

<body>

<header>

<img src="image.png" alt="Book Cover">

<h1>Sprache und Kultur entdecken</h1>

<p>A1–A2 | Für Anfänger</p>

</header>

<div class="grid">

<a class="card" href="#">📖 Einheit 1</a>
<a class="card" href="#">📖 Einheit 2</a>
<a class="card" href="#">📖 Einheit 3</a>
<a class="card" href="#">📖 Einheit 4</a>
<a class="card" href="#">📖 Einheit 5</a>
<a class="card" href="#">📖 Einheit 6</a>
<a class="card" href="#">📖 Einheit 7</a>
<a class="card" href="#">📖 Einheit 8</a>
<a class="card" href="#">📖 Einheit 9</a>
<a class="card" href="#">📖 Einheit 10</a>
<a class="card" href="#">📖 Einheit 11</a>
<a class="card" href="#">📖 Einheit 12</a>

</div>

<footer>

© Arjin Talway

</footer>

</body>
</html>
```
