/* =========================================================
   MBU - Data Science Digital Library
   course-data.js
   -------------------------------------------------------------
   The five course modules and the tools used in this lab.
   Edit freely - the MODULES and TOOLS pages read from here.
   ========================================================= */

/* -------------------------------------------------------------
   1. MODULES
   Every module has 7 topics so the five modules stay even.
   topic: { t: title, d: what it covers, p: key points }
   exp:   optional related experiment number (adds a link)
   ------------------------------------------------------------- */
const modules = [
    {
        no: "01",
        title: "Data Science Fundamentals",
        tagline: "The foundations",
        desc: "Module 1 builds the vocabulary of the subject. It defines data science, lists the skills the job actually needs, introduces the tools, the data types, how data is collected, how it is cleaned before analysis, and what analysis means in practice.",
        outcome: "After this module you can explain what a DataFrame is, read a CSV, and describe a dataset honestly.",
        topics: [
            { t: "Definition of Data Science", d: "What data science means, how it differs from statistics and computer science, and the data science lifecycle from question to decision.", p: ["Data science = statistics + programming + domain knowledge", "The six steps: ask, collect, clean, explore, model, communicate", "A data scientist spends most of the time cleaning and exploring"] },
            { t: "Skills for Data Science", d: "The technical and human skills an employer expects, and how the technical skill split looks in a real job description.", p: ["Technical: programming, statistics, SQL, machine learning", "Soft: communication, curiosity, business judgement", "Learning a language is easier than learning to frame a question"] },
            { t: "Tools for Data Science", d: "An overview of the tool chain: languages, libraries, notebooks, IDEs, version control and deployment platforms.", p: ["Python, R, SQL as the three core languages", "pandas, NumPy, Matplotlib, scikit-learn", "Jupyter for exploration, Git for safety"] },
            { t: "Data Types", d: "The building blocks of a dataset: strings, integers, floats, booleans, dates, categories, and how missing data is represented.", p: ["Numeric, categorical, datetime and boolean types", "int64 versus float64 changes your arithmetic", "NaN is a missing value, not the number zero"] },
            { t: "Data Collection", d: "Where data comes from - files, databases, web scraping, APIs and sensors - plus how to judge whether a source is trustworthy.", p: ["CSV, Excel and JSON files", "SQL connections and REST APIs", "Check the licence and the refresh date before trusting a source"] },
            { t: "Data Preprocessing", d: "Turning raw data into analysis-ready data: missing values, duplicates, outliers, encoding and scaling.", p: ["dropna() versus fillna() - a real trade off", "IQR fences for outlier detection", "Scaling matters for distance based models"] },
            { t: "Data Analysis", d: "The first descriptive pass: shape, dtype, describe(), group by and correlation, and how to read the numbers before drawing conclusions.", p: ["Start with shape and dtypes, then describe()", "group by gives the insight, not just the total", "Correlation is a clue, never a conclusion"] },
        ],
    },
    {
        no: "02",
        title: "Statistics and Probability",
        tagline: "The mathematics behind the data",
        desc: "Module 2 covers the statistics that every claim in data science rests on. Descriptive statistics summarise a dataset, probability describes uncertainty, and the distributions explain the shapes we see in real data.",
        outcome: "After this module you can compute mean, median, variance and probability, and say which one a problem actually needs.",
        topics: [
            { t: "Descriptive Statistics", d: "Central tendency and spread: mean, median, mode, range, variance and standard deviation, and when each one misleads.", p: ["The mean is dragged by outliers, the median is not", "Standard deviation is the square root of the variance", "Report the five number summary before the average"] },
            { t: "Probability Basics", d: "Sample and event space, conditional probability, independence and the rules that combine probabilities.", p: ["P(A or B) = P(A) + P(B) - P(A and B)", "Conditional probability is the basis of prediction", "Independence is a claim you must test, not assume"] },
            { t: "Distributions", d: "Normal, Bernoulli, binomial, Poisson and uniform distributions, with the shape each one produces in a histogram.", p: ["Normal: bell shaped, symmetric, mean equals median", "Binomial counts successes in fixed trials", "Poisson counts events in a fixed interval"] },
            { t: "Hypothesis Testing", d: "Null and alternative hypotheses, the p-value, significance level and the two errors a test can make.", p: ["p < 0.05 is a convention, not a law", "Type I is a false positive, Type II a false miss", "State the hypothesis before you look at the data"] },
            { t: "Regression Basics", d: "The least squares line, the slope and intercept, R squared, and reading the line as a prediction tool.", p: ["Slope = change in y per unit change in x", "R squared is the share of variance explained", "Correlation does not survive the third variable problem"] },
            { t: "Sampling and Distributions", d: "Population versus sample, random sampling, sampling bias and the Central Limit Theorem.", p: ["A biased sample cannot be fixed by a bigger n", "The Central Limit Theorem makes means approximately normal", "Stratified sampling protects rare groups"] },
            { t: "Correlation and Covariance", d: "Measuring how two variables move together, Pearson versus Spearman, and the correlation matrix on a feature set.", p: ["Pearson for linear, Spearman for monotonic relationships", "Covariance scales with the units, correlation does not", "A correlation matrix reveals redundant features"] },
        ],
    },
    {
        no: "03",
        title: "Data Visualization and EDA",
        tagline: "Seeing the story in the numbers",
        desc: "Module 3 is about looking at data properly. Choosing the right chart for the question, building clean multi panel figures, and running an exploratory analysis that produces findings rather than decoration.",
        outcome: "After this module you can pick the correct chart for any question and defend the choice.",
        topics: [
            { t: "Chart Selection", d: "Matching the chart to the question: comparison, distribution, relationship or composition - and avoiding pie charts for close values.", p: ["Bar for comparison, line for trend, scatter for relationship", "Histogram for distribution, box plot for spread comparison", "A chart must answer one question clearly"] },
            { t: "Matplotlib Basics", d: "Figures, axes, labels, legends and subplots, plus saving a figure at the right DPI for a report.", p: ["Figure is the canvas, Axes is the plot area", "plt.subplots() builds a grid in one call", "tight_layout() stops labels from being cut off"] },
            { t: "Seaborn for Statistical Plots", d: "One line versions of the statistical plots: countplot, boxplot, violinplot, pairplot and heatmap.", p: ["Seaborn chooses sensible defaults for you", "hue adds a third dimension of colour", "pairplot shows every variable pair at once"] },
            { t: "Multi Panel Dashboards", d: "Combining several plots into one figure with subplots, shared axes and annotations that carry the conclusion.", p: ["sharex and sharey make panels comparable", "bar_label() adds exact values on top", "A suptitle tells the reader what the figure says"] },
            { t: "Distribution Analysis", d: "Reading histograms, density curves, skewness and kurtosis to describe the shape of a variable.", p: ["Skew near zero means symmetric", "Kurtosis measures how heavy the tails are", "A log transform often straightens a right skew"] },
            { t: "Relationship Analysis", d: "Scatter plots, regression lines, correlation coefficients and how a strong visual pattern gets a number attached to it.", p: ["regplot draws the fit plus a confidence band", "r = 0.97 here means hours of study strongly track marks", "Always report r alongside the picture"] },
            { t: "Interactive Dashboards", d: "Moving beyond static figures with filters, hover tooltips and multi-panel layouts in Plotly, Seaborn and Streamlit.", p: ["Plotly for hover and zoom, Streamlit for a web app", "Filter first, then chart - interactivity in the right order", "A dashboard is a decision tool, not a gallery"] },
        ],
    },
    {
        no: "04",
        title: "Machine Learning",
        tagline: "Learning patterns from data",
        desc: "Module 4 covers supervised and unsupervised learning. Features are prepared, models are trained, predictions are evaluated and the model is compared against a baseline before it is trusted.",
        outcome: "After this module you can build a baseline model, improve it, and measure the improvement honestly.",
        topics: [
            { t: "Supervised Learning", d: "The supervised workflow: labelled data, a training split, fitting a model, predicting on unseen data and checking the accuracy.", p: ["Labelled data means every row already has the answer", "Train and test sets must never overlap", "Fit on train, predict on test, measure the gap"] },
            { t: "Linear Regression", d: "The first model: a straight line through the data, the least squares method, and reading the coefficients.", p: ["y = mx + c, fitted by minimising squared error", "Every coefficient is a real, readable number", "Works only for a roughly linear relationship"] },
            { t: "Decision Trees", d: "Splitting data on a feature to reduce impurity, entropy, Gini and information gain, and the overfitting that follows a deep tree.", p: ["The split chosen is the one with the highest information gain", "Trees need no scaling and ignore feature units", "Pruning or a max depth controls overfitting"] },
            { t: "Classification", d: "Turning the output into a class label: a threshold, the confusion matrix, accuracy, precision, recall and F1.", p: ["The confusion matrix has four cells, not two", "Precision asks: when it says yes, is it right?", "Recall asks: of the real yes cases, how many did we find?"] },
            { t: "Random Forest and Ensembles", d: "Many trees voting together, why averaging reduces variance, and bagging versus boosting.", p: ["Bootstrap samples create different trees from one dataset", "The forest is more stable than any single tree", "Boosting corrects the errors of the previous tree"] },
            { t: "Unsupervised Learning", d: "Finding structure without labels: k-means clustering, the elbow method, and silhouette score.", p: ["k-means groups by distance to a centroid", "The elbow method picks a sensible k", "Clusters are not facts - always profile them"] },
            { t: "Model Evaluation", d: "Train/test splits, cross validation, overfitting versus underfitting, and metrics for regression and classification.", p: ["Cross validation reuses the data instead of wasting it", "A high training score with a low test score is overfitting", "Compare against a baseline before celebrating accuracy"] },
        ],
    },
    {
        no: "05",
        title: "Advanced Data Science",
        tagline: "Deep learning, language and time",
        desc: "Module 5 extends the toolkit. Neural networks and deep learning handle images and text, time series analysis works with a time index, model deployment makes a result usable, and ethics decides whether it should be used at all.",
        outcome: "After this module you can recognise which advanced method a problem needs, and ship a model responsibly.",
        topics: [
            { t: "Neural Network Basics", d: "Layers, weights, biases, activation functions and the forward pass that turns inputs into a prediction.", p: ["A neuron is a weighted sum plus an activation", "Activation functions add the non linearity", "Backpropagation learns the weights from the error"] },
            { t: "Deep Learning", d: "Convolutional networks for images and recurrent networks for sequences, plus epochs, batches and overfitting control.", p: ["Convolution extracts edges, then shapes, then objects", "An epoch is one full pass over the training data", "Dropout and early stopping are cheap regularisers"] },
            { t: "Natural Language Processing", d: "Cleaning text, tokenisation, TF-IDF vectors, word embeddings and a first text classifier.", p: ["Bag of words ignores order but is surprisingly strong", "TF-IDF down weights words that appear everywhere", "Embeddings place similar words near each other"] },
            { t: "Time Series Analysis", d: "DatetimeIndex, date ranges, time zones, periods, resampling, downsampling and upsampling - the subject of experiment 6.", p: ["The index carries time, so label slicing just works", "resample aggregates, asfreq only relabels", "Upsampling interpolates, it does not invent data"], exp: 6 },
            { t: "Model Deployment", d: "Turning a notebook into something others can use: pickling, a REST API with Flask or FastAPI, and a containerised app.", p: ["A model without an interface is a private solution", "Flask or FastAPI wraps predict() in an endpoint", "Version the data and the model together"] },
            { t: "Capstone Project", d: "The full cycle on one real problem: define the question, collect, clean, explore, model, evaluate and present.", p: ["A good question is specific and answerable with data you have", "Keep a record of every decision and its reason", "Present the finding, not the tooling"] },
            { t: "Ethics and Data Privacy", d: "Bias in data, fairness of outcomes, informed consent, anonymisation and the legal limits of what you may collect.", p: ["Historical data carries historical bias", "Anonymise, but do not assume it is enough", "Privacy law is a hard constraint, not a preference"] },
        ],
    },
];

