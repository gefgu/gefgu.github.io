---
title: "Culture Fingerprint: Identification of Culturally Similar Urban Areas Using Google Places Data"
authors: "Fernanda R. Gubert, Gustavo H. Santos, Myriam Delgado, Daniel Silver, Thiago H. Silva"
venue: "International Conference on Advances in Social Networks Analysis and Mining (ASONAM 2024)"
date: 2024-08-01
featureImage: "/images/publications/asonam2024.png"
pdfUrl: "/papers/asonam2024_culture_fingerprint.pdf"
externalUrl: "https://link.springer.com/chapter/10.1007/978-3-031-78538-2_25"
# blogPostSlug: "culture-fingerprint"
---

## Abstract

This study proposes a novel methodology to create "culture fingerprints" for urban areas, enabling the identification of culturally similar regions. Unlike traditional approaches that depend on user behavior data, our method leverages publicly available venue information from Google Places. By applying Scenes Theory, we transform venue categories into a rich, multi-dimensional cultural signature. This approach allows for a scalable and standardized comparison of cultural landscapes across different cities and countries, as demonstrated through case studies of cities around the world and all U.S. states.

## Key Contributions

- **Scenes-Based Cultural Signatures**: Introduces a method to generate cultural signatures ("fingerprints") for urban areas by mapping Google Places venue data to the 15 dimensions of Scenes Theory.
- **Scalable, Data-Driven Approach**: Provides a scalable alternative to survey-based cultural studies by using easily accessible, geolocated web data, independent of explicit user actions.
- **Knowledge Transfer**: Successfully demonstrates a knowledge transfer technique, using Yelp's detailed category structure to enrich and map Google Places data for more nuanced cultural analysis.
- **Cross-Regional Comparison**: Validates the approach by identifying culturally similar regions across different cities and states, showing that the method captures meaningful cultural patterns.

## Methodology

The methodology is centered on creating cultural profiles for geographic regions from Google Places venue data. First, venue data is extracted and enriched using a more detailed set of categories from Yelp. Next, these enriched categories are mapped to the 15 dimensions of Scenes Theory via a process of semantic matching and knowledge transfer, resulting in a 15-dimensional vector for each venue. The "culture fingerprint" of a region is then computed as the average of all venue vectors within it. These fingerprints are used to compare and cluster different urban areas to identify cultural similarities.
