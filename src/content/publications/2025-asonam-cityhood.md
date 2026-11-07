---
title: "CityHood: An Explainable Travel Recommender System for Cities and Neighborhoods"
authors: "Gustavo H. Santos, Myriam Delgado, Daniel Silver, Thiago H. Silva"
venue: "International Conference on Advances in Social Networks Analysis and Mining (ASONAM 2025)"
date: 2025-08-28
featureImage: "/images/publications/cityhood.png"
# pdfUrl: "/papers/asonam2025_cityhood.pdf"
# externalUrl: "https://asonam.2025/conference-link"
# blogPostSlug: "cityhood-recommender-system"
---

## Abstract

We present CityHood, an interactive and explainable recommendation system that suggests cities and neighborhoods based on users' areas of interest. The system models user interests leveraging large-scale Google Places reviews enriched with geographic, socio-demographic, political, and cultural indicators. It provides personalized recommendations at city (Core-Based Statistical Areas - CBSAs) and neighborhood (ZIP code) levels, supported by an explainable technique (LIME) and natural-language explanations. The demo illustrates how spatial similarity, cultural alignment, and interest understanding can be used to make travel recommendations transparent and engaging.

## Key Contributions

- **Multi-Scale Recommendations**: The system provides recommendations at both the city (CBSA) and neighborhood (ZIP code) levels.
- **Rich Contextual Features**: Recommendations are informed by a wide array of features, including socio-demographic, political, geographic, and cultural data.
- **Integrated Explainability**: CityHood uses LIME to generate local, model-agnostic explanations, which are translated into natural language to justify why a location is recommended to a user.
- **Interactive Demo**: A publicly accessible web application allows users to input their preferences and receive transparent, history-based travel recommendations with visual and textual justifications.

## Methodology

The system is built on a large-scale Google Places dataset of over 666 million reviews. User interest in a location is determined by their review volume. A LightGBM binary classifier is trained to predict whether a new region will be of high interest to a user based on its similarity to their previously liked and disliked locations. These similarities are calculated across various dimensions, including geography, population, income, education, race, political leaning, and cultural traits derived from Scenes Theory. The model's predictions are then explained using LIME to provide transparency to the user.