/* -------------------------------------------------------------
   3. PROJECT IDEAS  (shown on the PROJECTS page)
   no / title / tagline / tag / desc / data / skills / deliverable
   ------------------------------------------------------------- */
const projects = [
    {
        no: "01",
        title: "Student Performance and At-Risk Predictor",
        tagline: "Cleaning &middot; Classification &middot; Streamlit",
        tag: "Beginner friendly",
        desc: "Use one table of student records to answer a real question: who is likely to fall below the passing mark this semester?",
        data: "Department result data (roll no, attendance, internal, exam marks) or the Kaggle 'Students Performance' dataset.",
        skills: ["pandas cleaning", "EDA and correlation", "logistic regression", "confusion matrix"],
        deliverable: "A small Streamlit app that shows the risk score per student and two charts explaining the prediction.",
        steps: ["Clean the raw sheet and describe it", "Train a decision tree against a pass / fail label", "Report accuracy, precision and recall on a test split"],
    },
    {
        no: "02",
        title: "Retail Demand Forecasting Dashboard",
        tagline: "Time Series &middot; Resampling &middot; Dashboard",
        tag: "Intermediate",
        desc: "Turn daily sales records into a forecast. The resampling knowledge of experiment 6 is the whole backbone of this project.",
        data: "A daily sales CSV (date, product, units sold) or a public store sales dataset from Kaggle.",
        skills: ["pd.date_range and to_datetime", "resample and rolling mean", "matplotlib trend plots", "Streamlit layout"],
        deliverable: "A dashboard with a monthly demand chart, a moving average trend line and a short note on the busiest week.",
        steps: ["Build a DatetimeIndex and check gaps in the dates", "Aggregate to week and month with resample()", "Compare the moving average against the raw series"],
    },
    {
        no: "03",
        title: "Review Sentiment Analysis with TF-IDF",
        tagline: "NLP &middot; Vectorisation &middot; Naive Bayes",
        tag: "Intermediate",
        desc: "Collect written feedback, convert it into numbers and let a simple classifier say whether the feedback is positive or negative.",
        data: "A labelled review dataset from Kaggle, or the free Google Play reviews dataset.",
        skills: ["text cleaning and regex", "TF-IDF vectors", "Naive Bayes classifier", "word cloud and confusion matrix"],
        deliverable: "A notebook that predicts the label of five new sentences and plots the most frequent words of each class.",
        steps: ["Clean the text and drop the empty rows", "Fit TF-IDF on train, transform the test set", "Compare Naive Bayes with logistic regression on accuracy"],
    },
];

