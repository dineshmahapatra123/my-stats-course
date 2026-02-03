export const curriculum = [
  // --- ACT I: THE DETECTIVE (Days 1-12) ---
  {
    day: 1,
    phase: "1. The Detective",
    title: "Data: The Raw Material",
    summary: "Distinguish Categorical vs Numerical. The foundation of everything.",
    ai_prompt: "Quiz me on data types with tricky examples.",
    content: `
      <h3>Understanding Data Types</h3>
      <p>Before you can analyze data, you must understand what <em>type</em> of data you are holding. Treat data types like physical materials: you can weld steel (numerical), but you can't weld wood (categorical).</p>
      
      <div class="concept-card">
        <h4>1. Categorical (Qualitative)</h4>
        <p>Describes qualities or characteristics. It answers "What?"</p>
        <ul>
          <li><strong>Nominal:</strong> Names with no order. (e.g., Apple, Banana, Tesla).</li>
          <li><strong>Ordinal:</strong> Categories with a clear order. (e.g., Low, Medium, High; Gold, Silver, Bronze).</li>
        </ul>
      </div>

      <div class="concept-card">
        <h4>2. Numerical (Quantitative)</h4>
        <p>Describes quantities. It answers "How much?"</p>
        <ul>
          <li><strong>Discrete:</strong> Counted integers. (e.g., Number of children, website clicks). You can't have 2.5 children.</li>
          <li><strong>Continuous:</strong> Measured values. (e.g., Height, Temperature, Time). Infinite precision is possible.</li>
        </ul>
      </div>

      <div class="tip-box">
        <strong>Pro Tip:</strong> Always check your data types first. A common error is treating a "Zip Code" as a number. It looks like a number, but it's actually a Nominal Category (a label). You wouldn't calculate the "average zip code" of a region!
      </div>
    `
  },
  {
    day: 2,
    phase: "1. The Detective",
    title: "Structured vs Unstructured",
    summary: "SQL tables vs Images/Text. The modern data landscape.",
    ai_prompt: "How do we turn text into numbers? Explain TF-IDF simply.",
    content: `
      <h3>The Two Worlds of Data</h3>
      <p>Data isn't just Excel spreadsheets anymore. We live in the age of Big Data, where 'Unstructured' data dominates.</p>

      <div class="flex gap-4 flex-col md:flex-row my-6">
        <div class="flex-1 bg-slate-50 p-4 rounded-xl border border-slate-200">
          <h4 class="text-blue-600 font-bold mb-2">Structured Data</h4>
          <p class="text-sm">Highly organized, fits in rows and columns.</p>
          <ul class="text-sm list-disc pl-4 mt-2 text-slate-600">
            <li>Excel Spreadsheets</li>
            <li>SQL Databases</li>
            <li>CSV Files</li>
          </ul>
        </div>
        <div class="flex-1 bg-slate-50 p-4 rounded-xl border border-slate-200">
          <h4 class="text-purple-600 font-bold mb-2">Unstructured Data</h4>
          <p class="text-sm">No predefined format, messy, heavy.</p>
          <ul class="text-sm list-disc pl-4 mt-2 text-slate-600">
            <li>Emails & Text (NLP)</li>
            <li>Images & Video (Computer Vision)</li>
            <li>Audio Files</li>
          </ul>
        </div>
      </div>

      <p><strong>The Challenge:</strong> Computers only understand numbers. To analyze unstructured data, we must <em>transform</em> it into structured numbers (Feature Extraction).</p>
    `
  },
  {
    day: 3,
    phase: "1. The Detective",
    title: "The Art of Sampling",
    summary: "Populations vs Samples. Why n=1000 is enough for 300 Million.",
    ai_prompt: "Explain the 'Law of Large Numbers' using a coin flip simulation.",
    content: `
      <h3>The Magic of Sampling</h3>
      <p>How can we know who will win the election by asking only 1,000 people? It feels like magic, but it's math.</p>
      
      <h4>Population vs. Sample</h4>
      <ul>
        <li><strong>Population (N):</strong> The entire group you care about (e.g., All users of Netflix).</li>
        <li><strong>Sample (n):</strong> A subset of the population (e.g., 500 random users).</li>
      </ul>

      <div class="concept-card">
        <h4>Randomness is Key</h4>
        <p>A sample is only useful if it is <strong>Representative</strong>. The best way to achieve this is <strong>Random Sampling</strong>. If you only survey people at a Tech Conference, your data on "average income" will be biased (too high).</p>
      </div>
    `
  },
  {
    day: 4,
    phase: "1. The Detective",
    title: "Visual Lies",
    summary: "How charts deceive. Axis truncation, 3D effects, and cherry-picking.",
    ai_prompt: "Show me code to create a misleading chart vs a correct chart.",
    content: `
      <h3>Visual Honesty</h3>
      <p>A chart can lie faster than a spreadsheet. As a data scientist, your job is to expose these lies.</p>
      
      <h4>Common Tricks to Watch For:</h4>
      <ol>
        <li><strong>Truncated Y-Axis:</strong> Starting the axis at 90 instead of 0 makes a small change (91 to 93) look huge (tripling!).</li>
        <li><strong>3D Charts:</strong> They distort perspective. The slice at the front always looks bigger than the slice in the back, creating bias.</li>
        <li><strong>Dual Axes:</strong> Plotting two totally unrelated things (like "Ice Cream Sales" and "Murders") on the same chart to imply connection.</li>
      </ol>

      <div class="tip-box">
        <strong>Rule of Thumb:</strong> Maximize the "Data-Ink Ratio". If a pixel on your chart isn't telling a story about data, remove it.
      </div>
    `
  },
  {
    day: 5,
    phase: "1. The Detective",
    title: "Central Tendency",
    summary: "Mean, Median, Mode. When to use which.",
    ai_prompt: "Why is Median Salary better than Mean Salary for economic analysis?",
    content: `
      <h3>Where is the "Middle"?</h3>
      <p>The most common question in data is "What is average?". But "Average" (Mean) is dangerous.</p>

      <div class="concept-card">
        <h4>The Mean (Average)</h4>
        <p>Sum of all values / Count. <br><strong>Weakness:</strong> Highly sensitive to outliers. If Bill Gates walks into a bar, the "average" wealth becomes billions, but no one is actually richer.</p>
      </div>

      <div class="concept-card">
        <h4>The Median (Middle)</h4>
        <p>The middle value when sorted. <br><strong>Strength:</strong> Robust against outliers. It represents the "typical" person better in skewed data (like salaries or house prices).</p>
      </div>

      <p><strong>When to use what?</strong> Any time you have extreme outliers (wealth, followers, prices), use the <strong>Median</strong>.</p>
    `
  },
  {
    day: 6,
    phase: "1. The Detective",
    title: "Spread & Variance",
    summary: "Range, IQR, and Variance. Measuring chaos.",
    ai_prompt: "Explain Interquartile Range (IQR) and why it helps with outliers.",
    content: `
      <h3>Measuring Chaos</h3>
      <p>Knowing the average is not enough. You need to know the risk. You can drown in a river that is 3 feet deep <em>on average</em>.</p>

      <h4>Metrics of Spread:</h4>
      <ul>
        <li><strong>Range:</strong> Max - Min. Simple, but weak (only uses 2 numbers).</li>
        <li><strong>Variance:</strong> The average squared distance from the Mean. High variance = unstable, chaotic data.</li>
        <li><strong>IQR (Interquartile Range):</strong> The range of the middle 50% of data. It ignores the freaks at the edges.</li>
      </ul>
    `
  },
  // ... (More days would follow with similar rich content structure. For brevity in this update, we focus on establishing the pattern.)
  {
    day: 7,
    phase: "1. The Detective",
    title: "Standard Deviation",
    summary: "The universal yardstick of variation.",
    ai_prompt: "Explain the 68-95-99.7 rule.",
    content: `
      <h3>The Universal Yardstick</h3>
      <p>How do you compare the "weirdness" of a 7-foot human vs a 70-degree day vs a 1000-point stock drop? You use the Standard Deviation ($\sigma$).</p>
      
      <div class="concept-card">
        <h4>The Empirical Rule (68-95-99.7)</h4>
        <p>If data is Normal (Bell Curve):</p>
        <ul>
          <li><strong>68%</strong> of data falls within 1 SD of the mean.</li>
          <li><strong>95%</strong> falls within 2 SDs. (The "Normal" zone).</li>
          <li><strong>99.7%</strong> falls within 3 SDs. (Anything beyond this is an extreme outlier).</li>
        </ul>
      </div>

      <p><strong>Mental Model:</strong> Think of SD as the "Average Mistake". If I guess the average, how wrong am I usually? That's the standard deviation.</p>
    `
  },
  {
    day: 8,
    phase: "1. The Detective",
    title: "Skewness & Kurtosis",
    summary: "The shape of the beast. Lopsided data and fat tails.",
    ai_prompt: "What is 'Leptokurtic'? Does it mean high risk?",
    content: `
      <h3>The Shape of Data</h3>
      <p>Not all bells are perfect curves. Some leans, and some are fat.</p>

      <h4>1. Skewness (The Lean)</h4>
      <ul>
        <li><strong>Right Skewed (Positive):</strong> Tail extends right. (e.g., Wealth, income). The Mean > Median.</li>
        <li><strong>Left Skewed (Negative):</strong> Tail extends left. (e.g., Age at natural death). The Mean < Median.</li>
      </ul>

      <h4>2. Kurtosis (The Tails)</h4>
      <ul>
        <li><strong>Leptokurtic (Fat Tails):</strong> High outliers are more common than normal. <strong>High Risk.</strong> Finance markets are Leptokurtic (Crashes happen more often than predicted).</li>
        <li><strong>Platykurtic (Thin Tails):</strong> Safe, boring data. Few extremes.</li>
      </ul>
    `
  },
  {
    day: 9,
    phase: "1. The Detective",
    title: "The Box Plot",
    summary: "The 5-number summary visualized.",
    ai_prompt: "Generate a boxplot analysis of patient ages.",
    content: `
      <h3>The Box Plot Whisperer</h3>
      <p>The Box & whisker plot is the fastest way to spot outliers and see the "spread" without getting overwhelmed.</p>
      
      <div class="concept-card">
        <h4>The 5-Number Summary:</h4>
        <ol>
          <li><strong>Min:</strong> The bottom whisker (excluding outliers).</li>
          <li><strong>Q1 (25th Percentile):</strong> The bottom of the box.</li>
          <li><strong>Median (50th Percentile):</strong> The line inside the box.</li>
          <li><strong>Q3 (75th Percentile):</strong> The top of the box.</li>
          <li><strong>Max:</strong> The top whisker.</li>
        </ol>
      </div>
      
      <p><strong>Pro Tip:</strong> If the Median line is not in the center of the box, your data is <em>skewed</em>.</p>
    `
  },
  {
    day: 10,
    phase: "1. The Detective",
    title: "Histograms vs Density",
    summary: "Viewing the distribution shape.",
    ai_prompt: "What is Kernel Density Estimation (KDE)?",
    content: `
      <h3>Visualizing Distributions</h3>
      
      <h4>The Histogram</h4>
      <p>Bins data into buckets (chunks). Great for raw counts. <br><strong>Risk:</strong> Changing the "Bin Size" can dramatically change the look of the chart (Binning Bias).</p>
      
      <h4>Density Plot (KDE)</h4>
      <p>A smooth line that estimates the shape. It's like throwing a wet blanket over the histogram blocks.</p>
      
      <div class="tip-box">
        <strong>Recommendation:</strong> Always plot both. The Histogram tells the truth about the sample; the KDE guesses the truth about the population.
      </div>
    `
  },
  {
    day: 11,
    phase: "1. The Detective",
    title: "Exploratory Data Analysis (EDA)",
    summary: "The workflow of getting to know your data.",
    ai_prompt: "Give me an EDA checklist for a new dataset.",
    content: `
      <h3>The Detective's Checklist</h3>
      <p>EDA is not just making charts. It's an interrogation.</p>
      
      <h4>The 4-Step Workflow:</h4>
      <ol>
        <li><strong>Shape & Structure:</strong> <code>df.shape</code>, <code>df.info()</code>. How much data? What types?</li>
        <li><strong>Missing Values:</strong> <code>df.isnull().sum()</code>. Is the data broken?</li>
        <li><strong>Univariate Analysis:</strong> Look at 1 variable at a time using Histograms and Boxplots. Check for outliers.</li>
        <li><strong>Bivariate Analysis:</strong> Look at relationships. Scatter plots (Num vs Num) and Bar Charts (Cat vs Num).</li>
      </ol>
    `
  },
  {
    day: 12,
    phase: "1. The Detective",
    title: "Capstone: EDA",
    summary: "Apply Act I skills to a real dataset.",
    ai_prompt: "Review my EDA code. What did I miss?",
    content: `
      <h3>Capstone: The Titanic Dataset</h3>
      <p><strong>Objective:</strong> Use everything you've learned to analyze the Titanic passenger list.</p>
      
      <div class="concept-card">
        <h4>Mission Checklist:</h4>
        <ul class="list-disc pl-4">
          <li><strong>Identify Types:</strong> Which columns are Categorical? Numerical?</li>
          <li><strong>Find Deception:</strong> Are there missing ages? How do we handle them?</li>
          <li><strong>Central Tendency:</strong> What was the median fare paid? (Median is better than Mean here!)</li>
          <li><strong>Visualization:</strong> Create a Boxplot of Age vs Survival. Did younger people survive more?</li>
        </ul>
      </div>
      
      <p><em>Use the AI Tutor to guide you through loading the dataset in Python/Pandas.</em></p>
    `
  }

  // --- ACT II: THE GAMBLER (Days 13-24) ---
  { day: 13, phase: "2. The Gambler", title: "Probability Basics", summary: "Sample spaces, events, and independence.", ai_prompt: "Explain 'Mutually Exclusive' vs 'Independent' events." },
  { day: 14, phase: "2. The Gambler", title: "Permutations & Combinations", summary: "The math of counting. Order matters vs Order doesn't.", ai_prompt: "Explain the Lottery odds calculation." },
  { day: 15, phase: "2. The Gambler", title: "Conditional Probability", summary: "P(A|B). Updating beliefs.", ai_prompt: "Walk me through the 'Urn Problem' in probability." },
  { day: 16, phase: "2. The Gambler", title: "Bayes Theorem", summary: "The formula for reversing conditional probability.", ai_prompt: "Solve the 'False Positive' medical test problem step-by-step." },
  { day: 17, phase: "2. The Gambler", title: "Random Variables", summary: "Discrete vs Continuous math objects.", ai_prompt: "Define a Random Variable X for a roulette wheel." },
  { day: 18, phase: "2. The Gambler", title: "Expected Value", summary: "The long-run average. Why casinos build huge hotels.", ai_prompt: "Calculate EV for a raffle ticket. Should I buy it?" },
  { day: 19, phase: "2. The Gambler", title: "Binomial Distribution", summary: "Bernoulli trials. Coin flips dealing with scale.", ai_prompt: "When do I use Binomial Probability?" },
  { day: 20, phase: "2. The Gambler", title: "Poisson Distribution", summary: "Rare events occurring over time.", ai_prompt: "Model the number of emails I get per hour using Poisson." },
  { day: 21, phase: "2. The Gambler", title: "Uniform & Exponential", summary: "Waiting times and flat probabilities.", ai_prompt: "Explain the 'Memoryless' property of Exponential distribution." },
  { day: 22, phase: "2. The Gambler", title: "The Normal Distribution", summary: "The Gauss curve. Nature's favorite shape.", ai_prompt: "Why is the Normal distribution so important?" },
  { day: 23, phase: "2. The Gambler", title: "Standard Normal (Z)", summary: "Z-scores and tables.", ai_prompt: "How do I calculate a Z-score?" },
  { day: 24, phase: "2. The Gambler", title: "Capstone: Monte Carlo", summary: "Simulating probability with code.", ai_prompt: "Write a Python script to simulate 10,000 poker hands." },

  // --- ACT III: THE JUDGE (Days 25-36) ---
  { day: 25, phase: "3. The Judge", title: "Sampling Distributions", summary: "The distribution of sample means.", ai_prompt: "Explain the difference between the Population Distribution and Sampling Distribution." },
  { day: 26, phase: "3. The Judge", title: "Central Limit Theorem", summary: "The magic that makes statistics work.", ai_prompt: "Explain CLT to a non-technical person." },
  { day: 27, phase: "3. The Judge", title: "Point Estimation", summary: "Bias and Consistency.", ai_prompt: "What makes an estimator 'Unbiased'?" },
  { day: 28, phase: "3. The Judge", title: "Confidence Intervals (Mean)", summary: "The 95% certainty range.", ai_prompt: "Interpret a 95% Confidence Interval. (Spoiler: It's not probability)." },
  { day: 29, phase: "3. The Judge", title: "Hypothesis Testing Intro", summary: "Null vs Alternative. Setting the stage.", ai_prompt: "Set up the hypotheses for a drug trial." },
  { day: 30, phase: "3. The Judge", title: "Type I & II Errors", summary: "False Positives vs False Negatives.", ai_prompt: "Which is worse in a spam filter: Type I or Type II error?" },
  { day: 31, phase: "3. The Judge", title: "One Sample T-Test", summary: "Testing a mean against a number.", ai_prompt: "When do I use T instead of Z?" },
  { day: 32, phase: "3. The Judge", title: "Two Sample T-Test", summary: "A/B Testing foundations.", ai_prompt: "Explain 'Pooled Variance' in T-tests." },
  { day: 33, phase: "3. The Judge", title: "Paired T-Test", summary: "Before and After analysis.", ai_prompt: "Give an example where Paired T-test is required." },
  { day: 34, phase: "3. The Judge", title: "P-Values Deep Dive", summary: "Alpha levels and Significance.", ai_prompt: "What does p < 0.05 actually mean?" },
  { day: 35, phase: "3. The Judge", title: "Power Analysis", summary: "Calculating sample size requirements.", ai_prompt: "How do I increase the Power of my test?" },
  { day: 36, phase: "3. The Judge", title: "Capstone: A/B Test", summary: "Design and analyze a full experiment.", ai_prompt: "Review my A/B test experimental design." },

  // --- ACT IV: THE PROPHET (Days 37-48) ---
  { day: 37, phase: "4. The Prophet", title: "Correlation (Pearson)", summary: "Linear strength between variables.", ai_prompt: "Why is Correlation limited to linear relationships?" },
  { day: 38, phase: "4. The Prophet", title: "Spearman Correlation", summary: "Rank-based non-linear correlation.", ai_prompt: "Compare Pearson vs Spearman." },
  { day: 39, phase: "4. The Prophet", title: "Simple Linear Regression", summary: "Fitting the line. OLS.", ai_prompt: "Explain 'Least Squares' intuition." },
  { day: 40, phase: "4. The Prophet", title: "Interpreting Coefficients", summary: "Slope and Intercept meaning.", ai_prompt: "Translate regression output into English sentences." },
  { day: 41, phase: "4. The Prophet", title: "Assumption Checking", summary: "Linearity, Normality, Homoscedasticity.", ai_prompt: "How do I check for Homoscedasticity?" },
  { day: 42, phase: "4. The Prophet", title: "R-Squared & Adjusted R2", summary: "Goodness of fit.", ai_prompt: "Why does Adjusted R2 penalize adding variables?" },
  { day: 43, phase: "4. The Prophet", title: "Multiple Regression", summary: "Many features predicting one target.", ai_prompt: "Explain the 'Dummy Variable' trap." },
  { day: 44, phase: "4. The Prophet", title: "Multicollinearity", summary: "When features fight each other.", ai_prompt: "How does VIF (Variance Inflation Factor) help?" },
  { day: 45, phase: "4. The Prophet", title: "ANOVA", summary: "Comparing 3+ means.", ai_prompt: "Explain ANOVA as 'Analysis of Variance' to compare means." },
  { day: 46, phase: "4. The Prophet", title: "Chi-Square Test", summary: "Categorical vs Categorical testing.", ai_prompt: "When do I use Chi-Square Goodness of Fit?" },
  { day: 47, phase: "4. The Prophet", title: "Logistic Regression", summary: "Predicting probability of True/False.", ai_prompt: "Explain the Sigmoid function." },
  { day: 48, phase: "4. The Prophet", title: "Capstone: Prediction", summary: "Build a pricing model.", ai_prompt: "Help me select features for a car price predictor." },

  // --- ACT V: THE ARCHITECT (Days 49-60) ---
  { day: 49, phase: "5. The Architect", title: "Intro to Machine Learning", summary: "Supervised vs Unsupervised.", ai_prompt: "Distinguish between Regression, Classification, and Clustering." },
  { day: 50, phase: "5. The Architect", title: "Train/Test Split", summary: "Preventing overfitting.", ai_prompt: "Why do we need a Validation set?" },
  { day: 51, phase: "5. The Architect", title: "Cross Validation", summary: "K-Fold robustness.", ai_prompt: "Explain K-Fold Cross Validation step-by-step." },
  { day: 52, phase: "5. The Architect", title: "Feature Engineering", summary: "Creating better inputs.", ai_prompt: "Suggest creative features for a Flight Delay dataset." },
  { day: 53, phase: "5. The Architect", title: "Decision Trees", summary: "Rules-based learning.", ai_prompt: "How does a Decision Tree handle non-linear data?" },
  { day: 54, phase: "5. The Architect", title: "Random Forests", summary: "Ensemble methods.", ai_prompt: "Why is Random Forest less prone to overfitting than a single tree?" },
  { day: 55, phase: "5. The Architect", title: "Evaluation Metrics", summary: "Precision, Recall, F1-Score.", ai_prompt: "Explain the Precision-Recall tradeoff." },
  { day: 56, phase: "5. The Architect", title: "ROC & AUC", summary: "Measuring classifier quality.", ai_prompt: "Interpret an AUC of 0.5 vs 0.9." },
  { day: 57, phase: "5. The Architect", title: "Clustering (K-Means)", summary: "Unsupervised grouping.", ai_prompt: "How do we choose 'K' in K-Means (Elbow Method)?" },
  { day: 58, phase: "5. The Architect", title: "Dimensionality Reduction", summary: "PCA intuition.", ai_prompt: "Explain PCA to a 10-year-old." },
  { day: 59, phase: "5. The Architect", title: "Ethics and Bias", summary: "Responsible AI.", ai_prompt: "Discuss algorithmic bias in hiring." },
  { day: 60, phase: "5. The Architect", title: "The End & The Beginning", summary: "Your roadmap to the future.", ai_prompt: "Create a 6-month specialized learning path (e.g. NLP, Computer Vision)." }
];
