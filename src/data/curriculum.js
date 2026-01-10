const curriculum30 = [
  // --- ACT I: THE DETECTIVE'S TOOLKIT (Exploration & Visualization) ---
  {
    day: 1,
    phase: "The Detective's Toolkit",
    title: "The Lie Detector",
    summary: "Statistics isn't just math; it's a bullshit detector. Learn how to interrogate raw information.",
    hook: "Most people accept numbers at face value. You are going to learn why that's a mistake.",
    content: `
      <h3>The Two Types of Truth</h3>
      <p>Data comes at you in two disguises. Learning to spot them instantly is your first superpower.</p>
      
      <div class="concept-card">
        <h4>1. Categorical (The Labels)</h4>
        <p>This is "Qualitative". It describes <em>what</em> something is. 
        <br><em>Examples:</em> "Titanic Survivor", "Spam Email", "Red Ferrari".
        <br><strong>The Trap:</strong> You can't average these. Don't try to find the "mean zip code".</p>
      </div>

      <div class="concept-card">
        <h4>2. Numerical (The Counts)</h4>
        <p>This is "Quantitative". It describes <em>how much</em>.
        <br><em>Examples:</em> $140,000 salary, 1.4 seconds, 98.6 degrees.
        <br><strong>The Trap:</strong> Not all numbers are the same. A 5-star rating (Ordinal) is different from a temperature (Interval).</p>
      </div>
    `,
    mental_model: "Think of Data as a lineup of suspects. Some have nametags (Categorical), some have height measurements (Numerical). Proceed accordingly.",
    example: {
      title: "The Coffee Shop Interrogation",
      description: "We surveyed 3 customers. Look at how the data types differ:",
      data: [
        { type: "Latte", size: "Medium", cost: 4.50, category: "Categorical" },
        { type: "Espresso", size: "Small", cost: 2.50, category: "Numerical" },
        { type: "Cappuccino", size: "Large", cost: 5.00, category: "Both" } // Simplified for chart
      ]
    },
    ai_prompt: "I am a beginner in data science. Act as a harsh but fair mentor. Quiz me on the difference between Nominal, Ordinal, Interval, and Ratio data types using high-stakes scenarios (like medical triage or stock market crashes).",
    homework: "Open your bank statement. classify every column as Nominal, Ordinal, Interval, or Ratio."
  },
  {
    day: 2,
    phase: "The Detective's Toolkit",
    title: "Visual Deception",
    summary: "A chart can tell a lie faster than a spreadsheet. Learn the rules of visual honesty.",
    hook: "The human eye is easily hacked. Here is how to defend yourself.",
    content: `
      <h3>The Golden Rules of Viz</h3>
      <p>Edward Tufte said it best: 'Maximize the Data-Ink Ratio'. If it doesn't show data, kill it.</p>
      <ul>
        <li><strong>No 3D Pies:</strong> They distort perspective. The front slice always looks bigger.</li>
        <li><strong>Start axes at 0:</strong> (Usually). Truncating the Y-axis is the oldest trick in the news media book to make small changes look huge.</li>
        <li><strong>Color is Data:</strong> Don't use color just to make it pretty. Use it to highlight the anomaly.</li>
      </ul>
    `,
    mental_model: "A Dashboard is a cockpit. If a light blinks red, it must mean something is wrong, not just that the pilot likes red.",
    ai_prompt: "Generate 3 examples of 'Dark Patterns' in data visualization used by companies to mislead stakeholders. Explain how to fix each one using Python's Matplotlib or Seaborn.",
    homework: "Find a 'Bad Chart' on Reddit/r/dataisugly and sketch a fixed version on paper."
  },
  {
    day: 3,
    phase: "The Detective's Toolkit",
    title: "The Illusion of Average",
    summary: "Why the 'Mean' is often meaningless and the 'Median' discovers the truth.",
    hook: "If Bill Gates walks into a bar, everyone becomes a millionaire on average. But nobody can buy a drink.",
    content: `
      <h3>Central Tendency Wars</h3>
      <p>Most datasets are not 'Normal'. They are skewed. Real life is skewed. Wealth, Twitter followers, Bug counts.</p>
      <ul>
        <li><strong>The Mean (Average):</strong> Fragile. One outlier destroys it.</li>
        <li><strong>The Median (Middle):</strong> Robust. It ignores the billionaires and listens to the common man.</li>
        <li><strong>The Mode (Most Common):</strong> The populist. What is everyone actually doing?</li>
      </ul>
    `,
    mental_model: "The Mean is a delicate vase; the Median is a tank. Use the tank when the terrain is rough (skewed).",
    ai_prompt: "Create a Python simulation that generates a salary dataset with one extreme outlier. Show me how the Mean shifts drastically while the Median stays stable.",
    homework: "Calculate the average price of houses in your area. Now find the median. Why is the difference so big?"
  },
  {
    day: 4,
    phase: "The Detective's Toolkit",
    title: "The Spread",
    summary: "The average hides the risk. Variance and Standard Deviation reveal the danger.",
    hook: "You can drown in a river that is 3 feet deep on average.",
    ai_prompt: "Explain Standard Deviation to me using a sharpshooter improving their aim at a target range.",
    homework: "Look at the stock price of Tesla vs Coca-Cola over 1 year. Which has a higher standard deviation? Why?"
  },
  {
    day: 5,
    phase: "The Detective's Toolkit",
    title: "The Box Plot Whisperer",
    summary: "The ultimate tool for spotting outliers and understanding the 'shape' of data instantly.",
    ai_prompt: "Interpret a boxplot for me. What does it mean if the box is squashed but the whiskers are long? What if the median line is at the bottom of the box?",
    homework: "Generate a boxplot of your daily screen time for the last month. Are there outliers?"
  },

  // --- ACT II: THE CASINO (Probability & Chance) ---
  {
    day: 6,
    phase: "The Casino",
    title: "Thinking in Bets",
    summary: "Nothing is certain. Everything is a probability distribution. Welcome to the uncertain world.",
    hook: "Stop saying 'This will happen'. Start saying 'There is a 60% chance this happens'.",
    content: `
      <h3>The Frequentist vs The Bayesian</h3>
      <p>Probability has a civil war.</p>
      <ul>
        <li><strong>Frequentist:</strong> Probability is the long-run frequency. Flip a coin 10,000 times, it approaches 50%.</li>
        <li><strong>Bayesian:</strong> Probability is a 'Degree of Belief'. I am 90% sure I locked the door. I update this belief when I see the lock.</li>
      </ul>
    `,
    ai_prompt: "Explain the philosophy of Bayesian vs Frequentist statistics using a sports betting analogy.",
    homework: "Assign a probability percentage to 3 things you plan to do today. Check tonight if they happened. Were you overconfident?"
  },
  {
    day: 7,
    phase: "The Casino",
    title: "Conditional Probability",
    summary: "How new information changes everything. The foundation of Machine Learning.",
    hook: "What is the probability it rained, given that the grass is wet? It's not 100%.",
    ai_prompt: "Teach me Bayes Theorem using the intuitive 'Visual Area' method (drawing squares) instead of just the formula.",
    homework: "Read about the 'False Positive Paradox' in medical testing."
  },
  {
    day: 8,
    phase: "The Casino",
    title: "The Normal Distribution",
    summary: "The Bell Curve. Why nature loves mediocrity and symmetry.",
    hook: "Why are most men similar heights, but net worths vary wildly? The difference between Normal and Power Law distributions.",
    ai_prompt: "Explain why sums of random variables tend to become Normal (Central Limit Theorem) using a dice roll simulation in Python.",
    homework: "Find 3 things in your room that follow a Normal Distribution (e.g. length of pencils?)"
  },
  {
    day: 9,
    phase: "The Casino",
    title: "The Z-Score",
    summary: "Comparing apples to oranges by translating them into 'Standard Deviations from the Mean'.",
    ai_prompt: "If I scored 85 on Math (Mean=70, SD=5) and 90 on History (Mean=85, SD=2), which score is actually better?",
    homework: "Calculate the Z-score of your height compared to the national average."
  },
  {
    day: 10,
    phase: "The Casino",
    title: "Sampling Distributions",
    summary: "The meta-concept. The distribution of the *estimates* themselves.",
    hook: "We almost never see the Population. We only see a ghost of it through our Sample.",
    ai_prompt: "This concept is hard. Explain 'Sampling Distribution of the Sample Mean' using an analogy of tasting soup from a giant cauldron.",
    homework: "Watch a 3Blue1Brown video on the Central Limit Theorem."
  },

  // --- ACT III: THE COURTROOM (Inference & Testing) ---
  {
    day: 11,
    phase: "The Courtroom",
    title: "Innocent Until Proven Guilty",
    summary: "Hypothesis Testing is a trial. The Null Hypothesis is the defendant.",
    hook: "We never 'prove' a hypothesis is true. We only reject the status quo (The Null).",
    content: `
      <h3>The Trial of the Null</h3>
      <p><strong>Null Hypothesis ($H_0$):</strong> Nothing is happening. The drug doesn't work. The marketing campaign failed.</p>
      <p><strong>Alternative Hypothesis ($H_1$):</strong> Something interesting is happening.</p>
      <p>We assume $H_0$ is true. Then we look at the data. If the data is <em>so weird</em>, so unlikely under $H_0$, we reject it.</p>
    `,
    ai_prompt: "Act as a Judge. Explain $H_0$ and $H_1$ using a murder trial context. What is the evidence required for 'Rejecting the Null'?",
    homework: "Formulate a Null Hypothesis for: 'Does drinking coffee increase productivity?'"
  },
  {
    day: 12,
    phase: "The Courtroom",
    title: "The P-Value Controversy",
    summary: "The most misunderstood number in science. It is NOT the probability that you are right.",
    hook: "A low p-value is a measure of surprise, not truth.",
    ai_prompt: "Explain P-Value to a 5-year-old using a cookie jar analogy.",
    homework: "Find a news article that misinterprets 'statistical significance'."
  },
  {
    day: 13,
    phase: "The Courtroom",
    title: "Confidence Intervals",
    summary: "Embracing uncertainty. Don't give me a number; give me a range.",
    ai_prompt: "Why is a Confidence Interval better than a Point Estimate? Explain using the concept of 'Margin of Error' in polls.",
    homework: "Look at a political poll. Find the +/- margin of error."
  },
  {
    day: 14,
    phase: "The Courtroom",
    title: "A/B Testing (The T-Test)",
    summary: "The bread and butter of Tech. Comparing two versions of reality.",
    ai_prompt: "Walk me through how Netflix uses A/B testing to choose thumbnails. How do they know version B is essentially better?",
    homework: "Design a simple A/B test for your morning routine. (e.g. Alarm vs No Alarm)."
  },
  {
    day: 15,
    phase: "The Courtroom",
    title: "Power & Sample Size",
    summary: "How much data do I need? Don't start an experiment you can't finish.",
    hook: "If you don't have enough 'Power', you won't find the effect even if it exists.",
    ai_prompt: "What is 'Statistical Power'? How does sample size affect it? Use a fishing net analogy.",
    homework: "Use an online sample size calculator to see how many people you need to detect a 1% conversion lift."
  },

  // --- ACT IV: THE CRYSTAL BALL (Regression & Prediction) ---
  {
    day: 16,
    phase: "The Crystal Ball",
    title: "Correlation vs Causation",
    summary: "Ice cream sales correlated with shark attacks. Does ice cream cause sharks?",
    hook: "The world is full of spurious correlations. Your job is to find the causal mechanism.",
    ai_prompt: "Give me 5 hilarious examples of high correlation but zero causation.",
    homework: "Find a correlation in your life (e.g. sleep vs mood). Is it causal?"
  },
  {
    day: 17,
    phase: "The Crystal Ball",
    title: "Linear Regression (The Line)",
    summary: "Fitting the world to a straight line. $y = mx + b$ is the most powerful equation in data.",
    ai_prompt: "Explain the concept of 'Residuals' (Errors) in regression. Why do we minimize the *square* of the errors?",
    homework: "Draw a scatter plot of study hours vs grades. Draw a line of best fit by eye."
  },
  {
    day: 18,
    phase: "The Crystal Ball",
    title: "R-Squared",
    summary: "How well does your model explain the world?",
    hook: "An $R^2$ of 1.0 is suspicious. An $R^2$ of 0.0 is useless. Where is the sweet spot?",
    ai_prompt: "Explain $R^2$ as 'The percentage of variance explained'. Use a real estate price analogy.",
    homework: "Check the $R^2$ of a famous scientific study."
  },
  {
    day: 19,
    phase: "The Crystal Ball",
    title: "Multiple Regression",
    summary: "Real life has more than 1 variable. Juggling multiple inputs.",
    ai_prompt: "How do we interpret coefficients when there are multiple variables? (Ceteris Paribus - holding all else constant).",
    homework: "Brainstorm 5 variables that predict the price of a Used Car."
  },
  {
    day: 20,
    phase: "The Crystal Ball",
    title: "Logistic Regression",
    summary: "Predicting a Choice (Yes/No) instead of a Number.",
    hook: "Linear regression fails when the answer is Binary (Win/Loss). Enter the Sigmoid.",
    ai_prompt: "Explain why we can't use Linear Regression for classification. What is the Log Odds?",
    homework: "Think of a binary prediction problem in your job (e.g. Churn vs Stay)."
  },

  // --- ACT V: THE MATRIX (Beyond & Mastery) ---
  {
    day: 21,
    phase: "The Matrix",
    title: "Decision Trees",
    summary: "Mimicking human logic. A flowchart that learns.",
    ai_prompt: "Explain how a decision tree splits data using 'Gini Impurity'. Keep it simple.",
    homework: "Draw a decision tree for 'Should I wear a jacket today?'"
  },
  {
    day: 22,
    phase: "The Matrix",
    title: "Random Forests",
    summary: "The Wisdom of Crowds. Why 100 drunk trees are smarter than 1 genius tree.",
    ai_prompt: "Explain the concept of 'Ensembling'. Why does averaging many weak models create a strong model?",
    homework: "Research 'Bagging' vs 'Boosting'."
  },
  {
    day: 23,
    phase: "The Matrix",
    title: "Bias vs Variance",
    summary: "The fundamental tradeoff of Machine Learning.",
    hook: "Overfitting (Memorizing) vs Underfitting (Ignoring). You must find the balance.",
    ai_prompt: "Explain the Bias-Variance tradeoff using an analogy of a student preparing for an exam (Memorizing vs Understanding).",
    homework: "Look at a learning curve graph. Identify where overfitting starts."
  },
  {
    day: 24,
    phase: "The Matrix",
    title: "Clustering (K-Means)",
    summary: "Finding tribes in the data without labels.",
    ai_prompt: "How does K-Means allow us to segment customers without knowing the segments beforehand?",
    homework: "Imagine a dataset of grocery purchases. Name 3 clusters you might find."
  },
  {
    day: 25,
    phase: "The Matrix",
    title: "Ethics & Bias",
    summary: "With great power comes great responsibility. Algorithms can be racist/sexist.",
    hook: "Data is historic. History is biased. Therefore, your model is biased.",
    ai_prompt: "Give natural examples of 'Selection Bias' in data collection that led to failed products.",
    homework: "Read the ProPublica article on the COMPAS algorithm."
  },
  { day: 26, phase: "The Matrix", title: "Project: Titanic Survival", summary: "Apply everything. Cleaning, EDA, Modeling.", ai_prompt: "Outline a full workflow for the Titanic Kaggle competition." },
  { day: 27, phase: "The Matrix", title: "Project: House Prices", summary: "Regression capstone. Feature Engineering is key.", ai_prompt: "Suggest 3 creative 'Derived Features' for a real estate dataset." },
  { day: 28, phase: "The Matrix", title: "Communicating Results", summary: "Don't show code. Show value. Storytelling with Data.", ai_prompt: "How do I explain 'Confidence Level' to a CEO who hates math?", homework: "Take a complex concept and explain it in 3 bullet points." },
  { day: 29, phase: "The Matrix", title: "The Road Ahead", summary: "SQL, Python, Deep Learning. Where to go next.", ai_prompt: "Create a 6-month roadmap for becoming a Senior Data Scientist from here.", homework: "Update your LinkedIn with your new skills." },
  { day: 30, phase: "The Matrix", title: "Graduation", summary: "You have the tools. Now go find the truth.", hook: "The world is full of data. Go solve a problem.", ai_prompt: "Write a manifesto for a data-driven life.", homework: "Celebrate!" }
];

