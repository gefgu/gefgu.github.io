---
title: "Modeling Interest in Urban Areas Using Location-Based Social Networks"
authors: "Gustavo H. Santos, Myriam Delgado, Thiago H. Silva"
venue: "XXX Simpósio Brasileiro de Sistemas Multimídia e Web (WebMedia 2024)"
date: 2024-10-14
featureImage: "/images/publications/webmedia2024.png"
pdfUrl: "/papers/webmedia2024_interesse.pdf"
externalUrl: "https://sol.sbc.org.br/index.php/webmedia_estendido/article/view/30478"
# blogPostSlug: "webmedia-modeling-interest"
---

## Abstract

Location-Based Social Networks (LBSNs) can help model users' interests in urban areas. This work focuses on Interest Networks (iNETs), which result from modeling LBSN data into graphs. The study provides insights into which areas are frequently visited together by analyzing data from two distinct LBSNs, Foursquare and Google Places. Although the studied LBSNs differ in nature, with data varying in regularity and purpose, both modeled iNETs revealed similar urban behavior patterns and were likewise impacted by socioeconomic and geographic factors.

## Key Contributions

- **iNETs for Urban Modeling**: Proposes a graph-based model, the Interest Network (iNET), to represent user interest dynamics in urban areas based on LBSN data.
- **Comparative Analysis**: Directly compares iNETs constructed from two different LBSNs (Google Places and Foursquare) for the city of Curitiba, Brazil.
- **Factor Investigation**: Investigates the influence of external factors, including socioeconomic data, political preferences, and geographic distance, on the modeled user interest patterns.
- **Tool Development**: Introduces `h3-cities`, a tool developed to standardize the division of cities into adjustable hexagonal grids, facilitating scalable urban analysis across different regions.

## Methodology

This research constructs Interest Networks (iNETs) using geolocated data from Google Places (reviews) and Foursquare (check-ins) for Curitiba. An iNET is an undirected graph where nodes are city neighborhoods and weighted edges represent the number of users who have interacted with establishments in both areas. The similarity of the iNETs from both platforms is measured using Pearson correlation for edge weights and Kendall's Tau for node importance ranking. To analyze external influences, socioeconomic and political data are collected for each neighborhood and correlated with iNET edge weights to determine their impact, with geographic distance being a key factor considered.
