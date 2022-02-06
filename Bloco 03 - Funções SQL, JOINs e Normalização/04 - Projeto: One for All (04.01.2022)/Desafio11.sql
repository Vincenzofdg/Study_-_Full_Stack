SELECT
  nome AS nome_musica,
  CASE
    WHEN nome LIKE '%Streets' THEN REPLACE(nome, 'Streets', 'Code Review')
    WHEN nome LIKE '%Her Own' THEN REPLACE(nome, 'Her Own', 'Trybe')
    WHEN nome LIKE '%Inner Fire' THEN REPLACE(nome, 'Inner Fire', 'Project')
    WHEN nome LIKE '%Silly' THEN REPLACE(nome, 'Silly', 'Nice')
    WHEN nome LIKE '%Circus' THEN REPLACE(nome, 'Circus', 'Pull Request')
    END AS novo_nome
FROM SpotifyClone.cancoes
WHERE nome LIKE 'Streets|Her Own|Inner Fire|Silly|Circus'
ORDER BY nome;
