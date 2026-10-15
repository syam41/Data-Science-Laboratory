/* =========================================================
   MBU - Data Science Digital Library
   script.js
   -------------------------------------------------------------
   This is the only JavaScript file of the website.
   To edit the library you normally only touch three places:
     1. experiments[]  - the six cards and their overview text
     2. subData{}      - code + result of every sub-experiment
     3. the video paths inside both objects
   Everything else is rendering logic and can stay as it is.
   ========================================================= */

/* =========================================================
   1. CONFIGURATION  (edit these three lines if needed)
   ========================================================= */
const GITHUB_BASE = "https://github.com/syam-mbu/ds-digital-library";
const YOUTUBE_BASE = "https://www.youtube.com/results?search_query=";
const VIDEO_BASE = "videos/experiments/";

const COURSE = {
    code: "22DS102006",
    section: "DS-2",
    student: "SYAM",
    roll: "24102A030086"
};

/* =========================================================
   2. EXPERIMENTS  (six showcase slots)
   ========================================================= */
const experiments = [
    {
        id: 1,
        no: "01",
        title: "Import and Export in CSV, JSON and Excel Formats",
        subtitle: "",
        kicker: "Data Frame I/O",
        desc: "Creating a DataFrame and persisting it to CSV, JSON and Excel with pandas.",
        image: "images/experiments/experiment-01.svg",
        video: "videos/experiments/experiment-01-overview.mp4",
        github: "https://github.com/syam-mbu/ds-digital-library/experiment-01",
        youtube: "https://www.youtube.com/results?search_query=pandas to_csv to_json to_excel read_excel tutorial",
        summary: [
            "Every data science project starts with a table, and every table has to leave the notebook at some point. This experiment builds a small student DataFrame in memory and stores it in the three formats that are used most often in practice: CSV for flat text files, JSON for APIs and Excel for reports shared with non technical users.",
            "Each format was tested with a full round trip. The DataFrame was written to disk, read back and compared with the original object. Shape, column names and values matched exactly in all three cases, which confirms that index=False is what keeps the exported file clean for other tools."
        ],
        findings: [
            "to_csv writes a plain text table that any spreadsheet or database tool can read.",
            "to_json with orient='records' produces one JSON object per row, the format REST APIs expect.",
            "to_excel needs the openpyxl engine and can store the data in named sheets.",
            "Always pass index=False unless the index itself is meaningful, otherwise an unnamed column appears."
        ],
        architecture: [
            [
                "Python dict",
                "SOURCE"
            ],
            [
                "pd.DataFrame()",
                "BUILD"
            ],
            [
                "to_csv / to_json / to_excel",
                "WRITE"
            ],
            [
                "File on disk",
                "CSV · JSON · XLSX"
            ],
            [
                "read_csv / read_json / read_excel",
                "READ BACK"
            ],
            [
                "Shape + equals() check",
                "VERIFY"
            ]
        ],
        note: "The three formats are compared side by side so the choice of format becomes an informed decision instead of a habit.",
        subs: [
            {
                key: "A",
                name: "Data Collection",
                label: "Creating a DataFrame and writing it to CSV",
                video: "videos/experiments/experiment-01-A.mp4"
            },
            {
                key: "B",
                name: "Data Inspection",
                label: "Exporting and reading a JSON file",
                video: "videos/experiments/experiment-01-B.mp4"
            },
            {
                key: "C",
                name: "Data Understanding",
                label: "Exporting and reading an Excel workbook",
                video: "videos/experiments/experiment-01-C.mp4"
            }
        ]
    },
    {
        id: 2,
        no: "02",
        title: "Exploratory Data Analysis",
        subtitle: "Web Data, APIs and SQL Integration",
        kicker: "Live Data & SQL",
        desc: "Pulling live data from a REST API and working with a SQLite database. Explore datasets using statistics, visualization and pattern discovery.",
        image: "images/experiments/experiment-02.svg",
        video: "videos/experiments/experiment-02-overview.mp4",
        github: "https://github.com/syam-mbu/ds-digital-library/experiment-02",
        youtube: "https://www.youtube.com/results?search_query=requests python REST API json_normalize pandas sqlite3 to_sql tutorial",
        summary: [
            "Exploratory data analysis only becomes realistic when the data arrives from outside the notebook. The first sub-experiment calls a public REST endpoint with the requests library, checks the HTTP status and flattens the nested JSON into a flat table with pd.json_normalize.",
            "The second sub-experiment moves the data into a real relational store. Two tables were created with DataFrame.to_sql and then queried with SQL through pd.read_sql_query, including a join between students and marks. The branch wise average returned by the query is exactly the data a bar chart needs, which closes the loop between storage, statistics and visualization."
        ],
        findings: [
            "requests.get() returns a response object - always check status_code before parsing.",
            "pd.json_normalize() flattens nested JSON, but numeric fields may arrive as text and need astype(float).",
            "to_sql() writes a DataFrame as a table, so the same data can be queried with plain SQL.",
            "GROUP BY inside SQL gives the aggregates that describe() only summarises for one column."
        ],
        architecture: [
            [
                "REST endpoint",
                "SOURCE"
            ],
            [
                "requests.get()",
                "HTTP 200"
            ],
            [
                "pd.json_normalize",
                "FLATTEN"
            ],
            [
                "DataFrame in memory",
                "CLEAN"
            ],
            [
                "to_sql() -> SQLite",
                "STORE"
            ],
            [
                "read_sql_query()",
                "QUERY"
            ],
            [
                "Statistics / plots",
                "INSIGHT"
            ]
        ],
        note: "Sub-experiment A needs an internet connection; the API used here is a public demo endpoint that always returns the same ten records.",
        subs: [
            {
                key: "A",
                name: "Fetching live data from a REST API using Requests",
                label: "Descriptive Statistics",
                video: "videos/experiments/experiment-02-A.mp4"
            },
            {
                key: "B",
                name: "Creating and querying a SQLite database from Python",
                label: "Data Visualization",
                video: "videos/experiments/experiment-02-B.mp4"
            }
        ]
    },
    {
        id: 3,
        no: "03",
        title: "Data Cleaning, Transformation and Regular Expressions",
        subtitle: "Data Preprocessing",
        kicker: "Cleaning & Regex",
        desc: "Handling missing values, encoding categories, detecting outliers and extracting text patterns with regex. Clean and transform raw data before applying data science models.",
        image: "images/experiments/experiment-03.svg",
        video: "videos/experiments/experiment-03-overview.mp4",
        github: "https://github.com/syam-mbu/ds-digital-library/experiment-03",
        youtube: "https://www.youtube.com/results?search_query=pandas missing values fillna dropna IQR outliers regex str.extract tutorial",
        summary: [
            "Raw data is almost never ready for a model. This experiment works through the four cleaning stages that appear in almost every data science pipeline: detecting missing values, removing duplicates and creating derived columns, catching outliers with the IQR method and finally mining structured information out of free text with regular expressions.",
            "Every stage was measured before and after. The raw table had seven empty cells, which is 72 percent completeness. After treatment the table has zero nulls, the duplicated student rows were removed and the two extreme marks (90 and 120) were flagged by the IQR fences and excluded from the mean. The average changed from 60.39 to 54.81, which shows how much a single outlier can distort a statistic."
        ],
        findings: [
            "isnull().sum() is the fastest way to see which columns need attention.",
            "dropna() is safe only when the lost rows are genuinely useless, fillna() keeps the row count.",
            "Outliers are values outside Q1 - 1.5*IQR and Q3 + 1.5*IQR, not simply the largest values.",
            "A compiled regex with named groups turns a log line into a DataFrame row in a single pass."
        ],
        architecture: [
            [
                "Raw messy data",
                "INPUT"
            ],
            [
                "isnull() / duplicated()",
                "PROFILE"
            ],
            [
                "fillna() / drop_duplicates()",
                "CLEAN"
            ],
            [
                "IQR fences",
                "OUTLIERS"
            ],
            [
                "str.replace / str.extract",
                "TEXT MINING"
            ],
            [
                "Clean modelling table",
                "OUTPUT"
            ]
        ],
        note: "Cleaning decisions are always visible in the printed output, so the effect of each strategy can be reviewed before it is accepted.",
        subs: [
            {
                key: "A",
                name: "Finding and handling missing values",
                label: "Missing Values",
                video: "videos/experiments/experiment-03-A.mp4"
            },
            {
                key: "B",
                name: "Data transformation and categorical encoding",
                label: "Duplicate Data",
                video: "videos/experiments/experiment-03-B.mp4"
            },
            {
                key: "C",
                name: "Outlier detection using the IQR method",
                label: "Data Transformation",
                video: "videos/experiments/experiment-03-C.mp4"
            },
            {
                key: "D",
                name: "Extracting text patterns with regular expressions",
                label: "Data Encoding",
                video: "videos/experiments/experiment-03-D.mp4"
            }
        ]
    },
    {
        id: 4,
        no: "04",
        title: "Feature Selection",
        subtitle: "MultiIndex, Reshaping and Combining DataFrames",
        kicker: "Indexing & Combining",
        desc: "Hierarchical indexes, stack/unstack reshaping and merging or combining datasets. Identify useful features and understand relationships between variables.",
        image: "images/experiments/experiment-04.svg",
        video: "videos/experiments/experiment-04-overview.mp4",
        github: "https://github.com/syam-mbu/ds-digital-library/experiment-04",
        youtube: "https://www.youtube.com/results?search_query=pandas MultiIndex xs swaplevel stack unstack merge concat pivot_table tutorial",
        summary: [
            "Once the data is clean, the structure becomes the problem. This experiment covers the three tools pandas provides for it: the MultiIndex for hierarchical labels such as year and quarter, stack and unstack for moving between wide and long form, and merge, join and concat for combining several tables into a single feature matrix.",
            "The MultiIndex table was queried by tuple, by level and by column group, and groupby(level=...) produced the same summaries in one line. The merge section compares inner, left and outer joins, and the indicator column shows which rows existed on both sides. The final correlation matrix on the joined feature table is what a model would actually receive."
        ],
        findings: [
            "A MultiIndex stores several labels in one index and is selected with loc, xs or groupby(level=...).",
            "stack() moves columns into the index, unstack() brings them back - the two are inverses of each other.",
            "merge() joins on a key and can report the origin of every row with indicator=True.",
            "concat() stacks frames vertically, and the correlation of the merged table is the real feature selection check."
        ],
        architecture: [
            [
                "Source tables",
                "CSV / DICT"
            ],
            [
                "MultiIndex build",
                "HIERARCHY"
            ],
            [
                "stack / unstack / melt",
                "RESHAPE"
            ],
            [
                "merge / join / concat",
                "COMBINE"
            ],
            [
                "Feature matrix",
                "WIDE + LONG"
            ],
            [
                "corr()",
                "SELECT"
            ]
        ],
        note: "The same numbers are shown in wide and long form so the relationship between the two layouts is obvious.",
        subs: [
            {
                key: "A",
                name: "Building and querying a MultiIndex",
                label: "Correlation Analysis",
                video: "videos/experiments/experiment-04-A.mp4"
            },
            {
                key: "B",
                name: "Reshaping data with stack and unstack",
                label: "Statistical Selection",
                video: "videos/experiments/experiment-04-B.mp4"
            },
            {
                key: "C",
                name: "Merging and combining DataFrames",
                label: "Feature Importance",
                video: "videos/experiments/experiment-04-C.mp4"
            }
        ]
    },
    {
        id: 5,
        no: "05",
        title: "Data Visualization with Matplotlib and Seaborn",
        subtitle: "Decision Tree Analysis",
        kicker: "Plots & Trees",
        desc: "A full plotting suite over the Iris dataset and custom datasets. Build a decision tree and understand classification and prediction.",
        image: "images/experiments/experiment-05.svg",
        video: "videos/experiments/experiment-05-overview.mp4",
        github: "https://github.com/syam-mbu/ds-digital-library/experiment-05",
        youtube: "https://www.youtube.com/results?search_query=matplotlib seaborn iris histplot boxplot violinplot regplot decision tree entropy information gain tutorial",
        summary: [
            "This is the visual half of the laboratory. A plotting suite was built over the Iris dataset and over custom class data: histograms, box plots, violin plots, scatter plots with a regression line, grouped and stacked bars, a kernel density estimate and an annotated multi panel dashboard.",
            "The figures were then read back as numbers. The grouped bar plot gave the section wise averages, the box plot produced the quartiles and the IQR of each department, and the scatter plot returned a Pearson correlation of 0.97 between study hours and marks. The same numbers feed the split criterion calculation at the end of sub-experiment B, where the best threshold on the total marks column is found by maximising the information gain."
        ],
        findings: [
            "seaborn gives readable statistical plots with one call, matplotlib stays available for fine control.",
            "Every figure is paired with the numbers behind it, so a claim can always be checked.",
            "The Iris petal measurements separate setosa completely from the other two species.",
            "A decision tree picks the split with the highest information gain, here a threshold of 75 marks."
        ],
        architecture: [
            [
                "Iris / custom data",
                "INPUT"
            ],
            [
                "matplotlib axes",
                "CANVAS"
            ],
            [
                "seaborn plots",
                "HIST · BOX · VIOLIN"
            ],
            [
                "regplot + corr()",
                "RELATION"
            ],
            [
                "entropy + information gain",
                "SPLIT CRITERION"
            ],
            [
                "Figure + printed values",
                "RESULT"
            ]
        ],
        note: "All figures are saved as PNG files by the programs, and the values printed below each program are the real output of the run.",
        subs: [
            {
                key: "A",
                name: "Exploring the Iris dataset with five plot types",
                label: "Plotting Suite",
                video: "videos/experiments/experiment-05-A.mp4"
            },
            {
                key: "B",
                name: "Subplots and an annotated multi-panel figure",
                label: "Split Criterion",
                video: "videos/experiments/experiment-05-B.mp4"
            },
            {
                key: "B(i)",
                name: "Grouped bar plot of student marks",
                label: "Information Gain",
                video: "videos/experiments/experiment-05-B(i).mp4"
            },
            {
                key: "B(ii)",
                name: "Stacked bar plot of student marks",
                label: "Stacked Marks",
                video: "videos/experiments/experiment-05-B(ii).mp4"
            },
            {
                key: "C",
                name: "Histogram and kernel density plot",
                label: "Distribution",
                video: "videos/experiments/experiment-05-C.mp4"
            },
            {
                key: "D",
                name: "Scatter plot and correlation coefficient",
                label: "Correlation",
                video: "videos/experiments/experiment-05-D.mp4"
            },
            {
                key: "E",
                name: "Box plot of marks by department",
                label: "Comparison",
                video: "videos/experiments/experiment-05-E.mp4"
            }
        ]
    },
    {
        id: 6,
        no: "06",
        title: "Time Series Analysis",
        subtitle: "Dates, Periods and Resampling",
        kicker: "Time Series",
        desc: "Creating, indexing and resampling time series data with pandas datetime objects, date_range, time zones, periods and resampling.",
        image: "images/experiments/experiment-06.svg",
        video: "videos/experiments/experiment-06-overview.mp4",
        github: "https://github.com/syam-mbu/ds-digital-library/experiment-06",
        youtube: "https://www.youtube.com/results?search_query=pandas datetime date_range tz_localize tz_convert Period period_range asfreq to_period resample tutorial",
        summary: [
            "A time series is a table whose index carries time, and pandas treats that index as a first class citizen. This experiment builds the whole time toolkit: converting strings into real timestamps, generating a DatetimeIndex of any length and frequency, working with time zones, doing arithmetic on Period objects and finally resampling between granularities.",
            "The two ideas that matter most are highlighted. First, a timestamp is an instant while a period is a labelled span of time, so to_period and asfreq change the meaning of the index rather than the data. Second, resample is the only tool that really aggregates: downsampling collapsed 192 hourly observations into 32 six hour blocks and 8 daily totals, while upsampling expanded four daily values into 13 interpolated six hour points."
        ],
        findings: [
            "pd.to_datetime() turns text into datetime64 values, which unlocks label based slicing.",
            "pd.date_range() builds a regular index - daily, business day, monthly, weekly or hourly.",
            "tz_localize() attaches a zone to naive data, tz_convert() changes the display zone of aware data.",
            "Period objects support integer arithmetic, so p + 1 is the next month and p + 3 the next quarter.",
            "resample() aggregates (downsampling) or interpolates (upsampling); asfreq() only relabels."
        ],
        architecture: [
            [
                "Date strings",
                "RAW"
            ],
            [
                "pd.to_datetime",
                "DATETIME64"
            ],
            [
                "date_range / tz_localize",
                "INDEX"
            ],
            [
                "Period + period_range",
                "CALENDAR"
            ],
            [
                "to_period / asfreq",
                "RELABEL"
            ],
            [
                "resample().sum() / mean()",
                "AGGREGATE"
            ],
            [
                "Trend over time",
                "INSIGHT"
            ]
        ],
        note: "Frequency strings follow pandas conventions: D for daily, B for business day, MS and ME for month start and month end, h for hourly, Q for quarterly.",
        subs: [
            {
                key: "A",
                name: "Creating a time series with datetime objects",
                label: "Data Preparation",
                video: "videos/experiments/experiment-06-A.mp4"
            },
            {
                key: "B",
                name: "Generating a DatetimeIndex with pandas.date_range",
                label: "Date Ranges",
                video: "videos/experiments/experiment-06-B.mp4"
            },
            {
                key: "C",
                name: "Setting, localizing and converting time zones",
                label: "Time Zones",
                video: "videos/experiments/experiment-06-C.mp4"
            },
            {
                key: "D",
                name: "Period arithmetic and period_range",
                label: "Period Arithmetic",
                video: "videos/experiments/experiment-06-D.mp4"
            },
            {
                key: "E",
                name: "Converting periods to another frequency with asfreq",
                label: "Frequency Conversion",
                video: "videos/experiments/experiment-06-E.mp4"
            },
            {
                key: "F",
                name: "Converting timestamps to periods with to_period",
                label: "Timestamp to Period",
                video: "videos/experiments/experiment-06-F.mp4"
            },
            {
                key: "G",
                name: "Resampling, downsampling and upsampling",
                label: "Resampling",
                video: "videos/experiments/experiment-06-G.mp4"
            }
        ]
    }
];

/* =========================================================
   3. SUB-EXPERIMENT DATA
   Structure   :  experiment id  ->  sub key  ->  content
   Lookup      :  subData[eid]?.[key]
   The experiment id is required because A / B / C exist in
   more than one experiment.
   ========================================================= */
