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