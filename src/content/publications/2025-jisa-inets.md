---
title: "Modeling Interest Networks in Urban Areas: A Comparative Study of Google Places and Foursquare Across Countries"
authors: "Gustavo H. Santos, Fernanda R. Gubert, Myriam Delgado, Thiago H. Silva"
venue: "Journal of Internet Services and Applications (JISA)"
date: 2025-03-17
featureImage: "/images/publications/jisa2025_inets.png"
pdfUrl: "/papers/jisa2025_inets.pdf"
externalUrl: "https://journals-sol.sbc.org.br/index.php/jisa/article/view/5152"
# blogPostSlug: "jisa-inets-comparative-study"
---

## Abstract

Location-Based Social Networks (LBSNs) are valuable for understanding urban behavior. Modeling their data as graphs, such as Interest Networks (iNETs), offers important insights for urban area recommendations, mobility predictions, and public policy development. This study compares iNETs derived from Foursquare and Google Places, using check-ins and reviews. Although the platforms differ in nature, the resulting iNETs reveal similar urban behavior patterns. When analyzing the impact of socioeconomic, political, and geographic factors, only geographic factors showed significant influence. The study also highlights trade-offs in choosing the granularity of area sizes for modeling iNETs and proposes a methodology for identifying zones of high user interest.

## Key Contributions

- **Novel iNETs Approach**: Proposes Interest Networks (iNETs) as a new way to study urban phenomena by analyzing user activities in LBSNs.
- **Granularity Impact Analysis**: Evaluates how different urban area granularities (from coarse to fine) affect iNET similarity across platforms, showing that larger granularities lead to more similar models.
- **Factor Influence Analysis**: Investigates the influence of socioeconomic, political, and geographic factors on iNETs, finding that geographic distance is the most significant factor, while others like income and political polarization have less impact.
- **Urban Preference Zones (UPZones)**: Defines a methodology to identify geographically adjacent areas with strong user interest, which are consistent across LBSNs even at finer granularities.

## Methodology

The study models user activity from Google Places and Foursquare as weighted, undirected graphs called iNETs, where nodes represent urban areas and edges represent co-visitation by users. The similarity between iNETs from the two platforms is assessed using Pearson and Spearman correlations for edge weights and Kendall's Tau for node centrality rankings across multiple granularities. The influence of external factors is measured by correlating edge weights with pairwise distances in geographic, socioeconomic, and political features. Finally, Urban Preference Zones (UPZones) are identified by applying the Leiden community detection algorithm to iNETs at a fine granularity, grouping geographically adjacent and densely connected cells.