const subData = {
    1: {
        A: {
            key: "A",
            name: "Data Collection",
            label: "Creating a DataFrame and writing it to CSV",
            topic: "Data Collection - Creating a DataFrame and writing it to CSV",
            file: "experiment-01-A.py",
            video: "videos/experiments/experiment-01-A.mp4",
            yt: "pandas to_csv to_json to_excel read_excel tutorial",
            note: "The round trip is verified with DataFrame.equals(), which compares shape, dtypes and values.",
            code: `
# ---------------------------------------------------------------
# Experiment 1A - Data Collection
# Creating a DataFrame and writing it to CSV
# ---------------------------------------------------------------
import pandas as pd

records = {
    "RollNo"  : [101, 102, 103, 104, 105, 106],
    "Name"    : ["Aisha", "Rahul", "Sneha", "Imran", "Divya", "Kiran"],
    "Branch"  : ["CSE", "CSE", "ECE", "ECE", "CSE", "MEC"],
    "Semester": [5, 5, 5, 5, 5, 5],
    "CGPA"    : [8.9, 7.4, 9.1, 6.8, 8.3, 7.9],
}

df = pd.DataFrame(records)

print("1) DataFrame built from a Python dictionary")
print(df)
print("\\n2) Shape      :", df.shape)
print("   Columns    :", list(df.columns))
print("   Data types :")
print(df.dtypes)

# ---- write to CSV ------------------------------------------------
df.to_csv("students.csv", index=False)
print("\\n3) df.to_csv('students.csv', index=False)  ->  file written")

with open("students.csv") as fh:
    print("\\n4) Raw content of students.csv")
    for line in fh:
        print("   " + line.rstrip())

# ---- read it back -----------------------------------------------
back = pd.read_csv("students.csv")
print("\\n5) Round trip with pd.read_csv()")
print(back)
print("\\n6) Shape of original :", df.shape)
print("   Shape of reloaded :", back.shape)
print("   Data identical    :", df.equals(back))
print("   Memory used       :", back.memory_usage(deep=True).sum(), "bytes")`,
            result: `1) DataFrame built from a Python dictionary
   RollNo   Name Branch  Semester  CGPA
0     101  Aisha    CSE         5   8.9
1     102  Rahul    CSE         5   7.4
2     103  Sneha    ECE         5   9.1
3     104  Imran    ECE         5   6.8
4     105  Divya    CSE         5   8.3
5     106  Kiran    MEC         5   7.9

2) Shape      : (6, 5)
   Columns    : ['RollNo', 'Name', 'Branch', 'Semester', 'CGPA']
   Data types :
RollNo        int64
Name            str
Branch          str
Semester      int64
CGPA        float64
dtype: object

3) df.to_csv('students.csv', index=False)  ->  file written

4) Raw content of students.csv
   RollNo,Name,Branch,Semester,CGPA
   101,Aisha,CSE,5,8.9
   102,Rahul,CSE,5,7.4
   103,Sneha,ECE,5,9.1
   104,Imran,ECE,5,6.8
   105,Divya,CSE,5,8.3
   106,Kiran,MEC,5,7.9

5) Round trip with pd.read_csv()
   RollNo   Name Branch  Semester  CGPA
0     101  Aisha    CSE         5   8.9
1     102  Rahul    CSE         5   7.4
2     103  Sneha    ECE         5   9.1
3     104  Imran    ECE         5   6.8
4     105  Divya    CSE         5   8.3
5     106  Kiran    MEC         5   7.9

6) Shape of original : (6, 5)
   Shape of reloaded : (6, 5)
   Data identical    : True
   Memory used       : 912 bytes`
        },
        B: {
            key: "B",
            name: "Data Inspection",
            label: "Exporting and reading a JSON file",
            topic: "Data Inspection - Exporting and reading a JSON file",
            file: "experiment-01-B.py",
            video: "videos/experiments/experiment-01-B.mp4",
            yt: "pandas to_csv to_json to_excel read_excel tutorial",
            note: "orient='records' keeps the JSON readable and is the orientation used by most REST APIs.",
            code: `
# ---------------------------------------------------------------
# Experiment 1B - Data Inspection
# Exporting and reading a JSON file
# ---------------------------------------------------------------
import pandas as pd
import json

df = pd.DataFrame({
    "Employee": ["Ravi", "Meena", "Arjun", "Fatima"],
    "Role"    : ["Analyst", "Engineer", "Analyst", "Scientist"],
    "Salary"  : [72000, 91000, 68000, 104000],
    "City"    : ["Hyderabad", "Bengaluru", "Chennai", "Hyderabad"],
})

df.to_json("employees.json", orient="records", indent=2)
print("1) df.to_json('employees.json', orient='records', indent=2)")

with open("employees.json") as fh:
    print("\\n2) employees.json")
    print(fh.read())

loaded = pd.read_json("employees.json", orient="records")
print("3) pd.read_json(..., orient='records')")
print(loaded)

print("\\n4) Column data types after the JSON round trip")
print(loaded.dtypes)

print("\\n5) Inspection helpers")
print("   Shape           :", loaded.shape)
print("   Memory usage    :", loaded.memory_usage(deep=True).sum(), "bytes")
print("   Columns         :", list(loaded.columns))
print("   Roles available :", sorted(loaded["Role"].unique()))

city = json.load(open("employees.json"))
print("\\n6) Plain json module - salary of every employee")
for rec in city:
    print(f"   {rec['Employee']:<7} {rec['Role']:<10} {rec['Salary']:>7}")`,
            result: `1) df.to_json('employees.json', orient='records', indent=2)

2) employees.json
[
  {
    "Employee":"Ravi",
    "Role":"Analyst",
    "Salary":72000,
    "City":"Hyderabad"
  },
  {
    "Employee":"Meena",
    "Role":"Engineer",
    "Salary":91000,
    "City":"Bengaluru"
  },
  {
    "Employee":"Arjun",
    "Role":"Analyst",
    "Salary":68000,
    "City":"Chennai"
  },
  {
    "Employee":"Fatima",
    "Role":"Scientist",
    "Salary":104000,
    "City":"Hyderabad"
  }
]
3) pd.read_json(..., orient='records')
  Employee       Role  Salary       City
0     Ravi    Analyst   72000  Hyderabad
1    Meena   Engineer   91000  Bengaluru
2    Arjun    Analyst   68000    Chennai
3   Fatima  Scientist  104000  Hyderabad

4) Column data types after the JSON round trip
Employee      str
Role          str
Salary      int64
City          str
dtype: object

5) Inspection helpers
   Shape           : (4, 4)
   Memory usage    : 837 bytes
   Columns         : ['Employee', 'Role', 'Salary', 'City']
   Roles available : ['Analyst', 'Engineer', 'Scientist']

6) Plain json module - salary of every employee
   Ravi    Analyst      72000
   Meena   Engineer     91000
   Arjun   Analyst      68000
   Fatima  Scientist   104000`
        },
        C: {
            key: "C",
            name: "Data Understanding",
            label: "Exporting and reading an Excel workbook",
            topic: "Data Understanding - Exporting and reading an Excel workbook",
            file: "experiment-01-C.py",
            video: "videos/experiments/experiment-01-C.mp4",
            yt: "pandas to_csv to_json to_excel read_excel tutorial",
            note: "describe() and groupby() on the imported sheet turn the export into actual understanding.",
            code: `
# ---------------------------------------------------------------
# Experiment 1C - Data Understanding
# Exporting and reading an Excel workbook
# ---------------------------------------------------------------
import pandas as pd

df = pd.DataFrame({
    "Product" : ["Laptop", "Mobile", "Tablet", "Monitor", "Printer"],
    "Category": ["Electronics", "Electronics", "Electronics", "Accessories", "Accessories"],
    "Units"   : [42, 130, 76, 58, 24],
    "Price"   : [72000, 24000, 18500, 9500, 6700],
})

df["Revenue"] = df["Units"] * df["Price"]
print("1) DataFrame with a derived Revenue column")
print(df)

df.to_excel("sales.xlsx", index=False, sheet_name="Sales", engine="openpyxl")
print("\\n2) df.to_excel('sales.xlsx', sheet_name='Sales')  ->  workbook written")

xl = pd.ExcelFile("sales.xlsx", engine="openpyxl")
print("\\n3) Sheets inside the workbook :", xl.sheet_names)

back = xl.parse("Sales")
print("\\n4) xl.parse('Sales')")
print(back)

print("\\n5) Data understanding on the imported sheet")
print("   Shape :", back.shape)
print("   Total revenue : {:,}".format(back["Revenue"].sum()))
print("\\n   Revenue grouped by category:")
print(back.groupby("Category")["Revenue"].agg(["count", "sum", "mean"]).round(2))

print("\\n6) Descriptive statistics")
print(back[["Units", "Price", "Revenue"]].describe().round(2))

print("\\n   Workbook size on disk :",
      round(__import__("os").path.getsize("sales.xlsx") / 1024, 1), "KB")`,
            result: `1) DataFrame with a derived Revenue column
   Product     Category  Units  Price  Revenue
0   Laptop  Electronics     42  72000  3024000
1   Mobile  Electronics    130  24000  3120000
2   Tablet  Electronics     76  18500  1406000
3  Monitor  Accessories     58   9500   551000
4  Printer  Accessories     24   6700   160800

2) df.to_excel('sales.xlsx', sheet_name='Sales')  ->  workbook written

3) Sheets inside the workbook : ['Sales']

4) xl.parse('Sales')
   Product     Category  Units  Price  Revenue
0   Laptop  Electronics     42  72000  3024000
1   Mobile  Electronics    130  24000  3120000
2   Tablet  Electronics     76  18500  1406000
3  Monitor  Accessories     58   9500   551000
4  Printer  Accessories     24   6700   160800

5) Data understanding on the imported sheet
   Shape : (5, 5)
   Total revenue : 8,261,800

   Revenue grouped by category:
             count      sum        mean
Category                               
Accessories      2   711800   355900.00
Electronics      3  7550000  2516666.67

6) Descriptive statistics
        Units     Price     Revenue
count    5.00      5.00        5.00
mean    66.00  26140.00  1652360.00
std     40.62  26556.04  1372388.59
min     24.00   6700.00   160800.00
25%     42.00   9500.00   551000.00
50%     58.00  18500.00  1406000.00
75%     76.00  24000.00  3024000.00
max    130.00  72000.00  3120000.00

   Workbook size on disk : 5.0 KB`
        }
    },
    2: {
        A: {
            key: "A",
            name: "Fetching live data from a REST API using Requests",
            label: "Descriptive Statistics",
            topic: "Fetching live data from a REST API using Requests - Descriptive Statistics",
            file: "experiment-02-A.py",
            video: "videos/experiments/experiment-02-A.mp4",
            yt: "requests python REST API json_normalize pandas sqlite3 to_sql tutorial",
            note: "The response time and status code are printed first, which is good practice before trusting the payload.",
            code: `
# ---------------------------------------------------------------
# Experiment 2A - Descriptive Statistics
# Fetching live data from a REST API using Requests
# ---------------------------------------------------------------
import requests
import pandas as pd

API_URL = "https://jsonplaceholder.typicode.com/users"

response = requests.get(API_URL, timeout=20)
print("1) GET", API_URL)
print("   HTTP status code :", response.status_code)
print("   Content-Type     :", response.headers.get("Content-Type"))
print("   Response time    :", round(response.elapsed.total_seconds(), 3), "seconds")

payload = response.json()
print("\\n2) Records received :", len(payload))
print("   Keys of record 1 :", list(payload[0].keys()))

df = pd.json_normalize(payload)
print("\\n3) pd.json_normalize() flattened the nested JSON")
print("   Shape :", df.shape)
print(df[["id", "name", "address.city", "address.geo.lat", "address.geo.lng"]].to_string(index=False))

geo = df[["id", "address.geo.lat", "address.geo.lng"]].copy()
geo.columns = ["id", "latitude", "longitude"]
geo["latitude"] = geo["latitude"].astype(float)
geo["longitude"] = geo["longitude"].astype(float)

print("\\n4) Descriptive statistics on the coordinates")
print(geo[["latitude", "longitude"]].describe().round(4))

print("\\n5) Spread of the latitude column")
lat = geo["latitude"]
print("   Mean   :", round(lat.mean(), 4))
print("   Median :", round(lat.median(), 4))
print("   Std dev:", round(lat.std(), 4))
print("   Range  :", round(lat.max() - lat.min(), 4))

print("\\n6) Users per city")
print(df["address.city"].value_counts())

print("\\n7) Company catch phrases pulled from the API")
for entry in payload[:3]:
    print("  -", entry["company"]["name"], "|", entry["company"]["catchPhrase"])`,
            result: `1) GET https://jsonplaceholder.typicode.com/users
   HTTP status code : 200
   Content-Type     : application/json; charset=utf-8
   Response time    : 0.171 seconds

2) Records received : 10
   Keys of record 1 : ['id', 'name', 'username', 'email', 'address', 'phone', 'website', 'company']

3) pd.json_normalize() flattened the nested JSON
   Shape : (10, 15)
 id                     name   address.city address.geo.lat address.geo.lng
  1            Leanne Graham    Gwenborough        -37.3159         81.1496
  2             Ervin Howell    Wisokyburgh        -43.9509        -34.4618
  3         Clementine Bauch  McKenziehaven        -68.6102        -47.0653
  4         Patricia Lebsack    South Elvis         29.4572       -164.2990
  5         Chelsey Dietrich     Roscoeview        -31.8129         62.5342
  6     Mrs. Dennis Schulist  South Christy        -71.4197         71.7478
  7          Kurtis Weissnat      Howemouth         24.8918         21.8984
  8 Nicholas Runolfsdottir V      Aliyaview        -14.3990       -120.7677
  9          Glenna Reichert Bartholomebury         24.6463       -168.8889
 10       Clementina DuBuque    Lebsackbury        -38.2386         57.2232

4) Descriptive statistics on the coordinates
       latitude  longitude
count   10.0000    10.0000
mean   -22.6752   -24.0930
std     37.6637    98.3746
min    -71.4197  -168.8889
25%    -42.5228  -102.3421
50%    -34.5644    -6.2817
75%     14.8850    61.2064
max     29.4572    81.1496

5) Spread of the latitude column
   Mean   : -22.6752
   Median : -34.5644
   Std dev: 37.6637
   Range  : 100.8769

6) Users per city
address.city
Gwenborough       1
Wisokyburgh       1
McKenziehaven     1
South Elvis       1
Roscoeview        1
South Christy     1
Howemouth         1
Aliyaview         1
Bartholomebury    1
Lebsackbury       1
Name: count, dtype: int64

7) Company catch phrases pulled from the API
  - Romaguera-Crona | Multi-layered client-server neural-net
  - Deckow-Crist | Proactive didactic contingency
  - Romaguera-Jacobson | Face to face bifurcated interface`
        },
        B: {
            key: "B",
            name: "Creating and querying a SQLite database from Python",
            label: "Data Visualization",
            topic: "Creating and querying a SQLite database from Python - Data Visualization",
            file: "experiment-02-B.py",
            video: "videos/experiments/experiment-02-B.mp4",
            yt: "requests python REST API json_normalize pandas sqlite3 to_sql tutorial",
            note: "The branch wise average returned by the SQL query is the exact input required for a bar chart.",
            code: `
# ---------------------------------------------------------------
# Experiment 2B - Data Visualization
# Creating and querying a SQLite database from Python
# ---------------------------------------------------------------
import sqlite3
import pandas as pd

students = pd.DataFrame({
    "roll_no"  : [1, 2, 3, 4, 5, 6],
    "name"     : ["Aisha", "Rahul", "Sneha", "Imran", "Divya", "Kiran"],
    "branch"   : ["CSE", "CSE", "ECE", "ECE", "CSE", "MEC"],
    "city"     : ["Hyderabad", "Bengaluru", "Chennai", "Hyderabad", "Pune", "Bengaluru"],
})

marks = pd.DataFrame({
    "roll_no"     : [1, 2, 3, 4, 5, 6],
    "subject"     : ["Python", "Python", "Python", "Python", "Python", "Python"],
    "internal_marks": [18, 15, 20, 12, 17, 16],
    "exam_marks"  : [72, 65, 78, 55, 70, 68],
})

conn = sqlite3.connect("college.db")
print("1) sqlite3.connect('college.db') ->", conn)

students.to_sql("students", conn, if_exists="replace", index=False)
marks.to_sql("marks", conn, if_exists="replace", index=False)
conn.commit()
print("\\n2) Tables written with DataFrame.to_sql()")

tables = pd.read_sql_query(
    "SELECT name FROM sqlite_master WHERE type='table' ORDER BY name;", conn)
print(tables.to_string(index=False))

print("\\n3) Query 1 - students of CSE branch")
q1 = pd.read_sql_query(
    "SELECT name, branch, city FROM students WHERE branch = 'CSE' ORDER BY name;", conn)
print(q1.to_string(index=False))

print("\\n4) Query 2 - total marks per student (internal + exam)")
q2 = pd.read_sql_query("""
    SELECT s.name,
           s.branch,
           m.internal_marks,
           m.exam_marks,
           (m.internal_marks + m.exam_marks) AS total
    FROM students s
    JOIN marks m ON s.roll_no = m.roll_no
    ORDER BY total DESC;
""", conn)
print(q2.to_string(index=False))

print("\\n5) Query 3 - branch wise average, built for a bar chart")
q3 = pd.read_sql_query("""
    SELECT s.branch,
           COUNT(*)              AS students,
           ROUND(AVG(m.internal_marks + m.exam_marks), 2) AS avg_total
    FROM students s
    JOIN marks m ON s.roll_no = m.roll_no
    GROUP BY s.branch
    ORDER BY avg_total DESC;
""", conn)
print(q3.to_string(index=False))

print("\\n   q3.plot.bar(x='branch', y='avg_total', title='Average Total Marks by Branch',")
print("          color='#163a63', figsize=(7, 4));  plt.ylabel('Average total marks'); plt.show()")

print("\\n6) Query 4 - city wise strength")
print(pd.read_sql_query(
    "SELECT city, COUNT(*) AS strength FROM students GROUP BY city ORDER BY strength DESC;",
    conn).to_string(index=False))

conn.close()
print("\\n7) Connection closed safely with conn.close()")`,
            result: `1) sqlite3.connect('college.db') -> <sqlite3.Connection object at 0x716652a47d30>

2) Tables written with DataFrame.to_sql()
    name
   marks
students

3) Query 1 - students of CSE branch
 name branch      city
Aisha    CSE Hyderabad
Divya    CSE      Pune
Rahul    CSE Bengaluru

4) Query 2 - total marks per student (internal + exam)
 name branch  internal_marks  exam_marks  total
Sneha    ECE              20          78     98
Aisha    CSE              18          72     90
Divya    CSE              17          70     87
Kiran    MEC              16          68     84
Rahul    CSE              15          65     80
Imran    ECE              12          55     67

5) Query 3 - branch wise average, built for a bar chart
branch  students  avg_total
   CSE         3      85.67
   MEC         1      84.00
   ECE         2      82.50

   q3.plot.bar(x='branch', y='avg_total', title='Average Total Marks by Branch',
          color='#163a63', figsize=(7, 4));  plt.ylabel('Average total marks'); plt.show()

6) Query 4 - city wise strength
     city  strength
Hyderabad         2
Bengaluru         2
     Pune         1
  Chennai         1

7) Connection closed safely with conn.close()`
        }
    },
    3: {
        A: {
            key: "A",
            name: "Finding and handling missing values",
            label: "Missing Values",
            topic: "Finding and handling missing values - Missing Values",
            file: "experiment-03-A.py",
            video: "videos/experiments/experiment-03-A.mp4",
            yt: "pandas missing values fillna dropna IQR outliers regex str.extract tutorial",
            note: "Three strategies are compared on the same table: dropna, fillna and interpolate.",
            code: `
# ---------------------------------------------------------------
# Experiment 3A - Missing Values
# Finding and handling missing values
# ---------------------------------------------------------------
import pandas as pd
import numpy as np

data = {
    "Name"      : ["Aisha", "Rahul", "Sneha", "Imran", "Divya"],
    "Age"       : [21, np.nan, 20, np.nan, 22],
    "City"      : ["Hyderabad", None, "Chennai", "Pune", None],
    "CGPA"      : [8.9, 7.4, np.nan, 6.8, 8.3],
    "Attendance": [88, np.nan, 91, 76, np.nan],
}

df = pd.DataFrame(data)
print("1) Raw dataset")
print(df)

print("\\n2) isnull() marks every missing entry")
print(df.isnull())

print("\\n3) Missing values per column")
print(df.isnull().sum())

print("\\n4) Percentage of missing data")
missing_pct = (df.isnull().sum() / len(df) * 100).round(1)
print(missing_pct)

total_missing = int(df.isnull().sum().sum())
print("\\n   Total missing cells :", total_missing, "out of", df.size)
print("   Overall completeness :", round((1 - total_missing / df.size) * 100, 1), "%")

# ---- strategy 1 : drop the rows -------------------------------
df_dropna = df.dropna()
print("\\n5) Strategy 1 - df.dropna() removes incomplete rows")
print(df_dropna)
print("   Rows :", len(df), "->", len(df_dropna))

# ---- strategy 2 : fill with a statistic ----------------------
df_mean = df.copy()
df_mean["Age"] = df_mean["Age"].fillna(df_mean["Age"].mean())
df_mean["CGPA"] = df_mean["CGPA"].fillna(df_mean["CGPA"].fillna(0).median())
df_mean["City"] = df_mean["City"].fillna("Unknown")
df_mean["Attendance"] = df_mean["Attendance"].fillna(
    df_mean["Attendance"].fillna(0).mean()).round(1)

print("\\n6) Strategy 2 - fillna() with mean / median / mode")
print(df_mean)
print("\\n   Age mean used     :", round(df["Age"].mean(), 2))
print("   Attendance mean   :", round(df["Attendance"].mean(), 2))
print("   CGPA median used  :", round(df["CGPA"].median(), 2))
print("   Remaining nulls   :", int(df_mean.isnull().sum().sum()))

# ---- strategy 3 : interpolation ------------------------------
df_interp = df.set_index("Name")[["Age", "Attendance"]].interpolate()
print("\\n7) Strategy 3 - interpolate() estimates the gap")
print(df_interp.round(2))`,
            result: `1) Raw dataset
    Name   Age       City  CGPA  Attendance
0  Aisha  21.0  Hyderabad   8.9        88.0
1  Rahul   NaN        NaN   7.4         NaN
2  Sneha  20.0    Chennai   NaN        91.0
3  Imran   NaN       Pune   6.8        76.0
4  Divya  22.0        NaN   8.3         NaN

2) isnull() marks every missing entry
    Name    Age   City   CGPA  Attendance
0  False  False  False  False       False
1  False   True   True  False        True
2  False  False  False   True       False
3  False   True  False  False       False
4  False  False   True  False        True

3) Missing values per column
Name          0
Age           2
City          2
CGPA          1
Attendance    2
dtype: int64

4) Percentage of missing data
Name           0.0
Age           40.0
City          40.0
CGPA          20.0
Attendance    40.0
dtype: float64

   Total missing cells : 7 out of 25
   Overall completeness : 72.0 %

5) Strategy 1 - df.dropna() removes incomplete rows
    Name   Age       City  CGPA  Attendance
0  Aisha  21.0  Hyderabad   8.9        88.0
   Rows : 5 -> 1

6) Strategy 2 - fillna() with mean / median / mode
    Name   Age       City  CGPA  Attendance
0  Aisha  21.0  Hyderabad   8.9        88.0
1  Rahul  21.0    Unknown   7.4        51.0
2  Sneha  20.0    Chennai   7.4        91.0
3  Imran  21.0       Pune   6.8        76.0
4  Divya  22.0    Unknown   8.3        51.0

   Age mean used     : 21.0
   Attendance mean   : 85.0
   CGPA median used  : 7.85
   Remaining nulls   : 0

7) Strategy 3 - interpolate() estimates the gap
        Age  Attendance
Name                   
Aisha  21.0        88.0
Rahul  20.5        89.5
Sneha  20.0        91.0
Imran  21.0        76.0
Divya  22.0        76.0`
        },
        B: {
            key: "B",
            name: "Data transformation and categorical encoding",
            label: "Duplicate Data",
            topic: "Data transformation and categorical encoding - Duplicate Data",
            file: "experiment-03-B.py",
            video: "videos/experiments/experiment-03-B.mp4",
            yt: "pandas missing values fillna dropna IQR outliers regex str.extract tutorial",
            note: "map() is used for ordinal codes, get_dummies() for one hot columns and factorize() for labels.",
            code: `
# ---------------------------------------------------------------
# Experiment 3B - Duplicate Data
# Data transformation and categorical encoding
# ---------------------------------------------------------------
import pandas as pd

df = pd.DataFrame({
    "Name"    : ["Aisha", "Rahul", "Aisha", "Sneha", "Rahul", "Imran"],
    "Branch"  : ["CSE", "CSE", "CSE", "ECE", "CSE", "ECE"],
    "CGPA"    : [8.9, 7.4, 8.9, 9.1, 7.4, 6.8],
    "City"    : ["Hyderabad", "Bengaluru", "Hyderabad", "Chennai", "Bengaluru", "Pune"],
})

print("1) Dataset with repeated records")
print(df)
print("   Shape :", df.shape)

print("\\n2) duplicated() flags the repeated rows")
print(df.duplicated())

print("\\n   Duplicate count :", int(df.duplicated().sum()))

clean = df.drop_duplicates()
print("\\n3) drop_duplicates() keeps the first occurrence")
print(clean)
print("   Shape :", df.shape, "->", clean.shape)

print("\\n4) Transformation - arithmetic and new columns")
clean = clean.copy()
clean["CGPA_10"] = (clean["CGPA"] * 10).round(2)
clean["Category"] = pd.cut(clean["CGPA"],
                           bins=[0, 7.5, 8.5, 10],
                           labels=["Average", "Good", "Excellent"])
clean["IsCSE"] = clean["Branch"].apply(lambda b: 1 if b == "CSE" else 0)
print(clean)

print("\\n5) Categorical encoding with map()")
clean["Branch_Code"] = clean["Branch"].map({"CSE": 0, "ECE": 1, "MEC": 2})
print(clean[["Name", "Branch", "Branch_Code"]])

print("\\n6) One-hot encoding with get_dummies()")
print(pd.get_dummies(clean[["Name", "Branch"]], columns=["Branch"], dtype=int))

print("\\n7) Label encoding with factorize()")
codes, uniques = pd.factorize(clean["City"])
print("   Cities   :", list(uniques))
print("   Codes    :", list(codes))`,
            result: `1) Dataset with repeated records
    Name Branch  CGPA       City
0  Aisha    CSE   8.9  Hyderabad
1  Rahul    CSE   7.4  Bengaluru
2  Aisha    CSE   8.9  Hyderabad
3  Sneha    ECE   9.1    Chennai
4  Rahul    CSE   7.4  Bengaluru
5  Imran    ECE   6.8       Pune
   Shape : (6, 4)

2) duplicated() flags the repeated rows
0    False
1    False
2     True
3    False
4     True
5    False
dtype: bool

   Duplicate count : 2

3) drop_duplicates() keeps the first occurrence
    Name Branch  CGPA       City
0  Aisha    CSE   8.9  Hyderabad
1  Rahul    CSE   7.4  Bengaluru
3  Sneha    ECE   9.1    Chennai
5  Imran    ECE   6.8       Pune
   Shape : (6, 4) -> (4, 4)

4) Transformation - arithmetic and new columns
    Name Branch  CGPA       City  CGPA_10   Category  IsCSE
0  Aisha    CSE   8.9  Hyderabad     89.0  Excellent      1
1  Rahul    CSE   7.4  Bengaluru     74.0    Average      1
3  Sneha    ECE   9.1    Chennai     91.0  Excellent      0
5  Imran    ECE   6.8       Pune     68.0    Average      0

5) Categorical encoding with map()
    Name Branch  Branch_Code
0  Aisha    CSE            0
1  Rahul    CSE            0
3  Sneha    ECE            1
5  Imran    ECE            1

6) One-hot encoding with get_dummies()
    Name  Branch_CSE  Branch_ECE
0  Aisha           1           0
1  Rahul           1           0
3  Sneha           0           1
5  Imran           0           1

7) Label encoding with factorize()
   Cities   : ['Hyderabad', 'Bengaluru', 'Chennai', 'Pune']
   Codes    : [np.int64(0), np.int64(1), np.int64(2), np.int64(3)]`
        },
        C: {
            key: "C",
            name: "Outlier detection using the IQR method",
            label: "Data Transformation",
            topic: "Outlier detection using the IQR method - Data Transformation",
            file: "experiment-03-C.py",
            video: "videos/experiments/experiment-03-C.mp4",
            yt: "pandas missing values fillna dropna IQR outliers regex str.extract tutorial",
            note: "Removing the two outliers moved the class average from 60.39 down to 54.81, which shows how strong their influence was.",
            code: `
# ---------------------------------------------------------------
# Experiment 3C - Data Transformation
# Outlier detection using the IQR method
# ---------------------------------------------------------------
import pandas as pd
import numpy as np

marks = [45, 52, 48, 61, 55, 58, 90, 57, 62, 49, 51, 64, 47, 59, 120, 53, 56, 60]
df = pd.DataFrame({"Roll": range(1, len(marks) + 1), "Marks": marks})
print("1) Marks of a class")
print(df.T.to_string(header=False))

q1 = df["Marks"].quantile(0.25)
q3 = df["Marks"].quantile(0.75)
iqr = q3 - q1
print("\\n2) Quartiles and IQR")
print("   Q1 (25%) :", q1)
print("   Q3 (75%) :", q3)
print("   IQR      :", iqr)

lower = q1 - 1.5 * iqr
upper = q3 + 1.5 * iqr
print("\\n3) Fence values  (Q1 - 1.5*IQR , Q3 + 1.5*IQR)")
print("   Lower fence :", lower)
print("   Upper fence :", upper)

outliers = df[(df["Marks"] < lower) | (df["Marks"] > upper)]
print("\\n4) Outliers detected")
print(outliers)

df["IsOutlier"] = df["Marks"].apply(
    lambda m: True if (m < lower or m > upper) else False)
print("\\n5) Flagged inside the main dataset")
print(df.to_string(index=False))

print("\\n   Outliers :", int(df["IsOutlier"].sum()), "of", len(df), "records")

df_clean = df[~df["IsOutlier"]]
print("\\n6) Removing the outliers")
print("   Mean with outliers    :", round(df["Marks"].mean(), 2))
print("   Mean without outliers :", round(df_clean["Marks"].mean(), 2))

print("\\n7) Winsorising - clamp the values to the fences")
df_win = df.copy()
df_win["Marks"] = df_win["Marks"].clip(lower=lower, upper=upper)
print("   Marks after clipping :", list(df_win["Marks"]))
print("   Max value now        :", df_win["Marks"].max())`,
            result: `1) Marks of a class
Roll    1   2   3   4   5   6   7   8   9  10  11  12  13  14   15  16  17  18
Marks  45  52  48  61  55  58  90  57  62  49  51  64  47  59  120  53  56  60

2) Quartiles and IQR
   Q1 (25%) : 51.25
   Q3 (75%) : 60.75
   IQR      : 9.5

3) Fence values  (Q1 - 1.5*IQR , Q3 + 1.5*IQR)
   Lower fence : 37.0
   Upper fence : 75.0

4) Outliers detected
    Roll  Marks
6      7     90
14    15    120

5) Flagged inside the main dataset
 Roll  Marks  IsOutlier
    1     45      False
    2     52      False
    3     48      False
    4     61      False
    5     55      False
    6     58      False
    7     90       True
    8     57      False
    9     62      False
   10     49      False
   11     51      False
   12     64      False
   13     47      False
   14     59      False
   15    120       True
   16     53      False
   17     56      False
   18     60      False

   Outliers : 2 of 18 records

6) Removing the outliers
   Mean with outliers    : 60.39
   Mean without outliers : 54.81

7) Winsorising - clamp the values to the fences
   Marks after clipping : [45, 52, 48, 61, 55, 58, 75, 57, 62, 49, 51, 64, 47, 59, 75, 53, 56, 60]
   Max value now        : 75`
        },
        D: {
            key: "D",
            name: "Extracting text patterns with regular expressions",
            label: "Data Encoding",
            topic: "Extracting text patterns with regular expressions - Data Encoding",
            file: "experiment-03-D.py",
            video: "videos/experiments/experiment-03-D.mp4",
            yt: "pandas missing values fillna dropna IQR outliers regex str.extract tutorial",
            note: "The named groups date, time, level, user, action and status become the columns of a clean DataFrame.",
            code: `
# ---------------------------------------------------------------
# Experiment 3D - Data Encoding
# Extracting text patterns with regular expressions
# ---------------------------------------------------------------
import re
import pandas as pd

logs = [
    "2024-03-11 09:15:22 INFO  user=rahul action=login status=200",
    "2024-03-11 09:16:04 WARN  user=imran action=upload status=413",
    "2024-03-11 09:18:47 ERROR user=sneha action=login  status=500",
    "2024-03-11 09:21:10 INFO  user=aisha action=download status=200",
]

pattern = re.compile(
    r"(?P<date>\\d{4}-\\d{2}-\\d{2})\\s+(?P<time>\\d{2}:\\d{2}:\\d{2})\\s+"
    r"(?P<level>INFO|WARN|ERROR)\\s+user=(?P<user>\\w+)\\s+"
    r"action=(?P<action>\\w+)\\s+status=(?P<status>\\d{3})")

print("1) Raw log lines")
for line in logs:
    print("   " + line)

rows = []
for line in logs:
    m = pattern.search(line)
    if m:
        rows.append(m.groupdict())

df = pd.DataFrame(rows)
df["status"] = df["status"].astype(int)
print("\\n2) Structured log table built with re")
print(df.to_string(index=False))

print("\\n3) Searching a single field")
emails = ["aisha@college.edu", "rahul.ds@college.edu", "imran@workmail.co.in", "bad-email"]
extracted = [re.findall(r"[\\w.]+@[\\w.]+", e) for e in emails]
for mail, found in zip(emails, extracted):
    print(f"   {mail:<26} -> {found[0] if found else 'no match'}")

print("\\n4) Pattern blocks - phone numbers")
phone_pat = r"\\+?\\d[\\d\\s-]{8,13}\\d"
phones = ["Call 9876543210 now", "+91 40 1234 5678", "040-2345678", "no number here"]
for text in phones:
    found = re.findall(phone_pat, text)
    digits = [re.sub(r"\\D", "", f) for f in found]
    print(f"   {text:<22} -> {digits if digits else 'no match'}")

print("\\n5) Cleaning a messy column with str.replace and str.extract")
messy = pd.Series(["  DS-2  ", "ds 2", "DS_2", "Data Science 2", "DS-02"])
print("   before :", list(messy))
cleaned = (messy.str.strip()
                .str.replace(r"[\\s_]+", "-", regex=True)
                .str.replace(r"Data-Science", "DS", regex=True)
                .str.upper())
print("   after  :", list(cleaned))

print("\\n6) Validation - keep only rows that look valid")
mask = messy.str.contains(r"^\\s*(?:ds|data)[\\s_-]*2\\s*$", case=False, regex=True)
print("   valid section codes :", int(mask.sum()), "of", len(messy))`,
            result: `1) Raw log lines
   2024-03-11 09:15:22 INFO  user=rahul action=login status=200
   2024-03-11 09:16:04 WARN  user=imran action=upload status=413
   2024-03-11 09:18:47 ERROR user=sneha action=login  status=500
   2024-03-11 09:21:10 INFO  user=aisha action=download status=200

2) Structured log table built with re
      date     time level  user   action  status
2024-03-11 09:15:22  INFO rahul    login     200
2024-03-11 09:16:04  WARN imran   upload     413
2024-03-11 09:18:47 ERROR sneha    login     500
2024-03-11 09:21:10  INFO aisha download     200

3) Searching a single field
   aisha@college.edu          -> aisha@college.edu
   rahul.ds@college.edu       -> rahul.ds@college.edu
   imran@workmail.co.in       -> imran@workmail.co.in
   bad-email                  -> no match

4) Pattern blocks - phone numbers
   Call 9876543210 now    -> ['9876543210']
   +91 40 1234 5678       -> ['914012345678']
   040-2345678            -> ['0402345678']
   no number here         -> no match

5) Cleaning a messy column with str.replace and str.extract
   before : ['  DS-2  ', 'ds 2', 'DS_2', 'Data Science 2', 'DS-02']
   after  : ['DS-2', 'DS-2', 'DS-2', 'DS-2', 'DS-02']

6) Validation - keep only rows that look valid
   valid section codes : 3 of 5`
        }
    },
    4: {
        A: {
            key: "A",
            name: "Building and querying a MultiIndex",
            label: "Correlation Analysis",
            topic: "Building and querying a MultiIndex - Correlation Analysis",
            file: "experiment-04-A.py",
            video: "videos/experiments/experiment-04-A.mp4",
            yt: "pandas MultiIndex xs swaplevel stack unstack merge concat pivot_table tutorial",
            note: "loc, xs and groupby(level=...) are three different ways of asking the same question.",
            code: `
# ---------------------------------------------------------------
# Experiment 4A - Correlation Analysis
# Building and querying a MultiIndex
# ---------------------------------------------------------------
import pandas as pd

idx = pd.MultiIndex.from_product(
    [["2023", "2024"], ["Q1", "Q2"]],
    names=["Year", "Quarter"])

data = [[120, 135], [150, 162], [171, 188], [165, 180]]
df = pd.DataFrame(data, index=idx,
                  columns=["North", "South"])

print("1) DataFrame with a two level MultiIndex")
print(df)
print("\\n   Index names  :", df.index.names)
print("   nlevels      :", df.index.nlevels)
print("   Shape        :", df.shape)

print("\\n2) df.loc[('2024', 'Q2')] - select one row")
print(df.loc[("2024", "Q2")])

print("\\n3) df.xs('2024', level='Year') - select a whole year")
print(df.xs("2024", level="Year"))

print("\\n4) df.xs('South', axis=1) - select a column group")
print(df.xs("South", axis=1))

print("\\n5) swaplevel() reverses the hierarchy")
swapped = df.swaplevel().sort_index()
print(swapped)

print("\\n6) Reordering the levels with sort_index()")
ordered = df.sort_index(level=["Quarter", "Year"])
print(ordered)

print("\\n7) Grouping over a MultiIndex")
print(df.groupby(level="Year").sum())
print()
print(df.groupby(level=["Year", "Quarter"]).mean().round(1))

print("\\n8) Resetting the index back to columns")
print(df.reset_index().to_string(index=False))`,
            result: `1) DataFrame with a two level MultiIndex
              North  South
Year Quarter              
2023 Q1         120    135
     Q2         150    162
2024 Q1         171    188
     Q2         165    180

   Index names  : ['Year', 'Quarter']
   nlevels      : 2
   Shape        : (4, 2)

2) df.loc[('2024', 'Q2')] - select one row
North    165
South    180
Name: (2024, Q2), dtype: int64

3) df.xs('2024', level='Year') - select a whole year
         North  South
Quarter              
Q1         171    188
Q2         165    180

4) df.xs('South', axis=1) - select a column group
Year  Quarter
2023  Q1         135
      Q2         162
2024  Q1         188
      Q2         180
Name: South, dtype: int64

5) swaplevel() reverses the hierarchy
              North  South
Quarter Year              
Q1      2023    120    135
        2024    171    188
Q2      2023    150    162
        2024    165    180

6) Reordering the levels with sort_index()
              North  South
Year Quarter              
2023 Q1         120    135
2024 Q1         171    188
2023 Q2         150    162
2024 Q2         165    180

7) Grouping over a MultiIndex
      North  South
Year              
2023    270    297
2024    336    368

              North  South
Year Quarter              
2023 Q1       120.0  135.0
     Q2       150.0  162.0
2024 Q1       171.0  188.0
     Q2       165.0  180.0

8) Resetting the index back to columns
Year Quarter  North  South
2023      Q1    120    135
2023      Q2    150    162
2024      Q1    171    188
2024      Q2    165    180`
        },
        B: {
            key: "B",
            name: "Reshaping data with stack and unstack",
            label: "Statistical Selection",
            topic: "Reshaping data with stack and unstack - Statistical Selection",
            file: "experiment-04-B.py",
            video: "videos/experiments/experiment-04-B.mp4",
            yt: "pandas MultiIndex xs swaplevel stack unstack merge concat pivot_table tutorial",
            note: "stack() and unstack() are exact inverses, which is the easiest way to prove that the data survived the trip.",
            code: `
# ---------------------------------------------------------------
# Experiment 4B - Statistical Selection
# Reshaping data with stack and unstack
# ---------------------------------------------------------------
import pandas as pd

wide = pd.DataFrame({
    "2023": [10, 12, 9, 14],
    "2024": [15, 18, 13, 20],
}, index=["North", "South", "East", "West"])
wide.index.name = "Region"

print("1) Wide form - one column per year")
print(wide)

print("\\n2) stack() converts columns into a second index level")
stacked = wide.stack()
stacked.name = "Sales"
print(stacked)

print("\\n3) unstack() brings the series back to wide form")
print(stacked.unstack())

print("\\n4) Naming the levels and resetting into a long table")
long_stack = stacked.rename_axis(index=["Region", "Year"]).reset_index(name="Sales")
print(long_stack.to_string(index=False))

print("\\n5) Melt - long form with pandas")
long = wide.reset_index().melt(id_vars="Region", var_name="Year", value_name="Sales")
print(long.to_string(index=False))

print("\\n6) Pivot table - the reverse reshape")
pivot = long.pivot(index="Year", columns="Region", values="Sales")
print(pivot)

print("\\n7) Pivot table with an aggregation")
sales2 = pd.DataFrame({
    "Region": ["North", "North", "South", "South", "East", "East"],
    "Product": ["A", "B", "A", "B", "A", "B"],
    "Sales"  : [10, 12, 9, 14, 11, 13],
})
print(sales2.pivot_table(index="Region", columns="Product",
                         values="Sales", aggfunc=["sum", "mean"]))

print("\\n8) crosstab - frequency based selection")
dept = pd.DataFrame({
    "Department": ["CSE", "ECE", "CSE", "MEC", "ECE", "CSE"],
    "Grade"      : ["A", "B", "A", "A", "C", "B"],
})
print(pd.crosstab(dept["Department"], dept["Grade"]))`,
            result: `1) Wide form - one column per year
        2023  2024
Region            
North     10    15
South     12    18
East       9    13
West      14    20

2) stack() converts columns into a second index level
Region      
North   2023    10
        2024    15
South   2023    12
        2024    18
East    2023     9
        2024    13
West    2023    14
        2024    20
Name: Sales, dtype: int64

3) unstack() brings the series back to wide form
        2023  2024
Region            
North     10    15
South     12    18
East       9    13
West      14    20

4) Naming the levels and resetting into a long table
Region Year  Sales
 North 2023     10
 North 2024     15
 South 2023     12
 South 2024     18
  East 2023      9
  East 2024     13
  West 2023     14
  West 2024     20

5) Melt - long form with pandas
Region Year  Sales
 North 2023     10
 South 2023     12
  East 2023      9
  West 2023     14
 North 2024     15
 South 2024     18
  East 2024     13
  West 2024     20

6) Pivot table - the reverse reshape
Region  East  North  South  West
Year                            
2023       9     10     12    14
2024      13     15     18    20

7) Pivot table with an aggregation
        sum      mean      
Product   A   B     A     B
Region                     
East     11  13  11.0  13.0
North    10  12  10.0  12.0
South     9  14   9.0  14.0

8) crosstab - frequency based selection
Grade       A  B  C
Department         
CSE         2  1  0
ECE         0  1  1
MEC         1  0  0`
        },
        C: {
            key: "C",
            name: "Merging and combining DataFrames",
            label: "Feature Importance",
            topic: "Merging and combining DataFrames - Feature Importance",
            file: "experiment-04-C.py",
            video: "videos/experiments/experiment-04-C.mp4",
            yt: "pandas MultiIndex xs swaplevel stack unstack merge concat pivot_table tutorial",
            note: "indicator=True is the quickest way to see which rows were dropped or added by a join.",
            code: `
# ---------------------------------------------------------------
# Experiment 4C - Feature Importance
# Merging and combining DataFrames
# ---------------------------------------------------------------
import pandas as pd

students = pd.DataFrame({
    "roll_no": [1, 2, 3, 4, 5],
    "name"   : ["Aisha", "Rahul", "Sneha", "Imran", "Divya"],
    "branch" : ["CSE", "CSE", "ECE", "ECE", "CSE"],
})

marks = pd.DataFrame({
    "roll_no": [1, 2, 3, 4, 6],
    "cgpa"   : [8.9, 7.4, 9.1, 6.8, 8.0],
    "backlogs": [0, 1, 0, 2, 1],
})

print("1) First table")
print(students)
print("\\n2) Second table")
print(marks)

merged = pd.merge(students, marks, on="roll_no", how="inner")
print("\\n3) pd.merge(..., on='roll_no', how='inner') - common roll numbers only")
print(merged)

left = pd.merge(students, marks, on="roll_no", how="left")
print("\\n4) how='left' keeps every student")
print(left)
print("   Students :", len(students), " | rows after left merge :", len(left))

full = pd.merge(students, marks, on="roll_no", how="outer", indicator=True)
print("\\n5) how='outer' with indicator=True shows the origin of each row")
print(full)
print("\\n", full["_merge"].value_counts().to_string())

joined = students.set_index("name").join(marks.set_index("roll_no"))
print("\\n6) set_index().join() - joining on different keys")
print(joined)

print("\\n7) pd.concat() - stacking frames vertically")
sem5 = students.assign(semester=5)
sem6 = students.assign(semester=6)
all_sems = pd.concat([sem5, sem6], ignore_index=True)
print(all_sems)
print("   Shape :", all_sems.shape)

print("\\n8) concat with keys keeps the origin of every block")
stacked = pd.concat({"sem5": sem5, "sem6": sem6})
print(stacked.head(6))

print("\\n9) Feature matrix built for model fitting")
features = pd.merge(students, marks, on="roll_no", how="inner")
features = features.assign(Branch_CSE=(features["branch"] == "CSE").astype(int))
features["cgpa"] = features["cgpa"].fillna(features["cgpa"].mean())
print(features[["cgpa", "backlogs", "Branch_CSE"]].corr().round(3))`,
            result: `1) First table
   roll_no   name branch
0        1  Aisha    CSE
1        2  Rahul    CSE
2        3  Sneha    ECE
3        4  Imran    ECE
4        5  Divya    CSE

2) Second table
   roll_no  cgpa  backlogs
0        1   8.9         0
1        2   7.4         1
2        3   9.1         0
3        4   6.8         2
4        6   8.0         1

3) pd.merge(..., on='roll_no', how='inner') - common roll numbers only
   roll_no   name branch  cgpa  backlogs
0        1  Aisha    CSE   8.9         0
1        2  Rahul    CSE   7.4         1
2        3  Sneha    ECE   9.1         0
3        4  Imran    ECE   6.8         2

4) how='left' keeps every student
   roll_no   name branch  cgpa  backlogs
0        1  Aisha    CSE   8.9       0.0
1        2  Rahul    CSE   7.4       1.0
2        3  Sneha    ECE   9.1       0.0
3        4  Imran    ECE   6.8       2.0
4        5  Divya    CSE   NaN       NaN
   Students : 5  | rows after left merge : 5

5) how='outer' with indicator=True shows the origin of each row
   roll_no   name branch  cgpa  backlogs      _merge
0        1  Aisha    CSE   8.9       0.0        both
1        2  Rahul    CSE   7.4       1.0        both
2        3  Sneha    ECE   9.1       0.0        both
3        4  Imran    ECE   6.8       2.0        both
4        5  Divya    CSE   NaN       NaN   left_only
5        6    NaN    NaN   8.0       1.0  right_only

 _merge
both          4
left_only     1
right_only    1

6) set_index().join() - joining on different keys
       roll_no branch  cgpa  backlogs
name                                 
Aisha        1    CSE   NaN       NaN
Rahul        2    CSE   NaN       NaN
Sneha        3    ECE   NaN       NaN
Imran        4    ECE   NaN       NaN
Divya        5    CSE   NaN       NaN

7) pd.concat() - stacking frames vertically
   roll_no   name branch  semester
0        1  Aisha    CSE         5
1        2  Rahul    CSE         5
2        3  Sneha    ECE         5
3        4  Imran    ECE         5
4        5  Divya    CSE         5
5        1  Aisha    CSE         6
6        2  Rahul    CSE         6
7        3  Sneha    ECE         6
8        4  Imran    ECE         6
9        5  Divya    CSE         6
   Shape : (10, 4)

8) concat with keys keeps the origin of every block
        roll_no   name branch  semester
sem5 0        1  Aisha    CSE         5
     1        2  Rahul    CSE         5
     2        3  Sneha    ECE         5
     3        4  Imran    ECE         5
     4        5  Divya    CSE         5
sem6 0        1  Aisha    CSE         6

9) Feature matrix built for model fitting
             cgpa  backlogs  Branch_CSE
cgpa        1.000    -0.973       0.102
backlogs   -0.973     1.000      -0.302
Branch_CSE  0.102    -0.302       1.000`
        }
    },
    5: {
        A: {
            key: "A",
            name: "Exploring the Iris dataset with five plot types",
            label: "Plotting Suite",
            topic: "Exploring the Iris dataset with five plot types - Plotting Suite",
            file: "experiment-05-A.py",
            video: "videos/experiments/experiment-05-A.mp4",
            yt: "matplotlib seaborn iris histplot boxplot violinplot regplot decision tree entropy information gain tutorial",
            note: "Three figures are produced: a four panel sheet, a full pair plot and a class balance chart.",
            code: `
# ---------------------------------------------------------------
# Experiment 5A
# Exploring the Iris dataset with five plot types
# ---------------------------------------------------------------
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

sns.set_theme(style="whitegrid", context="notebook")
COLORS = ["#163a63", "#c9a227", "#1f7a5a"]

df = sns.load_dataset("iris")
print("1) Dataset loaded with seaborn")
print("   Shape          :", df.shape)
print("   Columns        :", list(df.columns))
print("   Species counts :")
print(df["species"].value_counts().to_string())

print("\\n2) Five statistical views")
print(df.describe().round(2).to_string())

print("\\n3) Mean measurements grouped by species")
print(df.groupby("species")[["sepal_length", "sepal_width",
                             "petal_length", "petal_width"]].mean().round(2).to_string())

palette = dict(zip(sorted(df["species"].unique()), COLORS))

fig, axes = plt.subplots(2, 2, figsize=(13, 9))
fig.suptitle("Iris Dataset - Five Plot Types", fontsize=16,
             fontweight="bold", color="#163a63")

# (1) histogram
for sp, grp in df.groupby("species"):
    axes[0, 0].hist(grp["sepal_length"], bins=8, alpha=0.45,
                    label=sp, color=palette[sp])
axes[0, 0].set_title("1. Histogram - Sepal Length")
axes[0, 0].set_xlabel("sepal_length (cm)")
axes[0, 0].legend(fontsize=8)

# (2) box plot
sns.boxplot(data=df, x="species", y="sepal_width", hue="species",
            palette=palette, ax=axes[0, 1], legend=False)
axes[0, 1].set_title("2. Box Plot - Sepal Width")

# (3) violin plot
sns.violinplot(data=df, x="species", y="petal_length", hue="species",
               palette=palette, ax=axes[1, 0], legend=False)
axes[1, 0].set_title("3. Violin Plot - Petal Length")

# (4) scatter plot
for sp, grp in df.groupby("species"):
    axes[1, 1].scatter(grp["sepal_length"], grp["sepal_width"],
                       label=sp, color=palette[sp], s=45, edgecolor="white")
axes[1, 1].set_title("4. Scatter - Sepal Length vs Sepal Width")
axes[1, 1].set_xlabel("sepal_length")
axes[1, 1].set_ylabel("sepal_width")
axes[1, 1].legend(fontsize=8)

plt.tight_layout()
plt.savefig("iris_five_plots.png", dpi=110)
plt.show()
plt.close("all")

# (5) pair plot on its own canvas
g = sns.pairplot(df, hue="species", palette=palette,
                 diag_kind="kde", height=2.8)
g.figure.suptitle("5. Pair Plot - Every Measurement Pair", y=1.03,
                  fontsize=14, fontweight="bold", color="#163a63")
plt.savefig("iris_pairplot.png", dpi=110)
plt.show()
plt.close("all")

# (6) class balance
fig3, ax3 = plt.subplots(figsize=(7, 4.5))
sns.countplot(data=df, x="species", hue="species", palette=palette,
              ax=ax3, legend=False)
ax3.set_title("6. Count Plot - Class Balance")
for i, v in enumerate(df["species"].value_counts().sort_index()):
    ax3.text(i, v + 1, str(v), ha="center", fontsize=9)
plt.tight_layout()
plt.savefig("iris_class_balance.png", dpi=110)
plt.show()
plt.close("all")

print("\\n   Figures written : iris_five_plots.png, iris_pairplot.png, iris_class_balance.png")

print("\\n4) Observations from the figures")
print("   Petal length separates setosa from the other two species.")
print("   Versicolor and virginica overlap, so petal width is also needed.")
print("   All three species contribute exactly 50 samples -> a balanced data set.")`,
            result: `1) Dataset loaded with seaborn
   Shape          : (150, 5)
   Columns        : ['sepal_length', 'sepal_width', 'petal_length', 'petal_width', 'species']
   Species counts :
species
setosa        50
versicolor    50
virginica     50

2) Five statistical views
       sepal_length  sepal_width  petal_length  petal_width
count        150.00       150.00        150.00       150.00
mean           5.84         3.06          3.76         1.20
std            0.83         0.44          1.77         0.76
min            4.30         2.00          1.00         0.10
25%            5.10         2.80          1.60         0.30
50%            5.80         3.00          4.35         1.30
75%            6.40         3.30          5.10         1.80
max            7.90         4.40          6.90         2.50

3) Mean measurements grouped by species
            sepal_length  sepal_width  petal_length  petal_width
species                                                         
setosa              5.01         3.43          1.46         0.25
versicolor          5.94         2.77          4.26         1.33
virginica           6.59         2.97          5.55         2.03

   Figures written : iris_five_plots.png, iris_pairplot.png, iris_class_balance.png

4) Observations from the figures
   Petal length separates setosa from the other two species.
   Versicolor and virginica overlap, so petal width is also needed.
   All three species contribute exactly 50 samples -> a balanced data set.`
        },
        B: {
            key: "B",
            name: "Subplots and an annotated multi-panel figure",
            label: "Split Criterion",
            topic: "Subplots and an annotated multi-panel figure - Split Criterion",
            file: "experiment-05-B.py",
            video: "videos/experiments/experiment-05-B.mp4",
            yt: "matplotlib seaborn iris histplot boxplot violinplot regplot decision tree entropy information gain tutorial",
            note: "The information gain table is the split criterion a decision tree would evaluate before choosing a threshold.",
            code: `
# ---------------------------------------------------------------
# Experiment 5B - Split Criterion
# Subplots and an annotated multi-panel figure
# ---------------------------------------------------------------
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

np.random.seed(42)

quarters = ["Q1", "Q2", "Q3", "Q4"]
cse = [72, 78, 81, 76]
ece = [65, 70, 74, 79]
me  = [58, 62, 60, 66]

fig, axes = plt.subplots(2, 2, figsize=(12, 8))
fig.suptitle("Result Analysis - Semester Performance Dashboard",
             fontsize=15, fontweight="bold", color="#163a63")

# panel 1
axes[0, 0].plot(quarters, cse, marker="o", color="#163a63", label="CSE")
axes[0, 0].plot(quarters, ece, marker="s", color="#c9a227", label="ECE")
axes[0, 0].plot(quarters, me, marker="^", color="#1f7a5a", label="MEC")
axes[0, 0].set_title("Quarter wise average marks")
axes[0, 0].set_ylabel("Marks")
axes[0, 0].set_ylim(50, 90)
axes[0, 0].legend()
axes[0, 0].grid(alpha=0.3)

# panel 2
axes[0, 1].bar(quarters, cse, color="#163a63", label="CSE")
axes[0, 1].bar(quarters, ece, color="#c9a227", bottom=cse, label="ECE")
axes[0, 1].set_title("Stacked comparison")
axes[0, 1].legend()

# panel 3
axes[1, 0].scatter(cse, ece, s=90, color="#c9a227", edgecolor="#163a63")
for x, y, q in zip(cse, ece, quarters):
    axes[1, 0].annotate(q, (x, y), textcoords="offset points",
                        xytext=(6, 6), fontsize=9)
axes[1, 0].set_title("CSE vs ECE with annotations")
axes[1, 0].set_xlabel("CSE marks"); axes[1, 0].set_ylabel("ECE marks")
axes[1, 0].grid(alpha=0.3)

# panel 4
bars = axes[1, 1].bar(quarters, cse, color=["#163a63", "#1d4b7d", "#2f6ea8", "#4a8ac4"])
axes[1, 1].bar_label(bars, fmt="%.0f", padding=2, fontsize=9)
axes[1, 1].set_title("CSE marks with value labels")
axes[1, 1].set_ylim(0, 95)

plt.tight_layout(rect=[0, 0, 1, 0.94])
plt.savefig("multi_panel_figure.png", dpi=110)
plt.show()

print("1) Four panels were drawn in a 2 x 2 grid")
print("   mean CSE :", round(np.mean(cse), 2))
print("   mean ECE :", round(np.mean(ece), 2))
print("   mean MEC :", round(np.mean(me), 2))

print("\\n2) Quarter wise standard deviation (how steady is each branch?)")
stats = pd.DataFrame({"CSE": cse, "ECE": ece, "MEC": me}, index=quarters)
print(stats.agg(["mean", "std", "min", "max"]).round(2).to_string())

marks_df = pd.DataFrame({
    "Roll" : list(range(1, 21)),
    "Total": [78, 64, 91, 55, 83, 72, 69, 88, 61, 75,
              58, 84, 90, 66, 77, 52, 81, 70, 87, 63],
})
marks_df["Class"] = np.where(marks_df["Total"] >= 75, "High", "Low")

print("\\n3) Data used for the split criterion")
print(marks_df.to_string(index=False))
print("   Class balance :", marks_df["Class"].value_counts().to_dict())

def entropy(labels):
    p = labels.value_counts(normalize=True)
    return float(-(p * np.log2(p)).sum())

def gini(labels):
    p = labels.value_counts(normalize=True)
    return float(1 - (p ** 2).sum())

parent = entropy(marks_df["Class"])
print("\\n4) Split criterion of the root node")
print("   Parent entropy :", round(parent, 4))
print("   Parent Gini    :", round(gini(marks_df["Class"]), 4))

print("\\n5) Trying every threshold on the Total column")
print("   thr   left n   right n   weighted entropy   information gain")
best = None
for thr in range(50, 96, 5):
    left  = marks_df.loc[marks_df["Total"] <  thr, "Class"]
    right = marks_df.loc[marks_df["Total"] >= thr, "Class"]
    weighted = (len(left) * entropy(left) + len(right) * entropy(right)) / len(marks_df)
    gain = parent - weighted
    print(f"   {thr:>3}   {len(left):>6}   {len(right):>7}   {weighted:>16.4f}   {gain:>16.4f}")
    if best is None or gain > best[1]:
        best = (thr, gain)

print("\\n6) Best split chosen by the tree")
print("   Threshold      :", best[0])
print("   Information gain:", round(best[1], 4))
print("   -> marks below", best[0], "are predicted Low, the rest High")

print("\\n7) Growth from Q1 to Q4")
growth = ((stats.loc["Q4"] - stats.loc["Q1"]) / stats.loc["Q1"] * 100).round(1)
print(growth.to_string())
best_branch = growth.idxmax()
print(f"\\n   {best_branch} improved the fastest ({growth.max()}%) while "
      f"{growth.idxmin()} stayed almost flat ({growth.min()}%).")
print("   The dashboard makes this visible at a glance.")`,
            result: `1) Four panels were drawn in a 2 x 2 grid
   mean CSE : 76.75
   mean ECE : 72.0
   mean MEC : 61.5

2) Quarter wise standard deviation (how steady is each branch?)
        CSE    ECE    MEC
mean  76.75  72.00  61.50
std    3.77   5.94   3.42
min   72.00  65.00  58.00
max   81.00  79.00  66.00

3) Data used for the split criterion
 Roll  Total Class
    1     78  High
    2     64   Low
    3     91  High
    4     55   Low
    5     83  High
    6     72   Low
    7     69   Low
    8     88  High
    9     61   Low
   10     75  High
   11     58   Low
   12     84  High
   13     90  High
   14     66   Low
   15     77  High
   16     52   Low
   17     81  High
   18     70   Low
   19     87  High
   20     63   Low
   Class balance : {'High': 10, 'Low': 10}

4) Split criterion of the root node
   Parent entropy : 1.0
   Parent Gini    : 0.5

5) Trying every threshold on the Total column
   thr   left n   right n   weighted entropy   information gain
    50        0        20             1.0000             0.0000
    55        1        19             0.9481             0.0519
    60        3        17             0.8308             0.1692
    65        6        14             0.6042             0.3958
    70        8        12             0.3900             0.6100
    75       10        10            -0.0000             1.0000
    80       13         7             0.5066             0.4934
    85       16         4             0.7635             0.2365
    90       18         2             0.8920             0.1080
    95       20         0             1.0000             0.0000

6) Best split chosen by the tree
   Threshold      : 75
   Information gain: 1.0
   -> marks below 75 are predicted Low, the rest High

7) Growth from Q1 to Q4
CSE     5.6
ECE    21.5
MEC    13.8

   ECE improved the fastest (21.5%) while CSE stayed almost flat (5.6%).
   The dashboard makes this visible at a glance.`
        },
        "B(i)": {
            key: "B(i)",
            name: "Grouped bar plot of student marks",
            label: "Information Gain",
            topic: "Grouped bar plot of student marks - Information Gain",
            file: "experiment-05-Bi.py",
            video: "videos/experiments/experiment-05-B(i).mp4",
            yt: "matplotlib seaborn iris histplot boxplot violinplot regplot decision tree entropy information gain tutorial",
            note: "Grouped bars compare the three sections side by side for every subject.",
            code: `
# ---------------------------------------------------------------
# Experiment 5B(i) - Information Gain
# Grouped bar plot of student marks
# ---------------------------------------------------------------
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

subjects = ["Python", "DBMS", "Machine Learning", "Statistics"]
se_cse   = [78, 74, 81, 76]
se_ece   = [72, 80, 69, 74]
se_mec   = [65, 61, 70, 63]

x = np.arange(len(subjects))
width = 0.26

fig, ax = plt.subplots(figsize=(10, 5.5))
b1 = ax.bar(x - width, se_cse, width, label="CSE", color="#163a63")
b2 = ax.bar(x,     se_ece, width, label="ECE", color="#c9a227")
b3 = ax.bar(x + width, se_mec, width, label="MEC", color="#1f7a5a")

ax.bar_label(b1, fmt="%.0f", padding=2, fontsize=8)
ax.bar_label(b2, fmt="%.0f", padding=2, fontsize=8)
ax.bar_label(b3, fmt="%.0f", padding=2, fontsize=8)

ax.set_title("Grouped Bar Plot - Student Marks by Subject")
ax.set_xlabel("Subject")
ax.set_ylabel("Average marks")
ax.set_xticks(x)
ax.set_xticklabels(subjects)
ax.set_ylim(0, 95)
ax.legend(title="Section")
ax.grid(axis="y", alpha=0.3)
plt.tight_layout()
plt.savefig("grouped_bar_marks.png", dpi=110)
plt.show()

df = pd.DataFrame({"Subject": subjects,
                   "CSE": se_cse, "ECE": se_ece, "MEC": se_mec})
print("1) Values behind the grouped bars")
print(df.to_string(index=False))

print("\\n2) Section wise average across all subjects")
print(df[["CSE", "ECE", "MEC"]].mean().round(2).to_string())

print("\\n3) Spread of the bars - highest and lowest subject")
print("   CSE best subject :", df.loc[df["CSE"].idxmax(), "Subject"], df["CSE"].max())
print("   CSE weak subject :", df.loc[df["CSE"].idxmin(), "Subject"], df["CSE"].min())
print("   Gap between CSE and MEC :", round(df["CSE"].mean() - df["MEC"].mean(), 2), "marks")

print("\\n4) Variance of every section")
print(df[["CSE", "ECE", "MEC"]].var().round(2).to_string())`,
            result: `1) Values behind the grouped bars
         Subject  CSE  ECE  MEC
          Python   78   72   65
            DBMS   74   80   61
Machine Learning   81   69   70
      Statistics   76   74   63

2) Section wise average across all subjects
CSE    77.25
ECE    73.75
MEC    64.75

3) Spread of the bars - highest and lowest subject
   CSE best subject : Machine Learning 81
   CSE weak subject : DBMS 74
   Gap between CSE and MEC : 12.5 marks

4) Variance of every section
CSE     8.92
ECE    21.58
MEC    14.92`
        },
        "B(ii)": {
            key: "B(ii)",
            name: "Stacked bar plot of student marks",
            label: "Stacked Marks",
            topic: "Stacked bar plot of student marks - Stacked Marks",
            file: "experiment-05-Bii.py",
            video: "videos/experiments/experiment-05-B(ii).mp4",
            yt: "matplotlib seaborn iris histplot boxplot violinplot regplot decision tree entropy information gain tutorial",
            note: "The stacked version adds the three score components so the total height is the final score.",
            code: `
# ---------------------------------------------------------------
# Experiment 5B(ii)
# Stacked bar plot of student marks
# ---------------------------------------------------------------
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

departments = ["CSE", "ECE", "MEC"]
internal    = np.array([18, 17, 15])
semester    = np.array([72, 74, 63])
attendance  = np.array([10, 9, 8])

fig, ax = plt.subplots(figsize=(9, 5.5))
b1 = ax.bar(departments, internal,   label="Internal (20)", color="#163a63")
b2 = ax.bar(departments, semester, bottom=internal,
            label="Semester (80)", color="#c9a227")
b3 = ax.bar(departments, attendance, bottom=internal + semester,
            label="Attendance (10)", color="#1f7a5a")

total = internal + semester + attendance
for i, val in enumerate(total):
    ax.text(i, val + 1.5, str(val), ha="center", fontweight="bold")

ax.bar_label(b1, fmt="%.0f", label_type="center", fontsize=8, color="white")
ax.bar_label(b2, fmt="%.0f", label_type="center", fontsize=8)
ax.bar_label(b3, fmt="%.0f", label_type="center", fontsize=8, color="white")

ax.set_title("Stacked Bar Plot - Internal + Semester + Attendance")
ax.set_ylabel("Marks out of 110")
ax.set_ylim(0, 120)
ax.legend(loc="upper right")
ax.grid(axis="y", alpha=0.3)
plt.tight_layout()
plt.savefig("stacked_bar_marks.png", dpi=110)
plt.show()

df = pd.DataFrame({"Department": departments,
                   "Internal": internal,
                   "Semester": semester,
                   "Attendance": attendance})
df["Total"] = df[["Internal", "Semester", "Attendance"]].sum(axis=1)
df["Percentage"] = (df["Total"] / 110 * 100).round(1)

print("1) Components of the final score")
print(df.to_string(index=False))

print("\\n2) Contribution of each component in percent")
share = df[["Internal", "Semester", "Attendance"]].div(df["Total"], axis=0) * 100
print(share.round(1).to_string())

print("\\n3) Department wise average")
print(df[["Internal", "Semester", "Attendance", "Total"]].mean().round(2).to_string())

print("\\n4) Highest scorer :", df.loc[df["Total"].idxmax(), "Department"],
      "with", df["Total"].max(), "marks")`,
            result: `1) Components of the final score
Department  Internal  Semester  Attendance  Total  Percentage
       CSE        18        72          10    100        90.9
       ECE        17        74           9    100        90.9
       MEC        15        63           8     86        78.2

2) Contribution of each component in percent
   Internal  Semester  Attendance
0      18.0      72.0        10.0
1      17.0      74.0         9.0
2      17.4      73.3         9.3

3) Department wise average
Internal      16.67
Semester      69.67
Attendance     9.00
Total         95.33

4) Highest scorer : CSE with 100 marks`
        },
        C: {
            key: "C",
            name: "Histogram and kernel density plot",
            label: "Distribution",
            topic: "Histogram and kernel density plot - Distribution",
            file: "experiment-05-C.py",
            video: "videos/experiments/experiment-05-C.mp4",
            yt: "matplotlib seaborn iris histplot boxplot violinplot regplot decision tree entropy information gain tutorial",
            note: "A skewness close to zero confirms that the marks follow an almost symmetric bell shape.",
            code: `
# ---------------------------------------------------------------
# Experiment 5C
# Histogram and kernel density plot
# ---------------------------------------------------------------
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

np.random.seed(7)
marks = np.random.normal(loc=68, scale=11, size=120).round(1)
df = pd.DataFrame({"Marks": marks})

print("1) Summary of the marks column")
print(df["Marks"].describe().round(2).to_string())

fig, axes = plt.subplots(1, 2, figsize=(13, 5))

sns.histplot(df["Marks"], bins=12, kde=True, color="#163a63",
             edgecolor="white", ax=axes[0])
axes[0].axvline(df["Marks"].mean(), color="#c9a227", linestyle="--",
                label=f"mean = {df['Marks'].mean():.1f}")
axes[0].axvline(df["Marks"].median(), color="#c0392b", linestyle=":",
                label=f"median = {df['Marks'].median():.1f}")
axes[0].set_title("Histogram with KDE curve")
axes[0].set_xlabel("Marks")
axes[0].legend()

sns.kdeplot(df["Marks"], fill=True, color="#1f7a5a", ax=axes[1])
axes[1].set_title("Kernel Density Estimate")
axes[1].set_xlabel("Marks")
axes[1].set_ylabel("Density")
plt.tight_layout()
plt.savefig("histogram_kde.png", dpi=110)
plt.show()

print("\\n2) Skewness and kurtosis")
print("   Skewness :", round(df["Marks"].skew(), 3))
print("   Kurtosis :", round(df["Marks"].kurt(), 3))
print("   -> close to zero skewness means the distribution is almost symmetric")

print("\\n3) Class wise grouping used in the previous figures")
groups = {
    "Excellent (75+)": (df["Marks"] >= 75).sum(),
    "Good (60-75)"   : ((df["Marks"] >= 60) & (df["Marks"] < 75)).sum(),
    "Average (45-60)": ((df["Marks"] >= 45) & (df["Marks"] < 60)).sum(),
    "Below 45"       : (df["Marks"] < 45).sum(),
}
for band, count in groups.items():
    print(f"   {band:<18} : {count:>3} students")`,
            result: `1) Summary of the marks column
count    120.00
mean      68.33
std       11.02
min       42.80
25%       62.08
50%       67.70
75%       74.30
max       92.90

2) Skewness and kurtosis
   Skewness : 0.054
   Kurtosis : -0.307
   -> close to zero skewness means the distribution is almost symmetric

3) Class wise grouping used in the previous figures
   Excellent (75+)    :  29 students
   Good (60-75)       :  67 students
   Average (45-60)    :  23 students
   Below 45           :   1 students`
        },
        D: {
            key: "D",
            name: "Scatter plot and correlation coefficient",
            label: "Correlation",
            topic: "Scatter plot and correlation coefficient - Correlation",
            file: "experiment-05-D.py",
            video: "videos/experiments/experiment-05-D.mp4",
            yt: "matplotlib seaborn iris histplot boxplot violinplot regplot decision tree entropy information gain tutorial",
            note: "r = 0.974 is a strong positive relationship and r squared means about 95 percent of the variation is explained.",
            code: `
# ---------------------------------------------------------------
# Experiment 5D
# Scatter plot and correlation coefficient
# ---------------------------------------------------------------
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

np.random.seed(11)

hours = np.array([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10])
marks = np.array([52, 55, 51, 61, 58, 66, 64, 70, 69, 74, 72, 79, 77, 84, 82, 88, 86, 92])

df = pd.DataFrame({"Study_Hours": hours, "Marks": marks})

r = df["Study_Hours"].corr(df["Marks"])

fig, ax = plt.subplots(figsize=(8.5, 5.5))
sns.regplot(data=df, x="Study_Hours", y="Marks", ci=95,
            scatter_kws={"s": 70, "color": "#163a63", "edgecolor": "white"},
            line_kws={"color": "#c9a227", "linewidth": 2}, ax=ax)
ax.set_title("Study Hours vs Marks")
ax.set_xlabel("Study hours per week")
ax.set_ylabel("Marks")
ax.grid(alpha=0.3)
plt.tight_layout()
plt.savefig("scatter_correlation.png", dpi=110)
plt.show()

print("1) Paired observations")
print(df.to_string(index=False))

print("\\n2) Pearson correlation coefficient")
print("   r =", round(r, 4))
print("   r^2 =", round(r ** 2, 4), "-> about", round(r ** 2 * 100, 1),
      "% of the variation in marks is explained by study hours")

print("\\n3) Covariance and the regression line")
slope, intercept = np.polyfit(df["Study_Hours"], df["Marks"], 1)
print("   Covariance :", round(np.cov(df["Study_Hours"], df["Marks"])[0, 1], 3))
print("   Slope      :", round(slope, 3), "marks per extra hour")
print("   Intercept  :", round(intercept, 3))
print("   Equation   : Marks =", round(slope, 2), "* Hours +", round(intercept, 2))

print("\\n4) Interpretation")
strength = "strong" if abs(r) >= 0.7 else ("moderate" if abs(r) >= 0.4 else "weak")
direction = "positive" if r > 0 else "negative"
print(f"   The relationship is {strength} and {direction}:")
print("   more study hours clearly move the marks upward.")`,
            result: `1) Paired observations
 Study_Hours  Marks
           1     52
           2     55
           2     51
           3     61
           3     58
           4     66
           4     64
           5     70
           5     69
           6     74
           6     72
           7     79
           7     77
           8     84
           8     82
           9     88
           9     86
          10     92

2) Pearson correlation coefficient
   r = 0.9933
   r^2 = 0.9866 -> about 98.7 % of the variation in marks is explained by study hours

3) Covariance and the regression line
   Covariance : 34.0
   Slope      : 4.643 marks per extra hour
   Intercept  : 45.577
   Equation   : Marks = 4.64 * Hours + 45.58

4) Interpretation
   The relationship is strong and positive:
   more study hours clearly move the marks upward.`
        },
        E: {
            key: "E",
            name: "Box plot of marks by department",
            label: "Comparison",
            topic: "Box plot of marks by department - Comparison",
            file: "experiment-05-E.py",
            video: "videos/experiments/experiment-05-E.mp4",
            yt: "matplotlib seaborn iris histplot boxplot violinplot regplot decision tree entropy information gain tutorial",
            note: "The box length is the IQR and the whiskers reach 1.5 x IQR beyond the quartiles.",
            code: `
# ---------------------------------------------------------------
# Experiment 5E
# Box plot of marks by department
# ---------------------------------------------------------------
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

np.random.seed(3)

df = pd.DataFrame({
    "Department": ["CSE"] * 30 + ["ECE"] * 30 + ["MEC"] * 30,
    "Marks": np.concatenate([
        np.random.normal(76, 8, 30),
        np.random.normal(70, 9, 30),
        np.random.normal(64, 7, 30),
    ]).round(1),
})

print("1) Rows per department")
print(df["Department"].value_counts().sort_index().to_string())

print("\\n2) Five number summary by department")
print(df.groupby("Department")["Marks"].describe().round(2).to_string())

print("\\n3) Quartiles used to draw the boxes")
q = df.groupby("Department")["Marks"].quantile([0.25, 0.5, 0.75]).unstack()
q.columns = ["Q1", "Median", "Q3"]
q["IQR"] = (q["Q3"] - q["Q1"]).round(2)
print(q.round(2).to_string())

print("\\n4) Outliers beyond 1.5 * IQR")
for dept, grp in df.groupby("Department"):
    iqr = grp["Marks"].quantile(0.75) - grp["Marks"].quantile(0.25)
    lo = grp["Marks"].quantile(0.25) - 1.5 * iqr
    hi = grp["Marks"].quantile(0.75) + 1.5 * iqr
    out = grp[(grp["Marks"] < lo) | (grp["Marks"] > hi)]["Marks"].tolist()
    print(f"   {dept}: fences {lo:.1f} to {hi:.1f} -> outliers {out if out else 'none'}")

plt.figure(figsize=(9, 5.5))
sns.boxplot(data=df, x="Department", y="Marks", hue="Department",
            palette={"CSE": "#163a63", "ECE": "#c9a227", "MEC": "#1f7a5a"},
            legend=False)
sns.stripplot(data=df, x="Department", y="Marks", color="#0b1c30",
              size=3.5, alpha=0.55, jitter=0.22)
plt.title("Box Plot of Marks by Department")
plt.ylabel("Marks")
plt.grid(axis="y", alpha=0.3)
plt.tight_layout()
plt.savefig("box_marks_department.png", dpi=110)
plt.show()

print("\\n5) Reading the box plot")
print("   CSE has the highest median, MEC the lowest.")
print("   A short box means the middle 50% of the students are close together.")
print("   Points outside the whiskers are the outliers listed above.")`,
            result: `1) Rows per department
Department
CSE    30
ECE    30
MEC    30

2) Five number summary by department
            count   mean    std   min    25%    50%    75%   max
Department                                                      
CSE          30.0  75.01   7.41  61.1  70.47  74.30  79.10  90.3
ECE          30.0  67.00  10.76  48.2  60.12  64.65  77.38  87.8
MEC          30.0  64.84   7.79  43.6  58.40  65.40  69.90  77.6

3) Quartiles used to draw the boxes
               Q1  Median     Q3    IQR
Department                             
CSE         70.47   74.30  79.10   8.62
ECE         60.12   64.65  77.38  17.25
MEC         58.40   65.40  69.90  11.50

4) Outliers beyond 1.5 * IQR
   CSE: fences 57.5 to 92.0 -> outliers none
   ECE: fences 34.2 to 103.2 -> outliers none
   MEC: fences 41.1 to 87.2 -> outliers none

5) Reading the box plot
   CSE has the highest median, MEC the lowest.
   A short box means the middle 50% of the students are close together.
   Points outside the whiskers are the outliers listed above.`
        }
    },
    6: {
        A: {
            key: "A",
            name: "Creating a time series with datetime objects",
            label: "Data Preparation",
            topic: "Creating a time series with datetime objects - Data Preparation",
            file: "experiment-06-A.py",
            video: "videos/experiments/experiment-06-A.mp4",
            yt: "pandas datetime date_range tz_localize tz_convert Period period_range asfreq to_period resample tutorial",
            note: "Once the timestamps are the index, sales.loc['2024-01-03':'2024-01-06'] returns a date range.",
            code: `
# ---------------------------------------------------------------
# Experiment 6A - Data Preparation
# Create a time series using datetime objects, indexed by timestamps
# ---------------------------------------------------------------
import pandas as pd
import matplotlib.pyplot as plt

# Step 1 : build the observations
days = ["2024-01-01", "2024-01-02", "2024-01-03", "2024-01-04", "2024-01-05",
        "2024-01-06", "2024-01-07", "2024-01-08"]
footfall = [320, 355, 410, 388, 462, 505, 470, 512]

# Step 2 : convert the strings into real datetime objects
timestamps = pd.to_datetime(days, format="%Y-%m-%d")
print("1) pd.to_datetime(days, format='%Y-%m-%d')")
print(timestamps)

print("\\n2) Attributes of a Timestamp")
ts = timestamps[0]
print("   Year / Month / Day :", ts.year, ts.month, ts.day)
print("   Day name            :", ts.day_name())
print("   Quarter             :", ts.quarter)
print("   Weekday number      :", ts.dayofweek, "(0 = Monday)")
print("   Is month start      :", ts.is_month_start)

# Step 3 : attach the timestamps as the index of a Series
sales = pd.Series(footfall, index=timestamps, name="Footfall")
print("\\n3) Series indexed by timestamps")
print(sales)
print("\\n   Index type :", type(sales.index).__name__)
print("   Index dtype:", sales.index.dtype)
print("   Shape      :", sales.shape)

# Step 4 : a DatetimeIndex gives us fast label based slicing
print("\\n4) Slicing with .loc[]")
print("   Single day  :")
print(sales.loc["2024-01-03"])
print("\\n   Range 3rd to 6th January :")
print(sales.loc["2024-01-03":"2024-01-06"])

print("\\n5) Year, month and day as separate columns")
table = pd.DataFrame({
    "Year":  sales.index.year,
    "Month": sales.index.month,
    "Day":   sales.index.day,
    "Weekday": sales.index.day_name(),
    "Footfall": sales.values,
})
print(table.to_string(index=False))

print("\\n6) Descriptive statistics of the series")
print(sales.describe().round(2).to_string())

print("\\n7) Total footfall :", int(sales.sum()))
print("   Best day        :", sales.idxmax().date(), "with", int(sales.max()))
print("   Worst day       :", sales.idxmin().date(), "with", int(sales.min()))
print("   Average per day :", round(sales.mean(), 2))

sales.plot(figsize=(9, 4.5), marker="o", color="#163a63",
           title="Daily Footfall - January 2024")
plt.ylabel("Visitors")
plt.grid(alpha=0.3)
plt.tight_layout()
plt.savefig("ts_preparation.png", dpi=110)
plt.show()
plt.close("all")`,
            result: `1) pd.to_datetime(days, format='%Y-%m-%d')
DatetimeIndex(['2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04',
               '2024-01-05', '2024-01-06', '2024-01-07', '2024-01-08'],
              dtype='datetime64[us]', freq=None)

2) Attributes of a Timestamp
   Year / Month / Day : 2024 1 1
   Day name            : Monday
   Quarter             : 1
   Weekday number      : 0 (0 = Monday)
   Is month start      : True

3) Series indexed by timestamps
2024-01-01    320
2024-01-02    355
2024-01-03    410
2024-01-04    388
2024-01-05    462
2024-01-06    505
2024-01-07    470
2024-01-08    512
Name: Footfall, dtype: int64

   Index type : DatetimeIndex
   Index dtype: datetime64[us]
   Shape      : (8,)

4) Slicing with .loc[]
   Single day  :
410

   Range 3rd to 6th January :
2024-01-03    410
2024-01-04    388
2024-01-05    462
2024-01-06    505
Name: Footfall, dtype: int64

5) Year, month and day as separate columns
 Year  Month  Day   Weekday  Footfall
 2024      1    1    Monday       320
 2024      1    2   Tuesday       355
 2024      1    3 Wednesday       410
 2024      1    4  Thursday       388
 2024      1    5    Friday       462
 2024      1    6  Saturday       505
 2024      1    7    Sunday       470
 2024      1    8    Monday       512

6) Descriptive statistics of the series
count      8.00
mean     427.75
std       70.53
min      320.00
25%      379.75
50%      436.00
75%      478.75
max      512.00

7) Total footfall : 3422
   Best day        : 2024-01-08 with 512
   Worst day       : 2024-01-01 with 320
   Average per day : 427.75`
        },
        B: {
            key: "B",
            name: "Generating a DatetimeIndex with pandas.date_range",
            label: "Date Ranges",
            topic: "Generating a DatetimeIndex with pandas.date_range - Date Ranges",
            file: "experiment-06-B.py",
            video: "videos/experiments/experiment-06-B.mp4",
            yt: "pandas datetime date_range tz_localize tz_convert Period period_range asfreq to_period resample tutorial",
            note: "date_range accepts either a number of periods or a start and an end date.",
            code: `
# ---------------------------------------------------------------
# Experiment 6B - Date Ranges
# pandas.date_range to build a DatetimeIndex of a given length
# ---------------------------------------------------------------
import pandas as pd

print("1) Daily range - 10 periods")
daily = pd.date_range(start="2024-01-01", periods=10, freq="D")
print(daily)
print("   Length :", len(daily))
print("   freq   :", daily.freq)
print("   dtype  :", daily.dtype)

print("\\n2) Start and end together instead of a number of periods")
print(pd.date_range(start="2024-03-01", end="2024-03-10", freq="D"))

print("\\n3) Every second day")
print(pd.date_range("2024-01-01", periods=6, freq="2D"))

print("\\n4) Business days only (Monday to Friday)")
business = pd.date_range("2024-03-01", periods=6, freq="B")
print(business)
print("   Day names :", [d.day_name()[:3] for d in business])

print("\\n5) Month start and month end")
print("   Month start :", list(pd.date_range("2024-01-01", periods=4, freq="MS")))
print("   Month end   :", list(pd.date_range("2024-01-01", periods=4, freq="ME")))

print("\\n6) Weekly range anchored on Monday")
print(pd.date_range("2024-01-01", periods=4, freq="W-MON"))

print("\\n7) Hourly range - useful for sensor or log data")
print(pd.date_range("2024-01-01 09:00", periods=6, freq="h"))

print("\\n8) Calendar components of the daily range")
table = pd.DataFrame({
    "Stamp"  : daily,
    "Year"    : daily.year,
    "Month"   : daily.month,
    "Day"     : daily.day,
    "Weekday" : daily.day_name(),
    "IsMonthStart": daily.is_month_start,
})
print(table.to_string(index=False))

print("\\n9) The index behaves like a normal array")
print("   daily[0]   :", daily[0].date())
print("   daily[-1]  :", daily[-1].date())
print("   daily[:3]  :", [str(d.date()) for d in daily[:3]])
print("   Shape      :", daily.shape)
print("   Difference :", daily[1] - daily[0])

print("\\n10) Converting the range into a Series of sales values")
values = pd.Series(range(120, 120 + 10 * 15, 15), index=daily, name="Sales")
print(values.to_string())
print("\\n   Highest value :", int(values.max()), "on", values.idxmax().date())`,
            result: `1) Daily range - 10 periods
DatetimeIndex(['2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04',
               '2024-01-05', '2024-01-06', '2024-01-07', '2024-01-08',
               '2024-01-09', '2024-01-10'],
              dtype='datetime64[us]', freq='D')
   Length : 10
   freq   : <Day>
   dtype  : datetime64[us]

2) Start and end together instead of a number of periods
DatetimeIndex(['2024-03-01', '2024-03-02', '2024-03-03', '2024-03-04',
               '2024-03-05', '2024-03-06', '2024-03-07', '2024-03-08',
               '2024-03-09', '2024-03-10'],
              dtype='datetime64[us]', freq='D')

3) Every second day
DatetimeIndex(['2024-01-01', '2024-01-03', '2024-01-05', '2024-01-07',
               '2024-01-09', '2024-01-11'],
              dtype='datetime64[us]', freq='2D')

4) Business days only (Monday to Friday)
DatetimeIndex(['2024-03-01', '2024-03-04', '2024-03-05', '2024-03-06',
               '2024-03-07', '2024-03-08'],
              dtype='datetime64[us]', freq='B')
   Day names : ['Fri', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']

5) Month start and month end
   Month start : [Timestamp('2024-01-01 00:00:00'), Timestamp('2024-02-01 00:00:00'), Timestamp('2024-03-01 00:00:00'), Timestamp('2024-04-01 00:00:00')]
   Month end   : [Timestamp('2024-01-31 00:00:00'), Timestamp('2024-02-29 00:00:00'), Timestamp('2024-03-31 00:00:00'), Timestamp('2024-04-30 00:00:00')]

6) Weekly range anchored on Monday
DatetimeIndex(['2024-01-01', '2024-01-08', '2024-01-15', '2024-01-22'], dtype='datetime64[us]', freq='W-MON')

7) Hourly range - useful for sensor or log data
DatetimeIndex(['2024-01-01 09:00:00', '2024-01-01 10:00:00',
               '2024-01-01 11:00:00', '2024-01-01 12:00:00',
               '2024-01-01 13:00:00', '2024-01-01 14:00:00'],
              dtype='datetime64[us]', freq='h')

8) Calendar components of the daily range
     Stamp  Year  Month  Day   Weekday  IsMonthStart
2024-01-01  2024      1    1    Monday          True
2024-01-02  2024      1    2   Tuesday         False
2024-01-03  2024      1    3 Wednesday         False
2024-01-04  2024      1    4  Thursday         False
2024-01-05  2024      1    5    Friday         False
2024-01-06  2024      1    6  Saturday         False
2024-01-07  2024      1    7    Sunday         False
2024-01-08  2024      1    8    Monday         False
2024-01-09  2024      1    9   Tuesday         False
2024-01-10  2024      1   10 Wednesday         False

9) The index behaves like a normal array
   daily[0]   : 2024-01-01
   daily[-1]  : 2024-01-10
   daily[:3]  : ['2024-01-01', '2024-01-02', '2024-01-03']
   Shape      : (10,)
   Difference : 1 days 00:00:00

10) Converting the range into a Series of sales values
2024-01-01    120
2024-01-02    135
2024-01-03    150
2024-01-04    165
2024-01-05    180
2024-01-06    195
2024-01-07    210
2024-01-08    225
2024-01-09    240
2024-01-10    255
Freq: D

   Highest value : 255 on 2024-01-10`
        },
        C: {
            key: "C",
            name: "Setting, localizing and converting time zones",
            label: "Time Zones",
            topic: "Setting, localizing and converting time zones - Time Zones",
            file: "experiment-06-C.py",
            video: "videos/experiments/experiment-06-C.mp4",
            yt: "pandas datetime date_range tz_localize tz_convert Period period_range asfreq to_period resample tutorial",
            note: "Kolkata and New York differ by 9.5 hours, yet the stored instant is identical in both columns.",
            code: `
# ---------------------------------------------------------------
# Experiment 6C - Time Zones
# Setting a time zone, localizing and converting with tz_convert
# ---------------------------------------------------------------
import pandas as pd

print("1) The same moment written in three different ways")
utc = pd.Timestamp("2024-03-10 09:30:00", tz="UTC")
print("   UTC            :", utc)
print("   Asia/Kolkata   :", utc.tz_convert("Asia/Kolkata"), "(UTC+05:30)")
print("   America/New_York:", utc.tz_convert("America/New_York"), "(UTC-05:00)")
kolkata_offset = utc.tz_convert("Asia/Kolkata").utcoffset()
newyork_offset = utc.tz_convert("America/New_York").utcoffset()
print("   Kolkata offset    : +", kolkata_offset.total_seconds() / 3600, "hours")
print("   New York offset   :", newyork_offset.total_seconds() / 3600, "hours")
print("   Wall clock gap    :",
      (kolkata_offset - newyork_offset).total_seconds() / 3600, "hours")

print("\\n2) date_range built directly in a time zone")
ist_range = pd.date_range("2024-03-10", periods=4, freq="D", tz="Asia/Kolkata")
print(ist_range)
print("   Index tz :", ist_range.tz)

print("\\n3) Converting the whole index with tz_convert()")
ny_range = ist_range.tz_convert("America/New_York")
print(ny_range)

print("\\n4) A naive index has no time zone information")
naive = pd.DatetimeIndex(["2024-03-10 09:30", "2024-03-10 18:45"])
print("   dtype before :", naive.dtype)
print("   tz attribute :", naive.tz)

print("\\n5) tz_localize() attaches a time zone to naive timestamps")
localized = naive.tz_localize("Asia/Kolkata")
print("   dtype after  :", localized.dtype)
print("   tz attribute :", localized.tz)
print(localized)

print("\\n6) Daylight saving problem - localize with explicit rules")
ambiguous = pd.DatetimeIndex(["2024-11-03 01:30", "2024-11-03 02:30"])
safe = ambiguous.tz_localize("America/New_York",
                             ambiguous=True,      # first occurrence
                             nonexistent="shift_forward")
print("   raw      :", list(ambiguous))
print("   localized:", list(safe))
print("   -> ambiguous=True picked the first (DST) occurrence and the")
print("      non existing 02:30 was shifted forward instead of raising an error")

print("\\n7) Combining two different time zones in one DataFrame")
data = pd.DataFrame({
    "IST": pd.date_range("2024-03-10 09:00", periods=3, freq="h", tz="Asia/Kolkata"),
    "UTC": pd.date_range("2024-03-10 09:00", periods=3, freq="h", tz="UTC"),
})
data["NewYork"] = data["IST"].dt.tz_convert("America/New_York")
print(data.to_string(index=False))
print("\\n   The three columns store the SAME moments in three zones,")
print("   so the wall clock values differ while the instant is identical.")

print("\\n8) Converting a Series that carries a time zone")
sales = pd.Series([120, 145, 160],
                  index=pd.date_range("2024-03-10", periods=3, freq="h", tz="UTC"))
sales.index = sales.index.tz_convert("Asia/Kolkata")
print(sales)
print("\\n   Daily total in IST :", int(sales.resample("D").sum().iloc[0]))`,
            result: `1) The same moment written in three different ways
   UTC            : 2024-03-10 09:30:00+00:00
   Asia/Kolkata   : 2024-03-10 15:00:00+05:30 (UTC+05:30)
   America/New_York: 2024-03-10 05:30:00-04:00 (UTC-05:00)
   Kolkata offset    : + 5.5 hours
   New York offset   : -4.0 hours
   Wall clock gap    : 9.5 hours

2) date_range built directly in a time zone
DatetimeIndex(['2024-03-10 00:00:00+05:30', '2024-03-11 00:00:00+05:30',
               '2024-03-12 00:00:00+05:30', '2024-03-13 00:00:00+05:30'],
              dtype='datetime64[us, Asia/Kolkata]', freq='D')
   Index tz : Asia/Kolkata

3) Converting the whole index with tz_convert()
DatetimeIndex(['2024-03-09 13:30:00-05:00', '2024-03-10 14:30:00-04:00',
               '2024-03-11 14:30:00-04:00', '2024-03-12 14:30:00-04:00'],
              dtype='datetime64[us, America/New_York]', freq=None)

4) A naive index has no time zone information
   dtype before : datetime64[us]
   tz attribute : None

5) tz_localize() attaches a time zone to naive timestamps
   dtype after  : datetime64[us, Asia/Kolkata]
   tz attribute : Asia/Kolkata
DatetimeIndex(['2024-03-10 09:30:00+05:30', '2024-03-10 18:45:00+05:30'], dtype='datetime64[us, Asia/Kolkata]', freq=None)

6) Daylight saving problem - localize with explicit rules
   raw      : [Timestamp('2024-11-03 01:30:00'), Timestamp('2024-11-03 02:30:00')]
   localized: [Timestamp('2024-11-03 01:30:00-0400', tz='America/New_York'), Timestamp('2024-11-03 02:30:00-0500', tz='America/New_York')]
   -> ambiguous=True picked the first (DST) occurrence and the
      non existing 02:30 was shifted forward instead of raising an error

7) Combining two different time zones in one DataFrame
                      IST                       UTC                   NewYork
2024-03-10 09:00:00+05:30 2024-03-10 09:00:00+00:00 2024-03-09 22:30:00-05:00
2024-03-10 10:00:00+05:30 2024-03-10 10:00:00+00:00 2024-03-09 23:30:00-05:00
2024-03-10 11:00:00+05:30 2024-03-10 11:00:00+00:00 2024-03-10 00:30:00-05:00

   The three columns store the SAME moments in three zones,
   so the wall clock values differ while the instant is identical.

8) Converting a Series that carries a time zone
2024-03-10 05:30:00+05:30    120
2024-03-10 06:30:00+05:30    145
2024-03-10 07:30:00+05:30    160
Freq: h, dtype: int64

   Daily total in IST : 425`
        },
        D: {
            key: "D",
            name: "Period arithmetic and period_range",
            label: "Period Arithmetic",
            topic: "Period arithmetic and period_range - Period Arithmetic",
            file: "experiment-06-D.py",
            video: "videos/experiments/experiment-06-D.mp4",
            yt: "pandas datetime date_range tz_localize tz_convert Period period_range asfreq to_period resample tutorial",
            note: "Adding an integer to a Period moves whole calendar steps, so p + 3 is the next quarter.",
            code: `
# ---------------------------------------------------------------
# Experiment 6D - Period Arithmetic
# Adding and subtracting periods and building ranges with period_range
# ---------------------------------------------------------------
import calendar
import pandas as pd

p = pd.Period("2024-03", freq="M")
print("1) A monthly Period object")
print("   Period          :", p)
print("   Frequency       :", p.freq)
print("   Quarter year    :", p.qyear, " Quarter :", p.quarter)
print("   Month number    :", p.month, "(", calendar.month_name[p.month], ")")
print("   Start time      :", p.start_time)
print("   End time        :", p.end_time)
print("   Days in month   :", p.days_in_month)

print("\\n2) Adding and subtracting integers")
print("   p + 1  ->", p + 1)
print("   p + 10 ->", p + 10)
print("   p - 1  ->", p - 1)
print("   p - 14 ->", p - 14)

print("\\n3) Two periods that fall in the same month are equal")
print("   pd.Period('2024-03', 'M') == pd.Period('2024-03-18', 'M') ->",
      pd.Period("2024-03", "M") == pd.Period("2024-03-18", "M"))

print("\\n4) pd.period_range() for monthly periods")
months = pd.period_range("2024-01", periods=6, freq="M")
print(months)
print("   Length :", len(months))

print("\\n5) Quarter and year ranges")
print("   Quarters :", list(pd.period_range("2024Q1", periods=4, freq="Q")))
print("   Years    :", list(pd.period_range("2022", periods=4, freq="Y")))

print("\\n6) Daily periods")
days = pd.period_range("2024-03-01", periods=7, freq="D")
print(days)

print("\\n7) Arithmetic on a whole PeriodIndex")
shifted = months + 6
print("   Original :", [str(m) for m in months])
print("   +6 months:", [str(m) for m in shifted])

print("\\n8) A Series indexed by periods")
revenue = pd.Series([820, 910, 870, 1010, 1180, 1090], index=months, name="Revenue")
print(revenue)
print("\\n   Total revenue      :", int(revenue.sum()))
print("   Average per month  :", round(revenue.mean(), 2))
print("   Best month         :", revenue.idxmax(), "with", int(revenue.max()))
print("   Worst month        :", revenue.idxmin(), "with", int(revenue.min()))

print("\\n9) Shifting the values forward by two months")
print(pd.DataFrame({
    "Revenue": revenue,
    "Shifted +2": revenue.shift(2),
}).to_string())`,
            result: `1) A monthly Period object
   Period          : 2024-03
   Frequency       : <MonthEnd>
   Quarter year    : 2024  Quarter : 1
   Month number    : 3 ( March )
   Start time      : 2024-03-01 00:00:00
   End time        : 2024-03-31 23:59:59.999999
   Days in month   : 31

2) Adding and subtracting integers
   p + 1  -> 2024-04
   p + 10 -> 2025-01
   p - 1  -> 2024-02
   p - 14 -> 2023-01

3) Two periods that fall in the same month are equal
   pd.Period('2024-03', 'M') == pd.Period('2024-03-18', 'M') -> True

4) pd.period_range() for monthly periods
PeriodIndex(['2024-01', '2024-02', '2024-03', '2024-04', '2024-05', '2024-06'], dtype='period[M]')
   Length : 6

5) Quarter and year ranges
   Quarters : [Period('2024Q1', 'Q-DEC'), Period('2024Q2', 'Q-DEC'), Period('2024Q3', 'Q-DEC'), Period('2024Q4', 'Q-DEC')]
   Years    : [Period('2022', 'Y-DEC'), Period('2023', 'Y-DEC'), Period('2024', 'Y-DEC'), Period('2025', 'Y-DEC')]

6) Daily periods
PeriodIndex(['2024-03-01', '2024-03-02', '2024-03-03', '2024-03-04',
             '2024-03-05', '2024-03-06', '2024-03-07'],
            dtype='period[D]')

7) Arithmetic on a whole PeriodIndex
   Original : ['2024-01', '2024-02', '2024-03', '2024-04', '2024-05', '2024-06']
   +6 months: ['2024-07', '2024-08', '2024-09', '2024-10', '2024-11', '2024-12']

8) A Series indexed by periods
2024-01     820
2024-02     910
2024-03     870
2024-04    1010
2024-05    1180
2024-06    1090
Freq: M, Name: Revenue, dtype: int64

   Total revenue      : 5880
   Average per month  : 980.0
   Best month         : 2024-05 with 1180
   Worst month        : 2024-01 with 820

9) Shifting the values forward by two months
         Revenue  Shifted +2
2024-01      820         NaN
2024-02      910         NaN
2024-03      870       820.0
2024-04     1010       910.0
2024-05     1180       870.0
2024-06     1090      1010.0`
        },
        E: {
            key: "E",
            name: "Converting periods to another frequency with asfreq",
            label: "Frequency Conversion",
            topic: "Converting periods to another frequency with asfreq - Frequency Conversion",
            file: "experiment-06-E.py",
            video: "videos/experiments/experiment-06-E.mp4",
            yt: "pandas datetime date_range tz_localize tz_convert Period period_range asfreq to_period resample tutorial",
            note: "asfreq changes the label only; resample is the method that aggregates the values.",
            code: `
# ---------------------------------------------------------------
# Experiment 6E - Frequency Conversion
# Converting Periods and PeriodIndex with the asfreq method
# ---------------------------------------------------------------
import pandas as pd

pi = pd.period_range("2024-01", periods=6, freq="M")
print("1) Monthly PeriodIndex")
print(pi)
print("   dtype :", pi.dtype)

print("\\n2) asfreq('D') expands every month into its first day")
daily = pi.asfreq("D", how="start")
print(daily)

print("\\n3) asfreq('Q') rolls the months up into quarters")
print(pi.asfreq("Q"))

print("\\n4) asfreq('Y') rolls them up into years")
print(pi.asfreq("Y"))

print("\\n5) A monthly Series resampled to quarters")
sales = pd.Series([120, 145, 160, 175, 190, 205], index=pi, name="Sales")
print(sales)
print("\\n   Monthly -> Quarterly :")
print(sales.asfreq("Q"))
print("\\n   Monthly -> Yearly :")
print(sales.asfreq("Y"))

print("\\n6) Daily periods converted to hours (asfreq expands the index)")
daily_pi = pd.period_range("2024-03-01", periods=2, freq="D")
print("   Days  :", list(daily_pi))
print("   Hours :", list(daily_pi.asfreq("h", how="start")))

print("\\n7) A DataFrame with a PeriodIndex converted in one call")
frame = pd.DataFrame({
    "Internal": [18, 19, 17, 20, 21, 20],
    "External": [72, 75, 70, 78, 80, 77],
}, index=pi)
print(frame)
print("\\n   frame.asfreq('Q') :")
print(frame.asfreq("Q"))

print("\\n8) asfreq relabels the index, it never changes the row count")
print("   Rows before           :", len(sales))
print("   Rows after asfreq('Q'):", len(sales.asfreq("Q")))
print("   Unique labels after asfreq('Q') :",
      [str(p) for p in sales.asfreq("Q").index.unique()])
print("   Unique labels after asfreq('Y') :",
      [str(p) for p in sales.asfreq("Y").index.unique()])

print("\\n9) Real aggregation needs resample() or groupby()")
print("   sales.resample('Q').sum() :")
print(sales.resample("Q").sum().to_string())
print("\\n   sales.groupby(level=0).sum() :")
print(sales.groupby(level=0).sum().to_string())
print("\\n   -> one value per quarter instead of one label per month")`,
            result: `1) Monthly PeriodIndex
PeriodIndex(['2024-01', '2024-02', '2024-03', '2024-04', '2024-05', '2024-06'], dtype='period[M]')
   dtype : period[M]

2) asfreq('D') expands every month into its first day
PeriodIndex(['2024-01-01', '2024-02-01', '2024-03-01', '2024-04-01',
             '2024-05-01', '2024-06-01'],
            dtype='period[D]')

3) asfreq('Q') rolls the months up into quarters
PeriodIndex(['2024Q1', '2024Q1', '2024Q1', '2024Q2', '2024Q2', '2024Q2'], dtype='period[Q-DEC]')

4) asfreq('Y') rolls them up into years
PeriodIndex(['2024', '2024', '2024', '2024', '2024', '2024'], dtype='period[Y-DEC]')

5) A monthly Series resampled to quarters
2024-01    120
2024-02    145
2024-03    160
2024-04    175
2024-05    190
2024-06    205
Freq: M, Name: Sales, dtype: int64

   Monthly -> Quarterly :
2024Q1    120
2024Q1    145
2024Q1    160
2024Q2    175
2024Q2    190
2024Q2    205
Freq: Q-DEC, Name: Sales, dtype: int64

   Monthly -> Yearly :
2024    120
2024    145
2024    160
2024    175
2024    190
2024    205
Freq: Y-DEC, Name: Sales, dtype: int64

6) Daily periods converted to hours (asfreq expands the index)
   Days  : [Period('2024-03-01', 'D'), Period('2024-03-02', 'D')]
   Hours : [Period('2024-03-01 00:00', 'h'), Period('2024-03-02 00:00', 'h')]

7) A DataFrame with a PeriodIndex converted in one call
         Internal  External
2024-01        18        72
2024-02        19        75
2024-03        17        70
2024-04        20        78
2024-05        21        80
2024-06        20        77

   frame.asfreq('Q') :
        Internal  External
2024Q1        18        72
2024Q1        19        75
2024Q1        17        70
2024Q2        20        78
2024Q2        21        80
2024Q2        20        77

8) asfreq relabels the index, it never changes the row count
   Rows before           : 6
   Rows after asfreq('Q'): 6
   Unique labels after asfreq('Q') : ['2024Q1', '2024Q2']
   Unique labels after asfreq('Y') : ['2024']

9) Real aggregation needs resample() or groupby()
   sales.resample('Q').sum() :
2024Q1    425
2024Q2    570
Freq: Q-DEC

   sales.groupby(level=0).sum() :
2024-01    120
2024-02    145
2024-03    160
2024-04    175
2024-05    190
2024-06    205
Freq: M

   -> one value per quarter instead of one label per month`
        },
        F: {
            key: "F",
            name: "Converting timestamps to periods with to_period",
            label: "Timestamp to Period",
            topic: "Converting timestamps to periods with to_period - Timestamp to Period",
            file: "experiment-06-F.py",
            video: "videos/experiments/experiment-06-F.mp4",
            yt: "pandas datetime date_range tz_localize tz_convert Period period_range asfreq to_period resample tutorial",
            note: "to_period and groupby(to_period) produce the same grouping, which is a useful cross check.",
            code: `
# ---------------------------------------------------------------
# Experiment 6F - Timestamp to Period
# Converting Series and DataFrames with the to_period method
# ---------------------------------------------------------------
import pandas as pd

idx = pd.date_range("2024-01-01", periods=10, freq="D")
sales = pd.Series([120, 135, 150, 148, 160, 175, 182, 190, 205, 198],
                  index=idx, name="Sales")

print("1) Original Series indexed by timestamps")
print(sales.head(3).to_string())
print("   index dtype :", sales.index.dtype)

print("\\n2) to_period('D') - one period per day")
print(sales.to_period("D").head(3).to_string())

print("\\n3) to_period('M') - all days of January collapse into 2024-01")
monthly = sales.to_period("M")
print(monthly.head(3).to_string())
print("   index dtype :", monthly.index.dtype)
print("   unique periods :", [str(p) for p in monthly.unique()])

print("\\n4) The datetime parts are still reachable")
first = monthly.index[0]
print("   Year / Month   :", first.year, first.month)
print("   Start / End    :", first.start_time, "->", first.end_time)

print("\\n5) to_period('Q') and to_period('Y')")
print("   Quarters :", [str(p) for p in sales.to_period("Q").unique()])
print("   Years    :", [str(p) for p in sales.to_period("Y").unique()])

print("\\n6) A DataFrame converts with a single call")
frame = pd.DataFrame({
    "Internal": [18, 19, 17, 20, 21, 20, 22, 19, 21, 23],
    "External": [72, 75, 70, 78, 80, 77, 82, 74, 79, 81],
}, index=idx)
print(frame.head(3).to_string())
print("\\n   frame.to_period('M') :")
print(frame.to_period("M").head(3).to_string())

print("\\n7) to_period() and groupby() give the same grouping")
by_period = sales.groupby(sales.index.to_period("M")).sum()
print("   sales.to_period('M') repeated :")
print(monthly.to_string())
print("\\n   groupby(to_period('M')).sum() :")
print(by_period.to_string())
collapsed = monthly.groupby(level=0).sum()
print("\\n   monthly grouped and summed :")
print(collapsed.to_string())
print("\\n   Same totals :",
      list(collapsed.round(6).values) == list(by_period.round(6).values))

print("\\n8) Period arithmetic now works on the data")
print("   Monthly total moved two months ahead :")
print(monthly.shift(2).to_string())`,
            result: `1) Original Series indexed by timestamps
2024-01-01    120
2024-01-02    135
2024-01-03    150
Freq: D
   index dtype : datetime64[us]

2) to_period('D') - one period per day
2024-01-01    120
2024-01-02    135
2024-01-03    150
Freq: D

3) to_period('M') - all days of January collapse into 2024-01
2024-01    120
2024-01    135
2024-01    150
Freq: M
   index dtype : period[M]
   unique periods : ['120', '135', '150', '148', '160', '175', '182', '190', '205', '198']

4) The datetime parts are still reachable
   Year / Month   : 2024 1
   Start / End    : 2024-01-01 00:00:00 -> 2024-01-31 23:59:59.999999

5) to_period('Q') and to_period('Y')
   Quarters : ['120', '135', '150', '148', '160', '175', '182', '190', '205', '198']
   Years    : ['120', '135', '150', '148', '160', '175', '182', '190', '205', '198']

6) A DataFrame converts with a single call
            Internal  External
2024-01-01        18        72
2024-01-02        19        75
2024-01-03        17        70

   frame.to_period('M') :
         Internal  External
2024-01        18        72
2024-01        19        75
2024-01        17        70

7) to_period() and groupby() give the same grouping
   sales.to_period('M') repeated :
2024-01    120
2024-01    135
2024-01    150
2024-01    148
2024-01    160
2024-01    175
2024-01    182
2024-01    190
2024-01    205
2024-01    198
Freq: M

   groupby(to_period('M')).sum() :
2024-01    1663
Freq: M

   monthly grouped and summed :
2024-01    1663
Freq: M

   Same totals : True

8) Period arithmetic now works on the data
   Monthly total moved two months ahead :
2024-01      NaN
2024-01      NaN
2024-01    120.0
2024-01    135.0
2024-01    150.0
2024-01    148.0
2024-01    160.0
2024-01    175.0
2024-01    182.0
2024-01    190.0
Freq: M`
        },
        G: {
            key: "G",
            name: "Resampling, downsampling and upsampling",
            label: "Resampling",
            topic: "Resampling, downsampling and upsampling - Resampling",
            file: "experiment-06-G.py",
            video: "videos/experiments/experiment-06-G.mp4",
            yt: "pandas datetime date_range tz_localize tz_convert Period period_range asfreq to_period resample tutorial",
            note: "192 hourly points became 8 daily totals, and 4 daily points became 13 interpolated six hour points.",
            code: `
# ---------------------------------------------------------------
# Experiment 6G - Resampling
# Downsampling and upsampling a time series
# ---------------------------------------------------------------
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# one day of hourly orders, repeated with a small daily growth
daily_pattern = np.array([120, 118, 125, 140, 165, 190, 210, 205,
                          198, 210, 225, 240, 235, 228,
                          240, 255, 270, 265, 258, 270, 285,
                          300, 295, 310])
days = 8
idx = pd.date_range("2024-01-01", periods=24 * days, freq="h")
growth = np.repeat(np.arange(1, days + 1) * 0.06, 24)
values = (np.tile(daily_pattern, days) * (1 + growth)).round(1)

hourly = pd.Series(values, index=idx, name="Orders")
print("1) Hourly series")
print(hourly.head(6).to_string())
print("   Observations :", len(hourly), "hours =", len(hourly) // 24, "days")

print("\\n2) DOWNSAMPLING - hourly to 6 hour blocks")
six = hourly.resample("6h").agg({"Orders": "sum"})
print(six.head(4).to_string())
print("   ...")
print("   Observations :", len(hourly), "->", len(six), "six hour blocks")

print("\\n3) DOWNSAMPLING - hourly to daily")
daily = hourly.resample("D").sum()
print(daily)
print("\\n   Days :", daily.shape[0])
print("   Highest day :", daily.idxmax(), "with", int(daily.max()))
print("   Lowest day  :", daily.idxmin(), "with", int(daily.min()))
print("   Average     :", round(daily.mean(), 2))

print("\\n4) DOWNSAMPLING with several aggregations at once")
ohlc = pd.DataFrame({
    "Open":  hourly.resample("D").first(),
    "High":  hourly.resample("D").max(),
    "Low":   hourly.resample("D").min(),
    "Close": hourly.resample("D").last(),
})
print(ohlc)
print("\\n   Range of the last day :", int(ohlc['High'].iloc[-1] - ohlc['Low'].iloc[-1]))

print("\\n5) Weekly and monthly views")
print(hourly.resample("W").mean().round(2).to_string())

print("\\n6) UPSAMPLING - daily data expanded to every 6 hours")
daily_series = pd.Series([310.0, 425.0, 398.0, 512.0],
                         index=pd.date_range("2024-03-01", periods=4, freq="D"),
                         name="Orders")
upsampled = daily_series.resample("6h").interpolate()
print(upsampled.head(9).to_string())
print("   Observations :", len(daily_series), "->", len(upsampled))
print("\\n   First value of each day :", list(upsampled.resample("D").first().values))
print("   Original daily values    :", list(daily_series.values))
print("   Original values preserved:",
      list(upsampled.resample("D").first().round(1)) == list(daily_series.values))

print("\\n7) Comparing the two directions")
print("   Downsample", len(hourly), "hourly points to days  :", len(hourly.resample("D").sum()), "rows")
print("   Upsample 4 daily points to 6 hour step:", len(upsampled), "rows")
print("   Downsample aggregates, upsample interpolates.")

fig, axes = plt.subplots(2, 1, figsize=(11, 8))

axes[0].plot(hourly.index[:48], hourly.values[:48], marker="o", ms=4,
             color="#163a63", label="hourly values (first 2 days)")
axes[0].set_title("Downsampling - hourly orders grouped into larger blocks")
axes[0].set_ylabel("Orders")
axes[0].legend()
axes[0].grid(alpha=0.3)

axes[1].plot(daily_series.index, daily_series.values, marker="s",
             color="#163a63", linewidth=2, label="daily values (original)")
axes[1].plot(upsampled.index, upsampled.values, marker=".", linestyle="--",
             color="#c9a227", label="6 hour step (interpolated)")
axes[1].set_title("Upsampling - daily values expanded to a 6 hour step")
axes[1].set_ylabel("Orders")
axes[1].legend()
axes[1].grid(alpha=0.3)

plt.tight_layout()
plt.savefig("ts_resampling.png", dpi=110)
plt.show()
plt.close("all")`,
            result: `1) Hourly series
2024-01-01 00:00:00    127.2
2024-01-01 01:00:00    125.1
2024-01-01 02:00:00    132.5
2024-01-01 03:00:00    148.4
2024-01-01 04:00:00    174.9
2024-01-01 05:00:00    201.4
Freq: h
   Observations : 192 hours = 8 days

2) DOWNSAMPLING - hourly to 6 hour blocks
                     Orders
2024-01-01 00:00:00   909.5
2024-01-01 06:00:00  1365.3
2024-01-01 12:00:00  1582.6
2024-01-01 18:00:00  1821.1
   ...
   Observations : 192 -> 32 six hour blocks

3) DOWNSAMPLING - hourly to daily
2024-01-01    5678.5
2024-01-02    6000.0
2024-01-03    6321.1
2024-01-04    6642.6
2024-01-05    6964.1
2024-01-06    7285.6
2024-01-07    7607.1
2024-01-08    7928.2
Freq: D, Name: Orders, dtype: float64

   Days : 8
   Highest day : 2024-01-08 00:00:00 with 7928
   Lowest day  : 2024-01-01 00:00:00 with 5678
   Average     : 6803.4

4) DOWNSAMPLING with several aggregations at once
             Open   High    Low  Close
2024-01-01  127.2  328.6  125.1  328.6
2024-01-02  134.4  347.2  132.2  347.2
2024-01-03  141.6  365.8  139.2  365.8
2024-01-04  148.8  384.4  146.3  384.4
2024-01-05  156.0  403.0  153.4  403.0
2024-01-06  163.2  421.6  160.5  421.6
2024-01-07  170.4  440.2  167.6  440.2
2024-01-08  177.6  458.8  174.6  458.8

   Range of the last day : 284

5) Weekly and monthly views
2024-01-07    276.78
2024-01-14    330.34
Freq: W-SUN

6) UPSAMPLING - daily data expanded to every 6 hours
2024-03-01 00:00:00    310.00
2024-03-01 06:00:00    338.75
2024-03-01 12:00:00    367.50
2024-03-01 18:00:00    396.25
2024-03-02 00:00:00    425.00
2024-03-02 06:00:00    418.25
2024-03-02 12:00:00    411.50
2024-03-02 18:00:00    404.75
2024-03-03 00:00:00    398.00
Freq: 6h
   Observations : 4 -> 13

   First value of each day : [np.float64(310.0), np.float64(425.0), np.float64(398.0), np.float64(512.0)]
   Original daily values    : [np.float64(310.0), np.float64(425.0), np.float64(398.0), np.float64(512.0)]
   Original values preserved: True

7) Comparing the two directions
   Downsample 192 hourly points to days  : 8 rows
   Upsample 4 daily points to 6 hour step: 13 rows
   Downsample aggregates, upsample interpolates.`
        }
    }
};


