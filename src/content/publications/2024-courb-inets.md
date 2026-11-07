---
title: "Interest Networks: Comparing Google Places and Foursquare in Capturing User Choice for Urban Areas"
authors: "Gustavo H. Santos, Fernanda R. Gubert, Myriam Delgado, Thiago H. Silva"
venue: "VIII Workshop de Computação Urbana (CoUrb), SBRC 2024"
date: 2024-05-27
featureImage: "/images/publications/courb2024.png"
pdfUrl: "/papers/courb2024_redes_interesse.pdf"
externalUrl: "https://sol.sbc.org.br/index.php/courb/article/view/29993"
# blogPostSlug: "courb-interest-networks"
---

## Abstract

Location-Based Social Networks (LBSNs) are valuable for understanding urban behavior and user preferences. Modeling this data into graphs, such as Interest Networks (iNETs), enables significant insights for applications like urban area recommendations and mobility forecasting. This study uses check-in and review data to compare the iNETs resulting from two distinct LBSNs, Foursquare and Google Places. Although the platforms differ in nature, with data varying in regularity and purpose, both modeled iNETs revealed similar urban behavior patterns and were similarly impacted by socioeconomic and geographic factors.

## Key Contributions

- **Introduction of Interest Networks (iNETs)**: Models user interest in urban areas as a graph where nodes are neighborhoods and edges connect co-visited areas.
- **Direct LBSN Comparison**: Provides a direct comparison of urban behavior patterns captured by Google Places and Foursquare in the city of Curitiba.
- **High Network Similarity**: Demonstrates that despite differences in data type and user engagement, the iNETs from both platforms show strong similarity, with a Pearson correlation of 0.875 for edge weights.
- **Factor Analysis**: Concludes that geographic distance is the most significant factor influencing user interest between areas, while socioeconomic and political factors have a weak correlation.

## Methodology

The study constructs Interest Networks (iNETs) from Google Places reviews and Foursquare check-ins in Curitiba. These are non-directed, weighted graphs where nodes are city neighborhoods and edge weights quantify the number of users visiting both connected neighborhoods. The similarity between the two iNETs is measured using Pearson correlation on edge weights and Kendall's Tau on eigenvector centrality rankings of the nodes. The influence of socioeconomic (income, race), political (voting data), and geographic factors is evaluated by correlating the differences in these factors between neighborhood pairs with the corresponding edge weights in the iNETs.
