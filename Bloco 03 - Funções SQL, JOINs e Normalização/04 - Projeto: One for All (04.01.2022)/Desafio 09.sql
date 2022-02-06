SELECT
	COUNT(REP.usuario_id) AS `quantidade_musicas_no_historico`
FROM SpotifyClone.reproducao AS `REP`
	INNER JOIN SpotifyClone.usuario AS `USER`
		ON REP.usuario_id = USER.usuario_id
WHERE USER.usuario LIKE 'Bill';