/* =========================================================
   4. ROUTER + PAGES
   -------------------------------------------------------------
   The site is static, so routing runs on the hash. Every screen
   is a real page - nothing opens in a popup any more.
     #/home  #/experiments  #/modules  #/projects
     #/resources  #/tools  #/lab
     #/exp/3            experiment overview
     #/sub/3/A          sub-experiment
     #/module/2         module notes
     #/topic/2/5        one topic
   ========================================================= */
const PAGES = ["home", "experiments", "modules", "projects", "resources", "tools", "lab"];

/* Navigates without reloading the page. */
function go(path) {
    const target = "#" + (path.charAt(0) === "/" ? path : "/" + path);
    if (location.hash === target) renderRoute();
    else location.hash = target;
}

/* Reads the hash and paints the matching screen. */
function renderRoute() {
    const parts = String(location.hash || "").replace(/^#\/?/, "").split("/").filter(Boolean);
    const head = parts[0];

    if (head === "exp") return openOverview(parts[1]);
    if (head === "sub") return openSub(parts[1], parts[2]);
    if (head === "module") return openModule(parts[1]);
    if (head === "topic") return openTopic(parts[1], parts[2]);

    showPage(PAGES.indexOf(head) === -1 ? "home" : head);
}

/* Shows one of the seven main pages. Passing null hides them all,
   which is what happens while a detail screen is on screen. */
function showPage(name) {
    const page = PAGES.indexOf(name) === -1 ? null : name;

    document.querySelectorAll("[data-page-section]").forEach(function (section) {
        section.hidden = section.getAttribute("data-page-section") !== page;
    });

    document.querySelectorAll(".nav-btn").forEach(function (btn) {
        btn.classList.toggle("active", Boolean(page) && btn.dataset.page === page);
    });

    const view = document.getElementById("view");
    if (view) view.hidden = page !== null;

    scrollToTop();
}

function scrollToTop() {
    if (typeof window.scrollTo === "function") {
        try { window.scrollTo({ top: 0, behavior: "smooth" }); }
        catch (err) { /* older browsers only accept the short form */ }
    }
}

/* =========================================================
   4b. FULL SCREEN DETAIL VIEW
   -------------------------------------------------------------
   Every experiment, sub-experiment, module and topic is painted
   here, below a bar that always carries the way back.
   ========================================================= */
let viewReady = function () { };   /* replaced further down by the lab wiring */

function renderView(html, options) {
    const view = document.getElementById("view");
    const body = document.getElementById("viewBody");
    const crumb = document.getElementById("viewCrumb");
    const jump = document.getElementById("viewJump");
    const backText = document.getElementById("viewBackText");
    if (!view || !body) return;

    const opts = options || {};

    body.innerHTML = html;
    if (crumb) crumb.innerHTML = opts.crumb || "";
    if (jump) jump.innerHTML = opts.jump || "";
    if (backText) backText.textContent = opts.back || "Back";
    view.setAttribute("data-back", opts.backTo || "");

    showPage(null);
    scrollToTop();
    guardVideos();
    viewReady();
}

/* ---------- MODULES page ---------- */
function moduleCardHtml(mod) {
    const topics = mod.topics.map(function (t) {
        return "<li>" + escapeHtml(t.t) + "</li>";
    }).join("");

    const notes = getModuleNotes(mod.no);

    return "" +
        '<article class="module-card">' +
        '   <p class="module-no">MODULE ' + escapeHtml(mod.no) + "</p>" +
        '   <p class="module-tag">' + escapeHtml(mod.tagline) + "</p>" +
        '   <h3 class="module-title">' + escapeHtml(mod.title) + "</h3>" +
        '   <p class="module-desc">' + escapeHtml(mod.desc) + "</p>" +
        '   <p class="module-outcome">' + escapeHtml(mod.outcome) + "</p>" +
        (notes.length
            ? '   <p class="module-notes">' + notes.length + " long note" + (notes.length === 1 ? "" : "s") +
              " with flowcharts</p>"
            : "") +
        '   <ul class="module-topics">' + topics + "</ul>" +
        '   <div class="module-actions">' +
        '       <button type="button" class="btn-overview" onclick="go(\'/module/' + Number(mod.no) + '\')">' +
        "           Read Module <span class=\"btn-arrow\">&rarr;</span>" +
        "       </button>" +
        "   </div>" +
        "</article>";
}

function renderModules() {
    const grid = document.getElementById("moduleGrid");
    if (!grid || typeof modules === "undefined") return;
    grid.innerHTML = modules.map(moduleCardHtml).join("");
}

/* ---------- module page (full screen) ---------- */
function getModuleNotes(moduleNo) {
    const notes = typeof moduleNotes === "undefined" ? [] : moduleNotes;
    const found = notes.filter(function (n) { return String(n.module) === String(moduleNo); })[0];
    return found ? found.pages || [] : [];
}

/* One long note: paragraphs, key points, a flowchart, an example
   and the takeaways at the end. */
function modulePageHtml(page, index, total) {
    const body = (page.body || []).map(function (text) {
        return "<p>" + escapeHtml(text) + "</p>";
    }).join("");

    const points = (page.points || []).length
        ? '<div class="note-points">' +
          (page.points || []).map(function (point) {
              return '<p class="note-point"><span class="np-mark">&#9679;</span>' + escapeHtml(point) + "</p>";
          }).join("") +
          "</div>"
        : "";

    const flow = page.flow ? flowchartHtml(page.flow) : "";

    const example = page.example ? "" +
        '<div class="note-example">' +
        '   <h4 class="note-example-title">' + escapeHtml(page.example.title || "Worked example") + "</h4>" +
        '   <pre class="note-code"><code>' + escapeHtml(page.example.code || "") + "</code></pre>" +
        (page.example.note ? '   <p class="note-example-note">' + escapeHtml(page.example.note) + "</p>" : "") +
        "</div>"
        : "";

    const table = page.table ? tableHtml(page.table) : "";

    const takeaways = (page.takeaways || []).length
        ? '<div class="note-takeaways">' +
          "   <h4>Takeaways</h4>" +
          "   <ul>" +
          (page.takeaways || []).map(function (t) { return "<li>" + escapeHtml(t) + "</li>"; }).join("") +
          "   </ul>" +
          "</div>"
        : "";

    return "" +
        '<article class="note" id="note-' + (index + 1) + '">' +
        '   <p class="note-kicker">Note ' + (index + 1) + " of " + total + "</p>" +
        '   <h2 class="note-title">' + escapeHtml(page.title || "") + "</h2>" +
        (page.lead ? '   <p class="note-lead">' + escapeHtml(page.lead) + "</p>" : "") +
        '   <div class="note-body">' + body + "</div>" +
        points + flow + table + example + takeaways +
        "</article>";
}

/* Flowchart: numbered boxes joined by arrows, exactly in the order
   the steps are listed in the data file. */
function flowchartHtml(flow) {
    const steps = (flow.steps || []).map(function (step, i) {
        const label = typeof step === "string" ? step : step[0];
        const tag = typeof step === "string" ? "" : step[1];
        const note = typeof step === "string" ? "" : step[2];
        const box = "" +
            '<div class="flow-node">' +
            '   <span class="flow-no">' + (i + 1) + "</span>" +
            '   <span class="flow-label">' + escapeHtml(label) + "</span>" +
            (tag ? '   <span class="flow-tag">' + escapeHtml(tag) + "</span>" : "") +
            (note ? '   <span class="flow-note">' + escapeHtml(note) + "</span>" : "") +
            "</div>";
        if (i === 0) return box;
        return '<span class="flow-arrow">&rarr;</span>' + box;
    }).join("");

    if (!steps) return "";

    return "" +
        '<div class="note-flow">' +
        '   <h4 class="note-flow-title">' + escapeHtml(flow.title || "Flow") + "</h4>" +
        '   <div class="flow">' + steps + "</div>" +
        (flow.caption ? '   <p class="flow-caption">' + escapeHtml(flow.caption) + "</p>" : "") +
        "</div>";
}

function tableHtml(table) {
    const head = (table.head || []).map(function (cell) { return "<th>" + escapeHtml(cell) + "</th>"; }).join("");
    const rows = (table.rows || []).map(function (row) {
        return "<tr>" + row.map(function (cell) { return "<td>" + escapeHtml(cell) + "</td>"; }).join("") + "</tr>";
    }).join("");

    return "" +
        '<div class="note-table">' +
        '   <table><thead><tr>' + head + "</tr></thead><tbody>" + rows + "</tbody></table>" +
        (table.caption ? '   <p class="flow-caption">' + escapeHtml(table.caption) + "</p>" : "") +
        "</div>";
}

function moduleJumpHtml(list, found) {
    const position = list.indexOf(found);
    const prev = position > 0 ? list[position - 1] : null;
    const next = position > -1 && position < list.length - 1 ? list[position + 1] : null;

    return "" +
        (prev ? '<button type="button" class="view-step" onclick="go(\'/module/' + prev.no + '\')">&larr; Module ' + escapeHtml(prev.no) + "</button>" : "") +
        (next ? '<button type="button" class="view-step" onclick="go(\'/module/' + next.no + '\')">Module ' + escapeHtml(next.no) + " &rarr;</button>" : "");
}

function openModule(moduleNo) {
    const list = typeof modules === "undefined" ? [] : modules;
    const found = list.filter(function (m) { return Number(m.no) === Number(moduleNo); })[0];
    if (!found) {
        toast("That module is not available yet.");
        return go("/modules");
    }

    /* the seven topics keep their original order */
    const items = found.topics.map(function (t, i) {
        return "" +
            '<button type="button" class="topic-item" onclick="go(\'/topic/' + Number(found.no) + "/" + (i + 1) + '\')">' +
            '   <span class="topic-idx">TOPIC ' + (i + 1) + "</span>" +
            '   <span class="topic-name">' + escapeHtml(t.t) + "</span>" +
            "</button>";
    }).join("");

    const notes = getModuleNotes(found.no);
    const noteHtml = notes.length
        ? '<div class="notes">' +
          notes.map(function (page, i) { return modulePageHtml(page, i, notes.length); }).join("") +
          "</div>"
        : '<div class="notice">The long notes for this module are being written.</div>';

    const html = "" +
        '<div class="d-head">' +
        '   <p class="d-eyebrow">Module ' + escapeHtml(found.no) + " of " + modules.length + "</p>" +
        '   <h2 class="d-title">' + escapeHtml(found.title) + "</h2>" +
        '   <p class="d-desc">' + escapeHtml(found.desc) + "</p>" +
        '   <div class="d-badges">' +
        '       <span class="d-badge">Topics <b>' + found.topics.length + "</b></span>" +
        (notes.length ? '       <span class="d-badge">Long notes <b>' + notes.length + "</b></span>" : "") +
        '       <span class="d-badge">Track <b>' + escapeHtml(found.tagline) + "</b></span>" +
        "   </div>" +
        "</div>" +
        '<div class="panel">' +
        '   <h3 class="panel-title">Learning Outcome</h3>' +
        "   <p>" + escapeHtml(found.outcome) + "</p>" +
        "</div>" +
        noteHtml +
        '<div class="panel">' +
        '   <h3 class="panel-title">Topics in this module</h3>' +
        '   <div class="topic-list">' + items + "</div>" +
        "</div>" +
        '<div class="d-nav">' +
        '   <button type="button" class="btn-ghost" onclick="go(\'/modules\')">&larr; All modules</button>' +
        '   <button type="button" class="btn-ghost" onclick="go(\'/lab\')">Open the Python lab</button>' +
        "</div>";

    renderView(html, {
        crumb: 'Modules <span class="sep">/</span> Module ' + escapeHtml(found.no),
        back: "All modules",
        backTo: "/modules",
        jump: moduleJumpHtml(list, found)
    });
}

/* ---------- single topic ---------- */
function openTopic(moduleNo, topicIndex) {
    const list = typeof modules === "undefined" ? [] : modules;
    const mod = list.filter(function (m) { return Number(m.no) === Number(moduleNo); })[0];
    if (!mod) { toast("That module is not available yet."); return go("/modules"); }

    const index = Number(topicIndex);
    const t = mod.topics[index - 1];
    if (!t) { toast("That topic is not available yet."); return go("/module/" + mod.no); }

    const points = (t.p || []).map(function (p) {
        return "<li>" + escapeHtml(p) + "</li>";
    }).join("");

    const exp = t.exp ? getExperiment(t.exp) : null;
    const related = exp ? "" +
        '<div class="link-row">' +
        '   <button type="button" class="btn-link" onclick="go(\'/exp/' + Number(exp.id) + '\')">' +
        '       <span class="gl">&#9679;</span> Related experiment ' + escapeHtml(exp.no) +
        "   </button>" +
        "</div>" : "";

    /* the seven topics keep their original order */
    const topicSteps = mod.topics.map(function (item, i) {
        return '<button type="button" class="sub-step' + (i + 1 === index ? " active" : "") + '"' +
            ' onclick="go(\'/topic/' + mod.no + "/" + (i + 1) + '\')"' +
            ">" + (i + 1) + "</button>";
    }).join("");

    const html = "" +
        '<div class="d-head">' +
        '   <p class="d-eyebrow">Module ' + escapeHtml(mod.no) + " &middot; Topic " + escapeHtml(index) + " of " + mod.topics.length + "</p>" +
        '   <h2 class="d-title">' + escapeHtml(t.t) + "</h2>" +
        '   <div class="d-badges">' +
        '       <span class="d-badge">Module <b>' + escapeHtml(mod.title) + "</b></span>" +
        "   </div>" +
        "</div>" +
        related +
        '<div class="panel">' +
        '   <h3 class="panel-title">What this topic covers</h3>' +
        '   <p class="topic-body">' + escapeHtml(t.d) + "</p>" +
        "</div>" +
        '<div class="panel">' +
        '   <h3 class="panel-title">Key Points</h3>' +
        '   <ul class="topic-points">' + (points || "<li>Notes for this topic are coming soon.</li>") + "</ul>" +
        "</div>" +
        '<div class="panel">' +
        '   <h3 class="panel-title">Read the module notes</h3>' +
        '   <p>The long notes of this module explain the idea in plain language, with flowcharts and worked examples.</p>' +
        '   <button type="button" class="btn-overview" onclick="go(\'/module/' + mod.no + "\')\">" +
        "       Read module " + escapeHtml(mod.no) + " <span class=\"btn-arrow\">&rarr;</span>" +
        "   </button>" +
        "</div>" +
        '<div class="d-nav">' +
        '   <div class="sub-steps">' + topicSteps + "</div>" +
        '   <button type="button" class="btn-ghost" onclick="go(\'/module/' + mod.no + '\')">&larr; Back to module</button>' +
        "</div>";

    renderView(html, {
        crumb: 'Modules <span class="sep">/</span> Module ' + escapeHtml(mod.no) +
               ' <span class="sep">/</span> Topic ' + escapeHtml(index),
        back: "Module " + mod.no,
        backTo: "/module/" + mod.no
    });
}

/* ---------- TOOLS page ---------- */
function toolCardHtml(tool) {
    const host = String(tool.u || "").replace(/^https?:\/\//, "").replace(/\/$/, "");
    return "" +
        '<a class="tool-card" href="' + safeUrl(tool.u) + '" target="_blank" rel="noopener">' +
        '   <span class="tool-name">' + escapeHtml(tool.n) +
        '       <span class="arrow">&#8599;</span></span>' +
        '   <p class="tool-use">' + escapeHtml(tool.d) + "</p>" +
        '   <span class="tool-site">' + escapeHtml(host) + "</span>" +
        "</a>";
}

function renderTools() {
    const grid = document.getElementById("toolGrid");
    if (!grid || typeof tools === "undefined") return;
    grid.innerHTML = tools.map(function (group) {
        const cards = group.items.map(toolCardHtml).join("");
        return "" +
            '<section class="tool-group">' +
            '   <div class="tool-group-head">' +
            '       <h3>' + escapeHtml(group.group) + "</h3>" +
            '       <span class="tool-count">' + group.items.length + " tools</span>" +
            "   </div>" +
            '   <div class="tool-grid">' + cards + "</div>" +
            "</section>";
    }).join("");
}

/* ---------- RESOURCES page ---------- */
function renderResources() {
    const grid = document.getElementById("resourceGrid");
    if (!grid || typeof resources === "undefined") return;
    grid.innerHTML = resources.map(function (group) {
        const cards = group.items.map(toolCardHtml).join("");
        return "" +
            '<section class="tool-group">' +
            '   <div class="tool-group-head">' +
            '       <h3>' + escapeHtml(group.group) + "</h3>" +
            '       <span class="tool-count">' + group.items.length + " links</span>" +
            "   </div>" +
            '   <div class="tool-grid">' + cards + "</div>" +
            "</section>";
    }).join("");
}

/* ---------- PROJECTS page ---------- */
function projectCardHtml(project) {
    const chips = (project.skills || []).map(function (skill) {
        return '<span class="chip"><span class="dot"></span>' + escapeHtml(skill) + "</span>";
    }).join("");

    const steps = (project.steps || []).map(function (step, i) {
        return "<li>" + escapeHtml(step) + "</li>";
    }).join("");

    return "" +
        '<article class="project-card">' +
        '   <div class="project-head">' +
        '       <span class="project-no">PROJECT ' + escapeHtml(project.no) + "</span>" +
        '       <span class="project-tag">' + escapeHtml(project.tag || "Idea") + "</span>" +
        "   </div>" +
        '   <h3 class="project-title">' + escapeHtml(project.title) + "</h3>" +
        '   <p class="project-tagline">' + project.tagline + "</p>" +
        '   <p class="project-desc">' + escapeHtml(project.desc) + "</p>" +
        '   <div class="project-rows">' +
        '       <p class="project-row"><span class="pr-key">Data</span>' +
        "           <span class=\"pr-val\">" + escapeHtml(project.data || "") + "</span></p>" +
        '       <p class="project-row"><span class="pr-key">Deliverable</span>' +
        "           <span class=\"pr-val\">" + escapeHtml(project.deliverable || "") + "</span></p>" +
        "   </div>" +
        '   <div class="project-skills">' + chips + "</div>" +
        (steps ? '<div class="project-steps"><h4>How to start</h4><ol>' + steps + "</ol></div>" : "") +
        "</article>";
}

function renderProjects() {
    const grid = document.getElementById("projectGrid");
    if (!grid || typeof projects === "undefined") return;
    grid.innerHTML = projects.map(projectCardHtml).join("");
}

/* =========================================================
   4. SMALL HELPERS
   ========================================================= */

/* Escape every value before it is placed inside innerHTML. */
function escapeHtml(value) {
    if (value === null || value === undefined) return "";
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

/* escapeHtml for attributes that carry a javascript: URL is not needed here,
   but the helper below keeps link building readable. */
function safeUrl(value) {
    const url = value === null || value === undefined ? "" : String(value).trim();
    if (/^(https?:|mailto:)/i.test(url)) return escapeHtml(url);
    return "#";
}

function getExperiment(id) {
    const wanted = Number(id);
    for (let i = 0; i < experiments.length; i++) {
        if (Number(experiments[i].id) === wanted) return experiments[i];
    }
    return null;
}

function getSubCount(exp) {
    const group = subData[exp.id];
    return group ? Object.keys(group).length : 0;
}

function getSubList(exp) {
    const group = subData[exp.id];
    return group ? Object.keys(group) : [];
}

/* Normalised text used by the search box. */
function searchableText(exp) {
    const parts = [exp.title, exp.subtitle, exp.kicker, exp.desc];
    const group = subData[exp.id];
    if (group) {
        Object.keys(group).forEach(function (key) {
            const sub = group[key] || {};
            parts.push(key, sub.name, sub.label, sub.topic);
        });
    }
    return parts.filter(Boolean).join(" ").toLowerCase();
}

/* =========================================================
   5. TOAST
   ========================================================= */
let toastTimer = null;

function toast(message) {
    const box = document.getElementById("toast");
    if (!box) return;
    box.textContent = message;
    box.classList.add("show");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
        box.classList.remove("show");
    }, 2600);
}

/* =========================================================
   6. VIDEO BLOCK  (falls back to a placeholder when the
      mp4 file has not been added yet)
   ========================================================= */
function videoPlaceholderHtml(path, title) {
    return "" +
        '<div class="video-placeholder">' +
        '   <div class="vp-icon">&#9654;</div>' +
        '   <p class="vp-title">' + escapeHtml(title || "Video placeholder") + "</p>" +
        '   <p class="vp-note">The recording will be added here. Drop the file at</p>' +
        '   <p class="vp-note"><code>' + escapeHtml(path) + "</code></p>" +
        "</div>";
}

function videoBlockHtml(path, title) {
    if (!path) return videoPlaceholderHtml("no video file configured", title);
    return "" +
        '<div class="video-shell">' +
        '   <video controls preload="metadata" playsinline' +
        '          src="' + escapeHtml(path) + '"></video>' +
        "</div>";
}

/* Called by the media element when the file is missing or unreadable. */
function videoFallback(videoEl) {
    if (!videoEl) return;
    const shell = videoEl.parentNode;
    if (!shell || !shell.classList || !shell.classList.contains("video-shell")) return;
    shell.innerHTML = videoPlaceholderHtml(
        videoEl.getAttribute("src"),
        "Video placeholder"
    );
}

/* If the browser never reports an error we still show the placeholder. */
function guardVideos() {
    const videos = document.querySelectorAll(".view-body video");
    Array.prototype.forEach.call(videos, function (video) {
        if (video.getAttribute("data-guard") === "done") return;
        video.setAttribute("data-guard", "done");
        video.addEventListener("error", function () { videoFallback(video); });
        video.addEventListener("loadedmetadata", function () {
            video.setAttribute("data-guard", "ready");
        });
        setTimeout(function () {
            if (video.getAttribute("data-guard") === "done" && !video.readyState) {
                videoFallback(video);
            }
        }, 2500);
    });
}

/* =========================================================
   7. CARDS + SEARCH
   ========================================================= */
function cardHtml(exp) {
    const subCount = getSubCount(exp);
    const subs = getSubList(exp);
    const chips = subs.map(function (key) {
        const sub = (subData[exp.id] || {})[key] || {};
        return escapeHtml(key) + ". " + escapeHtml(sub.name || "");
    }).join(" · ");

    return "" +
        '<article class="card">' +
        '   <div class="card-media">' +
        '       <img src="' + escapeHtml(exp.image) + '" alt="' + escapeHtml(exp.title) + '" loading="lazy">' +
        '       <span class="card-num">EXP ' + escapeHtml(exp.no) + "</span>" +
        "   </div>" +
        '   <div class="card-body">' +
        '       <p class="card-kicker">' + escapeHtml(exp.kicker) + "</p>" +
        '       <h3 class="card-title">' + escapeHtml(exp.title) +
        (exp.subtitle ? '<span class="card-sub">' + escapeHtml(exp.subtitle) + "</span>" : "") +
        "</h3>" +
        '       <p class="card-desc">' + escapeHtml(exp.desc) + "</p>" +
        '       <div class="card-meta">' +
        '           <span class="chip"><span class="dot count"></span>' + subCount + " sub-experiment" + (subCount === 1 ? "" : "s") + "</span>" +
        '           <span class="chip"><span class="dot wait"></span>Video</span>' +
        '           <span class="chip"><span class="dot"></span>GitHub</span>' +
        "       </div>" +
        '       <p class="card-subs">' + escapeHtml(chips) + "</p>" +
        '       <div class="card-actions">' +
        '           <button type="button" class="btn-overview" onclick="openOverview(' + Number(exp.id) + ')">' +
        "               Open Overview <span class=\"btn-arrow\">&rarr;</span>" +
        "           </button>" +
        "       </div>" +
        "   </div>" +
        "</article>";
}

/* One renderer for both card grids - the home collection and the
   EXPERIMENTS page show the same cards, each with its own search box. */
function renderCards(gridId, emptyId, query) {
    const grid = document.getElementById(gridId);
    const empty = document.getElementById(emptyId);
    if (!grid) return;

    const term = String(query || "").trim().toLowerCase();
    const list = experiments.filter(function (exp) {
        if (!term) return true;
        return searchableText(exp).indexOf(term) !== -1;
    });

    grid.innerHTML = list.map(cardHtml).join("");

    if (empty) {
        empty.hidden = list.length !== 0;
        const note = empty.querySelector("p");
        if (note) note.textContent = "No experiment matches your search.";
    }
}

function render(query) {
    renderCards("grid", "empty", query);
}

/* =========================================================
   9. OVERVIEW PAGE  (full screen)
   ========================================================= */
/* =========================================================
   9. OVERVIEW PAGE  (full screen)
   ========================================================= */
function architectureHtml(exp) {
    if (!exp.architecture || !exp.architecture.length) return "";

    const nodes = exp.architecture.map(function (step, i) {
        const label = typeof step === "string" ? step : step[0];
        const tag = typeof step === "string" ? "" : step[1];
        const block = '<div class="arch-node">' + escapeHtml(label) +
            (tag ? "<small>" + escapeHtml(tag) + "</small>" : "") + "</div>";
        if (i === 0) return block;
        return '<span class="arch-arrow">&rarr;</span>' + block;
    }).join("");

    return "" +
        '<div class="panel">' +
        '   <h3 class="panel-title">Architecture / Data Flow</h3>' +
        '   <div class="arch"><div class="arch-flow">' + nodes + "</div></div>" +
        '   <p class="arch-note">' + escapeHtml(exp.note || "") + "</p>" +
        "</div>";
}

/* Previous and next experiment - the order of the six experiments
   never changes, so this simply walks the same array. */
function experimentJumpHtml(exp) {
    const list = experiments;
    const position = list.indexOf(exp);
    const prev = position > 0 ? list[position - 1] : null;
    const next = position > -1 && position < list.length - 1 ? list[position + 1] : null;

    return "" +
        (prev ? '<button type="button" class="view-step" onclick="go(\'/exp/' + prev.id + '\')">&larr; Exp ' + escapeHtml(prev.no) + "</button>" : "") +
        (next ? '<button type="button" class="view-step" onclick="go(\'/exp/' + next.id + '\')">Exp ' + escapeHtml(next.no) + " &rarr;</button>" : "");
}

function openOverview(experimentId) {
    const exp = getExperiment(experimentId);
    if (!exp) {
        toast("That experiment is not available yet.");
        return go("/experiments");
    }

    const subs = getSubList(exp);
    const subButtons = subs.map(function (key) {
        const sub = (subData[exp.id] || {})[key] || {};
        return "" +
            '<button type="button" class="sub-btn" onclick="go(\'/sub/' + Number(exp.id) + ", '" + escapeHtml(key) + "')" + '">' +
            '   <span class="sub-key">' + escapeHtml(key) + "</span>" +
            '   <span class="sub-name">' + escapeHtml(sub.name || key) + "</span>" +
            (sub.label ? '   <span class="sub-label">' + escapeHtml(sub.label) + "</span>" : "") +
            "</button>";
    }).join("");

    const paragraphs = (exp.summary || []).map(function (text) {
        return "<p>" + escapeHtml(text) + "</p>";
    }).join("");

    const findings = (exp.findings || []).map(function (text) {
        return "<li>" + escapeHtml(text) + "</li>";
    }).join("");

    const html = "" +
        '<div class="d-head">' +
        '   <p class="d-eyebrow">Experiment ' + escapeHtml(exp.no) + " of " + experiments.length + "</p>" +
        '   <h2 class="d-title">' + escapeHtml(exp.title) +
        (exp.subtitle ? ' <span class="d-sub">' + escapeHtml(exp.subtitle) + "</span>" : "") +
        "</h2>" +
        '   <p class="d-desc">' + escapeHtml(exp.desc) + "</p>" +
        '   <div class="d-badges">' +
        '       <span class="d-badge">Sub-experiments <b>' + subs.length + "</b></span>" +
        '       <span class="d-badge">Course <b>' + escapeHtml(COURSE.code) + "</b></span>" +
        '       <span class="d-badge">Section <b>' + escapeHtml(COURSE.section) + "</b></span>" +
        "   </div>" +
        "</div>" +
        videoBlockHtml(exp.video, "Experiment " + exp.no + " - overview recording") +
        '<div class="link-row">' +
        '   <a class="btn-link" href="' + safeUrl(GITHUB_BASE + "/experiment-" + exp.no) + '" target="_blank" rel="noopener"><span class="gl">&#9679;</span> GitHub Repository</a>' +
        '   <a class="btn-link" href="' + safeUrl(YOUTUBE_BASE + encodeURIComponent(exp.yt)) + '" target="_blank" rel="noopener"><span class="yt">&#9654;</span> YouTube Reference</a>' +
        '   <button type="button" class="btn-link" onclick="go(\'/experiments\')"><span class="gl">&#9634;</span> All experiments</button>' +
        "</div>" +
        '<div class="panel">' +
        '   <h3 class="panel-title">Summary &amp; Analysis</h3>' +
        paragraphs +
        (findings ? "<ul>" + findings + "</ul>" : "") +
        "</div>" +
        '<div class="panel">' +
        '   <h3 class="panel-title">Sub-Experiments</h3>' +
        '   <p class="panel-hint">Open a sub-experiment for the program, the recorded output and the Python lab. ' +
        "        The order below is the order of the laboratory record and it never changes.</p>" +
        '   <div class="subs">' + (subButtons ||
            '<p class="notice">Sub-experiment details are being added for this experiment.</p>') + "</div>" +
        "</div>" +
        architectureHtml(exp) +
        '<div class="d-nav">' +
        '   <button type="button" class="btn-ghost" onclick="go(\'/experiments\')">&larr; All experiments</button>' +
        '   <span class="code-file">' + escapeHtml(COURSE.student) + " &middot; " + escapeHtml(COURSE.roll) + "</span>" +
        '   <button type="button" class="btn-ghost" onclick="go(\'/lab\')">Open the Python lab</button>' +
        "</div>";

    renderView(html, {
        crumb: 'Experiments <span class="sep">/</span> Experiment ' + escapeHtml(exp.no),
        back: "All experiments",
        backTo: "/experiments",
        jump: experimentJumpHtml(exp)
    });
}

/* =========================================================
   10. SUB-EXPERIMENT PAGE
   ========================================================= */

/* Saved output of the sub-experiment currently on screen. It is kept in a
   variable instead of the markup, so nothing is displayed before RUN. */
let lastResult = "";

/* Previous / next sub-experiment of the same experiment, in the
   same order as the record. */
function subJumpHtml(experimentId, keys, currentKey) {
    const position = keys.indexOf(currentKey);
    const prev = position > 0 ? keys[position - 1] : null;
    const next = position > -1 && position < keys.length - 1 ? keys[position + 1] : null;

    return "" +
        (prev ? '<button type="button" class="view-step" onclick="go(\'/sub/' + experimentId + "/" + escapeHtml(prev) + '\')">&larr; ' + escapeHtml(prev) + "</button>" : "") +
        (next ? '<button type="button" class="view-step" onclick="go(\'/sub/' + experimentId + "/" + escapeHtml(next) + '\')">' + escapeHtml(next) + " &rarr;</button>" : "");
}

function openSub(experimentId, subKey) {
    const eid = Number(experimentId);
    const exp = getExperiment(eid);

    if (!exp) {
        toast("That experiment is not available yet.");
        return go("/experiments");
    }

    /*  The experiment id is part of the lookup on purpose -
        several experiments own a sub-experiment called A, B or C.  */
    const group = subData[eid];
    const data = group ? group[subKey] : null;

    if (!data) {
        renderView(
            '<div class="d-head">' +
            '   <p class="d-eyebrow">Experiment ' + escapeHtml(exp.no) + " &middot; Sub-experiment " + escapeHtml(subKey) + "</p>" +
            '   <h2 class="d-title">' + escapeHtml(exp.title) + "</h2>" +
            "</div>" +
            '<div class="notice">The program for sub-experiment ' + escapeHtml(subKey) +
            " of this experiment has not been uploaded yet. The code and the result will appear here once it is added to script.js.</div>" +
            '<div class="d-nav">' +
            '   <button type="button" class="btn-ghost" onclick="go(\'/exp/' + eid + '\')">&larr; Back to overview</button>' +
            "</div>",
            {
                crumb: 'Experiments <span class="sep">/</span> Exp ' + escapeHtml(exp.no) +
                       ' <span class="sep">/</span> ' + escapeHtml(subKey),
                back: "Overview",
                backTo: "/exp/" + eid
            }
        );
        return;
    }

    labStateInit("Sub", (data && data.code) ? data.code : LAB_BLANK);

    const keys = Object.keys(group);
    const position = keys.indexOf(subKey) + 1;
    /* every step is a link to the next sub-experiment of the same experiment,
       in exactly the same order as the laboratory record */
    const steps = keys.map(function (key) {
        return '<button type="button" class="sub-step' + (key === subKey ? " active" : "") + '"' +
            ' onclick="go(\'/sub/' + eid + "/" + escapeHtml(key) + "\')" + '"' +
            (key === subKey ? ' aria-current="true"' : ' title="Go to sub-experiment ' + escapeHtml(key) + '"') +
            ">" + escapeHtml(key) + "</button>";
    }).join("");

    const fileName = data.file || "experiment-" + exp.no + "-" + subKey + ".py";

    const code = data.code || "Code for this sub-experiment is not available yet.";
    const result = data.result || "No result has been recorded for this sub-experiment yet.";

    /* the output is kept out of the page until RUN is pressed */
    lastResult = result;

    const html = "" +
        '<div class="d-head">' +
        '   <p class="d-eyebrow">Experiment ' + escapeHtml(exp.no) + " &middot; Sub-experiment " + escapeHtml(subKey) + "</p>" +
        '   <h2 class="d-title">' + escapeHtml(data.name || subKey) + "</h2>" +
        (data.label ? '<p class="d-desc">' + escapeHtml(data.label) + "</p>" : "") +
        '   <div class="d-badges">' +
        '       <span class="d-badge">Experiment <b>' + escapeHtml(exp.no) + " &middot; " + escapeHtml(subKey) + "</b></span>" +
        '       <span class="d-badge">Step <b>' + position + " of " + keys.length + "</b></span>" +
        '       <span class="d-badge">File <b>' + escapeHtml(fileName) + "</b></span>" +
        "   </div>" +
        "</div>" +
        videoBlockHtml(data.video, "Sub-experiment " + subKey + " - demonstration") +
        '<div class="link-row">' +
        '   <a class="btn-link" href="' + safeUrl(GITHUB_BASE + "/experiment-" + exp.no) + '" target="_blank" rel="noopener"><span class="gl">&#9679;</span> GitHub Code</a>' +
        (data.yt
            ? '   <a class="btn-link" href="' + safeUrl(YOUTUBE_BASE + encodeURIComponent(data.yt)) + '" target="_blank" rel="noopener"><span class="yt">&#9654;</span> YouTube Reference</a>'
            : "") +
        "</div>" +
        '<div class="panel">' +
        '   <h3 class="panel-title">Experiment / Topic</h3>' +
        "   <p><strong>" + escapeHtml(exp.title) + "</strong>" +
        (exp.subtitle ? " &mdash; " + escapeHtml(exp.subtitle) : "") + "</p>" +
        "   <p><strong>Sub-experiment " + escapeHtml(subKey) + ":</strong> " + escapeHtml(data.name || subKey) + "</p>" +
        (data.label ? "   <p>" + escapeHtml(data.label) + "</p>" : "") +
        "</div>" +
        '<div class="panel">' +
        '   <h3 class="panel-title">Program / Code</h3>' +
        '   <div class="code-head">' +
        '       <span class="code-file">File: <b>' + escapeHtml(fileName) + "</b></span>" +
        '       <div class="code-tools">' +
        '           <span class="code-status">python 3 &middot; output saved with the session</span>' +
        '           <button type="button" class="btn-run" onclick="runCode(this)">&#9654; RUN</button>' +
        '           <button type="button" class="btn-copy" onclick="copyCode(this)">&#10697; COPY CODE</button>' +
        "       </div>" +
        "   </div>" +
        '   <pre class="code"><code>' + escapeHtml(code) + "</code></pre>" +
        "</div>" +
        '<div class="panel">' +
        '   <div class="lab-cta">' +
        '       <div>' +
        '           <h3 class="panel-title">Try It Yourself</h3>' +
        "           <p>Practise the same idea right here. Write your own code in the editor," +
        "               run it and read the console output, or open the full lab page" +
        "               when you want an empty editor with templates.</p>" +
        "       </div>" +
        '       <div class="lab-cta-buttons">' +
        '           <button type="button" class="btn-lab-open" onclick="labOpenSub(' + eid + ", '" + escapeHtml(subKey) + "')" + '>' +
        "               TRY IT YOURSELF" +
        "           </button>" +
        '           <button type="button" class="btn-lab-ghost" onclick="go(\'/lab\')">Open the lab page</button>' +
        "       </div>" +
        '   <div class="lab" id="labSubPanel" hidden>' +
        labBlockHtml("Sub") +
        "   </div>" +
        "</div>" +
        '<div class="panel" id="resultPanel">' +
        '   <h3 class="panel-title">Result</h3>' +
        '   <div class="result-locked" id="resultLocked">' +
        '       <div class="locked-icon">&#9654;</div>' +
        '       <p class="locked-title">Output is hidden</p>' +
        '       <p class="locked-note">Press <strong>RUN</strong> above to execute ' +
        escapeHtml(fileName) + " and show the console output here.</p>" +
        "   </div>" +
        '   <div class="result-body" id="resultBody" hidden>' +
        '       <pre class="result" id="resultText"></pre>' +
        (data.note ? '       <p class="result-note"><b>Analysis:</b> ' + escapeHtml(data.note) + "</p>" : "") +
        "   </div>" +
        "</div>" +
        '<div class="d-nav">' +
        '   <button type="button" class="btn-ghost" onclick="go(\'/exp/' + eid + '\')">&larr; Back to overview</button>' +
        '   <div class="sub-steps">' + steps + "</div>" +
        '   <button type="button" class="btn-ghost" onclick="go(\'/experiments\')">All experiments</button>' +
        "</div>";


    renderView(html, {
        crumb: 'Experiments <span class="sep">/</span> Exp ' + escapeHtml(exp.no) +
               ' <span class="sep">/</span> Sub-experiment ' + escapeHtml(subKey),
        back: "Overview",
        backTo: "/exp/" + eid,
        jump: subJumpHtml(eid, keys, subKey)
    });
}

/* =========================================================
   11. RUN + COPY CODE
   ========================================================= */

/* Shows the output that was saved together with this program.
   The site is static, so nothing is executed here - the exact
   console output of the recorded run is displayed instead.
   Until RUN is pressed the output stays hidden behind a locked box. */
function runCode(button) {
    const panel = document.getElementById("resultPanel");
    const body = document.getElementById("resultBody");
    const locked = document.getElementById("resultLocked");
    const block = document.getElementById("resultText");

    if (!block || !String(lastResult).trim()) {
        toast("No output is available for this sub-experiment yet.");
        return;
    }

    const head = button ? button.closest(".code-head") : null;
    const status = head ? head.querySelector(".code-status") : null;

    if (status) status.textContent = "running\u2026";
    if (status) status.classList.remove("done");
    if (button) button.disabled = true;
    if (panel) panel.classList.add("is-running");

    /* the console types the output in, the way a terminal would */
    const lines = String(lastResult).split("\n");
    let shown = 0;
    const step = Math.max(1, Math.ceil(lines.length / 26));

    const typeNext = function () {
        shown = Math.min(lines.length, shown + step);
        block.textContent = lines.slice(0, shown).join("\n");
        if (shown < lines.length) {
            setTimeout(typeNext, 22);
        }
    };
    typeNext();

    setTimeout(function () {
        block.textContent = lines.join("\n");

        if (status) {
            status.textContent = "run finished \u00b7 output shown below";
            status.classList.add("done");
        }
        if (button) button.disabled = false;
        if (panel) panel.classList.remove("is-running");

        if (locked) locked.remove();
        if (body) {
            body.hidden = false;
            body.classList.remove("result-pop");
            void body.offsetWidth;                  /* restart the animation */
            body.classList.add("result-pop");
        }

        if (panel && typeof panel.scrollIntoView === "function") {
            panel.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        toast("Program executed \u00b7 output displayed in the Result panel.");
    }, 600);
}

function copyCode(button) {
    const panel = button ? button.closest(".panel") : null;
    const block = panel ? panel.querySelector("pre.code") : null;
    const code = block ? (block.innerText || block.textContent || "") : "";

    if (!code.trim()) {
        toast("No code is available for this sub-experiment yet.");
        return;
    }

    function done() { toast("Code copied successfully!"); }

    function fallbackCopy() {
        const area = document.createElement("textarea");
        area.value = code;
        area.setAttribute("readonly", "readonly");
        area.style.position = "fixed";
        area.style.opacity = "0";
        document.body.appendChild(area);
        area.select();
        let ok = false;
        try { ok = document.execCommand("copy"); } catch (err) { ok = false; }
        document.body.removeChild(area);
        if (ok) done();
        else toast("Copy failed - please select the code manually.");
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code).then(done).catch(fallbackCopy);
    } else {
        fallbackCopy();
    }
}

/* =========================================================
   12. PYTHON LAB  (Try It Yourself)
   -------------------------------------------------------------
   A real Python 3 sandbox that runs inside the browser through
   Pyodide (Python compiled to WebAssembly). The editor opens
   under the program of every sub-experiment, pre-filled with
   that program so it can be changed and practised freely.
   The runtime is downloaded once, on the first use, and only
   when the student presses RUN.
   ========================================================= */
var labState = (window.labState = {});
const PYODIDE_VERSION = "0.26.4";
const PYODIDE_CDN = "https://cdn.jsdelivr.net/pyodide/v" + PYODIDE_VERSION + "/full/";

let pyRuntime = null;        /* the Pyodide instance, once it is ready   */
let pyBooting = null;         /* the promise of the very first load       */
let pyPackages = null;        /* the promise of the numpy + pandas load  */
let pyHasPandas = false;      /* true after numpy + pandas are available  */
let pyPythonTag = "python 3";/* version line printed in the status pill  */

/* editor content is kept per sub-experiment so switching between
   the JUMP TO buttons does not throw the practice code away */
const labDrafts = {};
const labCurrent = { eid: 0, key: "", starter: "" };

var LAB_BLANK = [
    "# Try It Yourself - write any Python here and press RUN CODE",
    "import pandas as pd",
    "",
    "df = pd.DataFrame({",
    "    \"Name\"    : [\"Aisha\", \"Rahul\", \"Sneha\"],",
    "    \"Branch\"  : [\"CSE\", \"CSE\", \"ECE\"],",
    "    \"CGPA\"    : [8.9, 7.4, 9.1],",
    "})",
    "",
    "print(df)",
    "print(\"\\nAverage CGPA:\", round(df[\"CGPA\"].mean(), 2))",
].join("\n");

function labPanelHtml() {
    return "" +
        '<p class="lab-intro">A real Python 3 sandbox (Pyodide) running inside your browser' +
        " &middot; numpy and pandas are loaded automatically on the first run.</p>" +
        '<div class="lab-head">' +
        '   <span class="code-status" id="labStatus">runtime not started</span>' +
        '   <div class="lab-tools">' +
        '       <button type="button" class="btn-run" onclick="runLab(this)">&#9654; RUN CODE</button>' +
        '       <button type="button" class="btn-copy" onclick="copyLab(this)">&#10697; COPY</button>' +
        '       <button type="button" class="btn-lab-ghost" onclick="fillLab(\'experiment\')">START FROM EXPERIMENT</button>' +
        '       <button type="button" class="btn-lab-ghost" onclick="fillLab(\'blank\')">BLANK TEMPLATE</button>' +
        '       <button type="button" class="btn-lab-ghost" onclick="loadMatplotlib(this)">LOAD MATPLOTLIB</button>' +
        '       <button type="button" class="btn-lab-ghost" onclick="clearLabOutput()">CLEAR OUTPUT</button>' +
        "   </div>" +
        "</div>" +
        '<div class="lab-editor">' +
        '   <pre class="lab-gutter" id="labGutter" aria-hidden="true">1</pre>' +
        '   <textarea id="labEditor" class="lab-code" spellcheck="false" autocomplete="off"' +
        '             autocapitalize="off" autocorrect="off" wrap="off"' +
        '             aria-label="Python code editor"></textarea>' +
        "</div>" +
        '<div class="lab-console">' +
        '   <pre class="lab-out" id="labOut" aria-live="polite">Press RUN CODE to execute this file.</pre>' +
        '   <div class="lab-images" id="labImages"></div>' +
        "</div>" +
        '<p class="lab-hint">Ctrl + Enter runs the code &middot; the first run downloads the' +
        " Python runtime once and needs an internet connection &middot; plots created with" +
        " <code>plt.savefig</code> are shown below the console.</p>";
}

/* Opens and closes the editor, and prepares it on first use. */
function toggleLab(experimentId, subKey) {
    const panel = document.getElementById("labPanel");
    if (!panel) return;

    const eid = Number(experimentId);
    const key = String(subKey);
    const group = subData[eid] || {};
    const data = group[key] || {};

    if (!panel.hidden) {
        panel.hidden = true;
        return;
    }

    labCurrent.eid = eid;
    labCurrent.key = key;
    labCurrent.starter = data.code || LAB_BLANK;

    panel.hidden = false;

    const editor = document.getElementById("labEditor");
    if (editor) {
        editor.value = Object.prototype.hasOwnProperty.call(labDrafts, eid + "-" + key)
            ? labDrafts[eid + "-" + key]
            : labCurrent.starter;
        wireLabEditor(editor);
        syncLabGutter();
    }

    panel.scrollIntoView({ behavior: "smooth", block: "start" });
    if (editor) editor.focus();

    /* warm the runtime up in the background so the first RUN is fast */
    ensurePython();
}

/* The editor is rebuilt every time a sub-experiment is opened, so its
   listeners are attached once per element. */
function wireLabEditor(editor) {
    if (!editor || editor.getAttribute("data-wired") === "done") return;
    editor.setAttribute("data-wired", "done");

    editor.addEventListener("input", function () {
        labDrafts[labCurrent.eid + "-" + labCurrent.key] = editor.value;
        syncLabGutter();
    });

    editor.addEventListener("scroll", function () {
        const gutter = document.getElementById("labGutter");
        if (gutter) gutter.scrollTop = editor.scrollTop;
    });

    editor.addEventListener("keydown", function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
            event.preventDefault();
            runLab(null);
            return;
        }
        if (event.key === "Tab") {                 /* tab inserts four spaces */
            event.preventDefault();
            const start = editor.selectionStart;
            const end = editor.selectionEnd;
            editor.value = editor.value.slice(0, start) + "    " + editor.value.slice(end);
            editor.selectionStart = editor.selectionEnd = start + 4;
            labDrafts[labCurrent.eid + "-" + labCurrent.key] = editor.value;
            syncLabGutter();
        }
    });
}

