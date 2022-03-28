# Kompilyatsiya

Agar reliz bilan qoniqmasangiz, ushbu dasturlash tilini o'zingizni qurilmangizda
eng oxirgi yangilanishlar bilan kompilyatsiya qilib olishingiz mumkin.

Kompilyatisya qilish uchun avval Rust dasturlash tili o'rnatilganligini
tekshiring. Agar o'rnatilmagan bo'lsa [rustni o'rnatish](/devs/rust/install.md)
sahifasiga o'tib rustni o'rnatib oling.

## Ko'chirib olish

Kompilyatsiya qilish uchun avval kerakli havolalarni internetdan ko'chirib
olaylik. Ikki xil usulda ko'chirib olishimiz mumkin:
[git orqali](#git-orqali-kochirish) yoki
[zip faylda](#togridan-togri-zip-faylda-kochirish). Ko'proq git yordamida
ko'chirish tavsiya qilinadi.

### Git orqali ko'chirish

Agar sizning qurilmangizda `git` dasturi mavjud bo'lsa, `git` yordamida quyidagi
buyruq satri yordamida proyektni ko'chirib olishingiz mumkin:

```shell
git clone https://github.com/osmon-lang/osmon.git
```

### To'gridan to'g'ri zip faylda ko'chirish

Agar sizda `git` bo'lmasa, ushbu tugmachani bosish yordamida eng oxirgi
yangilanishni zip faylda ko'chirib olishingiz mumkin:

- [Eng oxirgi kommita (main branch)](https://github.com/osmon-lang/osmon/archive/refs/heads/main.zip)

## Kompilyatsiya bosqichi

Dasturni kompilyatisya qilish uchun endi ko'chirilgan proyekt papkasi ichida
terminal ochamiz va ushbu buyruq satrini ishga tushuramiz:

```shell
cargo build --release
```

va ushbu buyruq ishga tushurgandan so'ng uzoq sabr tilayman sizlarga!

![Kompilyatsiya natijasi](/compiled-binary.png)

Agar oxirida sizda ham shunday natija ko'rsatsa, demak kompilyatsiya
muvaffaqiyatli o'tdi. Ishga tushuruvchi faylni esa `target/release` papkasi
ichida topasiz. Agar sizda \*NIX oilasiga mansub operatsion tizim bo'lsa,
`osmon` nomida bo'ladi, aks holda `osmon.exe`.

![Kompilyatsiya payti](/osmon-compiled.png)
