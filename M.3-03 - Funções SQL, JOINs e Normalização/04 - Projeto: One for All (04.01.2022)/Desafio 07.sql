SELECT
	ARTIST.artista,
    ALBUM.album,
    COUNT(FOLLOWER.artista_id) AS `seguidores`
FROM SpotifyClone.artista AS `ARTIST`
	INNER JOIN SpotifyClone.album AS `ALBUM`
		ON ARTIST.artista_id = ALBUM.artista_id
	INNER JOIN SpotifyClone.seguindo AS `FOLLOWER`
		ON ALBUM.artista_id = FOLLOWER.artista_id
GROUP BY ALBUM.album, ARTIST.artista
ORDER BY seguidores DESC, ARTIST.artista, ALBUM.album;