function syncLabGutter() {
    const editor = document.getElementById("labEditor");
    const gutter = document.getElementById("labGutter");
    if (!editor || !gutter) return;

    const total = editor.value.split("\n").length;
    const numbers = [];
    for (let i = 1; i <= total; i++) numbers.push(i);
    gutter.textContent = numbers.join("\n");
    gutter.scrollTop = editor.scrollTop;
}

function setLabStatus(text, done) {
    const pill = document.getElementById("labStatus");
    if (!pill) return;
    pill.textContent = text;
    pill.classList.toggle("done", Boolean(done));
}

function labWrite(text, isError) {
    const out = document.getElementById("labOut");
    if (!out) return;
    out.classList.toggle("error", Boolean(isError));
    const previous = out.textContent.replace(/\n+$/, "").replace(/\n?>>> done[^\n]*$/, "");
    out.textContent = (previous ? previous + "\n" : "") + text;
    out.scrollTop = out.scrollHeight;
}

function clearLabOutput() {
    const out = document.getElementById("labOut");
    if (out) {
        out.textContent = "";
        out.classList.remove("error");
    }
    const images = document.getElementById("labImages");
    if (images) images.innerHTML = "";
}

function fillLab(mode) {
    const editor = document.getElementById("labEditor");
    if (!editor) return;

    if (mode === "blank") {
        if (!window.confirm("Replace the editor content with a blank template?")) return;
        editor.value = LAB_BLANK;
    } else {
        editor.value = labCurrent.starter || LAB_BLANK;
    }

    labDrafts[labCurrent.eid + "-" + labCurrent.key] = editor.value;
    syncLabGutter();
    clearLabOutput();
    editor.focus();
    toast("Editor loaded - change anything you like and press RUN CODE.");
}

