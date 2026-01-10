export const curriculum = [
  // --- PHASE 1: FOUNDATIONS (Days 1-10) ---
  {
    day: 1,
    phase: "Foundations",
    title: "Data: The New Oil",
    summary: "Understanding what data is, its types, and why it powers the modern world.",
    content: `
      <h3>Welcome to the Journey</h3>
      <p>Statistics is the art of learning from data. Before we calculate a single mean or standard deviation, we must understand the raw material.</p>
      
      <h4>The Two Main Flavors</h4>
      <p>Data comes in two primary forms:</p>
      <ul>
        <li><strong>Categorical (Qualitative)</strong>: Labels or names. e.g., "Red", "Blue", "Yes", "No".</li>
        <li><strong>Numerical (Quantitative)</strong>: Numbers you can do math on. e.g., Height, Salary, Temperature.</li>
      </ul>
      
      <p>Interactive check: Can you average zip codes? (No, they are categorical labels that look like numbers!)</p>
    `,
    example: {
      title: "The Coffee Shop Data",
      description: "Imagine a dataset of coffee orders:",
      data: [
        { type: "Latte", size: "Medium", cost: 4.50 },
        { type: "Espresso", size: "Small", cost: 2.50 },
        { type: "Cappuccino", size: "Large", cost: 5.00 }
      ]
    },
    ai_prompt: "Act as a senior data scienist. Explain the difference between Nominal, Ordinal, Interval, and Ratio data scales using analogies from a superhero universe.",
    homework: "Find a dataset on Kaggle.com and identify 3 categorical and 3 numerical columns."
  },
  {
    day: 2,
    phase: "Foundations",
    title: "The Art of Visualization",
    summary: "Visualizing data is often more powerful than analyzing it. Learn the golden rules.",
    content: "Content about misleading charts, color theory, and choosing the right chart.",
    ai_prompt: "Generate a list of 5 common data visualization mistakes and how to avoid them, focusing on pie charts and 3D graphs.",
    homework: "Sketch a dashboard for a fitness app. What metrics matter?"
  },
  { day: 3, phase: "Foundations", title: "Populations vs Samples", summary: "The core problem of statistics: inferring the whole from a part.", ai_prompt: "Explain 'Sampling Bias' using the 1948 Dewey vs Truman election as a case study." },
  { day: 4, phase: "Foundations", title: "Mean, Median, Mode", summary: "Measures of central tendency. When the 'average' lies.", ai_prompt: "Create a scenario where the Median is a much better metric than the Mean." },
  { day: 5, phase: "Foundations", title: "Variance & Standard Deviation", summary: "Understanding spread. Volatility is risk.", ai_prompt: "Explain Standard Deviation to a 5-year-old using a pile of sand." },
  { day: 6, phase: "Foundations", title: "The Box Plot", summary: "Five-number summary visually represented.", ai_prompt: "How do I interpret the whiskers of a box plot? explain with an ASCII art example." },
  { day: 7, phase: "Foundations", title: "Histograms vs Bar Charts", summary: "Continuous vs Discrete distribution visualization.", ai_prompt: "What is the difference between a histogram and a bar chart? Give 3 examples of when to use each." },
  { day: 8, phase: "Foundations", title: "Skewness & Kurtosis", summary: "The shape of data. Tails matter.", ai_prompt: "Explain 'Negative Skew' vs 'Positive Skew' in the context of income distribution." },
  { day: 9, phase: "Foundations", title: "Correlation != Causation", summary: "The most famous rule in statistics, often ignored.", ai_prompt: "Give 5 funny examples of Spurious Correlations (like ice cream sales and shark attacks)." },
  { day: 10, phase: "Foundations", title: "Project: EDA on Titanic", summary: "Exploratory Data Analysis on the famous Titanic dataset.", ai_prompt: "Guide me through an EDA (Exploratory Data Analysis) workflow for the Titanic dataset using Python pandas." },

  // --- PHASE 2: PROBABILITY (Days 11-20) ---
  { day: 11, phase: "Probability", title: "Probability Basics", summary: "Coin flips, dice rolls, and the foundation of chance.", ai_prompt: "Explain the classic 'Birthday Paradox' and the math behind it." },
  { day: 12, phase: "Probability", title: "Permutations & Combinations", summary: "Counting helps us predict.", ai_prompt: "What consists of a Combination vs Permutation? Use a pizza topping analogy." },
  { day: 13, phase: "Probability", title: "Conditional Probability", summary: "Updating beliefs with new information.", ai_prompt: "Explain Bayes Theorem simply using a medical test for a rare disease." },
  { day: 14, phase: "Probability", title: "Bayes' Theorem", summary: "The mathematical formula for changing your mind.", ai_prompt: "Provide a step-by-step solution to the Monty Hall problem." },
  { day: 15, phase: "Probability", title: "Random Variables", summary: "Discrete vs Continuous random variables.", ai_prompt: "Define a Random Variable and give examples of Discrete and Continuous ones in a casino setting." },
  { day: 16, phase: "Probability", title: "Expected Value", summary: "The long-run average of a random process.", ai_prompt: "Calculate the Expected Value of a lottery ticket and explain why 'the house always wins'." },
  { day: 17, phase: "Probability", title: "Binomial Distribution", summary: "Success or Failure. Yes or No.", ai_prompt: "When should I use a Binomial Distribution? Give a real-world business example." },
  { day: 18, phase: "Probability", title: "Poisson Distribution", summary: "Modeling rare events over time.", ai_prompt: "How can a call center use the Poisson Distribution to staff their lines?" },
  { day: 19, phase: "Probability", title: "The Normal Distribution", summary: "The Bell Curve that rules the world.", ai_prompt: "Why does the Normal Distribution appear so often in nature? Explain the Central Limit Theorem intuitively." },
  { day: 20, phase: "Probability", title: "Z-Scores", summary: "Standardizing data to compare apples and oranges.", ai_prompt: "Walk me through calculating a Z-Score and looking it up in a Z-table." },

  // --- PHASE 3: INFERENCE (Days 21-30) ---
  { day: 21, phase: "Inference", title: "Sampling Distributions", summary: "The distribution of a statistic across many samples.", ai_prompt: "Explain Sampling Distributions using a simulation thought experiment." },
  { day: 22, phase: "Inference", title: "Central Limit Theorem", summary: "Why averages tend to be normal, even if data isn't.", ai_prompt: "Create a Python script to demonstrate the Central Limit Theorem visually." },
  { day: 23, phase: "Inference", title: "Confidence Intervals", summary: "Estimating with a margin of error.", ai_prompt: "What does '95% Confidence' actually mean? (Hint: It's not the probability the parameter is in the interval)." },
  { day: 24, phase: "Inference", title: "Hypothesis Testing Intro", summary: "Null and Alternative hypotheses.", ai_prompt: "Formulate a Null and Alternative hypothesis for testing if a new drug is effective." },
  { day: 25, phase: "Inference", title: "Type I and Type II Errors", summary: "False Positives and False Negatives.", ai_prompt: "Explain Type I vs Type II errors in the context of a criminal trial (Innocent until proven guilty)." },
  { day: 26, phase: "Inference", title: "P-Values", summary: "The most controversial number in science.", ai_prompt: "Explain P-Value like I'm 10 years old. What does it tell us?" },
  { day: 27, phase: "Inference", title: "One-Sample T-Test", summary: "Testing a mean against a known standard.", ai_prompt: "When do I use a T-Test instead of a Z-Test?" },
  { day: 28, phase: "Inference", title: "Two-Sample T-Test", summary: "Comparing two groups.", ai_prompt: "Walk through an A/B testing scenario using a Two-Sample T-Test." },
  { day: 29, phase: "Inference", title: "Paired T-Test", summary: "Before and After comparisons.", ai_prompt: "Give an example of when to use a Paired T-Test vs an Independent T-Test." },
  { day: 30, phase: "Inference", title: "Assessment: Inference", summary: "Mid-course review of inferential concepts.", ai_prompt: "Generate a 10-question quiz on Hypothesis Testing and Confidence Intervals." },

  // --- PHASE 4: RELATIONSHIPS (Days 31-40) ---
  { day: 31, phase: "Relationships", title: "Pearson Correlation", summary: "Linear relationships between variables.", ai_prompt: "Explain Pearson's r coefficient and its range." },
  { day: 32, phase: "Relationships", title: "Spearman Rank Correlation", summary: "Non-linear monotonic relationships.", ai_prompt: "When should I use Spearman vs Pearson correlation?" },
  { day: 33, phase: "Relationships", title: "Simple Linear Regression", summary: "Fitting a line to data.", ai_prompt: "Explain the equation y = mx + c in the context of Machine Learning (Weights and Bias)." },
  { day: 34, phase: "Relationships", title: "R-Squared", summary: "Goodness of fit.", ai_prompt: "What is R-Squared? If R-Squared is 0.8, what does that mean?" },
  { day: 35, phase: "Relationships", title: "Residual Analysis", summary: "Checking the assumptions of your model.", ai_prompt: "How do I check for Homoscedasticity in regression residuals?" },
  { day: 36, phase: "Relationships", title: "Multiple Regression", summary: "More than one predictor.", ai_prompt: "Explain Multicollinearity in Multiple Regression and why it's bad." },
  { day: 37, phase: "Relationships", title: "ANOVA (One-Way)", summary: "Comparing means of 3+ groups.", ai_prompt: "Explain the intuition behind 'Analysis of Variance'. Why analyze variance to compare means?" },
  { day: 38, phase: "Relationships", title: "Chi-Square Goodness of Fit", summary: "Testing categorical counts.", ai_prompt: "Explain the Chi-Square test using a bag of M&Ms colors." },
  { day: 39, phase: "Relationships", title: "Chi-Square Independence", summary: "Are two categorical variables related?", ai_prompt: "Use Chi-Square to test if 'Gender' and 'Political Preference' are independent." },
  { day: 40, phase: "Relationships", title: "Project: Housing Prices", summary: "Predicting house prices using regression.", ai_prompt: "Outline a project to predict house prices. What features would you select?" },

  // --- PHASE 5: ADVANCED (Days 41-50) ---
  { day: 41, phase: "Advanced", title: "Logistic Regression", summary: "Predicting probabilities (Classification).", ai_prompt: "How does Logistic Regression differ from Linear Regression? Explain the Sigmoid function." },
  { day: 42, phase: "Advanced", title: "Time Series Basics", summary: "Data over time. Trend and Seasonality.", ai_prompt: "Explain Stationarity in Time Series data." },
  { day: 43, phase: "Advanced", title: "Moving Averages", summary: "Smoothing time series data.", ai_prompt: "Compare SMA (Simple Moving Average) vs EMA (Exponential Moving Average) for stock analysis." },
  { day: 44, phase: "Advanced", title: "A/B Testing Deep Dive", summary: "Designing rigorous experiments.", ai_prompt: "What is Power Analysis in A/B testing and why is it crucial for sample size?" },
  { day: 45, phase: "Advanced", title: "Non-Parametric Tests", summary: "When data isn't normal.", ai_prompt: "List 3 non-parametric alternatives to the T-Test." },
  { day: 46, phase: "Advanced", title: "Bayesian Statistics Intro", summary: "Updating priors.", ai_prompt: "Explain the philosophical difference between Frequentist and Bayesian statistics." },
  { day: 47, phase: "Advanced", title: "Decision Trees", summary: " Logic-based modeling.", ai_prompt: "How does a Decision Tree decide where to split the data? (Entropy/Gini Impurity)." },
  { day: 48, phase: "Advanced", title: "Clustering (K-Means)", summary: "Unsupervised learning.", ai_prompt: "Explain the K-Means algorithm step-by-step." },
  { day: 49, phase: "Advanced", title: "Dimensionality Reduction", summary: "PCA and simplifying complexity.", ai_prompt: "Explain PCA (Principal Component Analysis) using a shadow of a 3D object analogy." },
  { day: 50, phase: "Advanced", title: "Ethics in Data", summary: "Bias, Privacy, and Responsibility.", ai_prompt: "Discuss the ethical implications of using AI for hiring processes." },

  // --- PHASE 6: MASTERY (Days 51-60) ---
  { day: 51, phase: "Mastery", title: "Capstone: Define Problem", summary: "Choosing a real-world problem to solve.", ai_prompt: "Help me brainstorm 3 unique data science capstone project ideas involving environmental data." },
  { day: 52, phase: "Mastery", title: "Capstone: Data Collection", summary: "Scraping, APIs, and finding data.", ai_prompt: "How do I use Python to scrape data from a website legally?" },
  { day: 53, phase: "Mastery", title: "Capstone: Cleaning", summary: "The 80% of the work.", ai_prompt: "What are the best practices for handling missing data in a large dataset?" },
  { day: 54, phase: "Mastery", title: "Capstone: Exploration", summary: "Finding patterns.", ai_prompt: "Suggest 5 advanced visualizations for high-dimensional data." },
  { day: 55, phase: "Mastery", title: "Capstone: Modeling", summary: "Building the predictive model.", ai_prompt: "How do I choose the right metric (Accuracy, Precision, Recall, F1) for my model?" },
  { day: 56, phase: "Mastery", title: "Capstone: Valuation", summary: "Validating results.", ai_prompt: "Explain Cross-Validation (K-Fold) and why it prevents overfitting." },
  { day: 57, phase: "Mastery", title: "Capstone: Storytelling", summary: "Communicating results.", ai_prompt: "How do I structure a data presentation for non-technical stakeholders?" },
  { day: 58, phase: "Mastery", title: "Review: Key Concepts", summary: "Looking back at the journey.", ai_prompt: "Summarize the most important statistical concepts for a Data Analyst interview." },
  { day: 59, phase: "Mastery", title: "Future Paths", summary: "Machine Learning, AI, and beyond.", ai_prompt: "Create a learning roadmap for transitioning from Data Analyst to Data Scientist." },
  { day: 60, phase: "Mastery", title: "Graduation", summary: "You made it!", ai_prompt: "Write a motivational closing statement for completing a 60-day statistics boot camp." }
];
