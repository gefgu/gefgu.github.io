---
external: false
title: "Quadrados Perfeitos Tem um Número Ímpar De Divisores"
description: "Um importante fato para resolver problemas involvendo teoria dos números."
date: 2023-07-20
---

Eu estava resolvendo o [URI1371](https://www.urionlinejudge.com.br/judge/en/problems/view/1371) e encontrei uma propriedade interessante.

Suponha que você queira saber o número de divisores de um número natural **a**. Com o Teorema Fundamental da Aritmética, você pode decompor **a** em seus fatores primos, desse modo:

{% latex formula="a = p_1^{k_1} \\cdot p_2^{k_2} \\dots \\ p_{n-1}^{k_{n-1}} \\cdot p_n^{k_n}" /%}

O número de divisores de a vai ser o resultado do produto dos expoentes, somados 1, dos fatores primos, ou seja, sendo **d** o número de divisores:

{% latex formula="d = (k_1+1) \\cdot (k_2+1) \\dots \\ (k_{n-1} + 1) \\cdot (k_n+1)" /%}

Quando elevamos **a** ao quadrado, obtemos:

{% latex formula="a^2 = p_1^{2 \\cdot k_1} \\cdot p_2^{2 \\cdot k_2} \\dots \\ p_{n-1}^{2 \\cdot k_{n-1}} \\cdot p_n^{2 \\cdot k_n}" /%}

Note que, agora, todos os expoentes são pares, ou seja, quando calcular o número de divisores de **a{% sup %}2{% /sup %}**, teremos um produto de ímpares, logo todo quadrado perfeito tem um número ímpar de divisores.