/* Downloads and starts the Python runtime exactly once. */
function ensurePython() {
    if (pyRuntime) return Promise.resolve(pyRuntime);
    if (pyBooting) return pyBooting;

    setLabStatus("loading python runtime\u2026");

    pyBooting = new Promise(function (resolve, reject) {
        function boot() {
            if (typeof window.loadPyodide !== "function") {
                reject(new Error("the Python runtime did not start"));
                return;
            }
            try {
                resolve(window.loadPyodide({ indexURL: PYODIDE_CDN }));
            } catch (err) {
                reject(err);
            }
        }

        if (typeof window.loadPyodide === "function") { boot(); return; }

        const tag = document.createElement("script");
        tag.src = PYODIDE_CDN + "pyodide.js";
        tag.async = true;
        tag.onload = boot;
        tag.onerror = function () { reject(new Error("the Python runtime could not be downloaded")); };
        document.head.appendChild(tag);
    }).then(function (py) {
        pyRuntime = py;
        try {
            pyPythonTag = "python " + String(py.runPython("__import__('sys').version.split()[0]")).trim();
        } catch (err) {
            pyPythonTag = "python 3";
        }
        /* pandas prints one long deprecation notice about pyarrow on the
           first import - that is a library message, not a lab message */
        try {
            py.runPython("import warnings\nwarnings.filterwarnings('ignore', message='.*Pyarrow will become a required.*', category=DeprecationWarning)");
        } catch (err) { /* warnings are optional, ignore a failure here */ }
        setLabStatus(pyPythonTag + " ready", true);
        loadCorePackages();
        return py;
    }).catch(function (err) {
        pyBooting = null;
        setLabStatus("runtime unavailable", false);
        throw err;
    });

    return pyBooting;
}

