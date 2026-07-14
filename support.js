<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Public+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    body{margin:0;background:#181511;font-family:'Public Sans',sans-serif;color:#F3EEE3;}
    h1,h2,h3{font-family:'Fraunces',serif;margin:0;}
    .mono{font-family:'IBM Plex Mono',monospace;letter-spacing:0.04em;text-transform:uppercase;}
    a{text-decoration:none;}
    .navlink{color:#C9BFA9;font-size:14px;}
    .navlink:hover{color:#D9A441;}
  </style>
</helmet>

<div style="max-width:1280px;margin:0 auto;">

  <nav style="display:flex;align-items:center;justify-content:space-between;padding:22px 48px;border-bottom:1px solid #3A3428;">
    <a href="Home.dc.html" style="font-size:20px;font-weight:600;color:#F3EEE3;">Владислав</a>
    <div style="display:flex;gap:28px;">
      <a href="About.dc.html" class="navlink">Обо мне</a>
      <a href="Directions.dc.html" class="navlink">Направления и цены</a>
      <a href="Materials.dc.html" class="navlink">Материалы</a>
      <a href="Reviews.dc.html" class="navlink" style="color:#F3EEE3;font-weight:600;">Отзывы</a>
      <a href="Contact.dc.html" class="navlink">Контакты</a>
    </div>
  </nav>

  <div style="padding:70px 48px 30px;">
    <span class="mono" style="color:#C1543F;font-size:13px;">Отзывы</span>
    <h1 style="font-size:44px;font-weight:500;margin-top:14px;max-width:700px;">Что говорят родители и ученики</h1>
  </div>

  <div style="padding:10px 48px 100px;">
    <div style="columns:3;column-gap:18px;">
      <img src="uploads/review-a5.png" alt="Отзыв родителя" style="width:100%;display:block;margin-bottom:18px;border-radius:4px;break-inside:avoid;">
      <img src="uploads/review-a7.png" alt="Отзыв ученицы" style="width:100%;display:block;margin-bottom:18px;border-radius:4px;break-inside:avoid;">
      <img src="uploads/review-a4.png" alt="89 баллов" style="width:100%;display:block;margin-bottom:18px;border-radius:4px;break-inside:avoid;">
      <img src="uploads/review-a3.png" alt="5 по ОГЭ" style="width:100%;display:block;margin-bottom:18px;border-radius:4px;break-inside:avoid;">
      <img src="uploads/review-a6.png" alt="Спасибо большое вам" style="width:100%;display:block;margin-bottom:18px;border-radius:4px;break-inside:avoid;">
      <img src="uploads/review-a2.png" alt="Без вас не было бы" style="width:100%;display:block;margin-bottom:18px;border-radius:4px;break-inside:avoid;">
      <img src="uploads/review-a1.png" alt="Отзыв ученицы" style="width:100%;display:block;margin-bottom:18px;border-radius:4px;break-inside:avoid;">
      <img src="uploads/review-s1.png" alt="Отзыв ученицы" style="width:100%;display:block;margin-bottom:18px;border-radius:4px;break-inside:avoid;">
      <img src="uploads/review-s2.png" alt="Отзыв ученицы" style="width:100%;display:block;margin-bottom:18px;border-radius:4px;break-inside:avoid;">
      <img src="uploads/review-s3.png" alt="Отзыв родителя" style="width:100%;display:block;margin-bottom:18px;border-radius:4px;break-inside:avoid;">
      <img src="uploads/review-s4.png" alt="Отзыв ученика" style="width:100%;display:block;margin-bottom:18px;border-radius:4px;break-inside:avoid;">
      <img src="uploads/review-s5.png" alt="92 балла" style="width:100%;display:block;margin-bottom:18px;border-radius:4px;break-inside:avoid;">
    </div>
  </div>

  <footer style="padding:26px 48px;border-top:1px solid #3A3428;text-align:center;font-size:13px;color:#7A6E5A;">
    © Владислав — репетитор английского
  </footer>

</div>

</x-dc>
</body>
</html>
