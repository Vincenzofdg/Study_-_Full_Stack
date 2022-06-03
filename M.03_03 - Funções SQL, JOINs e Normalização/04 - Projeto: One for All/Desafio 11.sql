SELECT
SELECT
  musica AS nome_musica,
  CASE
    WHEN musica LIKE '%Streets' THEN REPLACE(musica, 'Streets', 'Code Review')
    WHEN musica LIKE '%Her Own' THEN REPLACE(musica, 'Her Own', 'Trybe')
    WHEN musica LIKE '%Inner Fire' THEN REPLACE(musica, 'Inner Fire', 'Project')
    WHEN musica LIKE '%Silly' THEN REPLACE(musica, 'Silly', 'Nice')
    WHEN musica LIKE '%Circus' THEN REPLACE(musica, 'Circus', 'Pull Request')
    END AS novo_nome
FROM SpotifyClone.musica WHERE
	musica LIKE '%Streets'
	OR musica LIKE '%Her Own'
	OR musica LIKE '%Inner Fire'
	OR musica LIKE '%Silly'
	OR musica LIKE '%Circus'
ORDER BY musica;


-- FONT https://stackoverflow.com/questions/4271186/how-can-i-use-mysql-replace-to-replace-strings-in-multiple-records

SELECT
	c.musica AS nome_musica,
	REPLACE(
		REPLACE(
			REPLACE(
				REPLACE(
					REPLACE(c.musica, 'Streets', 'Code Review'),
				'Her Own', 'Trybe'),
			'Inner Fire', 'Project'),
		'Silly', 'Nice'),
	'Circus', 'Pull Request') AS novo_nome
FROM SpotifyClone.musica AS c
WHERE c.musica LIKE '%Streets'
OR c.musica LIKE '%Her Own'
OR c.musica LIKE '%Inner Fire'
OR c.musica LIKE '%Silly'
OR c.musica LIKE '%Circus'
ORDER BY nome_musica;