/* numpy and pandas are the two packages every lab program needs. */
function loadCorePackages() {
    if (!pyRuntime || pyHasPandas) return pyPackages || Promise.resolve();
    if (pyPackages) return pyPackages;

    setLabStatus("loading numpy + pandas (first run)\u2026");

    pyPackages = pyRuntime.loadPackage(["numpy", "pandas"]).then(function () {
        pyHasPandas = true;

        /* pandas prints a long deprecation notice about pyarrow the first
           time it is imported. Importing it here, with the error channel
           muted, keeps that library noise out of the student's console -
           their own "import pandas" is then simply a cache hit. */
        try {
            pyRuntime.setStderr({ batched: function () { /* muted on purpose */ } });
            pyRuntime.runPython("import warnings\nwarnings.filterwarnings('ignore', category=DeprecationWarning)\nimport numpy\nimport pandas");
            pyRuntime.setStderr({});
        } catch (err) {
            pyRuntime.setStderr({});
        }

        setLabStatus(pyPythonTag + " \u00b7 pandas ready", true);
    }).catch(function () {
        setLabStatus(pyPythonTag + " \u00b7 numpy/pandas unavailable", true);
    });

    return pyPackages;
}

function offlineHelp() {
    return "" +
        "The Python lab needs an internet connection the first time it is used, because" +
        " the runtime is downloaded from cdn.jsdelivr.net.\n\n" +
        "While offline you can still write code here - press COPY, paste it into IDLE," +
        " VS Code or Google Colab and run it there.";
}

