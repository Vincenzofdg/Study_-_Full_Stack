SELECT c.musica AS nome,
	   COUNT(h.musica_id) AS reproducoes
FROM SpotifyClone.reproducao AS h
LEFT JOIN SpotifyClone.musica AS c
ON h.musica_id = c.musica_id
RIGHT JOIN SpotifyClone.usuario AS u
ON u.usuario_id = h.usuario_id
RIGHT JOIN SpotifyClone.plano AS p
ON u.plano = p.plano_id
WHERE p.plano IN ("gratuito", "pessoal")
GROUP BY c.musica ORDER BY c.musica ASC; 

