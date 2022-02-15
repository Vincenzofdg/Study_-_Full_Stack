SELECT
	USER.usuario,
    IF(YEAR(MAX(REP.data_reproducao)) = 2021,'Usuário ativo', 'Usuário inativo') AS condicao_usuario
FROM SpotifyClone.usuario AS `USER`
	INNER JOIN SpotifyClone.reproducao AS `REP`
		ON USER.usuario_id = REP.usuario_id
GROUP BY USER.usuario_id
ORDER BY usuario;