async function runLab(button) {
    const editor = document.getElementById("labEditor");
    if (!editor) return;

    const code = editor.value;
    labDrafts[labCurrent.eid + "-" + labCurrent.key] = code;

    clearLabOutput();
    labWrite(">>> running " + new Date().toLocaleTimeString() + "\n", false);

    if (button) button.disabled = true;

    let py;
    try {
        py = await ensurePython();
    } catch (err) {
        labWrite("\n" + offlineHelp(), true);
        if (button) button.disabled = false;
        return;
    }

    setLabStatus("running\u2026");

    /* the packages must be in place before the student code is sent over,
       otherwise "import pandas" fails on a program that is perfectly fine */
    await loadCorePackages();

    const started = Date.now();
    let stdout = "";
    let stderr = "";
    let failure = null;

    py.setStdout({ batched: function (text) { stdout += text + "\n"; } });
    py.setStderr({ batched: function (text) { stderr += text + "\n"; } });

    try {
        await py.runPythonAsync(code);
    } catch (err) {
        failure = err;
    }

    py.setStdout({});
    py.setStderr({});

    const took = ((Date.now() - started) / 1000).toFixed(2);
    const report = splitLabOutput(stdout, stderr);

    if (report.text.trim()) labWrite(report.text, Boolean(failure));
    if (failure) {
        labWrite((report.text.trim() ? "\n" : "") + String(failure.message || failure), true);
    } else if (!report.text.trim()) {
        labWrite("(program finished without printing anything)", false);
    }

    showLabImages(report.images);
    labWrite(">>> done in " + took + " s", Boolean(failure));

    if (failure) setLabStatus(pyPythonTag + " \u00b7 stopped with an error", false);
    else setLabStatus(pyPythonTag + " \u00b7 executed", true);
    if (button) button.disabled = false;
}

