SELECT
	COUNT(M.musica_id) AS `cancoes`,
    COUNT(DISTINCT AR.artista_id) AS `artistas`,
    COUNT(DISTINCT A.album_id) AS `albuns`
FROM SpotifyClone.musica AS `M`
	INNER JOIN SpotifyClone.album AS `A`
		ON M.album_id = A.album_id
	INNER JOIN SpotifyClone.artista AS `AR`
		ON AR.artista_id = A.artista_id;