// Replicating/Scaling to 60 days via pattern if needed, but for specific coach content, 30 high-quality days is better than 60 fluff days. 
// USER ASKED FOR 60 DAYS. I will map the 5 phases to 60 days by expanding the topics.
// (For the sake of this file update, I will keep the 30-day intensive structure but map them to the User's request or stick to the defined 60 in previous turn.
// Actually, to make it 'Best Possible', I will condense to a high-impact 30-day 'Crash Course' OR expand.
// Given the user constraint '60 day learning extensive course', I will programmatically double the depth or content.
// However, writing 60 unique 'Coach' entries takes space. I will focus on the structure above as the 'Core' and duplicate/expand automatically or keep it as a '30-Day Intensive' which is often better.
// WAIT - The user explicitly said "60 day". I should stick to 60.
// I will expand the above array to cover 60 days by splitting topics.)

export const curriculum60 = [
  // --- ACT I: THE DETECTIVE (Days 1-12) ---
  { day: 1, phase: "1. The Detective", title: "Data: The Raw Material", summary: "Distinguish Categorical vs Numerical. The foundation of everything.", ai_prompt: "Quiz me on data types with tricky examples." },
  { day: 2, phase: "1. The Detective", title: "Structured vs Unstructured", summary: "SQL tables vs Images/Text. The modern data landscape.", ai_prompt: "How do we turn text into numbers? Explain TF-IDF simply." },
  { day: 3, phase: "1. The Detective", title: "The Art of Sampling", summary: "Populations vs Samples. Why n=1000 is enough for 300 Million.", ai_prompt: "Explain the 'Law of Large Numbers' using a coin flip simulation." },
  { day: 4, phase: "1. The Detective", title: "Visual Lies", summary: "How charts deceive. Axis truncation, 3D effects, and cherry-picking.", ai_prompt: "Show me code to create a misleading chart vs a correct chart." },
  { day: 5, phase: "1. The Detective", title: "Central Tendency", summary: "Mean, Median, Mode. When to use which.", ai_prompt: "Why is Median Salary better than Mean Salary for economic analysis?" },
  { day: 6, phase: "1. The Detective", title: "Spread & Variance", summary: "Range, IQR, and Variance. Measuring chaos.", ai_prompt: "Explain Interquartile Range (IQR) and why it helps with outliers." },
  { day: 7, phase: "1. The Detective", title: "Standard Deviation", summary: "The universal yardstick of variation.", ai_prompt: "Explain the 68-95-99.7 rule." },
  { day: 8, phase: "1. The Detective", title: "Skewness & Kurtosis", summary: "The shape of the beast. Lopsided data and fat tails.", ai_prompt: "What is 'Leptokurtic'? Does it mean high risk?" },
  { day: 9, phase: "1. The Detective", title: "The Box Plot", summary: "The 5-number summary visualized.", ai_prompt: "Generate a boxplot analysis of patient ages." },
  { day: 10, phase: "1. The Detective", title: "Histograms vs Density", summary: "Viewing the distribution shape.", ai_prompt: "What is Kernel Density Estimation (KDE)?" },
  { day: 11, phase: "1. The Detective", title: "Exploratory Data Analysis (EDA)", summary: "The workflow of getting to know your data.", ai_prompt: "Give me an EDA checklist for a new dataset." },
  { day: 12, phase: "1. The Detective", title: "Capstone: EDA", summary: "Apply Act I skills to a real dataset.", ai_prompt: "Review my EDA code. What did I miss?" },

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

export const curriculum = curriculum60;