/* A line that starts with DATA:image/... is a figure made with
   plt.savefig() - it is moved out of the console and shown as a
   picture instead of a wall of base64 text. */
function splitLabOutput(stdout, stderr) {
    const lines = String(stdout + (stderr ? (stdout ? "\n" : "") + stderr : "")).split("\n");
    const kept = [];
    const images = [];

    lines.forEach(function (line) {
        const trimmed = line.trim();
        if (trimmed.indexOf("DATA:image/") === 0 && trimmed.length > 64) {
            images.push(trimmed);
            kept.push("   [figure rendered below]");
        } else {
            kept.push(line);
        }
    });

    return { text: kept.join("\n").replace(/\n+$/, ""), images: images };
}

function showLabImages(images) {
    const box = document.getElementById("labImages");
    if (!box) return;
    box.innerHTML = "";
    images.forEach(function (src) {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Figure produced by the Python lab";
        box.appendChild(img);
    });
}

function loadMatplotlib(button) {
    if (button) button.disabled = true;
    setLabStatus("loading matplotlib\u2026");

    ensurePython().then(function (py) {
        return py.loadPackage("matplotlib");
    }).then(function () {
        setLabStatus(pyPythonTag + " \u00b7 matplotlib ready", true);
        labWrite("matplotlib is ready, for example:\n\n" +
            "    import matplotlib.pyplot as plt\n" +
            "    import base64\n" +
            "    df[\"CGPA\"].plot(kind=\"bar\")\n" +
            "    plt.savefig(\"lab.png\")\n" +
            "    print(\"DATA:image/png;base64,\" +\n" +
            "          base64.b64encode(open(\"lab.png\", \"rb\").read()).decode())\n", false);
        if (button) button.disabled = false;
    }).catch(function () {
        setLabStatus("matplotlib unavailable", false);
        labWrite("matplotlib could not be downloaded. The rest of the lab works without it.", true);
        if (button) button.disabled = false;
    });
}

function copyLab(button) {
    const editor = document.getElementById("labEditor");
    if (!editor || !editor.value.trim()) {
        toast("There is no code in the editor yet.");
        return;
    }

    function done() { toast("Code copied from the Python lab!"); }

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(editor.value).then(done).catch(function () { toast("Copy failed - please select the code manually."); });
    } else {
        toast("Copy is not available in this browser - please select the code manually.");
    }
}

/* =========================================================
   12b. PYTHON LAB BLOCK (shared between the LAB page and the
   sub-experiment page). Ids are suffixed with a prefix so
   two different lab blocks never share the same elements.
   ========================================================= */

function labBlockHtml(prefix, options) {
    var opts = options || {};
    var hasExperiment = (opts.starter !== undefined && opts.starter !== null);
    var starter = hasExperiment ? opts.starter : LAB_BLANK;

    var html = "" +
        '<p class="lab-intro">A real Python 3 sandbox (Pyodide) running inside your browser' +
        " &middot; numpy and pandas are loaded automatically on the first run.</p>" +
        '<div class="lab-head">' +
        '   <span class="code-status" id="labStatus' + prefix + '">runtime not started</span>' +
        '   <div class="lab-tools">' +
        '       <button type="button" class="btn-run" onclick="labRun(\'' + prefix + '\', this)">&#9654; RUN CODE</button>' +
        '       <button type="button" class="btn-copy" onclick="labCopy(\'' + prefix + '\')">&#10697; COPY</button>' +
        (hasExperiment
            ? '       <button type="button" class="btn-lab-ghost" onclick="labFill(\'' + prefix + '\', \'experiment\')">START FROM EXPERIMENT</button>'
            : '') +
        '       <button type="button" class="btn-lab-ghost" onclick="labFill(\'' + prefix + '\', \'blank\')">BLANK TEMPLATE</button>' +
        '       <button type="button" class="btn-lab-ghost" onclick="labMatplotlib(\'' + prefix + '\', this)">LOAD MATPLOTLIB</button>' +
        '       <button type="button" class="btn-lab-ghost" onclick="labClear(\'' + prefix + '\')">CLEAR OUTPUT</button>' +
        '   </div>' +
        '</div>' +
        '<div class="lab-editor">' +
        '   <pre class="lab-gutter" id="labGutter' + prefix + '" aria-hidden="true">1</pre>' +
        '   <textarea id="labEditor' + prefix + '" class="lab-code" spellcheck="false" autocomplete="off"' +
        '             autocapitalize="off" autocorrect="off" wrap="off"' +
        '             aria-label="Python code editor"></textarea>' +
        '</div>' +
        '<div class="lab-console">' +
        '   <pre class="lab-out" id="labOut' + prefix + '" aria-live="polite">Press RUN CODE to execute this file.</pre>' +
        '   <div class="lab-images" id="labImages' + prefix + '"></div>' +
        '</div>' +
        '<p class="lab-hint">Ctrl + Enter runs the code &middot; the first run downloads the' +
        " Python runtime once and needs an internet connection &middot; plots created with" +
        " <code>plt.savefig</code> are shown below the console.</p>";

    return html;
}

function labStateInit(prefix, starter) {
    if (!labState[prefix]) labState[prefix] = { starter: starter || LAB_BLANK, draft: null };
    else if (starter) labState[prefix].starter = starter;
    return labState[prefix];
}

function labMount(prefix, starter) {
    var editor = document.getElementById("labEditor" + prefix);
    if (!editor) return;
    var state = labStateInit(prefix, starter);
    editor.value = (state.draft !== null) ? state.draft : state.starter;
    wireLabEditor(prefix);
    labSyncGutterNow(prefix);
    var out = document.getElementById("labOut" + prefix);
    if (out) out.textContent = "Press RUN CODE to execute this file.";
    var images = document.getElementById("labImages" + prefix);
    if (images) images.innerHTML = "";
}

function labOpenSub(eid, subKey) {
    var panel = document.getElementById("labSubPanel");
    if (!panel) return;
    var key = String(subKey);
    var group = subData[eid] || {};
    var data = group[key] || {};

    if (!panel.hidden) { panel.hidden = true; return; }

    labStateInit("Sub", data.code || LAB_BLANK);
    panel.hidden = false;
    labMount("Sub", data.code || LAB_BLANK);
    panel.scrollIntoView({ behavior: "smooth", block: "start" });
    var editor = document.getElementById("labEditorSub");
    if (editor) editor.focus();
    ensurePython();
}

function wireLabEditor(prefix) {
    var editor = document.getElementById("labEditor" + prefix);
    if (!editor || editor.getAttribute("data-wired") === "done") return;
    editor.setAttribute("data-wired", "done");
    editor.addEventListener("input", function () {
        if (!labState[prefix]) labState[prefix] = { starter: LAB_BLANK, draft: null };
        labState[prefix].draft = editor.value;
        labSyncGutterNow(prefix);
    });
    editor.addEventListener("scroll", function () {
        var gutter = document.getElementById("labGutter" + prefix);
        if (gutter) gutter.scrollTop = editor.scrollTop;
    });
    editor.addEventListener("keydown", function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
            event.preventDefault();
            labRun(prefix, null);
            return;
        }
        if (event.key === "Tab") {
            event.preventDefault();
            var start = editor.selectionStart;
            var end = editor.selectionEnd;
            editor.value = editor.value.slice(0, start) + "    " + editor.value.slice(end);
            editor.selectionStart = editor.selectionEnd = start + 4;
            if (!labState[prefix]) labState[prefix] = { starter: LAB_BLANK, draft: null };
            labState[prefix].draft = editor.value;
            labSyncGutterNow(prefix);
        }
    });
}

function labSyncGutterNow(prefix) {
    var editor = document.getElementById("labEditor" + prefix);
    var gutter = document.getElementById("labGutter" + prefix);
    if (!editor || !gutter) return;
    var total = editor.value.split("\n").length;
    var nums = [];
    for (var i = 1; i <= total; i++) nums.push(i);
    gutter.textContent = nums.join("\n");
    gutter.scrollTop = editor.scrollTop;
}

function labRun(prefix, button) {
    var editor = document.getElementById("labEditor" + prefix);
    var out = document.getElementById("labOut" + prefix);
    var status = document.getElementById("labStatus" + prefix);
    if (!editor || !out) return;

    var code = editor.value;
    if (labState[prefix]) labState[prefix].draft = code;

    var btn = button;
    if (button && button.addEventListener === undefined) button = undefined;
    var b = (button && typeof button === "object" && "closest" in button) ? button : null;

    out.textContent = "";
    out.classList.remove("error");
    out.textContent = ">>> running " + new Date().toLocaleTimeString() + "\n";
    out.scrollTop = out.scrollHeight;
    if (b) b.disabled = true;

    ensurePython().then(function (py) {
        setLabStatusPrefix(prefix, "running\u2026", false);
        return loadCorePackages().then(function () {
            var started = Date.now();
            var stdout = "", stderr = "", failure = null;

            py.setStdout({ batched: function (text) { stdout += text + "\n"; } });
            py.setStderr({ batched: function (text) { stderr += text + "\n"; } });

            return py.runPythonAsync(code).then(function () {}, function (err) { failure = err; }).then(function () {
                py.setStdout({}); py.setStderr({});
                var took = ((Date.now() - started) / 1000).toFixed(2);
                var report = splitLabOutput(stdout, stderr);
                if (report.text.trim()) writeLabOutputPrefix(prefix, report.text, Boolean(failure));
                if (failure) {
                    writeLabOutputPrefix(prefix, (report.text.trim() ? "\n" : "") + String(failure.message || failure), true);
                } else if (!report.text.trim()) {
                    var o = document.getElementById("labOut" + prefix);
                    if (o) o.textContent = "(program finished without printing anything)\n";
                }
                showLabImagesPrefix(prefix, report.images);
                var o2 = document.getElementById("labOut" + prefix);
                if (o2) o2.textContent += "\n>>> done in " + took + " s";
                if (failure) setLabStatusPrefix(prefix, pyPythonTag + " stopped with an error", false);
                else setLabStatusPrefix(prefix, pyPythonTag + " executed", true);
            });
        });
    }).catch(function (err) {
        var o3 = document.getElementById("labOut" + prefix);
        if (o3) o3.textContent = offlineHelp();
        setLabStatusPrefix(prefix, "runtime unavailable", false);
    }).then(function () {
        if (b) b.disabled = false;
    });
}

function writeLabOutputPrefix(prefix, text, isError) {
    var out = document.getElementById("labOut" + prefix);
    if (!out) return;
    out.classList.toggle("error", Boolean(isError));
    out.textContent = out.textContent.replace(/\n+$/, "") + "\n" + text;
    out.scrollTop = out.scrollHeight;
}

function setLabStatusPrefix(prefix, text, done) {
    var pill = document.getElementById("labStatus" + prefix);
    if (!pill) return;
    pill.textContent = text;
    pill.classList.toggle("done", Boolean(done));
}

function showLabImagesPrefix(prefix, images) {
    var box = document.getElementById("labImages" + prefix);
    if (!box) return;
    box.innerHTML = "";
    images.forEach(function (src) {
        var img = document.createElement("img");
        img.src = src;
        img.alt = "Figure produced by the Python lab";
        box.appendChild(img);
    });
}

function labCopy(prefix) {
    var editor = document.getElementById("labEditor" + prefix);
    if (!editor || !editor.value.trim()) { toast("There is no code in the editor yet."); return; }
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(editor.value).then(function () { toast("Code copied!"); }).catch(function () { toast("Copy failed - select manually."); });
    } else {
        toast("Copy unavailable - select the code manually.");
    }
}

function labFill(prefix, mode) {
    var editor = document.getElementById("labEditor" + prefix);
    if (!editor) return;
    if (!labState[prefix]) labState[prefix] = { starter: LAB_BLANK, draft: null };

    if (mode === "blank") {
        if (!window.confirm("Replace the editor content with a blank template?")) return;
        editor.value = LAB_BLANK;
    } else {
        editor.value = labState[prefix].starter || LAB_BLANK;
    }
    labState[prefix].draft = editor.value;
    labSyncGutterNow(prefix);
    labClear(prefix);
    var out = document.getElementById("labOut" + prefix);
    if (out) out.textContent = "Press RUN CODE to execute this file.";
    var images = document.getElementById("labImages" + prefix);
    if (images) images.innerHTML = "";
    editor.focus();
    toast("Editor loaded - change anything you like and press RUN CODE.");
}

function labClear(prefix) {
    var out = document.getElementById("labOut" + prefix);
    if (out) { out.textContent = ""; out.classList.remove("error"); }
    var images = document.getElementById("labImages" + prefix);
    if (images) images.innerHTML = "";
}

function labMatplotlib(prefix, button) {
    if (button) button.disabled = true;
    setLabStatusPrefix(prefix, "loading matplotlib\u2026", false);
    ensurePython().then(function (py) {
        return py.loadPackage("matplotlib");
    }).then(function () {
        setLabStatusPrefix(prefix, pyPythonTag + " matplotlib ready", true);
        writeLabOutputPrefix(prefix, "matplotlib is ready. Example:\n\n" +
            "import base64\nimport matplotlib.pyplot as plt\n\n" +
            "plt.bar(['A','B','C'], [3, 5, 2])\n" +
            "plt.savefig('fig.png')\n" +
            "print('DATA:image/png;base64,' + base64.b64encode(open('fig.png','rb').read()).decode())\n", false);
    }).catch(function () {
        setLabStatusPrefix(prefix, "matplotlib unavailable", false);
        writeLabOutputPrefix(prefix, "matplotlib could not be downloaded.", true);
    }).then(function () {
        if (button) button.disabled = false;
    });
}


/* =========================================================
   13. INITIALISATION
   ========================================================= */
document.addEventListener("DOMContentLoaded", function () {

    /* main navigation */
    document.querySelectorAll(".nav-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            go("/" + btn.dataset.page);
        });
    });

    /* back bar (full screen views) */
    var viewBack = document.getElementById("viewBack");
    if (viewBack) viewBack.addEventListener("click", function () {
        var back = document.getElementById("view").getAttribute("data-back") || "";
        if (back) go(back);
        else history.back();
    });

    /* search boxes */
    var search = document.getElementById("search");
    if (search) {
        search.addEventListener("input", function () { render(search.value); });
    }

    var expSearch = document.getElementById("expSearch");
    if (expSearch) {
        expSearch.addEventListener("input", function () { renderCards("expGrid", "expEmpty", expSearch.value); });
    }

    /* add experiment placeholder moved to the experiments page */
    var addButton = document.getElementById("addExperiment");
    if (addButton) addButton.addEventListener("click", function () {
        toast("Add Experiment form placeholder - new experiments are added inside script.js.");
    });

    /* the Backspace/Esc close keys are gone (no modal); keep ESC navigating back */
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && document.getElementById("view") && !document.getElementById("view").hidden) {
            var back = document.getElementById("view").getAttribute("data-back") || "/home";
            if (back) go(back);
        }
    });

    renderModules();
    renderProjects();
    renderResources();
    renderTools();
    renderExperimentsLab();
    renderCards("expGrid", "expEmpty", "");
    if (typeof render === "function") render();

    window.addEventListener("hashchange", renderRoute);
    if (!location.hash) location.hash = "#/home";
    renderRoute();
});