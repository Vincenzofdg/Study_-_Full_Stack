**LEFT JOIN**  Coloca a tabela da esquerda como refêrencia

Exemplo:
```
SELECT
    AA.customer_id,
    AA.first_name,
    AA.last_name,
    BB.actor_id,
    BB.first_name,
    BB.last_name
FROM customer AS AA
LEFT JOIN actor AS BB
ON AA.last_name = BB.last_name
ORDER BY AA.last_name;
```

---

**RIGHT JOIN**  Coloca a tabela da direita como refêrencia

Exemplo:
```
SELECT
    AA.customer_id,
    AA.first_name,
    AA.last_name,
    BB.actor_id,
    BB.first_name,
    BB.last_name
FROM customer AS AA
RIGHT JOIN actor AS BB
ON AA.last_name = BB.last_name
ORDER BY AA.last_name;
```

