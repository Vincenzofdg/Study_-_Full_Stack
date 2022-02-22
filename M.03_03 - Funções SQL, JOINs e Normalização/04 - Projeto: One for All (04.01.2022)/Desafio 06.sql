SELECT
	MIN(PL.valor) AS `faturamento_minimo`,
    MAX(PL.valor) AS `faturamento_maximo`,
    ROUND(AVG(PL.valor), 2) AS `faturamento_medio`,
    SUM(PL.valor) AS `faturamento_total`
FROM SpotifyClone.plano AS `PL`
	INNER JOIN SpotifyClone.usuario AS `USER`
		ON PL.plano_id = USER.plano;

