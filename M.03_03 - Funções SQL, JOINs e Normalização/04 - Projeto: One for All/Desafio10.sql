SELECT c.nome AS nome,
	   COUNT(h.cancao_id) AS reproducoes
FROM SpotifyClone.Historicos AS h
LEFT JOIN SpotifyClone.Cancoes AS c
ON h.cancao_id = c.cancao_id
RIGHT JOIN SpotifyClone.User AS u
ON u.usuario_id = h.usuario_id
RIGHT JOIN SpotifyClone.Planos AS p
ON u.plano_id = p.plano_id
WHERE p.tipo IN ("gratuito", "pessoal")
GROUP BY c.nome
ORDER BY nome ASC; 
