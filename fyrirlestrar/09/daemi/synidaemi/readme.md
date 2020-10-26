# Sýnidæmi

Forrita skal viðmót sem leyfir að bæta við, breyta, eyða og klára verkefni af lista.

Gefið er HTML skjal með þrem atriðum sem skulu virka eftir að forrit keyrir. Allir stílar sem þarf fyrir verkefni eru gefnir.

Færslur hafa eftirfarandi virkni:

* Þegar smellt (`click`) er á texta færslu er texta breytt í `<input>` sem leyfir að breyta texta. Þegar smellt er á `<enter>` er input breytt aftur í texta
  - Setja skal `focus` í input
* Þegar ýtt er á `Eyða` er færslu eytt úr lista
* Þegar smellt er á `checkbox` er færsla merkt sem „búin“
* Þegar fyllt er inn í form fyrir neðan lista og smellt á „Bæta við“ er færslu bætt við sem virkar eins og þær færslur sem fyrir voru
  - Ekki skal leyfa að bæta við tóma strengnum eða streng sem er aðeins bil
  - Eftir að búið er að bæta við skal tæma input

Útfæra skal JavaScript virkni innan þess módúl sem gefinn er.

`browser-sync` er uppsett í verkefninu:

```bash
npm install
npm run dev
```
