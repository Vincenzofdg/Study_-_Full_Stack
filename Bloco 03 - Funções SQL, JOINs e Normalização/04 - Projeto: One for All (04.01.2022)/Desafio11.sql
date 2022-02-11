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


-- FONT https://stackoverflow.com/questions/4271186/how-can-i-use-mysql-replace-to-replace-strings-in-multiple-records

SELECT
	c.cancao AS nome_musica,
	REPLACE(
		REPLACE(
			REPLACE(
				REPLACE(
					REPLACE(c.cancao, 'Streets', 'Code Review'),
				'Her Own', 'Trybe'),
			'Inner Fire', 'Project'),
		'Silly', 'Nice'),
	'Circus', 'Pull Request') AS novo_nome
FROM SpotifyClone.cancoes AS c
WHERE c.cancao LIKE '%Streets'
OR c.cancao LIKE '%Her Own'
OR c.cancao LIKE '%Inner Fire'
OR c.cancao LIKE '%Silly'
OR c.cancao LIKE '%Circus'
ORDER BY nome_musica;


