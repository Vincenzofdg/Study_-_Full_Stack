SELECT
	SONG.musica AS `cancao`,
    COUNT(REP.musica_id) AS `reproducoes`
FROM SpotifyClone.musica AS `SONG`
	INNER JOIN SpotifyClone.reproducao AS `REP`
		ON SONG.musica_id = REP.musica_id
GROUP BY SONG.musica
ORDER BY reproducoes DESC, musica
LIMIT 2;
