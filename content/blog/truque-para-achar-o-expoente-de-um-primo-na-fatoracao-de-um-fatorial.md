---
external: false
title: "Truque Para Achar o Expoente de um Primo na Fatoração de um Fatorial"
description: "Materiais bem bacanas."
date: 2023-07-22
---

Eu estava tentando resolver o [UVA10139](https://vjudge.net/problem/UVA-10139), mas sempre obtia um `Time Limit Exceed`. No processo para conseguir o `Accepted`, descobri um truque bacana para calcular o expoente de um primo na fatoração de um fatorial.

Suponha que você queira saber o expoente do 3 na fatoração de 37!. Observe que todos os termos múltiplos de 3 no fatorial adicionam 1 ao expoente. Do mesmo modo, todos os termos múltiplos de 9 no fatorial adicionam 2 ao expoente (só 1 se contar ele como um múltiplo de 3 primeiro).

Ou seja, ficamos com um pequeno algoritmo para calcular o expoente de um primo na fatoração de um fatorial:

```cpp
// Calcula o expoente do primo p na fatoração de n!
int calculaExpoenteEmFatorial(int n, int p) {
  int expoente = 0;
  int potencia = p; 
  while(n >= potencia) {
    expoente += n / potencia;
    potencia *= p;
  }
  return expoente;
}
```

*(PS: Dependendo do problema, é útil declarar a variável potencia como long long)*