SELECT
	USER.usuario AS `usuario`,
    COUNT(REP.musica_id) AS `qtde_musicas_ouvidas`,
    ROUND(SUM(SONG.duracao) / 60, 2) AS `total_minutos`
FROM SpotifyClone.usuario AS `USER`
	INNER JOIN SpotifyClone.reproducao AS `REP`
		ON USER.usuario_id = REP.usuario_id
	INNER JOIN SpotifyClone.musica AS `SONG`
		ON SONG.musica_id = REP.musica_id
GROUP BY USER.usuario_id
ORDER BY usuario ASC;
