export const featuredProjects = [
  {
    id: "churn-prediction",
    title: "Telecom Customer Churn Prediction",
    category: "Machine Learning · Classification",
    categoryColor: "blue",
    tagline: "Predicting customer churn to support telecom retention strategies",
    description:
      "Built a machine learning classification project using telecom customer data to explore churn prediction. Applied data preprocessing, class imbalance handling, and model evaluation techniques to develop a deployable Streamlit application.",
    problem:
      "Telecom companies need to identify customers who may discontinue their services. A customer churn prediction model can help businesses identify potential churn risks and support customer retention strategies.",
    dataset:
      "Telecom customer dataset with features including contract type, tenure, monthly charges, internet service, and other customer attributes. Applied preprocessing to handle missing values and categorical encoding.",
    preprocessing: [
      "Handled missing values in relevant columns",
      "Encoded categorical variables",
      "Addressed class imbalance in target variable",
      "Scaled numerical features for model compatibility",
    ],
    methodology: [
      "Exploratory Data Analysis (EDA) to understand feature distributions",
      "Logistic Regression classification model",
      "Confusion Matrix analysis",
      "Threshold tuning for precision/recall trade-offs",
    ],
    evaluation:
      "Model evaluated using Precision, Recall, F1-Score, ROC-AUC, and Confusion Matrix. Class imbalance was addressed during training.",
    results:
      "Classification model successfully deployed on Streamlit. Metrics reflect real evaluation from the project — exact values available in the live demo and GitHub repository.",
    limitations: [
      "Class imbalance may affect recall on minority class",
      "Limited to the features available in the dataset",
      "Model performance may vary on unseen telecom data",
    ],
    futureWork: [
      "Explore ensemble methods (Random Forest, XGBoost)",
      "Incorporate more diverse customer data",
      "Add feature importance visualization",
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    github:
      "https://github.com/DEVADHARSHINI200608/Telecom-CUSTOMER-CHURN-PREDICTION-",
    demo: "https://customerchurnprediction2601.streamlit.app/",
    metrics: null, // Not showing specific numbers without verification
  },
  {
    id: "house-price-prediction",
    title: "Bengaluru House Price Prediction",
    category: "Machine Learning · Regression",
    categoryColor: "violet",
    tagline: "Estimating property prices using regression and housing features",
    description:
      "Built a house price prediction project using machine learning regression techniques and property-related data for Bengaluru. Includes data cleaning, feature engineering, and a Streamlit deployment for interactive predictions.",
    problem:
      "Estimating property prices based on available housing features can help users understand potential price ranges and support data-driven real estate decisions.",
    dataset:
      "Bengaluru housing dataset with approximately 13,320 records containing features like location, area (sqft), number of bathrooms, and BHK configuration.",
    preprocessing: [
      "Data cleaning — removed nulls and outliers",
      "Feature engineering — derived price per sqft",
      "Location grouping for sparse categories",
      "Dimensionality reduction on location feature",
    ],
    methodology: [
      "Exploratory Data Analysis on housing features",
      "Linear Regression model development",
      "Cross-validation for model reliability",
      "Feature selection and engineering",
    ],
    evaluation:
      "Model evaluated using R², MAE, and RMSE. Metrics below are provisional from project documentation — confirm exact evaluation setup before treating as final.",
    results:
      "Provisional metrics from project records: Dataset size ~13,320 records · R² ≈ 0.735 · MAE ≈ 34.97 · RMSE ≈ 94.28. Interactive Streamlit app deployed for live price estimation.",
    limitations: [
      "Model trained on historical data — market dynamics change over time",
      "Location feature grouping may lose granularity",
      "Linear regression may not capture non-linear price patterns",
    ],
    futureWork: [
      "Experiment with Ridge/Lasso regularization",
      "Add advanced location-based features",
      "Explore gradient boosting models",
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    github: "https://github.com/DEVADHARSHINI200608/HOUSE-PREDICTION",
    demo: "https://housepredictionbanglore.streamlit.app/",
    metrics: [
      { label: "Dataset Size", value: "~13,320", unit: "records" },
      { label: "R² Score", value: "≈ 0.735", unit: "provisional" },
      { label: "MAE", value: "≈ 34.97", unit: "provisional" },
      { label: "RMSE", value: "≈ 94.28", unit: "provisional" },
    ],
  },
];

export const aiProjects = [
  {
    id: "seniormind-bhavi",
    title: "SeniorMind AI — Bhavi",
    category: "AI Application · Voice Assistant",
    categoryColor: "violet",
    tagline: "Multilingual AI companion for senior users",
    description:
      "A multilingual senior companion application concept involving conversational AI interactions in Tamil, English, and Hindi. Built with voice recognition, LLM integration, and a supportive user experience design.",
    features: [
      "Multilingual conversational interaction (Tamil, English, Hindi)",
      "Speech recognition using Whisper",
      "Voice-based responses",
      "Emotion-aware response handling",
      "Backend API integration",
    ],
    tech: ["Python", "Django", "React + Vite", "Whisper", "LLM Integration", "SQLite"],
    status: "In Development",
    github: null,
    demo: null,
  },
];
