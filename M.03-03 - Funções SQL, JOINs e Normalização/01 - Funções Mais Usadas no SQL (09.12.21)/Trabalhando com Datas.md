**YYYY-MM-DD:** `SELECT CURRENT_DATE();`

**YYYY-MM-DD HH:MM:SS:** `SELECT NOW();`

---

**Diferença de Datas:** `SELECT DATEDIFF('2020-01-31', '2020-01-01');`

**Diferença de Horas:** `SELECT TIMEDIFF('2021-08-11 08:30:10', '2021-08-01 09:30:10');`

---

**Ano Atual:** `SELECT YEAR(CURRENT_DATE());`

**Hora Atual:** `SELECT HOUR(NOW());`

# Exercicios

01. Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.
```
SELECT DATEDIFF('2030-01-20', CURRENT_DATE());
ou
SELECT DATEDIFF('2030-01-20', NOW());
```

02. Monte uma query exiba a diferença de horas entre '10:25:45' e '11:00:00'.
```
SELECT TIMEDIFF('10:25:45', '11:00:00');
```