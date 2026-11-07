---
title: "Urban Cultural Signature with Web Data: A Case Study with Google Places Venues"
authors: "Fernanda R. Gubert, Gustavo H. Santos, Myriam Delgado, Daniel Silver, Thiago H. Silva"
venue: "Journal of Internet Services and Applications (JISA)"
date: 2025-07-01
featureImage: "/images/publications/jisa2025_cultural.png"
pdfUrl: "/papers/jisa2025_cultural_signature.pdf"
externalUrl: "https://journals-sol.sbc.org.br/index.php/jisa/article/view/5155"
# blogPostSlug: "jisa-urban-cultural-signature"
---

## Abstract

Much of the existing research on cultural similarities between regions relies on user behavior data, which can limit scalability. To address this, our work focuses on extracting venue data from Google Places and proposing a methodology based on the Scenes concept to enrich this dataset for generating cultural signatures of urban areas. Using Curitiba, Brazil, and Chicago, USA, as case studies, the results demonstrate that the proposed method can identify cultural similarities between regions while supporting a standardized area-division strategy for cross-country analysis. The findings show consistency, as evidenced by the segmentation of Curitiba and Chicago into culturally distinct clusters.

## Key Contributions

- **Cultural Profile Extraction**: Explores an approach for extracting relevant features of urban areas using Google Places venue data to derive their cultural profiles.
- **Scenes-Based Methodology**: Develops a methodology grounded in Scenes Theory to create enriched, 15-dimensional cultural signatures for urban areas.
- **Granularity Analysis**: Assesses the impact of varying urban area granularity (using a hexagonal grid system) on the generation and quality of cultural signatures.
- **Cross-City Comparison**: Demonstrates the application of the cultural signatures to identify and compare culturally similar areas within and between different cities (Curitiba and Chicago).

## Methodology

The study extracts venue data from the Google Places API, enriching the basic categories with more specific ones from Yelp to increase detail. These venue categories are then mapped to the 15 dimensions of Scenes Theory using a sentence-embedding model (SBERT) to create a cultural signature vector for each venue. The cultural signature of a region (a neighborhood or a hexagon) is calculated by averaging the vectors of all venues within it. Hierarchical agglomerative clustering is then used to group regions with similar cultural signatures, and the results are validated qualitatively and through clustering evaluation metrics.
