---
title: "Creation of a Cultural Signature for Urban Areas with Geolocated Establishments on the Web"
authors: "Fernanda Gubert, Gustavo H. Santos, Myriam Delgado, Daniel Silver, Thiago Silva"
venue: "VIII Workshop de Computação Urbana (CoUrb), SBRC 2024"
date: 2024-05-27
featureImage: "/images/publications/courb2024_cultural.png"
pdfUrl: "/papers/courb2024_assinatura_cultural.pdf"
externalUrl: "https://sol.sbc.org.br/index.php/courb/article/view/29995"
# blogPostSlug: "courb-cultural-signature"
---

## Abstract

This paper introduces a method for creating cultural signatures of urban areas using geolocated establishment data from the web. By leveraging Google Places data for the city of Curitiba, we apply concepts from Scenes Theory to develop a rich, multi-dimensional profile for city neighborhoods. This work demonstrates how clustering neighborhoods based on these cultural signatures can reveal meaningful patterns and distinctions within the urban landscape. This approach offers a scalable and data-driven way to analyze urban culture without relying on traditional survey methods. This work was awarded 3rd place at the CoUrb 2024 workshop.

## Key Contributions

- **Application of Scenes Theory**: Applies the 15 dimensions of Scenes Theory to characterize urban neighborhoods in Curitiba based on the types of venues they contain.
- **Neighborhood Clustering**: Groups neighborhoods with similar "cultural signatures" using hierarchical clustering, identifying distinct cultural zones within the city.
- **Data-Driven Urban Analysis**: Presents a methodology for cultural analysis that relies on publicly available web data (Google Places), offering a scalable alternative to traditional methods.
- **Validation in Curitiba**: Provides a detailed case study of Curitiba, showing that the resulting cultural clusters align with known characteristics of the city's neighborhoods, from the commercial center to residential and entertainment-focused areas.

## Methodology

The methodology begins by collecting comprehensive venue data for Curitiba's neighborhoods from Google Places. Each venue's category is mapped to the 15 dimensions of Scenes Theory to generate a cultural score vector. The overall cultural signature for each neighborhood is then calculated by averaging the vectors of all venues within it. Finally, these neighborhood signatures are grouped using hierarchical agglomerative clustering with Ward's method to identify clusters of culturally similar areas within the city. The resulting clusters are analyzed based on their dominant Scenes dimensions to interpret their cultural character.