/* -------------------------------------------------------------
   4. RESOURCES  (shown on the RESOURCES page)
   group: heading of the card group   n: name   d: use   u: link
   ------------------------------------------------------------- */
const resources = [
    {
        group: "Learn the Subject",
        items: [
            { n: "Kaggle Learn", d: "Free short courses on Python, pandas, machine learning and SQL - the fastest way in.", u: "https://www.kaggle.com/learn" },
            { n: "Google Data Analytics Certificate", d: "The full beginner path: ask, prepare, process, analyse and share a dataset.", u: "https://www.coursera.org/professional-certificates/google-data-analytics" },
            { n: "IBM Data Science Certificate", d: "Python, SQL and machine learning combined in one professional programme.", u: "https://www.coursera.org/professional-certificates/ibm-data-science" },
            { n: "Python Data Science Handbook", d: "Jake VanderPlas' complete book, readable online for free.", u: "https://jakevdp.github.io/PythonDataScienceHandbook/" },
            { n: "fast.ai Practical Deep Learning", d: "A top-down deep learning course that starts from working models, not theory.", u: "https://course.fast.ai/" },
            { n: "StatQuest", d: "Statistics and machine learning explained with drawings and very small examples.", u: "https://statquest.org/" },
        ],
    },
    {
        group: "Official Documentation",
        items: [
            { n: "Python 3 Documentation", d: "The language reference and tutorial - the answer for any syntax doubt.", u: "https://docs.python.org/3/" },
            { n: "pandas User Guide", d: "Every method used in this laboratory, with examples and edge cases.", u: "https://pandas.pydata.org/docs/" },
            { n: "pandas Cheat Sheet", d: "One page that maps the problem you have to the method you need.", u: "https://pandas.pydata.org/docs/user_guide/cheatsheet.html" },
            { n: "NumPy Reference", d: "Arrays, broadcasting and data types - the engine under pandas.", u: "https://numpy.org/doc/stable/" },
            { n: "Matplotlib", d: "The plot gallery is the fastest way to find the right chart for a question.", u: "https://matplotlib.org/stable/gallery/" },
            { n: "seaborn API", d: "Statistical plots with one call each: histplot, boxplot, violinplot, pairplot.", u: "https://seaborn.pydata.org/api.html" },
            { n: "scikit-learn User Guide", d: "Estimators, pipelines, cross validation and model evaluation in one guide.", u: "https://scikit-learn.org/stable/user_guide.html" },
            { n: "SQLite Documentation", d: "The database behind sub-experiment 2B: syntax, functions and the CLI.", u: "https://www.sqlite.org/docs.html" },
        ],
    },
    {
        group: "Free Datasets",
        items: [
            { n: "Kaggle Datasets", d: "Hundreds of thousands of public datasets, most of them already loaded as a notebook.", u: "https://www.kaggle.com/datasets" },
            { n: "UCI Machine Learning Repository", d: "Small, clean, well documented datasets - ideal for a first practice project.", u: "https://archive.ics.uci.edu/" },
            { n: "data.gov.in", d: "Open government data from India: education, weather, transport and economy.", u: "https://www.data.gov.in" },
            { n: "Google BigQuery Public Data", d: "Query very large public tables in the cloud without downloading anything.", u: "https://console.cloud.google.com/bigquery" },
            { n: "Hugging Face Datasets", d: "Text and image datasets for NLP and computer vision projects.", u: "https://huggingface.co/datasets" },
        ],
    },
    {
        group: "SQL and Practice",
        items: [
            { n: "SQLBolt", d: "Interactive SQL lessons that take about fifteen minutes end to end.", u: "https://sqlbolt.com/" },
            { n: "Mode SQL Tutorial", d: "Analytics focused SQL using real queries on real tables.", u: "https://mode.com/sql-tutorial/" },
            { n: "Kaggle Competitions", d: "Practice on real messy data with public leaderboards and discussion forums.", u: "https://www.kaggle.com/competitions" },
            { n: "HackerRank Data Science", d: "Small timed problems in Python, pandas and statistics, plus certificates.", u: "https://www.hackerrank.com/domains/python" },
            { n: "DrivenData", d: "Data science challenges that solve a real social problem.", u: "https://www.drivendata.org/competitions/" },
        ],
    },
    {
        group: "Reading and Roadmaps",
        items: [
            { n: "roadmap.sh Data Science", d: "An ordered path from Python basics to deployment - use it to plan a semester.", u: "https://roadmap.sh/data-science" },
            { n: "Towards Data Science", d: "Practical articles for every step of the workflow, from cleaning to deployment.", u: "https://towardsdatascience.com/" },
            { n: "Analytics Vidhya", d: "Tutorials, a code almanac and interview question banks for data roles.", u: "https://www.analyticsvidhya.com/" },
            { n: "Python Cheat Sheet", d: "A single page Python reference that is useful while writing lab code.", u: "https://www.pythoncheatsheet.org/" },
        ],
    },
];

