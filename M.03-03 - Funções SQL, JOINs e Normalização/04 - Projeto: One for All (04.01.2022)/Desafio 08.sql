SELECT
	ARTIST.artista,
    ALBUM.album
FROM SpotifyClone.artista AS `ARTIST`
	INNER JOIN SpotifyClone.album AS `ALBUM` 
		ON ARTIST.artista_id = ALBUM.artista_id
WHERE ARTIST.artista LIKE 'Walter Phoenix'
ORDER BY ALBUM.album;