/* -------------------------------------------------------------
   2. TOOLS
   group: heading of the card group
   ------------------------------------------------------------- */
const tools = [
    {
        group: "Languages",
        items: [
            { n: "Python", d: "The default language of the lab - every program in this library is written in it.", u: "https://www.python.org" },
            { n: "R", d: "Strong for statistics and research, widely used in academic data analysis.", u: "https://www.r-project.org" },
            { n: "SQL", d: "Querying relational databases directly, used in experiment 2 for the SQLite store.", u: "https://www.sqlite.org" },
            { n: "JavaScript", d: "The language behind this website - the library, search and modal are plain JavaScript.", u: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        ],
    },
    {
        group: "Data Handling",
        items: [
            { n: "pandas", d: "The DataFrame library behind every experiment here - reading, cleaning, reshaping and grouping.", u: "https://pandas.pydata.org" },
            { n: "NumPy", d: "Fast numeric arrays that pandas is built on.", u: "https://numpy.org" },
            { n: "openpyxl", d: "The engine pandas uses to write and read Excel workbooks.", u: "https://openpyxl.readthedocs.io" },
            { n: "Polars", d: "A fast modern alternative to pandas for very large tables.", u: "https://pola.rs" },
            { n: "Dask", d: "Parallel DataFrames for datasets that do not fit in memory.", u: "https://www.dask.org" },
        ],
    },
    {
        group: "Visualization",
        items: [
            { n: "Matplotlib", d: "The base plotting library - full control over every figure and axis.", u: "https://matplotlib.org" },
            { n: "Seaborn", d: "Statistical plots with sensible defaults, built on Matplotlib.", u: "https://seaborn.pydata.org" },
            { n: "Plotly", d: "Interactive charts with hover, zoom and web embedding.", u: "https://plotly.com" },
            { n: "Streamlit", d: "Turns a Python script into a shareable web app in minutes.", u: "https://streamlit.io" },
        ],
    },
    {
        group: "Machine Learning",
        items: [
            { n: "scikit-learn", d: "The standard library for regression, classification, clustering and evaluation.", u: "https://scikit-learn.org" },
            { n: "TensorFlow", d: "Deep learning framework from Google, widely used for neural networks.", u: "https://www.tensorflow.org" },
            { n: "PyTorch", d: "Deep learning framework from Meta, popular in research.", u: "https://pytorch.org" },
            { n: "Keras", d: "A friendly high level layer on top of TensorFlow for building models fast.", u: "https://keras.io" },
            { n: "XGBoost", d: "Gradient boosting, the most common winner on tabular data.", u: "https://xgboost.readthedocs.io" },
        ],
    },
    {
        group: "Data Sources",
        items: [
            { n: "Kaggle", d: "Datasets, notebooks and free micro-courses for practice.", u: "https://www.kaggle.com" },
            { n: "Google BigQuery", d: "Query very large public datasets directly in the cloud.", u: "https://cloud.google.com/bigquery" },
            { n: "IBM Watson Studio", d: "Free notebook environment in the browser, no local setup.", u: "https://www.ibm.com/products/watson-studio" },
        ],
    },
    {
        group: "Environment and Publishing",
        items: [
            { n: "VS Code", d: "The editor used to build this library - edit index.html, style.css and script.js here.", u: "https://code.visualstudio.com" },
            { n: "Jupyter Notebook", d: "Run one program cell at a time and keep the output under the code.", u: "https://jupyter.org" },
            { n: "Google Colab", d: "Jupyter notebooks in the browser with free GPU access.", u: "https://colab.research.google.com" },
            { n: "Git & GitHub", d: "Version control and the hosting behind every GitHub link in this library.", u: "https://github.com" },
            { n: "Flask", d: "A minimal Python web framework for wrapping a model in an API.", u: "https://flask.palletsprojects.com" },
            { n: "FastAPI", d: "A modern, typed alternative to Flask with automatic documentation.", u: "https://fastapi.tiangolo.com" },
            { n: "Docker", d: "Packages an app and its dependencies so it runs the same everywhere.", u: "https://www.docker.com" },
        ],
    },
];
/* -------------------------------------------------------------
   MODULE LONG NOTES  (shown on each module page as long form
   content, two or three pages per module, with flowcharts)
   flow.steps entries are [label, tag] pairs.
   ------------------------------------------------------------- */
const moduleNotes = [
  {
    module: "01",
    pages: [
      { kicker: "Page 1 of 3", title: "Why a question matters more than an answer",
        lead: "Data science is a six step loop. Most of your work is spent on the first three.",
        body: [
          "A data scientist is not a person who owns a fancier algorithm. The difference is that they start with a written question before they touch the data. If the question is vague, every later step produces a number that looks convincing and decides nothing. Writing the question in one sentence, in plain English, is the cheapest and most ignored habit in this whole subject.",
          "The data science lifecycle runs in a fixed order: ask, collect, clean, explore, model, communicate. Collecting comes after the question because the question decides which columns you need. Cleaning comes before exploration because a plot looks beautiful on messy data and misleads you. Modeling comes late because modeling on a bad question just makes the wrong answer arrive faster.",
          "Communicate is the last step and the one that is never graded in a tutorial. A model that nobody understands is a private toy. The deliverable of a project is a sentence that a non technical person can repeat in a meeting. That sentence is the test."
        ],
        points: [
          "Define the question in one sentence before opening any tool.",
          "Do not collect data before the question exists.",
          "Cleaning first, exploration second, modeling third.",
          "The deliverable is one sentence, not a notebook."
        ],
        flow: { title: "The data science lifecycle",
          steps: [["Ask","01"],["Collect","02"],["Clean","03"],["Explore","04"],["Model","05"],["Communicate","06"]],
          caption: "Cleaning is step three because you cannot understand a table you have not cleaned."
        },
        example: { title: "The very first line of every notebook",
          code: "import pandas as pd\n\n# write the question here, in English\n# 'Which branch has the highest average total marks?'\n\nstudents = pd.read_csv('students.csv')\nprint(students.head())\nprint('shape:', students.shape)",
          note: "Comments before code are not documentation. They are the question that the code has to answer."
        },
        takeaways: [ "Ask first, code second.", "Every step in the loop has a reason.", "A result is not a finding until someone else understands it." ] },
      { kicker: "Page 2 of 3", title: "The tools are small, the problems are big",
        lead: "Python, R and SQL are comparable. The split that matters is between exploration and production.",
        body: [
          "Python wins because of its libraries, not its speed. R wins on statistics and research. SQL wins whenever the data does not fit on one machine and has to be queried where it lives. Knowing one well is worth more than knowing three poorly, but you will use SQL every day even if you never write a line of it, because every pandas DataFrame used to be a table.",
          "The tool chain has four layers. Languages are the grammar, libraries like pandas are the vocabulary, notebooks like Jupyter are the workspace, and version control is the safety net. Most beginners invert this and configure Docker before they can read a CSV. The order of learning is the order of the layers.",
          "Jupyter is for thinking and Git is for remembering. The final delivery is neither of them. A script that runs top to bottom in three seconds is the only artifact that survives handover. Write notebooks to think and scripts to share."
        ],
        points: [
          "Python for data, R for statistics, SQL for storage.",
          "pandas and NumPy sit under everything.",
          "Jupyter explores, Git protects, a script delivers.",
          "A reproducible script is the real output of a project."
        ],
        flow: { title: "From idea to delivery",
          steps: [["Paper and pen","QUESTION"],["Jupyter","EXPLORE"],["Python script","CODE"],["Git","PROTECT"],["One command","RUN"]],
          caption: "Jupyter and Git solve different problems. They do not replace each other."
        },
        takeaways: [ "One language well beats three languages badly.", "A script that runs on another person's machine is the finish line." ] },
      { kicker: "Page 3 of 3", title: "Types, files and missing values",
        lead: "The type of a column decides which operations are legal. Read it before you touch it.",
        body: [
          "Every dataset has a shape and every column has a type. Parameters of mathematics like the mean only make sense for numbers. Counts only make sense for categories. The wrong type is the most common silent bug in a pipeline: a column that says forty nine as text will not average and nothing will warn you.",
          "Data arrives as CSV, Excel, JSON or a database table. CSV is the safe default for sharing, Excel is the default for people, JSON is the default for APIs. Do not choose the format from habit. Choose it from the next reader. to_csv, to_excel and to_json siblings exist because the readers differ.",
          "Missing values are a fact, not an error. A missing age is a decision someone made. Empty cells can mean zero, unknown, not measured or not applicable. Never fill a missing value with a number before you decide what the absence means. A zero is a value and it is the wrong default."
        ],
        points: [
          "Check df.dtypes and df.info() first.",
          "Nine integer versus 9.0 floating is not the same column.",
          "CSV for machines, Excel for humans, JSON for APIs.",
          "A NaN is information, not a gap to patch."
        ],
        flow: { title: "Reading a new dataset",
          steps: [["shape and dtypes","PROFILE"],["head() and tail()","LOOK"],["isnull().sum()","NULLS"],["describe()","NUMBERS"],["value_counts()","CATEGORIES"]],
          caption: "Five checks take two minutes. They prevent two hours of debugging."
        },
        takeaways: [ "Types control what is legal to do.", "Choose the file format for the reader.", "Missing values are data too." ] }
    ]
  },
  {
    module: "02",
    pages: [
      { kicker: "Page 1 of 3", title: "Averages lie, spreads tell",
        lead: "The mean is the second most honest statistic. The median is the first.",
        body: [
          "The mean of Rahul, Sneha and a billionaire is a number that describes nobody. A single extreme value moves the mean all the way there and leaves the median where the middle person is. Mean is arithmetic, median is robust, and the choice between them is a choice about whether the tail matters.",
          "Spread kills more projects than wrong averages. A small standard deviation means the data agrees with itself and the mean is trustworthy. A large one means the average hides a family of different values and the mean is decoration. Two datasets with the same mean and different spreads are two different datasets and they do not deserve one sentence.",
          "Report the five number summary before the average: minimum, lower quartile, median, upper quartile, maximum. If the minimum and maximum are far from where the bulk sits, the average is the wrong one line. An experiment with a box plot and no numbers is a poster. An experiment with numbers and no chart is a memo. You want both."
        ],
        points: [
          "Mean for symmetric data, median for skewed data.",
          "Standard deviation is the average distance from the mean.",
          "The five number summary always comes first.",
          "Two identical means can hide two different datasets."
        ],
        flow: { title: "Summarising a column",
          steps: [["min, median, max","FIVE NUMBER"],["mean and std","CENTRE AND SPREAD"],["histogram","SHAPE"],["outliers beyond IQR","CHECK"],["groupby()","SUBGROUPS"]],
          caption: "Print describe() before you draw anything."
        },
        takeaways: [ "Mean and median agree only on symmetric data.", "The spread is information, not an apology.", "Group by before you conclude." ] },
      { kicker: "Page 2 of 3", title: "Probability is the language of uncertainty",
        lead: "Certainty is a measure of how surprised you will be. Probability is that measure written as a number.",
        body: [
          "Probability attaches a number between zero and one to an event. One means it always happens, zero means it never does. The entire subject rests on three rules: the probability of everything in the sample space is one, two mutually exclusive events add, and a conditional probability divides by what is known.",
          "Conditional probability is where prediction lives. Knowing that a student is from the CSE branch changes the probability of their mark. Bayes theorem makes this two way. Every classifier in machine learning is a conditional probability with a name, and every naive assumption in it is a statement that two things are independent when they are not.",
          "Independence is a claim, not a default. Two variables are independent only when knowing one gives no clue about the other. Most students assert this after looking at two columns. The work is testing it. Correlation is the test for linear dependence, Spearman is the test for monotonic dependence, and neither one proves independence."
        ],
        points: [
          "P of everything is one.",
          "Mutually exclusive events add.",
          "Conditional probability is prediction in numbers.",
          "Independence is a claim to test."
        ],
        flow: { title: "From raw data to a probability",
          steps: [["Event and sample space","DEFINE"],["Count outcomes","COUNT][(conditional knowledge)","CONDITION"],["Apply Bayes","INVERT"],["Check independence","VERIFY"]],
          caption: "A probability is only as good as the sample it was counted from."
        },
        takeaways: [ "Probability is a number, not a feeling.", "Almost all prediction is conditional.", "Independence is tested, never assumed." ] },
      { kicker: "Page 3 of 3", title: "Shape chooses the method",
        lead: "The histogram decides which statistics and which tests are fair.",
        body: [
          "Normal, binomial, Poisson and uniform distributions each produce a recognisable histogram. Normal data is symmetric with the mean at the peak. Binomial data counts successes in a fixed number of trials. Poisson data counts events in a fixed window of time. Each shape carries its own mean and variance, so recognising the shape decides the model.",
          "A hypothesis test asks one question: is the difference I see larger than I would expect from chance. The p-value answers it. A p below 0.05 is a convention and not a law, it means one in twenty with nothing happening. The two mistakes are easy to name: a false positive sees a signal that is not there, a false negative misses a signal that is there. Pick the wrong cut off and you trade one for the other.",
          "Regression draws the straight line that minimises the squared error. The slope is the change in the predicted value per unit change in the input. R squared says how much of the movement was explained by the line. A high R squared is not proof of causation, it is proof that the line and the data agree on this particular sample."
        ],
        points: [
          "Normal, binomial, Poisson and uniform: name the shape first.",
          "p below 0.05 is a convention.",
          "Type one is a false positive, type two is a false miss.",
          "R squared is explained variance, not cause."
        ],
        flow: { title: "Choosing a statistical method",
          steps: [["Plot the histogram","SHAPE"],["Identify the distribution","NAME"],["Pick a test or model","METHOD"],["Report p or R squared","EVIDENCE"],["State the assumption","CAVEAT"]],
          caption: "Hypothesis and assumptions are written before the data is touched."
        },
        takeaways: [ "Shape decides the method.", "A p-value is not a proof.", "R squared is a agreement, not a cause." ] }
    ]
  },
  {
    module: "03",
    pages: [
      { kicker: "Page 1 of 3", title: "A chart has exactly one job",
        lead: "The chart exists to answer one question. If two questions need two charts.",
        body: [
          "A bar chart compares quantities, a line chart carries a trend, a scatter shows a relationship and a histogram shows a distribution. Everything else is decoration. Pie charts in particular hide small differences that bar charts reveal, and a chart with thirty colours reads as noise.",
          "seaborn gives sensible plots with one call. matplotlib stays available for the moment the defaults are not enough. Every figure in this library is paired with the numbers that produced it, so a claim in the chart can be checked below the chart. A figure that cannot be checked is an opinion.",
          "Dashboards answer decisions, not questions. Filters come first, charts come second, a conclusion comes last. A dashboard that shows everything is a gallery. A dashboard that hides everything except the decision is a tool."
        ],
        points: [
          "One chart, one question.",
          "Bar for comparison, line for trend, scatter for relation.",
          "Pair every figure with its numbers.",
          "A dashboard is a decision tool, not a gallery."
        ],
        flow: { title: "From data to the right chart",
          steps: [["What is the question?","QUESTION"],["Comparison, trend, relation or distribution","TYPE"],["Pick bar, line, scatter or histogram","CHART"],["Pair with numbers","VERIFY"],["Annotate the conclusion","DECIDE"]],
          caption: "Choose the question before the colour."
        },
        takeaways: [ "A chart is an answer, not an illustration.", "Defaults are fine until they are not.", "Colour is the last decision, not the first." ] },
      { kicker: "Page 2 of 3", title: "Plots are numbers with eyes",
        lead: "Every visual pattern has a number. Finding the number is the proof.",
        body: [
          "A scatter plot shows study hours against marks and the eye sees a clear upward line. The number behind that line is the Pearson correlation of 0.97. Reporting only the picture invites doubt; reporting the number with it gives the reader something to verify. The two together are the finding.",
          "Distribution analysis reads shape before ranking. A right skew has a mean larger than the median and a tail to the right. A left skew has the reverse. Kurtosis tells how heavy the tails are. A log transform straightens a right skew and makes a multiplicative relationship additive. Shape is not decoration, it is the decision about which transform to apply.",
          "Subplots matter because one panel is one idea. Shared axis makes panels comparable. bar_label puts the exact number on top of the bar. A suptitle says what the whole figure means in one line. A figure that needs a caption of three paragraphs has not finished being drawn."
        ],
        points: [
          "Scatter gives r, box gives quartiles.",
          "Skew near zero means symmetric.",
          "A log transform straightens a right skew.",
          "One panel, one idea; align the axes."
        ],
        flow: { title: "Reading a figure as data",
          steps: [["Plot the scatter","SEE"],["Compute r","MEASURE"],["Build the histogram","SHAPE"],["Apply a transform if skewed","SHAPE"],["Write the one line conclusion","CLAIM"]],
          caption: "Every visual claim earns a number."
        },
        takeaways: [ "Pair the picture with the number.", "Skew decides the transform.", "Suptitle carries the conclusion." ] },
      { kicker: "Page 3 of 3", title: "Exploration is not decoration",
        lead: "EDA produces findings, not a gallery.",
        body: [
          "Exploratory data analysis is the only stage between raw data and a model where a human looks at the data. That stage catches the wrong column, the unbalanced target and the impossible value before they become the wrong model. The time spent here is paid back in model quality, not in a presentation.",
          "A good EDA ends in at most five sentences. What is the target and how is it distributed. What three features relate to it. What is missing and what is broken. Which row is the outlier. Any examination that ends at fifty plots without a sentence has wasted time and learned nothing.",
          "Interactivity changes the order. Filter first, then chart, then zoom. Plotly and Streamlit are tools for this, and they are the end product of a good investigation. Building one before you know the finding makes a dashboard that looks finished and answers nothing."
        ],
        points: [
          "EDA catches bad data before the model does.",
          "Five sentences, not fifty plots.",
          "Filter first, chart second.",
          "Interactivity is added after the finding."
        ],
        flow: { title: "An honest EDA",
          steps: [["Shape and dtypes","PROFILE"],["Missing and duplicate data","CLEAN"],["Target distribution","TARGET"],["Three informative plots","EXPLORE"],["Five written findings","WRITE"]],
          caption: "The last step is the deliverable."
        },
        takeaways: [ "EDA is for finding, not showing.", "Five sentences is enough.", "Charts follow the finding." ] }
    ]
  },
  {
    module: "04",
    pages: [
      { kicker: "Page 1 of 3", title: "Start with a baseline before you celebrate",
        lead: "A model that beats a guessing coin is already half a success, and most models never do.",
        body: [
          "Supervised learning means labelled data. You split it into train and test, fit on train, predict on test. The number you get is not yours until it beats a baseline that is trivially cheap, like the mean or the majority class. If the baseline is already ninety percent and your model gets ninety two, the model is not the story. The data is.",
          "Linear regression draws the straight line of least squares. The slope says how much y changes per unit x. Every coefficient is a readable number. The limitation is the same as the strength: it only sees lines. A relationship that curves needs a different model.",
          "Train and test must never overlap, and the test set is touched once, at the very end. Touching it twice writes the answer into your choice. Cross validation reuses available data by reusing it carefully. A high training score with a low test score is overfitting and is the most honest diagnosis you will ever give a model."
        ],
        points: [
          "Baseline first, model second.",
          "y = mx + c, fitted by least squares.",
          "Test set is touched once.",
          "Cross validation instead of wasted data."
        ],
        flow: { title: "The supervised workflow",
          steps: [["Labelled data","DATA"],["Train and test split","SPLIT"],["Baseline model","BASELINE"],["Fit the model","TRAIN"],["Evaluate on test","SCORE"]],
          caption: "The gap between train and test scores is overfitting."
        },
        takeaways: [ "Beat the baseline or admit it.", "A model is a claim checked on new data.", "Touching the test set twice is cheating yourself." ] },
      { kicker: "Page 2 of 3", title: "How a decision tree thinks",
        lead: "A tree asks the question that reduces uncertainty the most at every split.",
        body: [
          "A decision tree chooses the split that maximises information gain, which is the reduction in uncertainty after splitting. Entropy measures that uncertainty. A pure node has entropy zero. Each split divides the data on a feature and a threshold, and the chosen one is the one that separates the classes best.",
          "Trees need no scaling. The units of a feature do not matter because the split is on a threshold, not on a distance. Trees ignore irrelevant features naturally. The cost of this is depth: a deep tree memorises the training data and fails everywhere else. Controlling depth or pruning is the only medicine.",
          "Random forests average many trees trained on bootstrap samples of the data. Averaging reduces variance. Bagging means many models, one vote. Boosting corrects the errors of the previous model and is the engine behind gradient boosted machines, which remain the winner on most tabular data to this day."
        ],
        points: [
          "Choose the split with maximum information gain.",
          "Entropy is the uncertainty of the node.",
          "No scaling, units are irrelevant.",
          "Prune or limit depth to control overfitting."
        ],
        flow: { title: "Splitting on a feature",
          steps: [["Compute entropy of the node","UNCERTAINTY"],["Try each feature and threshold","SPLIT"],["Measure information gain","GAIN"],["Pick the maximum","CHOOSE"],["Recurse until pure or pruned","STOP"]],
          caption: "In experiment 5 the best threshold on the marks column was 75."
        },
        takeaways: [ "A model is a series of yes and no.", "Trees read a feature without scaling.", "Depth controls memorisation." ] },
      { kicker: "Page 3 of 3", title: "Measuring honestly is half the work",
        lead: "Accuracy is one number. There are four numbers behind it, and they matter.",
        body: [
          "Classification sends an output to a class label. The confusion matrix has four cells: true positives, false positives, true negatives, false negatives. Accuracy is the sum of the two true cells divided by the total. On unbalanced data, accuracy lies: a model that always predicts the majority class gets high accuracy and does nothing useful.",
          "Precision asks, when it says yes, is it right. Recall asks, of the real yes cases, how many did we find. F1 balances the two. A fraud detector wants high precision because a false positive blocks a customer. A medical screen wants high recall because a false negative misses a patient. The same model optimises differently for the two.",
          "Clustering finds groups without labels: k means, elbow method, silhouette score. Clusters are not facts, they are suggestions. Always profile the clusters after they are found to see what they actually contain. A cluster that you cannot name after profiling is probably noise."
        ],
        points: [
          "Confusion matrix has four cells.",
          "Accuracy is weak on unbalanced data.",
          "Precision for yes-confidence, recall for finding yes.",
          "Clusters are suggestions to profile."
        ],
        flow: { title: "Evaluating a classification",
          steps: [["Predictions and labels","PREDICT"],["Confusion matrix","CM"],["Precision and recall","METRICS"],["F1 or AUC","SUMMARY"],["Baseline comparison","HONEST"]],
          caption: "Report all four cells, not one ratio."
        },
        takeaways: [ "Accuracy hides unbalanced data.", "Metric follows the business cost.", "Cross validate before trusting." ] }
    ]
  },
  {
    module: "05",
    pages: [
      { kicker: "Page 1 of 3", title: "A neural network is a function with knobs",
        lead: "A neuron is a weighted sum plus an activation. Backpropagation learns the weights. That is the entire magic.",
        body: [
          "A neural network is a chain of simple functions. Each neuron takes its inputs, multiplies them by weights, adds a bias, and pushes the result through an activation that adds non-linearity. The output of one layer is the input of the next. The forward pass is prediction, and it is a multiplication of matrices followed by a function.",
          "Deep learning is the same idea deeper. Convolutional layers extract edges first, then shapes, then objects. Recurrent layers handle sequences. An epoch is one pass over the training data. Dropout and early stopping are cheap regularisers that stop the network from memorising. The cost of this power is data: networks need lots of it and they give little back when it is small.",
          "Natural language processing treats text as numbers. Clean the text, tokenise into words, build a TF-IDF vector per document. Bag of words ignores order and is surprisingly strong. TF-IDF down-weights words that appear everywhere. Word embeddings place similar words near each other. The result is a feature matrix that a classifier can read."
        ],
        points: [
          "Neuron = weighted sum then activation.",
          "Layers add the non-linearity.",
          "Convolution extracts edges then shapes then objects.",
          "Bag of words is a strong baseline."
        ],
        flow: { title: "Forward pass",
          steps: [["Inputs","X"],["Weights, weighted sum","Z"],["Activation","SIGMA"],["Next layer output","A"],["Final prediction","Y"]],
          caption: "Backpropagation then carries the error backwards and adjusts the weights."
        },
        takeaways: [ "Networks fit curves, not rules.", "Data matters more than layers.", "Text has to become numbers first." ] },
      { kicker: "Page 2 of 3", title: "Time runs through the data as an index",
        lead: "A time series is a table whose index is time. Pandas treats it as a first class citizen.",
        body: [
          "to_datetime turns text into datetime64 values and unlocks slicing by label, so you can ask for all of March without a loop. date_range builds a regular index: daily, business day, monthly, weekly, hourly. A regular index means every interval is the same size, which is what forecasting assumes.",
          "Timezone handling comes in two moves. tz_localize attaches a zone to naive data. tz_convert changes the display zone of aware data. Mixing the two operations is the usual source of midnight errors. Correct them early and the rest of the analysis is mechanical.",
          "Resampling moves between granularities. Downsampling, like hourly to daily, aggregates with sum or mean and is faithful. Upsampling, like daily to hourly, interpolates and does not invent data. asfreq only relabels, it does not aggregate, which is why it is rarely what you want. Period objects are a different idea: they label a span of time rather than an instant, so they behave differently under arithmetic."
        ],
        points: [
          "to_datetime makes text usable.",
          "date_range builds a regular index.",
          "resample aggregates, asfreq only relabels.",
          "Periods and timestamps are not the same."
        ],
        flow: { title: "Handling a time series",
          steps: [["Date strings","RAW"],["pd.to_datetime","DATETIME64"],["DatetimeIndex","INDEX"],["tz_localize, tz_convert","ZONES"],["resample or asfreq","GRANULARITY"],["Trend over time","INSIGHT"]],
          caption: "Upsampling interpolates; downsampling aggregates."
        },
        takeaways: [ "The index carries time, slicing becomes easy.", "resample and asfreq are not interchangeable.", "A period names a span, a timestamp names an instant." ] },
      { kicker: "Page 3 of 3", title: "A model that nobody can use is only a score",
        lead: "Deployment is the step that turns a number into a decision.",
        body: [
          "Deployment is the bridge from notebook to product. Save the model with pickle so it can be loaded elsewhere. Wrap predict in a Flask or FastAPI endpoint, so another program can call it. Containerise with Docker so it runs identically on the next machine. None of these are hard; all of them are skipped in practice.",
          "Version the data and the model together. A model trained on last year's data and shipped into this year is a bet disguised as engineering. The data changes; the model does not know. Track the data, track the model, track the metrics, and retrain on a schedule.",
          "Ethics is a constraint before the work begins, not a disclaimer afterwards. Historical data carries historical bias. Anonymised data is often de-anonymisable. Privacy law is a hard limit, not a preference. Asking whether a model should be built is the step that saves reputations and employment."
        ],
        points: [
          "pickle to store, load to reuse.",
          "FastAPI or Flask wrap the model.",
          "Docker keeps the environment identical.",
          "Version data and model together."
        ],
        flow: { title: "From notebook to product",
          steps: [["Trained model","MODEL"],["pickle dump","SAVE"],["FastAPI endpoint","API"],["Docker image","BUILD"],["Monitor and retrain","MAINTAIN"]],
          caption: "A model without an interface is a private solution."
        },
        takeaways: [ "Deployment is a feature, not a phase.", "Data drift silently ruins models.", "Should you build this is the first question." ] }
    ]
  }
];